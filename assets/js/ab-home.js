/* angelopillon.com — before/after player on the home.
   Both versions are decoded and started together, so switching is instant and stays in time.
   "Matched loudness" turns the louder version down to the level of the quieter one. */
(function () {
  "use strict";
  var el = document.querySelector("[data-ab]");
  if (!el) return;
  var AC = window.AudioContext || window.webkitAudioContext;
  var $ = function (s) { return el.querySelector(s); };
  var tracks = Array.prototype.slice.call(el.querySelectorAll(".ab__track"));
  var playBtn = $(".ab__play"), seek = $(".ab__seek"), timeEl = $(".ab__time"), statusEl = $(".ab__status"), matchEl = $(".ab__match input");
  var vBtns = Array.prototype.slice.call(el.querySelectorAll(".ab__switch button"));
  var T = { play: el.getAttribute("data-play"), pause: el.getAttribute("data-pause"), loading: el.getAttribute("data-loading"), error: el.getAttribute("data-error") };
  if (!AC || !tracks.length) { el.classList.add("is-unsupported"); statusEl.textContent = AC ? "" : T.error; return; }

  var ctx = null, cache = {}, cur = 0, version = "before", playing = false, offset = 0, startedAt = 0, nodes = null, raf = 0, token = 0, dragging = false;

  function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
  function rms(buf) {
    var sum = 0, n = 0;
    for (var c = 0; c < buf.numberOfChannels; c++) { var d = buf.getChannelData(c); for (var i = 0; i < d.length; i += 4) { sum += d[i] * d[i]; n++; } }
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
  function duration() { return nodes ? nodes.dur : 0; }
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
  function draw() {
    var d = duration(), p = position();
    if (!dragging) seek.value = d ? Math.round((p / d) * 1000) : 0;
    seek.style.setProperty("--p", (d ? (p / d) * 100 : 0) + "%");
    timeEl.textContent = fmt(p) + " / " + fmt(d);
  }
  function loop() { draw(); if (playing) raf = requestAnimationFrame(loop); }
  function setPlaying(on) {
    playing = on;
    el.classList.toggle("is-playing", on);
    playBtn.setAttribute("aria-label", on ? T.pause : T.play);
  }
  function pause() {
    if (!playing) return;
    offset = position(); stopSources(); setPlaying(false); cancelAnimationFrame(raf);
  }
  function prepare(i) {
    var my = ++token;
    el.classList.add("is-loading"); statusEl.textContent = T.loading;
    return pair(i).then(function (r) {
      if (my !== token) return false;
      if (nodes) { stopSources(); nodes.gb.disconnect(); nodes.ga.disconnect(); }
      var gb = ctx.createGain(), ga = ctx.createGain();
      gb.gain.value = 0; ga.gain.value = 0; gb.connect(ctx.destination); ga.connect(ctx.destination);
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
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") ctx.resume();
    var ready = nodes && nodes.track === cur ? Promise.resolve(true) : prepare(cur);
    ready.then(function (ok) {
      if (!ok) return;
      if (offset >= duration() - 0.05) offset = 0;
      startSources(); applyGains(true); setPlaying(true); loop();
    });
  }
  function select(i) {
    if (i === cur && nodes && nodes.track === i) return;
    var was = playing;
    pause(); cur = i; offset = 0;
    tracks.forEach(function (t, k) { t.setAttribute("aria-pressed", k === i ? "true" : "false"); });
    if (nodes && nodes.track !== i) { timeEl.textContent = "0:00 / 0:00"; seek.value = 0; seek.style.setProperty("--p", "0%"); }
    if (was) play();
  }
  function setVersion(v) {
    version = v;
    vBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === v ? "true" : "false"); });
    el.setAttribute("data-version", v);
    applyGains(false);
  }

  playBtn.addEventListener("click", function () { if (playing) pause(); else play(); });
  tracks.forEach(function (t, i) { t.addEventListener("click", function () { var first = !nodes && !playing; select(i); if (first || !playing) play(); }); });
  vBtns.forEach(function (b) { b.addEventListener("click", function () { setVersion(b.getAttribute("data-v")); }); });
  matchEl.addEventListener("change", function () { applyGains(false); });
  seek.addEventListener("input", function () { dragging = true; var d = duration(); seek.style.setProperty("--p", seek.value / 10 + "%"); timeEl.textContent = fmt((seek.value / 1000) * d) + " / " + fmt(d); });
  seek.addEventListener("change", function () {
    dragging = false;
    if (!nodes) { seek.value = 0; return; }
    offset = (seek.value / 1000) * duration();
    if (playing) { startSources(); applyGains(true); } else draw();
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) pause(); });
  el.setAttribute("data-version", version);
})();
