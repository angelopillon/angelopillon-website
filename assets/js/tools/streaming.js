/* Streaming loudness preview: how each platform plays back a master */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("streaming");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var iIn = $("[data-i]"), tpIn = $("[data-tp]"), state = root.querySelector("[data-state-text]");
  function say(s, err) { if (state) { state.lastChild.textContent = " " + s; state.classList.toggle("is-err", !!err); } }
  function render() {
    var I = parseFloat(iIn.value), TP = parseFloat(tpIn.value);
    if (!isFinite(I) || !isFinite(TP)) return;
    var tb = $("[data-rows]");
    tb.innerHTML = A.PLATFORMS.map(function (p) {
      var g = A.platformGain(p, I, TP), note;
      if (p.ref == null) note = A.t("pClub");
      else if (g.limited) note = A.t("pLimiter");
      else if (g.gain === 0 && I < p.ref && g.capped) note = A.t("pNoUp");
      else if (g.capped) note = A.t("pCapped");
      else if (g.gain < 0) note = A.t("pDown");
      else note = A.t("pOn");
      return "<tr><td>" + p.name + "</td><td class=\"r\">" + (p.ref == null ? "—" : p.ref + " LUFS") + "</td><td class=\"r\">" + A.fmtSigned(g.gain, 1, "dB") + "</td><td class=\"r\">" + A.fmt(g.out, 1, "LUFS") + "</td><td class=\"r" + (g.peak > -0.1 ? " is-over" : "") + "\">" + A.fmtSigned(g.peak, 1, "dBTP") + "</td><td class=\"is-dim\">" + note + "</td></tr>";
    }).join("");
    var sp = A.platformGain(A.PLATFORMS[0], I, TP);
    var sum = $("[data-summary]");
    if (sum) sum.textContent = sp.gain < -0.5 ? A.t("sDown", { g: A.fmt(-sp.gain, 1) }) : sp.gain > 0.5 ? A.t("sUp", { g: A.fmt(sp.gain, 1) }) : A.t("sOn");
    var tpNote = $("[data-tpnote]");
    if (tpNote) tpNote.textContent = TP > -0.1 ? A.t("tpOver") : TP > -0.35 ? A.t("tpEdge") : TP < -1.5 ? A.t("tpLow") : A.t("tpOk");
    try { history.replaceState(null, "", "?i=" + I + "&tp=" + TP); } catch (e) {}
  }
  [iIn, tpIn].forEach(function (x) { x.addEventListener("input", render); });
  var p = new URLSearchParams(location.search);
  if (p.get("i")) iIn.value = p.get("i"); if (p.get("tp")) tpIn.value = p.get("tp");
  var zone = root.querySelector("[data-drop]");
  if (zone) A.dropzone(zone, function (file) {
    if (!A.isAudio(file)) { say(A.t("notAudio"), true); return; }
    say(A.t("decoding"));
    A.dsp().then(function (D) { return D.decode(file, function () {}).then(function (b) { return D.quick(b, function (ph, q) { say(A.t("busy", { p: Math.round(q * 100) })); }); }); })
      .then(function (m) { iIn.value = m.I.toFixed(1); tpIn.value = m.TP.toFixed(1); say(A.t("done", { name: file.name })); render(); })
      .catch(function () { say(A.t("error"), true); });
  });
  render();
})();
