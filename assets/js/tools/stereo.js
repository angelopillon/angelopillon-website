/* Stereo and phase analyzer: offline report + live player with mono check */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("stereo");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var state = root.querySelector("[data-state-text]");
  var ro = {}; Array.prototype.forEach.call(d.querySelectorAll("[data-ro]"), function (n) { ro[n.getAttribute("data-ro")] = n; });
  var S = null, buf = null;
  function say(s, err) { state.lastChild.textContent = " " + s; state.classList.toggle("is-err", !!err); }
  function set(k, v, over) { if (ro[k]) { ro[k].textContent = v; var r = ro[k].closest(".readout"); if (r) r.classList.toggle("is-over", !!over); } }
  function bandName(b) { var f = function (x) { return x >= 1000 ? (x / 1000) + "k" : String(x); }; return f(b.lo) + "–" + f(b.hi) + " Hz"; }

  function render() {
    set("CORR", A.fmtSigned(S.corr, 2), S.corr < 0); set("CMIN", A.fmtSigned(S.corrMin, 2), S.corrMin < 0);
    set("NEG", (S.corrNeg * 100).toFixed(1) + "%", S.corrNeg > 0.05);
    set("BAL", Math.abs(S.balance) < 0.05 ? "0.0" : (S.balance > 0 ? "L " : "R ") + Math.abs(S.balance).toFixed(1), Math.abs(S.balance) > 1.5);
    set("WIDTH", isFinite(S.widthDb) ? A.fmt(S.widthDb, 1) : "—");
    set("MONO", A.fmtSigned(S.monoDelta, 1), S.monoDelta < -3.5);
    var tb = $("[data-bands] tbody");
    tb.innerHTML = S.bands.map(function (b, i) {
      var warn = (i < 2 && b.corr < 0.7) || b.corr < 0;
      var bar = "<span class=\"meter-bar\" style=\"display:block;width:100%;min-width:80px\"><i style=\"width:" + Math.min(100, b.share * 100 / 0.5).toFixed(1) + "%\"></i></span>";
      return "<tr><td>" + A.t("band" + i) + " <span class=\"is-dim\">" + bandName(b) + "</span></td><td class=\"r" + (warn ? " is-over" : "") + "\">" + A.fmtSigned(b.corr, 2) + "</td><td class=\"r\">" + (isFinite(b.width) ? A.fmt(b.width, 1, "dB") : "—") + "</td><td class=\"r\">" + (b.share * 100).toFixed(1) + "%</td><td style=\"width:30%\">" + bar + "</td></tr>";
    }).join("");
    var notes = [];
    if (S.mono) notes.push(A.t("nMonoFile"));
    if (S.bands[0].corr < 0.7 || S.bands[1].corr < 0.7) notes.push(A.t("nLowWide"));
    if (S.corrNeg > 0.05) notes.push(A.t("nNeg", { p: (S.corrNeg * 100).toFixed(0) }));
    if (S.monoDelta < -3.5) notes.push(A.t("nMonoLoss", { d: A.fmt(-S.monoDelta, 1) }));
    if (Math.abs(S.balance) > 1.5) notes.push(A.t("nBal", { s: S.balance > 0 ? A.t("left") : A.t("right"), d: Math.abs(S.balance).toFixed(1) }));
    if (!notes.length) notes.push(A.t("nOk"));
    $("[data-notes]").innerHTML = notes.map(function (n) { return "<li>" + n + "</li>"; }).join("");
    var out = $("[data-results]"); if (out) out.hidden = false; var pl = $("[data-player]"); if (pl) pl.hidden = false; drawTl(); drawScope();
  }
  function drawTl() {
    var cv = $("[data-corrtl]"); if (!cv) return;
    var c = A.canvas(cv), ctx = c.ctx, W = c.W, H = c.H, mL = 30, mB = 18;
    ctx.clearRect(0, 0, W, H);
    var Y = function (v) { return 6 + (1 - v) / 2 * (H - 6 - mB); }, X = function (t) { return mL + t / S.dur * (W - mL - 4); };
    ctx.font = "600 10px 'Hubot Sans', sans-serif"; ctx.fillStyle = A.COL.mid; ctx.textAlign = "right";
    [1, 0.5, 0, -0.5, -1].forEach(function (g) { var y = Math.round(Y(g)) + 0.5; ctx.strokeStyle = g === 0 ? "rgba(255,90,64,0.45)" : A.COL.grid; ctx.beginPath(); ctx.moveTo(mL, y); ctx.lineTo(W, y); ctx.stroke(); ctx.fillText((g > 0 ? "+" : "") + g, mL - 6, y + 3); });
    ctx.textAlign = "center"; var step = S.dur > 240 ? 60 : 30; for (var s = 0; s <= S.dur; s += step) ctx.fillText(A.fmtTime(s), X(s), H - 4);
    ctx.lineWidth = 1.5;
    var prev = null;
    for (var i = 0; i < S.corrTl.length; i++) {
      var v = S.corrTl[i]; if (!isFinite(v)) { prev = null; continue; }
      var x = X(S.corrT[i]), y = Y(v);
      if (prev) { ctx.strokeStyle = v < 0 || prev[2] < 0 ? A.COL.over : A.COL.vfd; ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(x, y); ctx.stroke(); }
      prev = [x, y, v];
    }
  }
  function scopeFrame(ctx, W, H) {
    ctx.clearRect(0, 0, W, H);
    var cx = W / 2, cy = H / 2, r = Math.min(W, H) / 2 - 8;
    ctx.strokeStyle = A.COL.grid; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy);
    ctx.moveTo(cx - r * 0.707, cy - r * 0.707); ctx.lineTo(cx + r * 0.707, cy + r * 0.707); ctx.moveTo(cx + r * 0.707, cy - r * 0.707); ctx.lineTo(cx - r * 0.707, cy + r * 0.707); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = A.COL.mid; ctx.font = "600 10px 'Hubot Sans', sans-serif"; ctx.textAlign = "center";
    ctx.fillText("M", cx, cy - r - 0 + 12); ctx.fillText("L", cx - r * 0.707 + 10, cy - r * 0.707 + 4); ctx.fillText("R", cx + r * 0.707 - 10, cy - r * 0.707 + 4); ctx.fillText("S", cx + r - 10, cy - 6);
    return { cx: cx, cy: cy, r: r };
  }
  function plot(ctx, g, L, R, n, alpha) {
    var peak = 1e-6; for (var i = 0; i < n; i++) { var a = Math.abs(L[i]) + Math.abs(R[i]); if (a > peak) peak = a; }
    var k = g.r / Math.max(0.25, peak) * 0.95;
    ctx.fillStyle = "rgba(124,242,220," + alpha + ")";
    for (var j = 0; j < n; j++) { var m = (L[j] + R[j]) * 0.7071, s = (L[j] - R[j]) * 0.7071; ctx.fillRect(g.cx - s * k, g.cy - m * k, 1.2, 1.2); }
  }
  function drawScope() {
    var cv = $("[data-scope]"); if (!cv) return;
    var c = A.canvas(cv), g = scopeFrame(c.ctx, c.W, c.H), n = S.scope.length / 2;
    var L = new Float32Array(n), R = new Float32Array(n); for (var i = 0; i < n; i++) { L[i] = S.scope[2 * i]; R[i] = S.scope[2 * i + 1]; }
    plot(c.ctx, g, L, R, n, 0.28);
  }

  /* ---------- live player ---------- */
  var ctxA = null, src = null, startedAt = 0, offset = 0, playing = false, nodes = null, raf = null, mode = "stereo";
  function ensure() {
    if (ctxA) return;
    var AC = window.AudioContext || window.webkitAudioContext; ctxA = new AC();
    var split = ctxA.createChannelSplitter(2), merge = ctxA.createChannelMerger(2);
    var anL = ctxA.createAnalyser(), anR = ctxA.createAnalyser(); anL.fftSize = anR.fftSize = 2048;
    var gLL = ctxA.createGain(), gLR = ctxA.createGain(), gRL = ctxA.createGain(), gRR = ctxA.createGain(), out = ctxA.createGain();
    split.connect(anL, 0); split.connect(anR, 1);
    split.connect(gLL, 0); split.connect(gLR, 0); split.connect(gRL, 1); split.connect(gRR, 1);
    gLL.connect(merge, 0, 0); gRL.connect(merge, 0, 0); gLR.connect(merge, 0, 1); gRR.connect(merge, 0, 1);
    merge.connect(out); out.gain.value = 0.9; out.connect(ctxA.destination);
    nodes = { split: split, anL: anL, anR: anR, gLL: gLL, gLR: gLR, gRL: gRL, gRR: gRR };
    setMode(mode);
  }
  function setMode(m) {
    mode = m; if (!nodes) return;
    var t = ctxA.currentTime, set = function (g, v) { g.gain.setTargetAtTime(v, t, 0.01); };
    if (m === "stereo") { set(nodes.gLL, 1); set(nodes.gRR, 1); set(nodes.gLR, 0); set(nodes.gRL, 0); }
    else if (m === "mono") { set(nodes.gLL, 0.5); set(nodes.gRR, 0.5); set(nodes.gLR, 0.5); set(nodes.gRL, 0.5); }
    else { set(nodes.gLL, 0.5); set(nodes.gRL, -0.5); set(nodes.gLR, 0.5); set(nodes.gRR, -0.5); }
  }
  function pos() { return playing ? Math.min(buf.duration, offset + ctxA.currentTime - startedAt) : offset; }
  function play() {
    ensure(); if (ctxA.state === "suspended") ctxA.resume();
    src = ctxA.createBufferSource(); src.buffer = buf; src.connect(nodes.split);
    src.onended = function () { if (playing && pos() >= buf.duration - 0.05) { stop(); offset = 0; ui(); } };
    startedAt = ctxA.currentTime; src.start(0, offset); playing = true; loop(); ui();
  }
  function stop() { if (src) { try { src.onended = null; src.stop(); } catch (e) {} src = null; } if (playing) offset = pos(); playing = false; cancelAnimationFrame(raf); ui(); }
  function ui() {
    var pb = $("[data-play]"); if (pb) pb.textContent = playing ? A.t("pause") : A.t("play");
    var tm = $("[data-time]"); if (tm && buf) tm.textContent = A.fmtTime(pos()) + " / " + A.fmtTime(buf.duration);
    var sk = $("[data-seek]"); if (sk && buf) sk.value = String(Math.round(pos() / buf.duration * 1000));
  }
  var tdL = new Float32Array(2048), tdR = new Float32Array(2048);
  function loop() {
    nodes.anL.getFloatTimeDomainData(tdL); nodes.anR.getFloatTimeDomainData(tdR);
    var ll = 0, rr = 0, lr = 0; for (var i = 0; i < 2048; i++) { ll += tdL[i] * tdL[i]; rr += tdR[i] * tdR[i]; lr += tdL[i] * tdR[i]; }
    var c = ll > 1e-8 && rr > 1e-8 ? lr / Math.sqrt(ll * rr) : 1;
    var bar = $("[data-live-corr]"); if (bar) bar.style.left = ((c + 1) / 2 * 100).toFixed(1) + "%";
    var lv = $("[data-live-corr-val]"); if (lv) lv.textContent = A.fmtSigned(c, 2);
    var cv = $("[data-live-scope]");
    if (cv) { var cc = A.canvas(cv), g = scopeFrame(cc.ctx, cc.W, cc.H); plot(cc.ctx, g, tdL, tdR, 2048, 0.55); }
    ui(); raf = requestAnimationFrame(loop);
  }

  function run(file) {
    if (!A.isAudio(file)) { say(A.t("notAudio"), true); return; }
    stop(); offset = 0;
    root.setAttribute("data-state", "busy"); say(A.t("decoding"));
    A.dsp().then(function (D) {
      return D.decode(file, function () {}).then(function (b) { buf = b; return D.stereo(b, function (ph, p) { say(A.t("busy", { p: Math.round(p * 100) })); }); });
    }).then(function (res) { S = res; root.removeAttribute("data-state"); say(A.t("done", { name: file.name })); render(); ui(); var pl = $("[data-player]"); if (pl) pl.hidden = false; })
      .catch(function () { root.removeAttribute("data-state"); say(A.t("error"), true); });
  }
  A.dropzone(root.querySelector("[data-drop]"), run);
  var pb = $("[data-play]"); if (pb) pb.addEventListener("click", function () { if (!buf) return; if (playing) stop(); else play(); });
  var sk = $("[data-seek]"); if (sk) sk.addEventListener("input", function () { if (!buf) return; var was = playing; stop(); offset = sk.value / 1000 * buf.duration; if (was) play(); else ui(); });
  Array.prototype.forEach.call(d.querySelectorAll("[data-mode]"), function (b) {
    b.addEventListener("click", function () {
      Array.prototype.forEach.call(d.querySelectorAll("[data-mode]"), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      setMode(b.getAttribute("data-mode"));
    });
  });
  var rt = null; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { if (S) { drawTl(); drawScope(); } }, 150); });
})();
