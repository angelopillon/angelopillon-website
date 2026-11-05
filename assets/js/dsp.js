/* angelopillon.com — DSP core: ITU-R BS.1770-4 loudness, oversampled true peak, LRA,
   key and tempo estimation, stereo analysis. Everything runs locally in the browser. */
var DSP = (function(){
  "use strict";

  /* ---- radix-2 FFT ---- */
  function FFT(n){
    this.n = n;
    this.rev = new Uint32Array(n);
    var bits = Math.log2(n);
    for(var i = 0; i < n; i++){
      var r = 0;
      for(var b = 0; b < bits; b++){ r = (r << 1) | ((i >> b) & 1); }
      this.rev[i] = r;
    }
    this.cs = new Float64Array(n/2);
    this.sn = new Float64Array(n/2);
    for(var k = 0; k < n/2; k++){
      this.cs[k] = Math.cos(-2*Math.PI*k/n);
      this.sn[k] = Math.sin(-2*Math.PI*k/n);
    }
  }
  FFT.prototype.run = function(re, im){
    var n = this.n, rev = this.rev;
    for(var i = 0; i < n; i++){
      var j = rev[i];
      if(j > i){
        var tr = re[i]; re[i] = re[j]; re[j] = tr;
        var ti = im[i]; im[i] = im[j]; im[j] = ti;
      }
    }
    for(var len = 2; len <= n; len <<= 1){
      var half = len >> 1, step = n/len;
      for(var s = 0; s < n; s += len){
        for(var k = 0; k < half; k++){
          var idx = k*step;
          var wr = this.cs[idx], wi = this.sn[idx];
          var a = s + k, b = s + k + half;
          var xr = re[b]*wr - im[b]*wi;
          var xi = re[b]*wi + im[b]*wr;
          re[b] = re[a] - xr; im[b] = im[a] - xi;
          re[a] += xr; im[a] += xi;
        }
      }
    }
  };

  /* ---- K-weighting (48 kHz, BS.1770-4) ---- */
  var ST1 = { b0:1.53512485958697, b1:-2.69169618940638, b2:1.19839281085285, a1:-1.69065929318241, a2:0.73248077421585 };
  var ST2 = { b0:1.0, b1:-2.0, b2:1.0, a1:-1.99004745483398, a2:0.99007225036621 };
  function loudness(E){ return -0.691 + 10*Math.log10(E); }

  /* ---- 4x polyphase interpolator for True Peak ---- */
  function tpCoeffs(){
    var N = 32, c = (N - 1)/2, h = new Float64Array(N);
    for(var n = 0; n < N; n++){
      var x = (n - c)/4;
      var s = x === 0 ? 1 : Math.sin(Math.PI*x)/(Math.PI*x);
      var w = 0.42 - 0.5*Math.cos(2*Math.PI*n/(N - 1)) + 0.08*Math.cos(4*Math.PI*n/(N - 1));
      h[n] = s*w;
    }
    var P = [];
    for(var p = 1; p <= 3; p++){
      var taps = [], sum = 0;
      for(var k = 0; k < 8; k++){ var v = h[4*k + p]; taps.push(v); sum += v; }
      for(var k2 = 0; k2 < 8; k2++){ taps[k2] /= sum; }
      P.push(taps);
    }
    return P;
  }

  function decode(file, onProg){
    onProg('Decoding\u2026', 0);
    return file.arrayBuffer().then(function(ab){
      var OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      var oc = new OAC(2, 48000, 48000);
      return new Promise(function(res, rej){ oc.decodeAudioData(ab, res, rej); });
    });
  }

  function analyze(buf, onProg){
    return new Promise(function(resolve){
      var SR = 48000, L = buf.length;
      var c0 = buf.getChannelData(0);
      var c1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : c0;
      var HOP = 4800, nHops = Math.floor(L/HOP);
      var hopE = new Float64Array(nHops);
      var EHOP = 480, nEnv = Math.floor(L/EHOP);
      var env = new Float64Array(nEnv);
      var f = [{x1:0,x2:0,y1:0,y2:0},{x1:0,x2:0,y1:0,y2:0},{x1:0,x2:0,y1:0,y2:0},{x1:0,x2:0,y1:0,y2:0}];
      var P = tpCoeffs();
      var peak = 0, tpeak = 0;
      var sumL = 0, sumR = 0, sumLL = 0, sumRR = 0, sumLR = 0;
      var clipRunL = 0, clipRunR = 0, clipEv = 0;
      var i = 0, CH = 720000;

      function bq(s, C, x){
        var y = C.b0*x + C.b1*s.x1 + C.b2*s.x2 - C.a1*s.y1 - C.a2*s.y2;
        s.x2 = s.x1; s.x1 = x; s.y2 = s.y1; s.y1 = y;
        return y;
      }

      function passA(){
        var end = Math.min(i + CH, nHops*HOP);
        for(; i < end; i++){
          var xL = c0[i], xR = c1[i];
          var aL = xL < 0 ? -xL : xL, aR = xR < 0 ? -xR : xR;
          if(aL > peak) peak = aL;
          if(aR > peak) peak = aR;
          sumL += xL; sumR += xR;
          sumLL += xL*xL; sumRR += xR*xR; sumLR += xL*xR;
          if(aL >= 0.999){ if(++clipRunL === 3) clipEv++; } else { clipRunL = 0; }
          if(aR >= 0.999){ if(++clipRunR === 3) clipEv++; } else { clipRunR = 0; }
          if(i >= 7){
            for(var p = 0; p < 3; p++){
              var t = P[p], accL = 0, accR = 0;
              for(var k = 0; k < 8; k++){ accL += t[k]*c0[i - k]; accR += t[k]*c1[i - k]; }
              if(accL < 0) accL = -accL; if(accR < 0) accR = -accR;
              if(accL > tpeak) tpeak = accL;
              if(accR > tpeak) tpeak = accR;
            }
          }
          var m = (xL + xR)*0.5;
          if(i < nEnv*EHOP) env[(i/EHOP)|0] += m*m;
          var yL = bq(f[1], ST2, bq(f[0], ST1, xL));
          var yR = bq(f[3], ST2, bq(f[2], ST1, xR));
          hopE[(i/HOP)|0] += yL*yL + yR*yR;
        }
        onProg('Measuring loudness\u2026', 0.7*i/(nHops*HOP || 1));
        if(i < nHops*HOP){ setTimeout(passA, 0); } else { postA(); }
      }

      var R = {};
      function postA(){
        if(tpeak < peak) tpeak = peak;
        for(var h = 0; h < nHops; h++){ hopE[h] /= HOP; }
        var blocks = [];
        for(var b = 0; b + 4 <= nHops; b++){ blocks.push((hopE[b] + hopE[b+1] + hopE[b+2] + hopE[b+3])/4); }
        var Mmax = -Infinity;
        for(var mb = 0; mb < blocks.length; mb++){
          var lv = loudness(blocks[mb]);
          if(lv > Mmax) Mmax = lv;
        }
        var abs = blocks.filter(function(E){ return loudness(E) > -70; });
        var I = -Infinity;
        if(abs.length){
          var m1 = abs.reduce(function(a,b2){ return a + b2; }, 0)/abs.length;
          var thr = loudness(m1) - 10;
          var rel = abs.filter(function(E){ return loudness(E) > thr; });
          if(rel.length){
            I = loudness(rel.reduce(function(a,b2){ return a + b2; }, 0)/rel.length);
          }
        }
        var sts = [], stT = [];
        for(var s3 = 0; s3 + 30 <= nHops; s3 += 10){
          var e = 0;
          for(var k = 0; k < 30; k++){ e += hopE[s3 + k]; }
          sts.push(loudness(e/30)); stT.push((s3 + 15)*0.1);
        }
        var STmax = sts.length ? Math.max.apply(null, sts) : -Infinity;
        var LRA = NaN;
        var g1 = sts.filter(function(v){ return v > -70; });
        if(g1.length > 1){
          var mE = g1.reduce(function(a,v){ return a + Math.pow(10,(v + 0.691)/10); }, 0)/g1.length;
          var thr2 = loudness(mE) - 20;
          var g2 = g1.filter(function(v){ return v > thr2; }).sort(function(a,b3){ return a - b3; });
          if(g2.length > 1){
            LRA = g2[Math.floor(0.95*(g2.length - 1))] - g2[Math.floor(0.10*(g2.length - 1))];
          }
        }
        R.I = I; R.Mmax = Mmax; R.STmax = STmax; R.LRA = LRA;
        R.SP = peak > 0 ? 20*Math.log10(peak) : -Infinity;
        R.TP = tpeak > 0 ? 20*Math.log10(tpeak) : -Infinity;
        R.PLR = isFinite(I) ? R.TP - I : NaN;
        R.tl = sts; R.tlT = stT;
        R.dur = L/SR; R.ch = buf.numberOfChannels;
        var corr = (sumLL > 0 && sumRR > 0) ? sumLR/Math.sqrt(sumLL*sumRR) : 1;
        var EM = (sumLL + 2*sumLR + sumRR)/4, ES = (sumLL - 2*sumLR + sumRR)/4;
        R.corr = corr;
        R.widthDb = (EM > 0 && ES > 1e-12) ? 10*Math.log10(ES/EM) : -Infinity;
        R.dualMono = R.ch > 1 && corr > 0.9995 && (!isFinite(R.widthDb) || R.widthDb < -50);
        R.dc = Math.max(Math.abs(sumL/L), Math.abs(sumR/L));
        R.clipEv = clipEv;
        var bl = blocks.map(loudness).filter(function(v2){ return v2 > -90; }).sort(function(a2,b6){ return a2 - b6; });
        R.floor = bl.length ? bl[Math.floor(0.05*(bl.length - 1))] : -Infinity;
        var mo = new Float32Array(blocks.length);
        for(var mi = 0; mi < blocks.length; mi++){ mo[mi] = loudness(blocks[mi]); }
        R.mo = mo;
        var li = 0;
        for(var si = 1; si < sts.length; si++){ if(sts[si] > sts[li]) li = si; }
        R.loudAt = sts.length ? stT[li] : 0;
        passB();
      }

      /* ---- chroma / key ---- */
      var CHROMA = new Float64Array(12);
      var SPEC = null;
      function passB(){
        var N = 8192, fft = new FFT(N);
        var win = new Float64Array(N);
        for(var w = 0; w < N; w++){ win[w] = 0.5 - 0.5*Math.cos(2*Math.PI*w/(N - 1)); }
        var span = Math.min(120*SR, L - N);
        var start = Math.max(0, ((L - span)/2)|0);
        var F = Math.max(1, Math.floor(span/N));
        SPEC = new Float64Array(N/2);
        var re = new Float64Array(N), im = new Float64Array(N);
        var pc = new Int8Array(N/2);
        for(var b2 = 0; b2 < N/2; b2++){
          var fr = b2*SR/N;
          pc[b2] = (fr >= 70 && fr <= 2200) ? ((Math.round(12*Math.log2(fr/440)) + 69) % 12 + 12) % 12 : -1;
        }
        var fi = 0;
        function frame(){
          var lim = Math.min(fi + 6, F);
          for(; fi < lim; fi++){
            var off = start + fi*N;
            for(var s = 0; s < N; s++){
              re[s] = (c0[off + s] + c1[off + s])*0.5*win[s];
              im[s] = 0;
            }
            fft.run(re, im);
            for(var b3 = 1; b3 < N/2; b3++){
              var mg = Math.sqrt(re[b3]*re[b3] + im[b3]*im[b3]);
              SPEC[b3] += mg;
              if(pc[b3] >= 0) CHROMA[pc[b3]] += Math.log(1 + mg);
            }
          }
          onProg('Detecting key\u2026', 0.7 + 0.24*fi/F);
          if(fi < F){ setTimeout(frame, 0); } else { keyDone(); }
        }
        frame();
      }

      var NOTES = ['C','C\u266f','D','D\u266f','E','F','F\u266f','G','G\u266f','A','A\u266f','B'];
      var MAJ = [6.35,2.23,3.48,2.33,4.38,4.09,2.52,5.19,2.39,3.66,2.29,2.88];
      var MIN = [6.33,2.68,3.52,5.38,2.60,3.53,2.54,4.75,3.98,2.69,3.34,3.17];
      var CAM_MAJ = {0:'8B',7:'9B',2:'10B',9:'11B',4:'12B',11:'1B',6:'2B',1:'3B',8:'4B',3:'5B',10:'6B',5:'7B'};
      var CAM_MIN = {9:'8A',4:'9A',11:'10A',6:'11A',1:'12A',8:'1A',3:'2A',10:'3A',5:'4A',0:'5A',7:'6A',2:'7A'};
      function pearson(a, b, rot){
        var n = 12, ma = 0, mb = 0;
        for(var i2 = 0; i2 < n; i2++){ ma += a[i2]; mb += b[i2]; }
        ma /= n; mb /= n;
        var num = 0, da = 0, db = 0;
        for(var j2 = 0; j2 < n; j2++){
          var x = a[j2] - ma, y = b[(j2 - rot + 12) % 12] - mb;
          num += x*y; da += x*x; db += y*y;
        }
        return num/Math.sqrt(da*db || 1);
      }
      function keyDone(){
        var scores = [];
        for(var r2 = 0; r2 < 12; r2++){
          scores.push({ root:r2, mode:'major', c:pearson(CHROMA, MAJ, r2) });
          scores.push({ root:r2, mode:'minor', c:pearson(CHROMA, MIN, r2) });
        }
        scores.sort(function(a,b4){ return b4.c - a.c; });
        var best = scores[0], margin = best.c - scores[1].c;
        var isMin = best.mode === 'minor';
        R.key = {
          root: best.root, mode: best.mode,
          name: NOTES[best.root] + (isMin ? ' Minor' : ' Major'),
          short: NOTES[best.root] + (isMin ? 'm' : ''),
          cam: isMin ? CAM_MIN[best.root] : CAM_MAJ[best.root],
          rel: isMin ? NOTES[(best.root + 3) % 12] + ' Major' : NOTES[(best.root + 9) % 12] + ' Minor',
          conf: margin > 0.10 ? 'High' : margin > 0.04 ? 'Medium' : 'Low'
        };
        R.chroma = Array.prototype.slice.call(CHROMA);
        R.spec = SPEC;
        passC();
      }

      /* ---- BPM ---- */
      function passC(){
        onProg('Estimating tempo\u2026', 0.95);
        var e = new Float64Array(nEnv);
        for(var j = 0; j < nEnv; j++){ e[j] = Math.sqrt(env[j]/EHOP); }
        /* smooth the envelope (50ms) so texture and beating can't mask the pulse */
        var es = new Float64Array(nEnv);
        for(var js = 0; js < nEnv; js++){
          var sm = 0, nn = 0;
          for(var k = -2; k <= 2; k++){
            var jj = js + k;
            if(jj >= 0 && jj < nEnv){ sm += e[jj]; nn++; }
          }
          es[js] = sm/nn;
        }
        /* onset: positive log-energy flux */
        var o = new Float64Array(nEnv);
        for(var j2 = 1; j2 < nEnv; j2++){
          var d = Math.log(es[j2] + 1e-7) - Math.log(es[j2 - 1] + 1e-7);
          o[j2] = d > 0 ? d : 0;
        }
        var span2 = Math.min(6000, nEnv);
        var st2 = Math.max(0, ((nEnv - span2)/2)|0);
        var mean = 0;
        for(var j3 = st2; j3 < st2 + span2; j3++){ mean += o[j3]; }
        mean /= span2;
        var r0 = 0;
        for(var j4 = st2; j4 < st2 + span2; j4++){
          var v = o[j4] - mean; r0 += v*v;
        }
        var rr = new Float64Array(173);
        for(var lag = 20; lag <= 172; lag++){
          var s = 0;
          for(var j5 = st2 + lag; j5 < st2 + span2; j5++){
            s += (o[j5] - mean)*(o[j5 - lag] - mean);
          }
          rr[lag] = s;
        }
        /* harmonic scoring: a real pulse also correlates at double the lag */
        var bestL = 0, bestS = -Infinity;
        for(var l = 33; l <= 86; l++){
          var sc = rr[l] + (2*l <= 172 ? 0.5*rr[2*l] : 0);
          if(sc > bestS){ bestS = sc; bestL = l; }
        }
        var bpm = null;
        if(r0 > 0 && bestS/r0 > 0.08 && R.dur > 15){
          var l2 = Math.round(bestL/2);
          if(6000/bestL < 90 && l2 >= 33 && rr[l2] + 0.5*rr[l2*2] > 0.8*bestS){ bestL = l2; }
          var y1 = rr[bestL - 1] || 0, y2 = rr[bestL], y3 = rr[bestL + 1] || 0;
          var den = (y1 - 2*y2 + y3);
          var dl = den !== 0 ? 0.5*(y1 - y3)/den : 0;
          if(dl > 0.5) dl = 0.5; if(dl < -0.5) dl = -0.5;
          bpm = 6000/(bestL + dl);
        }
        R.bpm = bpm;
        onProg('Done', 1);
        resolve(R);
      }

      passA();
    });
  }

  function makePeaks(buf, cols){
    var d = buf.getChannelData(0), L = buf.length;
    var per = Math.max(1, Math.floor(L/cols));
    var out = new Float32Array(cols);
    for(var c = 0; c < cols; c++){
      var mx = 0, s0 = c*per, s1 = Math.min(L, s0 + per);
      for(var s = s0; s < s1; s += 6){
        var a = d[s] < 0 ? -d[s] : d[s];
        if(a > mx) mx = a;
      }
      out[c] = mx;
    }
    return out;
  }

  return { decode:decode, analyze:analyze, makePeaks:makePeaks, FFT:FFT, ST1:ST1, ST2:ST2, loudness:loudness, tpCoeffs:tpCoeffs };
})();

/* ---------- extensions: fast loudness, stereo field, band analysis ---------- */
(function () {
  "use strict";
  var D = DSP;
  function biq() { return { x1: 0, x2: 0, y1: 0, y2: 0 }; }
  function bq(s, C, x) {
    var y = C.b0 * x + C.b1 * s.x1 + C.b2 * s.x2 - C.a1 * s.y1 - C.a2 * s.y2;
    s.x2 = s.x1; s.x1 = x; s.y2 = s.y1; s.y1 = y; return y;
  }
  function gate(hopE) {
    var blocks = [];
    for (var b = 0; b + 4 <= hopE.length; b++) blocks.push((hopE[b] + hopE[b + 1] + hopE[b + 2] + hopE[b + 3]) / 4);
    var abs = blocks.filter(function (E) { return D.loudness(E) > -70; });
    if (!abs.length) return -Infinity;
    var m1 = abs.reduce(function (a, b) { return a + b; }, 0) / abs.length;
    var thr = D.loudness(m1) - 10;
    var rel = abs.filter(function (E) { return D.loudness(E) > thr; });
    if (!rel.length) return -Infinity;
    return D.loudness(rel.reduce(function (a, b) { return a + b; }, 0) / rel.length);
  }
  function chunked(total, step, work, onProg, label) {
    return new Promise(function (resolve) {
      var i = 0;
      (function run() {
        var end = Math.min(total, i + step);
        work(i, end); i = end;
        if (onProg) onProg(label, i / total);
        if (i < total) setTimeout(run, 0); else resolve();
      })();
    });
  }

  /* Integrated loudness, true peak, sample peak, short-term max. Fast: no key or tempo. */
  function quick(buf, onProg) {
    var SR = 48000, L = buf.length;
    var c0 = buf.getChannelData(0), c1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : c0;
    var HOP = 4800, nH = Math.floor(L / HOP), hopE = new Float64Array(nH);
    var f = [biq(), biq(), biq(), biq()], P = D.tpCoeffs(), peak = 0, tp = 0;
    return chunked(nH * HOP, 480000, function (a, b) {
      for (var i = a; i < b; i++) {
        var xL = c0[i], xR = c1[i], aL = xL < 0 ? -xL : xL, aR = xR < 0 ? -xR : xR;
        if (aL > peak) peak = aL; if (aR > peak) peak = aR;
        if (i >= 7) {
          for (var p = 0; p < 3; p++) {
            var t = P[p], sL = 0, sR = 0;
            for (var k = 0; k < 8; k++) { sL += t[k] * c0[i - k]; sR += t[k] * c1[i - k]; }
            if (sL < 0) sL = -sL; if (sR < 0) sR = -sR;
            if (sL > tp) tp = sL; if (sR > tp) tp = sR;
          }
        }
        var yL = bq(f[1], D.ST2, bq(f[0], D.ST1, xL)), yR = bq(f[3], D.ST2, bq(f[2], D.ST1, xR));
        hopE[(i / HOP) | 0] += yL * yL + yR * yR;
      }
    }, onProg, "loud").then(function () {
      if (tp < peak) tp = peak;
      for (var h = 0; h < nH; h++) hopE[h] /= HOP;
      var stMax = -Infinity;
      for (var s = 0; s + 30 <= nH; s += 10) { var e = 0; for (var k = 0; k < 30; k++) e += hopE[s + k]; var v = D.loudness(e / 30); if (v > stMax) stMax = v; }
      return { I: gate(hopE), TP: tp > 0 ? 20 * Math.log10(tp) : -Infinity, SP: peak > 0 ? 20 * Math.log10(peak) : -Infinity, STmax: stMax, dur: L / SR };
    });
  }

  /* Stereo field: correlation (overall and over time), balance, width, mono fold-down loss,
     per-band correlation and width (FFT cross-spectrum), vectorscope points. */
  var BANDS = [[20, 80], [80, 200], [200, 800], [800, 3000], [3000, 8000], [8000, 20000]];
  function stereo(buf, onProg) {
    var SR = 48000, L = buf.length, mono = buf.numberOfChannels < 2;
    var c0 = buf.getChannelData(0), c1 = mono ? c0 : buf.getChannelData(1);
    var HOP = 4800, nH = Math.floor(L / HOP);
    var hopE = new Float64Array(nH), hopM = new Float64Array(nH);
    var hLL = new Float64Array(nH), hRR = new Float64Array(nH), hLR = new Float64Array(nH);
    var f = [biq(), biq(), biq(), biq()];
    var sLL = 0, sRR = 0, sLR = 0;
    return chunked(nH * HOP, 480000, function (a, b) {
      for (var i = a; i < b; i++) {
        var xL = c0[i], xR = c1[i], h = (i / HOP) | 0;
        sLL += xL * xL; sRR += xR * xR; sLR += xL * xR;
        hLL[h] += xL * xL; hRR[h] += xR * xR; hLR[h] += xL * xR;
        var yL = bq(f[1], D.ST2, bq(f[0], D.ST1, xL)), yR = bq(f[3], D.ST2, bq(f[2], D.ST1, xR));
        hopE[h] += yL * yL + yR * yR;
        var ym = (yL + yR) * 0.5; hopM[h] += 2 * ym * ym;
      }
    }, onProg, "stereo").then(function () {
      for (var h = 0; h < nH; h++) { hopE[h] /= HOP; hopM[h] /= HOP; }
      var R = { mono: mono, dur: L / SR };
      R.I = gate(hopE); R.Imono = gate(hopM); R.monoDelta = R.Imono - R.I;
      R.corr = (sLL > 0 && sRR > 0) ? sLR / Math.sqrt(sLL * sRR) : 1;
      R.balance = (sLL > 0 && sRR > 0) ? 10 * Math.log10(sLL / sRR) : 0;
      var EM = (sLL + 2 * sLR + sRR) / 4, ES = (sLL - 2 * sLR + sRR) / 4;
      R.widthDb = (EM > 0 && ES > 1e-12) ? 10 * Math.log10(ES / EM) : -Infinity;
      /* correlation per 400 ms block (4 hops), ignoring silence */
      var tl = [], tlT = [], loudest = 0, loudE = 0;
      for (var b = 0; b + 4 <= nH; b += 2) {
        var ll = hLL[b] + hLL[b + 1] + hLL[b + 2] + hLL[b + 3], rr = hRR[b] + hRR[b + 1] + hRR[b + 2] + hRR[b + 3], lr = hLR[b] + hLR[b + 1] + hLR[b + 2] + hLR[b + 3];
        var e = hopE[b] + hopE[b + 1] + hopE[b + 2] + hopE[b + 3];
        tl.push(ll > 1e-9 && rr > 1e-9 ? lr / Math.sqrt(ll * rr) : NaN); tlT.push((b + 2) * 0.1);
        if (e > loudE) { loudE = e; loudest = b; }
      }
      R.corrTl = tl; R.corrT = tlT;
      var valid = tl.filter(function (v) { return isFinite(v); }).sort(function (x, y) { return x - y; });
      R.corrMin = valid.length ? valid[Math.floor(valid.length * 0.02)] : NaN;
      R.corrNeg = valid.length ? valid.filter(function (v) { return v < 0; }).length / valid.length : 0;
      /* vectorscope points from the loudest 8 seconds */
      var start = Math.max(0, Math.min(L - 1, loudest * HOP - 4 * SR)), span = Math.min(8 * SR, L - start);
      var pts = new Float32Array(2 * 16000), stepP = Math.max(1, Math.floor(span / 16000)), np = 0;
      for (var j = 0; j < span && np < 16000; j += stepP) { pts[2 * np] = c0[start + j]; pts[2 * np + 1] = c1[start + j]; np++; }
      R.scope = pts.subarray(0, 2 * np); R.scopeAt = start / SR;
      return bands(c0, c1, L, SR, onProg).then(function (B) { R.bands = B; return R; });
    });
  }
  function bands(c0, c1, L, SR, onProg) {
    var N = 4096, fft = new D.FFT(N), win = new Float64Array(N);
    for (var w = 0; w < N; w++) win[w] = 0.5 - 0.5 * Math.cos(2 * Math.PI * w / (N - 1));
    var frames = Math.min(240, Math.max(1, Math.floor((L - N) / N)));
    var stepF = Math.max(N, Math.floor((L - N) / frames));
    var acc = BANDS.map(function () { return { ll: 0, rr: 0, lr: 0 }; });
    var binBand = new Int8Array(N / 2);
    for (var k = 0; k < N / 2; k++) {
      var fr = k * SR / N; binBand[k] = -1;
      for (var q = 0; q < BANDS.length; q++) if (fr >= BANDS[q][0] && fr < BANDS[q][1]) { binBand[k] = q; break; }
    }
    var reL = new Float64Array(N), imL = new Float64Array(N), reR = new Float64Array(N), imR = new Float64Array(N);
    var fi = 0;
    return new Promise(function (resolve) {
      (function run() {
        var lim = Math.min(frames, fi + 12);
        for (; fi < lim; fi++) {
          var off = fi * stepF;
          if (off + N > L) break;
          for (var s = 0; s < N; s++) { reL[s] = c0[off + s] * win[s]; imL[s] = 0; reR[s] = c1[off + s] * win[s]; imR[s] = 0; }
          fft.run(reL, imL); fft.run(reR, imR);
          for (var b = 1; b < N / 2; b++) {
            var q = binBand[b]; if (q < 0) continue;
            var A = acc[q];
            A.ll += reL[b] * reL[b] + imL[b] * imL[b];
            A.rr += reR[b] * reR[b] + imR[b] * imR[b];
            A.lr += reL[b] * reR[b] + imL[b] * imR[b];
          }
        }
        if (onProg) onProg("bands", fi / frames);
        if (fi < frames && fi * stepF + N <= L) setTimeout(run, 0);
        else {
          var tot = acc.reduce(function (t, A) { return t + A.ll + A.rr; }, 0) || 1;
          resolve(acc.map(function (A, i) {
            var m = (A.ll + A.rr + 2 * A.lr) / 4, sd = (A.ll + A.rr - 2 * A.lr) / 4;
            return {
              lo: BANDS[i][0], hi: BANDS[i][1],
              corr: (A.ll > 0 && A.rr > 0) ? A.lr / Math.sqrt(A.ll * A.rr) : 1,
              width: (m > 0 && sd > 1e-12) ? 10 * Math.log10(sd / m) : -Infinity,
              share: (A.ll + A.rr) / tot
            };
          }));
        }
      })();
    });
  }

  /* Short-term loudness series for a time range (3 s windows, 100 ms hop) — used by graphs */
  function fmtTime(s) { s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function fmtDb(v, digits) { if (!isFinite(v)) return "−∞"; var t = v.toFixed(digits == null ? 1 : digits); return (v < 0 ? "−" + t.slice(1) : (v > 0 && t !== "0.0" ? "+" : "") + t); }

  window.APDSP = { decode: D.decode, analyze: D.analyze, makePeaks: D.makePeaks, quick: quick, stereo: stereo, BANDS: BANDS, fmtTime: fmtTime, fmtDb: fmtDb };
})();
