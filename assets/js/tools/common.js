/* angelopillon.com — shared helpers for the browser tools */
(function () {
  "use strict";
  var d = document;
  var T = {};
  var src = d.getElementById("tool-i18n");
  if (src) { try { T = JSON.parse(src.textContent); } catch (e) { T = {}; } }
  function t(k, vars) {
    var s = T[k] != null ? T[k] : k;
    if (vars) Object.keys(vars).forEach(function (v) { s = s.split("{" + v + "}").join(vars[v]); });
    return s;
  }
  function fmt(v, digits, unit) {
    if (v == null || !isFinite(v)) return "—";
    var s = Math.abs(v).toFixed(digits == null ? 1 : digits);
    var sign = v < 0 && parseFloat(s) !== 0 ? "−" : "";
    return sign + s + (unit ? " " + unit : "");
  }
  function fmtSigned(v, digits, unit) {
    if (v == null || !isFinite(v)) return "—";
    var s = Math.abs(v).toFixed(digits == null ? 1 : digits);
    var z = parseFloat(s) === 0;
    return (z ? "" : (v < 0 ? "−" : "+")) + s + (unit ? " " + unit : "");
  }
  function fmtTime(s) { if (!isFinite(s)) return "0:00"; s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }

  /* Canvas sized to its CSS box at device pixel ratio */
  function canvas(cv) {
    var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = Math.max(1, Math.round(r.width)), H = Math.max(1, Math.round(r.height));
    cv.width = W * dpr; cv.height = H * dpr;
    var ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, W: W, H: H };
  }
  var COL = { vfd: "#7CF2DC", mid: "rgba(124,242,220,0.62)", dim: "rgba(124,242,220,0.16)", ghost: "rgba(124,242,220,0.07)", over: "#FF5A40", grid: "rgba(124,242,220,0.10)", white: "#E9FFF9" };

  /* File input + drag and drop on a zone */
  function dropzone(zone, onFile) {
    var input = zone.querySelector("input[type=file]");
    var btn = zone.querySelector("[data-pick]");
    if (btn && input) btn.addEventListener("click", function () { input.click(); });
    if (input) input.addEventListener("change", function () { if (input.files && input.files[0]) onFile(input.files[0]); input.value = ""; });
    ["dragenter", "dragover"].forEach(function (ev) { zone.addEventListener(ev, function (e) { e.preventDefault(); zone.classList.add("is-over"); }); });
    ["dragleave", "drop"].forEach(function (ev) { zone.addEventListener(ev, function (e) { e.preventDefault(); zone.classList.remove("is-over"); }); });
    zone.addEventListener("drop", function (e) { var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) onFile(f); });
  }
  function isAudio(f) { return f && (/^audio\//.test(f.type) || /\.(wav|aiff?|mp3|m4a|aac|flac|ogg|opus|webm)$/i.test(f.name)); }

  /* Platform loudness model (approximate, see page notes) */
  var PLATFORMS = [
    { id: "spotify", name: "Spotify", ref: -14, up: "headroom", note: "spotify" },
    { id: "spotify-loud", name: "Spotify Loud", ref: -11, up: "limiter", note: "spotifyLoud" },
    { id: "spotify-quiet", name: "Spotify Quiet", ref: -19, up: "headroom", note: "spotifyQuiet" },
    { id: "apple", name: "Apple Music", ref: -16, up: "headroom", note: "apple" },
    { id: "youtube", name: "YouTube", ref: -14, up: "none", note: "youtube" },
    { id: "tidal", name: "Tidal", ref: -14, up: "none", note: "tidal" },
    { id: "amazon", name: "Amazon Music", ref: -14, up: "none", note: "amazon" },
    { id: "deezer", name: "Deezer", ref: -15, up: "none", note: "deezer" },
    { id: "club", name: "Beatport / club", ref: null, up: "none", note: "club" }
  ];
  function platformGain(p, I, TP) {
    if (p.ref == null || !isFinite(I)) return { gain: 0, out: I, peak: TP, limited: false, capped: false };
    var g = p.ref - I, limited = false, capped = false;
    if (g > 0) {
      if (p.up === "none") { g = 0; capped = true; }
      else if (p.up === "headroom") { var room = -1 - TP; if (g > room) { g = Math.max(0, room); capped = true; } }
      else if (p.up === "limiter") { if (TP + g > -1) limited = true; }
    }
    return { gain: g, out: I + g, peak: limited ? -1 : TP + g, limited: limited, capped: capped };
  }

  /* Load the DSP core on demand */
  var dspP = null;
  function dsp() {
    if (window.APDSP) return Promise.resolve(window.APDSP);
    if (dspP) return dspP;
    var base = (d.currentScript && d.currentScript.src) || "";
    dspP = new Promise(function (res, rej) {
      var s = d.createElement("script");
      var me = d.querySelector('script[src*="tools/common.js"]');
      s.src = (me ? me.src : base).replace(/tools\/common\.js.*$/, "dsp.js");
      s.onload = function () { res(window.APDSP); };
      s.onerror = rej;
      d.head.appendChild(s);
    });
    return dspP;
  }
  function copy(text, okMsg) {
    var done = function () { if (window.APtoast) window.APtoast(okMsg || t("copied")); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { prompt("", text); });
    else prompt("", text);
  }
  var KEYS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var FLAT = { "C#": "D♭", "D#": "E♭", "F#": "G♭", "G#": "A♭", "A#": "B♭" };
  var CAM_MAJ = { 0: "8B", 7: "9B", 2: "10B", 9: "11B", 4: "12B", 11: "1B", 6: "2B", 1: "3B", 8: "4B", 3: "5B", 10: "6B", 5: "7B" };
  var CAM_MIN = { 9: "8A", 4: "9A", 11: "10A", 6: "11A", 1: "12A", 8: "1A", 3: "2A", 10: "3A", 5: "4A", 0: "5A", 7: "6A", 2: "7A" };

  window.APT = { t: t, fmt: fmt, fmtSigned: fmtSigned, fmtTime: fmtTime, canvas: canvas, COL: COL, dropzone: dropzone, isAudio: isAudio, PLATFORMS: PLATFORMS, platformGain: platformGain, dsp: dsp, copy: copy, KEYS: KEYS, FLAT: FLAT, CAM_MAJ: CAM_MAJ, CAM_MIN: CAM_MIN };
})();
