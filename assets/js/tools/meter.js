/* LUFS meter: full report for one track, optional reference comparison */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("meter");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var state = root.querySelector("[data-state-text]");
  var ro = {}; Array.prototype.forEach.call(d.querySelectorAll("[data-ro]"), function (n) { ro[n.getAttribute("data-ro")] = n; });
  var R = null, buf = null, name = "", REF = null, refName = "", target = -14;

  function say(s, err) { state.lastChild.textContent = " " + s; state.classList.toggle("is-err", !!err); }
  function set(k, v, over) { if (ro[k]) { ro[k].textContent = v; var r = ro[k].closest(".readout"); if (r) r.classList.toggle("is-over", !!over); } }

  function readouts() {
    set("I", A.fmt(R.I, 1)); set("ST", A.fmt(R.STmax, 1)); set("M", A.fmt(R.Mmax, 1));
    set("TP", A.fmtSigned(R.TP, 1), R.TP > -0.1); set("SP", A.fmtSigned(R.SP, 1), R.SP > -0.01);
    set("LRA", A.fmt(R.LRA, 1)); set("PLR", A.fmt(R.PLR, 1));
    set("CORR", A.fmtSigned(R.corr, 2), R.corr < 0); set("W", isFinite(R.widthDb) ? A.fmt(R.widthDb, 1) : "—");
    set("BPM", R.bpm ? R.bpm.toFixed(1) : "—");
    set("KEY", R.key ? (R.key.short.replace("#", "♯") + " " + R.key.cam) : "—");
    set("DUR", A.fmtTime(R.dur));
  }
  function verdict() {
    var v = $("[data-verdict]"); if (!v) return;
    if (!isFinite(R.I)) { v.textContent = A.t("vQuiet"); return; }
    var del = R.I - target, s;
    if (Math.abs(del) <= 1) s = A.t("vOn", { t: target });
    else if (del > 0) s = A.t("vOver", { d: A.fmt(del, 1), t: target });
    else s = A.t("vUnder", { d: A.fmt(-del, 1), t: target });
    var tp = R.TP > -0.1 ? A.t("tpOver", { tp: A.fmtSigned(R.TP, 1) }) : R.TP > -0.35 ? A.t("tpEdge", { tp: A.fmtSigned(R.TP, 1) }) : A.t("tpOk", { tp: A.fmtSigned(R.TP, 1) });
    v.textContent = s + " " + tp;
  }
  function timeline() {
    var cv = $("[data-timeline]"); if (!cv) return;
    var c = A.canvas(cv), ctx = c.ctx, W = c.W, H = c.H, mL = 34, mB = 20, mT = 8;
    ctx.clearRect(0, 0, W, H);
    var lo = -36, hi = 0;
    var Y = function (v) { return mT + (hi - Math.max(lo, Math.min(hi, v))) / (hi - lo) * (H - mT - mB); };
    var X = function (t) { return mL + t / (R.dur || 1) * (W - mL - 4); };
    ctx.font = "600 10px 'Hubot Sans', sans-serif"; ctx.fillStyle = A.COL.mid; ctx.textAlign = "right"; ctx.lineWidth = 1;
    for (var g = -36; g <= 0; g += 6) { var y = Math.round(Y(g)) + 0.5; ctx.strokeStyle = A.COL.grid; ctx.beginPath(); ctx.moveTo(mL, y); ctx.lineTo(W, y); ctx.stroke(); ctx.fillText(g, mL - 6, y + 3); }
    ctx.textAlign = "center";
    var step = R.dur > 600 ? 120 : R.dur > 240 ? 60 : 30;
    for (var s = 0; s <= R.dur; s += step) ctx.fillText(A.fmtTime(s), X(s), H - 6);
    if (R.mo && R.mo.length) {
      ctx.strokeStyle = "rgba(124,242,220,0.22)"; ctx.beginPath();
      for (var i = 0; i < R.mo.length; i++) { var xm = X(i * 0.1 + 0.2), ym = Y(R.mo[i]); if (i) ctx.lineTo(xm, ym); else ctx.moveTo(xm, ym); }
      ctx.stroke();
    }
    var yt = Math.round(Y(target)) + 0.5;
    ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(124,242,220,0.5)"; ctx.beginPath(); ctx.moveTo(mL, yt); ctx.lineTo(W, yt); ctx.stroke(); ctx.setLineDash([]);
    if (isFinite(R.I)) { var yi = Math.round(Y(R.I)) + 0.5; ctx.strokeStyle = "rgba(233,255,249,0.55)"; ctx.beginPath(); ctx.moveTo(mL, yi); ctx.lineTo(W, yi); ctx.stroke(); }
    ctx.strokeStyle = A.COL.vfd; ctx.lineWidth = 1.7; ctx.beginPath();
    for (var k = 0; k < R.tl.length; k++) { var x = X(R.tlT[k]), yy = Y(R.tl[k]); if (k) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
    ctx.stroke();
    ctx.textAlign = "left"; ctx.fillStyle = A.COL.mid;
    ctx.fillText(A.t("target") + " " + target, mL + 6, yt - 5);
    if (isFinite(R.I)) { ctx.fillStyle = "rgba(233,255,249,0.75)"; ctx.fillText(A.t("integrated") + " " + A.fmt(R.I, 1), mL + 6, Math.round(Y(R.I)) + 13); }
  }
  function wave() {
    var cv = $("[data-wave]"); if (!cv || !buf) return;
    var c = A.canvas(cv), ctx = c.ctx, W = c.W, H = c.H;
    ctx.clearRect(0, 0, W, H);
    var pk = window.APDSP.makePeaks(buf, Math.max(64, Math.floor(W / 2))), mid = H / 2;
    ctx.fillStyle = "rgba(124,242,220,0.75)";
    for (var i = 0; i < pk.length; i++) { var h = Math.max(1, pk[i] * (H / 2 - 4)); ctx.fillRect(i * 2, mid - h, 1.4, h * 2); }
    ctx.strokeStyle = A.COL.grid; ctx.beginPath(); ctx.moveTo(0, mid + 0.5); ctx.lineTo(W, mid + 0.5); ctx.stroke();
    if (isFinite(R.loudAt)) {
      var x = R.loudAt / R.dur * W; ctx.strokeStyle = "rgba(233,255,249,0.7)"; ctx.setLineDash([2, 3]);
      ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = "rgba(233,255,249,0.8)"; ctx.font = "600 10px 'Hubot Sans', sans-serif"; ctx.textAlign = x > W - 120 ? "right" : "left";
      ctx.fillText(A.t("loudest") + " " + A.fmtTime(R.loudAt), x + (x > W - 120 ? -6 : 6), 12);
    }
  }
  function platforms() {
    var tb = $("[data-platforms] tbody"); if (!tb) return;
    tb.innerHTML = A.PLATFORMS.map(function (p) {
      var g = A.platformGain(p, R.I, R.TP);
      var note = p.ref == null ? A.t("pClub") : g.limited ? A.t("pLimiter") : g.capped && g.gain === 0 && R.I < p.ref ? A.t("pNoUp") : g.capped ? A.t("pCapped") : "";
      return "<tr><td>" + p.name + "</td><td class=\"r\">" + (p.ref == null ? "—" : p.ref) + "</td><td class=\"r\">" + A.fmtSigned(g.gain, 1, "dB") + "</td><td class=\"r" + (g.peak > -0.1 ? " is-over" : "") + "\">" + A.fmtSigned(g.peak, 1) + "</td><td class=\"is-dim\">" + note + "</td></tr>";
    }).join("");
  }
  function checks() {
    var tb = $("[data-checks] tbody"); if (!tb) return;
    var rows = [];
    var plrText = !isFinite(R.PLR) ? "—" : R.PLR < 7 ? A.t("plrDense") : R.PLR < 10 ? A.t("plrLoud") : R.PLR < 14 ? A.t("plrBal") : A.t("plrDyn");
    rows.push([A.t("cClip"), R.clipEv > 0 ? A.t("cClipYes", { n: R.clipEv }) : A.t("none"), R.clipEv > 0]);
    rows.push([A.t("cTp"), R.TP > -0.1 ? A.t("cTpOver") : R.TP > -0.35 ? A.t("cTpEdge") : A.t("cTpOk"), R.TP > -0.1]);
    rows.push([A.t("cPlr"), A.fmt(R.PLR, 1) + " · " + plrText, false]);
    rows.push([A.t("cPhase"), R.corr < 0 ? A.t("cPhaseBad") : R.corr < 0.3 ? A.t("cPhaseWide") : A.t("cPhaseOk"), R.corr < 0]);
    rows.push([A.t("cMono"), R.dualMono ? A.t("cMonoYes") : A.t("no"), false]);
    rows.push([A.t("cDc"), R.dc > 1e-3 ? A.fmt(20 * Math.log10(R.dc), 0, "dB") : A.t("none"), R.dc > 1e-3]);
    rows.push([A.t("cFloor"), isFinite(R.floor) ? A.fmt(R.floor, 0, "LUFS") : "—", false]);
    rows.push([A.t("cLoud"), A.fmtTime(R.loudAt), false]);
    if (R.key) rows.push([A.t("cKey"), R.key.name.replace(/#/g, "♯") + " · " + R.key.cam + " · " + A.t("conf_" + R.key.conf), false]);
    tb.innerHTML = rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td class=\"" + (r[2] ? "is-over" : "") + "\">" + r[1] + "</td></tr>"; }).join("");
  }
  function compare() {
    var tb = $("[data-compare] tbody"), wrap = $("[data-compare]"); if (!tb || !REF) return;
    wrap.hidden = false;
    var row = function (lab, a, b, dg, unit) { var df = (isFinite(a) && isFinite(b)) ? a - b : NaN; return "<tr><td>" + lab + "</td><td class=\"r\">" + A.fmt(a, dg) + "</td><td class=\"r\">" + A.fmt(b, dg) + "</td><td class=\"r\">" + A.fmtSigned(df, dg, unit) + "</td></tr>"; };
    tb.innerHTML = row(A.t("integrated"), R.I, REF.I, 1, "LU") + row(A.t("stmax"), R.STmax, REF.STmax, 1, "LU") + row(A.t("tp"), R.TP, REF.TP, 1, "dB") + row("LRA", R.LRA, REF.LRA, 1, "LU") + row("PLR", R.PLR, REF.PLR, 1, "dB") + row(A.t("corr"), R.corr, REF.corr, 2, "");
    var cap = $("[data-compare-names]"); if (cap) cap.textContent = name + "  ·  " + refName;
  }
  function render() { Array.prototype.forEach.call(d.querySelectorAll("[data-results]"), function (el) { el.hidden = false; }); readouts(); verdict(); timeline(); wave(); platforms(); checks(); compare(); }

  function analyzeFile(file, asRef) {
    if (!A.isAudio(file)) { say(A.t("notAudio"), true); return; }
    root.setAttribute("data-state", "busy");
    say(A.t("decoding"));
    A.dsp().then(function (D) {
      return D.decode(file, function () {}).then(function (b) {
        if (!asRef) buf = b;
        return D.analyze(b, function (txt, p) { say(A.t("busy", { p: Math.round(p * 100) })); });
      });
    }).then(function (res) {
      root.removeAttribute("data-state");
      if (asRef) { REF = res; refName = file.name; compare(); say(A.t("refDone", { name: file.name })); }
      else { R = res; name = file.name; say(A.t("done", { name: file.name })); render(); }
    }).catch(function () { root.removeAttribute("data-state"); say(A.t("error"), true); });
  }

  A.dropzone(root.querySelector("[data-drop]"), function (f) { analyzeFile(f, false); });
  var refZone = d.querySelector("[data-drop-ref]");
  if (refZone) A.dropzone(refZone, function (f) { if (!R) { say(A.t("needMain"), true); return; } analyzeFile(f, true); });

  Array.prototype.forEach.call(d.querySelectorAll("[data-target]"), function (b) {
    b.addEventListener("click", function () {
      Array.prototype.forEach.call(d.querySelectorAll("[data-target]"), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      target = parseFloat(b.getAttribute("data-target"));
      var cust = $("[data-target-custom]"); if (cust) cust.value = target;
      if (R) { verdict(); timeline(); }
    });
  });
  var cust = $("[data-target-custom]");
  if (cust) cust.addEventListener("change", function () { var v = parseFloat(cust.value); if (isFinite(v) && v < 0 && v > -40) { target = v; Array.prototype.forEach.call(d.querySelectorAll("[data-target]"), function (x) { x.setAttribute("aria-pressed", "false"); }); if (R) { verdict(); timeline(); } } });

  var cp = $("[data-copy-report]");
  if (cp) cp.addEventListener("click", function () {
    if (!R) return;
    var L = [name, A.t("integrated") + ": " + A.fmt(R.I, 1, "LUFS"), A.t("stmax") + ": " + A.fmt(R.STmax, 1, "LUFS"), A.t("mmax") + ": " + A.fmt(R.Mmax, 1, "LUFS"),
      A.t("tp") + ": " + A.fmtSigned(R.TP, 1, "dBTP"), A.t("sp") + ": " + A.fmtSigned(R.SP, 1, "dBFS"), "LRA: " + A.fmt(R.LRA, 1, "LU"), "PLR: " + A.fmt(R.PLR, 1, "dB"),
      A.t("corr") + ": " + A.fmtSigned(R.corr, 2), A.t("tempo") + ": " + (R.bpm ? R.bpm.toFixed(1) + " BPM" : "—"), A.t("key") + ": " + (R.key ? R.key.name + " (" + R.key.cam + ")" : "—"),
      "", A.t("measuredWith") + " " + location.href.split("#")[0]];
    A.copy(L.join("\n"), A.t("reportCopied"));
  });
  var rt = null; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { if (R) { timeline(); wave(); } }, 150); });
})();
