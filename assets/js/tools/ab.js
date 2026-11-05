/* A/B reference player: two tracks, loudness-matched, gapless switching */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("ab");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var state = root.querySelector("[data-state-text]");
  var T = { a: null, b: null }, M = { a: null, b: null }, N = { a: "", b: "" };
  var ctx = null, srcs = {}, gains = {}, active = "a", sel = "a", playing = false, startedAt = 0, offset = 0, match = true, blind = false, blindMap = { a: "a", b: "b" }, raf = null;
  function say(s, err) { state.lastChild.textContent = " " + s; state.classList.toggle("is-err", !!err); }
  function dur() { return Math.max(T.a ? T.a.duration : 0, T.b ? T.b.duration : 0); }
  function gainFor(k) {
    if (!match || !M.a || !M.b || !isFinite(M.a.I) || !isFinite(M.b.I)) return 1;
    var quiet = Math.min(M.a.I, M.b.I);
    return Math.pow(10, (quiet - M[k].I) / 20);
  }
  function info() {
    ["a", "b"].forEach(function (k) {
      var box = $("[data-info-" + k + "]"); if (!box) return;
      if (!M[k]) { box.textContent = A.t("empty"); return; }
      var g = 20 * Math.log10(gainFor(k));
      box.innerHTML = (blind ? A.t("hidden") : "<b>" + esc(N[k]) + "</b>") + "<br>" + A.fmt(M[k].I, 1, "LUFS") + " · " + A.fmtSigned(M[k].TP, 1, "dBTP") + (match && Math.abs(g) > 0.05 ? " · " + A.t("applied", { g: A.fmtSigned(g, 1, "dB") }) : "");
    });
    var reveal = $("[data-reveal]"); if (reveal) reveal.hidden = !blind;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ensure() {
    if (ctx) return; var AC = window.AudioContext || window.webkitAudioContext; ctx = new AC();
    ["a", "b"].forEach(function (k) { gains[k] = ctx.createGain(); gains[k].gain.value = 0; gains[k].connect(ctx.destination); });
  }
  function levels() {
    if (!ctx) return; var t = ctx.currentTime;
    ["a", "b"].forEach(function (k) { gains[k].gain.cancelScheduledValues(t); gains[k].gain.setTargetAtTime(k === active ? gainFor(k) * 0.95 : 0, t, 0.006); });
  }
  function pos() { return playing ? offset + ctx.currentTime - startedAt : offset; }
  function play() {
    if (!T.a && !T.b) return; ensure(); if (ctx.state === "suspended") ctx.resume();
    var when = ctx.currentTime + 0.03;
    ["a", "b"].forEach(function (k) {
      if (!T[k]) return; var s = ctx.createBufferSource(); s.buffer = T[k]; s.connect(gains[k]);
      if (offset < T[k].duration) s.start(when, offset); srcs[k] = s;
    });
    startedAt = when; playing = true; levels(); tick();
  }
  function stop() { ["a", "b"].forEach(function (k) { if (srcs[k]) { try { srcs[k].stop(); } catch (e) {} srcs[k] = null; } }); if (playing) offset = Math.max(0, pos()); playing = false; cancelAnimationFrame(raf); ui(); }
  function tick() { if (playing && pos() >= dur()) { stop(); offset = 0; } ui(); if (playing) raf = requestAnimationFrame(tick); }
  function ui() {
    var p = $("[data-play]"); if (p) p.textContent = playing ? A.t("pause") : A.t("play");
    var tm = $("[data-time]"); if (tm) tm.textContent = A.fmtTime(pos()) + " / " + A.fmtTime(dur());
    var sk = $("[data-seek]"); if (sk && dur()) sk.value = String(Math.round(pos() / dur() * 1000));
    ["a", "b"].forEach(function (k) { var b = $("[data-pick-side='" + k + "']"); if (b) b.setAttribute("aria-pressed", sel === k ? "true" : "false"); });
  }
  function choose(k) { sel = k; active = blind ? blindMap[k] : k; levels(); ui(); }
  function load(k, file) {
    if (!A.isAudio(file)) { say(A.t("notAudio"), true); return; }
    stop(); say(A.t("decoding"));
    A.dsp().then(function (D) {
      return D.decode(file, function () {}).then(function (b) { T[k] = b; N[k] = file.name; return D.quick(b, function (ph, p) { say(A.t("busy", { p: Math.round(p * 100) })); }); });
    }).then(function (m) { M[k] = m; info(); say(T.a && T.b ? A.t("ready") : A.t("addOther")); ui(); var pl = $("[data-player]"); if (pl && (T.a || T.b)) pl.hidden = false; })
      .catch(function () { say(A.t("error"), true); });
  }
  A.dropzone(root.querySelector("[data-drop-a]"), function (f) { load("a", f); });
  A.dropzone(root.querySelector("[data-drop-b]"), function (f) { load("b", f); });
  $("[data-play]").addEventListener("click", function () { if (playing) stop(); else play(); });
  $("[data-seek]").addEventListener("input", function (e) { var was = playing; stop(); offset = e.target.value / 1000 * dur(); if (was) play(); else ui(); });
  Array.prototype.forEach.call(d.querySelectorAll("[data-pick-side]"), function (b) { b.addEventListener("click", function () { choose(b.getAttribute("data-pick-side")); }); });
  var mt = $("[data-match]"); if (mt) mt.addEventListener("change", function () { match = mt.checked; info(); levels(); });
  var bl = $("[data-blind]"); if (bl) bl.addEventListener("change", function () {
    blind = bl.checked; blindMap = Math.random() < 0.5 ? { a: "a", b: "b" } : { a: "b", b: "a" };
    Array.prototype.forEach.call(d.querySelectorAll("[data-side-label]"), function (el) { el.textContent = blind ? (el.getAttribute("data-side-label") === "a" ? "1" : "2") : el.getAttribute("data-side-label").toUpperCase(); });
    info(); choose("a");
  });
  var rv = $("[data-reveal]"); if (rv) rv.addEventListener("click", function () { var msg = A.t("revealed", { one: N[blindMap.a] || blindMap.a.toUpperCase(), two: N[blindMap.b] || blindMap.b.toUpperCase() }); var out = $("[data-reveal-out]"); if (out) out.textContent = msg; });
  d.addEventListener("keydown", function (e) {
    if (/input|select|textarea/i.test((e.target.tagName || ""))) return;
    if (e.code === "Space") { e.preventDefault(); if (playing) stop(); else play(); }
    else if (e.key === "a" || e.key === "1") choose("a");
    else if (e.key === "b" || e.key === "2") choose("b");
    else if (e.key === "x") choose(sel === "a" ? "b" : "a");
  });
  info(); ui();
})();
