/* angelopillon.com — before/after player on the home.
   Both versions are decoded and started together, so switching is instant and stays in time.
   "Matched loudness" turns the louder version down to the level of the quieter one.
   The waveform shows the loudness envelope of the version you hear and morphs when you switch. */
(function () {
  "use strict";
  var el = document.querySelector("[data-ab]");
  if (!el) return;
  var AC = window.AudioContext || window.webkitAudioContext;
  var $ = function (s) { return el.querySelector(s); };
  var tracks = Array.prototype.slice.call(el.querySelectorAll(".ab__track"));
  var playBtn = $(".ab__play"), seek = $(".ab__seek"), timeEl = $(".ab__time"), statusEl = $(".ab__status"), matchEl = $(".ab__match input");
  var lufsEl = $("[data-lufs]"), titleEl = $(".ab__now-title"), svcEl = $(".ab__now-svc");
  var canvas = $(".ab__canvas"), g = canvas.getContext("2d");
  var vBtns = Array.prototype.slice.call(el.querySelectorAll(".ab__switch button"));
  var T = { play: el.getAttribute("data-play"), pause: el.getAttribute("data-pause"), loading: el.getAttribute("data-loading"), error: el.getAttribute("data-error") };
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ctx = null, cache = {}, cur = 0, version = "before", playing = false, offset = 0, startedAt = 0, nodes = null, raf = 0, token = 0, dragging = false;
  var analyser = null, abuf = null, lvl = 0, hover = -1;

  function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }

  /* ---------- envelopes ---------- */
  function decode(b64) { var s = atob(b64 || ""), a = new Float32Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i) / 255; return a; }
  var envs = tracks.map(function (t) { return { b: decode(t.getAttribute("data-eb")), a: decode(t.getAttribute("data-ea")) }; });
  var shown = null, from = null, to = null, morphT = 1, morphStart = 0;
  function target() { var e = envs[cur]; return version === "after" ? e.a : e.b; }
  function startMorph() {
    var next = target();
    if (!shown || reduced) { shown = new Float32Array(next); morphT = 1; paint(); return; }
    from = new Float32Array(shown); to = next; morphT = 0; morphStart = performance.now();
    if (!playing) requestAnimationFrame(tick);
  }
  function stepMorph(now) {
    if (morphT >= 1) return false;
    morphT = Math.min(1, (now - morphStart) / 520);
    var k = 1 - Math.pow(1 - morphT, 3), n = Math.min(from.length, to.length);
    if (shown.length !== n) shown = new Float32Array(n);
    for (var i = 0; i < n; i++) shown[i] = from[i] + (to[i] - from[i]) * k;
    return true;
  }
  function tick(now) { var more = stepMorph(now); paint(); if (more && !playing) requestAnimationFrame(tick); }

  /* ---------- drawing ---------- */
  var W = 0, H = 0, DPR = 1, grad = null;
  function size() {
    var r = canvas.getBoundingClientRect();
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    canvas.width = W * DPR; canvas.height = H * DPR;
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    grad = g.createLinearGradient(0, 0, W, 0);
    [["0", "#4D6BFF"], [".26", "#8B4DFF"], [".52", "#FF3DA5"], [".78", "#FF6A2B"], ["1", "#FFC24B"]].forEach(function (s) { grad.addColorStop(+s[0], s[1]); });
    paint();
  }
  function paint() {
    if (!W || !shown) return;
    g.clearRect(0, 0, W, H);
    var bw = W < 520 ? 2 : 3, gap = W < 520 ? 2 : 2, step = bw + gap, n = Math.floor((W + gap) / step);
    var mid = H / 2, d = duration() || +tracks[cur].getAttribute("data-dur") || 1, prog = Math.max(0, Math.min(1, position() / d));
    var ghost = version === "after" ? envs[cur].b : envs[cur].a;
    var px = prog * W;
    for (var i = 0; i < n; i++) {
      var a = Math.floor((i / n) * shown.length), b = Math.max(a + 1, Math.floor(((i + 1) / n) * shown.length)), v = 0, gv = 0;
      for (var k = a; k < b; k++) { if (shown[k] > v) v = shown[k]; if (ghost[k] > gv) gv = ghost[k]; }
      var x = i * step, h = Math.max(2, v * (H - 6)), gh = Math.max(2, gv * (H - 6));
      // the other version, as a faint outline behind
      g.fillStyle = "rgba(255,255,255,.07)";
      g.fillRect(x, mid - gh / 2, bw, gh);
      var played = x + bw <= px;
      g.fillStyle = played ? grad : (version === "after" ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.42)");
      g.fillRect(x, mid - h / 2, bw, h);
    }
    // playhead
    if (prog > 0) {
      g.fillStyle = "#fff"; g.fillRect(Math.min(W - 2, px), 4, 2, H - 8);
      g.shadowColor = "rgba(255,255,255,.8)"; g.shadowBlur = 12; g.fillRect(Math.min(W - 2, px), 4, 2, H - 8); g.shadowBlur = 0;
    }
    if (hover >= 0) { g.fillStyle = "rgba(255,255,255,.35)"; g.fillRect(hover, 0, 1, H); }
  }

  /* ---------- audio ---------- */
  function rms(buf) {
    var sum = 0, n = 0;
    for (var c = 0; c < buf.numberOfChannels; c++) { var dd = buf.getChannelData(c); for (var i = 0; i < dd.length; i += 4) { sum += dd[i] * dd[i]; n++; } }
    return Math.sqrt(sum / Math.max(1, n)) || 1e-6;
  }
  function load(url) {
    if (!cache[url]) {
      cache[url] = fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then(function (ab) { return new Promise(function (ok, no) { ctx.decodeAudioData(ab, ok, no); }); })
        .then(function (buf) { return { buf: buf, rms: rms(buf) }; });
      cache[url].catch(function () { delete cache[url]; });
    }
    return cache[url];
  }
  function pair(i) { return Promise.all([load(tracks[i].getAttribute("data-before")), load(tracks[i].getAttribute("data-after"))]); }
  function duration() { return nodes && nodes.track === cur ? nodes.dur : 0; }
  function position() { return playing ? Math.min(duration(), offset + (ctx.currentTime - startedAt)) : offset; }
  function levels() {
    var m = matchEl.checked && nodes ? Math.min(nodes.rb, nodes.ra) : 0;
    return { before: m ? m / nodes.rb : 1, after: m ? m / nodes.ra : 1 };
  }
  function applyGains(fast) {
    if (!nodes) return;
    var l = levels(), t = ctx.currentTime, k = fast ? 0.004 : 0.012;
    nodes.gb.gain.setTargetAtTime(version === "before" ? l.before : 0, t, k);
    nodes.ga.gain.setTargetAtTime(version === "after" ? l.after : 0, t, k);
  }
  function stopSources() {
    if (!nodes || !nodes.sb) return;
    [nodes.sb, nodes.sa].forEach(function (s) { s.onended = null; try { s.stop(); } catch (e) {} s.disconnect(); });
    nodes.sb = nodes.sa = null;
  }
  function startSources() {
    stopSources();
    var sb = ctx.createBufferSource(), sa = ctx.createBufferSource();
    sb.buffer = nodes.b; sa.buffer = nodes.a; sb.connect(nodes.gb); sa.connect(nodes.ga);
    var when = ctx.currentTime + 0.03;
    sb.start(when, Math.min(offset, nodes.b.duration - 0.01)); sa.start(when, Math.min(offset, nodes.a.duration - 0.01));
    startedAt = when;
    sb.onended = function () { if (playing && position() >= duration() - 0.05) { pause(); offset = 0; draw(); } };
    nodes.sb = sb; nodes.sa = sa;
  }
  function meter() {
    if (!analyser) return 0;
    analyser.getFloatTimeDomainData(abuf);
    var s = 0; for (var i = 0; i < abuf.length; i++) s += abuf[i] * abuf[i];
    return Math.min(1, Math.sqrt(s / abuf.length) * 3.2);
  }
  function draw() {
    var d = duration() || +tracks[cur].getAttribute("data-dur"), p = position();
    if (!dragging) seek.value = d ? Math.round((p / d) * 1000) : 0;
    timeEl.textContent = fmt(p) + " / " + fmt(d);
    paint();
  }
  function loop(now) {
    stepMorph(now || performance.now());
    var m = playing ? meter() : 0;
    lvl += (m - lvl) * (m > lvl ? 0.35 : 0.08);
    el.style.setProperty("--lvl", reduced ? 0 : lvl.toFixed(3));
    draw();
    if (playing || lvl > 0.01) raf = requestAnimationFrame(loop); else el.style.setProperty("--lvl", 0);
  }
  function setPlaying(on) {
    playing = on;
    el.classList.toggle("is-playing", on);
    playBtn.setAttribute("aria-label", on ? T.pause : T.play);
  }
  function pause() {
    if (!playing) return;
    offset = position(); stopSources(); setPlaying(false);
  }
  function prepare(i) {
    var my = ++token;
    el.classList.add("is-loading"); statusEl.textContent = T.loading;
    return pair(i).then(function (r) {
      if (my !== token) return false;
      if (nodes) { stopSources(); nodes.gb.disconnect(); nodes.ga.disconnect(); }
      var gb = ctx.createGain(), ga = ctx.createGain();
      gb.gain.value = 0; ga.gain.value = 0; gb.connect(analyser); ga.connect(analyser);
      nodes = { b: r[0].buf, a: r[1].buf, rb: r[0].rms, ra: r[1].rms, gb: gb, ga: ga, dur: Math.min(r[0].buf.duration, r[1].buf.duration), track: i };
      el.classList.remove("is-loading"); statusEl.textContent = "";
      return true;
    }).catch(function () {
      if (my !== token) return false;
      el.classList.remove("is-loading"); statusEl.textContent = T.error; setPlaying(false);
      return false;
    });
  }
  function play() {
    if (!AC) return;
    if (!ctx) {
      ctx = new AC();
      analyser = ctx.createAnalyser(); analyser.fftSize = 1024; abuf = new Float32Array(analyser.fftSize);
      analyser.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    var ready = nodes && nodes.track === cur ? Promise.resolve(true) : prepare(cur);
    ready.then(function (ok) {
      if (!ok) return;
      if (offset >= duration() - 0.05) offset = 0;
      startSources(); applyGains(true); setPlaying(true);
      cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
    });
  }
  function showInfo() {
    var t = tracks[cur];
    titleEl.textContent = t.getAttribute("data-title");
    svcEl.textContent = t.getAttribute("data-svc");
    var v = t.getAttribute(version === "after" ? "data-la" : "data-lb");
    lufsEl.textContent = v || "";
  }
  function select(i) {
    if (i === cur && nodes && nodes.track === i) return;
    var was = playing;
    pause(); cur = i; offset = 0;
    tracks.forEach(function (t, k) { t.setAttribute("aria-pressed", k === i ? "true" : "false"); });
    showInfo(); startMorph(); draw();
    if (was) play();
  }
  function setVersion(v) {
    if (v === version) return;
    version = v;
    vBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === v ? "true" : "false"); });
    el.setAttribute("data-version", v);
    applyGains(false); showInfo(); startMorph();
  }

  /* ---------- events ---------- */
  playBtn.addEventListener("click", function () { if (playing) pause(); else play(); });
  tracks.forEach(function (t, i) { t.addEventListener("click", function () { var same = i === cur; select(i); if (!playing && (!same || !nodes)) play(); }); });
  vBtns.forEach(function (b) { b.addEventListener("click", function () { setVersion(b.getAttribute("data-v")); }); });
  matchEl.addEventListener("change", function () { applyGains(false); });
  seek.addEventListener("input", function () {
    dragging = true;
    var d = duration() || +tracks[cur].getAttribute("data-dur");
    offset = (seek.value / 1000) * d;
    timeEl.textContent = fmt(offset) + " / " + fmt(d);
    if (!playing) paint();
  });
  seek.addEventListener("change", function () {
    dragging = false;
    var d = duration() || +tracks[cur].getAttribute("data-dur");
    offset = (seek.value / 1000) * d;
    if (playing) { startSources(); applyGains(true); } else if (!nodes || nodes.track !== cur) play(); else draw();
  });
  seek.addEventListener("pointermove", function (e) { var r = canvas.getBoundingClientRect(); hover = Math.round(e.clientX - r.left); if (!playing) paint(); });
  seek.addEventListener("pointerleave", function () { hover = -1; if (!playing) paint(); });
  // B and A switch versions while the player has focus
  el.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") return;
    var k = e.key.toLowerCase();
    if (k === "a") setVersion("after"); else if (k === "b") setVersion("before");
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) pause(); });
  if (window.ResizeObserver) new ResizeObserver(size).observe(canvas); else window.addEventListener("resize", size);

  if (!AC) { el.classList.add("is-unsupported"); statusEl.textContent = T.error; }
  el.setAttribute("data-version", version);
  showInfo(); shown = new Float32Array(target()); size(); draw();
})();
