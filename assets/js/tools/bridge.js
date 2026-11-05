/* Home meter bridge: demo reading, then a real measurement of a dropped track */
(function () {
  "use strict";
  var A = window.APT, d = document;
  var el = d.getElementById("bridge");
  if (!el || !A) return;
  var cv = el.querySelector("canvas"), state = el.querySelector("[data-state-text]"), verdict = el.querySelector(".bridge__verdict");
  var ro = {}; Array.prototype.forEach.call(el.querySelectorAll("[data-ro]"), function (n) { ro[n.getAttribute("data-ro")] = n; });
  var series = null, isDemo = true;

  function demoSeries() {
    var s = [];
    for (var i = 0; i <= 160; i++) {
      var x = i / 160, v;
      if (x < 0.12) v = -22 + x * 70; else if (x < 0.42) v = -12.5 + 1.2 * Math.sin(i * 0.5);
      else if (x < 0.52) v = -15 + Math.sin(i) * 0.8; else if (x < 0.86) v = -7.2 + 0.9 * Math.sin(i * 0.7);
      else v = -12 - (x - 0.86) * 60;
      s.push(v);
    }
    return s;
  }
  function draw() {
    if (!cv) return;
    var c = A.canvas(cv), ctx = c.ctx, W = c.W, H = c.H;
    ctx.clearRect(0, 0, W, H);
    var s = series || demoSeries(), lo = -30, hi = -1;
    var Y = function (v) { return 6 + (hi - Math.max(lo, Math.min(hi, v))) / (hi - lo) * (H - 12); };
    ctx.strokeStyle = A.COL.grid; ctx.lineWidth = 1;
    [-24, -18, -12, -6].forEach(function (g) { var y = Math.round(Y(g)) + 0.5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); });
    var y14 = Math.round(Y(-14)) + 0.5;
    ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(124,242,220,0.38)"; ctx.beginPath(); ctx.moveTo(0, y14); ctx.lineTo(W, y14); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath();
    for (var i = 0; i < s.length; i++) { var x = i / (s.length - 1) * W, y = Y(s[i]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.strokeStyle = A.COL.vfd; ctx.lineWidth = 1.6; ctx.lineJoin = "round"; ctx.shadowColor = "rgba(124,242,220,0.5)"; ctx.shadowBlur = 6; ctx.stroke(); ctx.shadowBlur = 0;
    /* legend for the dashed line, top left, on its own plate so the trace never covers it */
    ctx.font = "600 10px 'Hubot Sans', sans-serif"; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    var label = A.t("ref14"), tw = ctx.measureText(label).width;
    ctx.fillStyle = "rgba(12,18,16,0.88)"; ctx.fillRect(0, 0, tw + 34, 18);
    ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(124,242,220,0.6)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(2, 9.5); ctx.lineTo(22, 9.5); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = A.COL.mid; ctx.fillText(label, 28, 9.5); ctx.textBaseline = "alphabetic";
  }
  function set(k, v, over) { if (ro[k]) { ro[k].textContent = v; ro[k].closest(".readout").classList.toggle("is-over", !!over); } }

  function verdictFor(R, name) {
    var sp = A.platformGain(A.PLATFORMS[0], R.I, R.TP);
    var parts = [];
    if (!isFinite(R.I)) parts.push(A.t("vQuiet"));
    else if (sp.gain < -0.5) parts.push(A.t("vDown", { g: A.fmt(-sp.gain, 1) }));
    else if (sp.gain > 0.5) parts.push(A.t("vUp", { g: A.fmt(sp.gain, 1) }));
    else parts.push(A.t("vOn"));
    if (R.TP > -0.1) parts.push(A.t("vTpOver", { tp: A.fmtSigned(R.TP, 1) }));
    else if (R.TP > -0.35) parts.push(A.t("vTpEdge", { tp: A.fmtSigned(R.TP, 1) }));
    else parts.push(A.t("vTpOk", { tp: A.fmtSigned(R.TP, 1) }));
    if (isFinite(R.corr) && R.corr < 0.3) parts.push(A.t("vCorr", { c: A.fmtSigned(R.corr, 2) }));
    var html = "<p>" + parts.join(" ") + "</p><div class=\"btn-row\"><a class=\"btn btn--glass\" href=\"" + el.getAttribute("data-meter") + "\">" + A.t("openMeter") + "</a><a class=\"btn btn--glass\" href=\"#contact\">" + A.t("getMastered") + "</a></div>";
    verdict.innerHTML = html;
  }

  function run(file) {
    if (!A.isAudio(file)) { state.lastChild.textContent = " " + A.t("notAudio"); return; }
    el.setAttribute("data-state", "busy");
    state.lastChild.textContent = " " + A.t("busy", { p: 0 });
    A.dsp().then(function (D) {
      return D.decode(file, function () {}).then(function (buf) {
        return D.analyze(buf, function (txt, p) { state.lastChild.textContent = " " + A.t("busy", { p: Math.round(p * 100) }); });
      });
    }).then(function (R) {
      isDemo = false;
      el.removeAttribute("data-state");
      state.lastChild.textContent = " " + A.t("measured", { name: file.name.length > 42 ? file.name.slice(0, 40) + "…" : file.name });
      set("I", A.fmt(R.I, 1)); set("ST", A.fmt(R.STmax, 1)); set("TP", A.fmtSigned(R.TP, 1), R.TP > -0.1);
      set("LRA", A.fmt(R.LRA, 1)); set("CORR", A.fmtSigned(R.corr, 2), R.corr < 0);
      series = R.tl && R.tl.length > 2 ? R.tl.map(function (v) { return isFinite(v) ? v : -40; }) : null;
      draw(); verdictFor(R, file.name);
    }).catch(function () {
      el.removeAttribute("data-state");
      state.lastChild.textContent = " " + A.t("error");
    });
  }

  var zone = el.querySelector("[data-drop]");
  if (zone) A.dropzone(zone, run);
  var openers = d.querySelectorAll("[data-open-bridge]");
  Array.prototype.forEach.call(openers, function (b) { b.addEventListener("click", function (e) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "center" }); var inp = el.querySelector("input[type=file]"); setTimeout(function () { if (inp) inp.click(); }, 350); }); });
  draw();
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(draw);
  var rt = null; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(draw, 120); });
  setTimeout(function () { el.removeAttribute("data-boot"); }, 2000);
})();
