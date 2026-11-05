/* Kick and 808 tuning: notes to frequencies in the low register, converter, reference tones */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("tuning");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var MAJ = [0, 2, 4, 5, 7, 9, 11], MIN = [0, 2, 3, 5, 7, 8, 10];
  var ctx = null, osc = null, gn = null;
  function ref() { var v = parseFloat($("[data-a4]").value); return isFinite(v) && v > 400 && v < 480 ? v : 440; }
  function freq(midi) { return ref() * Math.pow(2, (midi - 69) / 12); }
  function nm(pc) { var n = A.KEYS[pc]; return A.FLAT[n] ? n.replace("#", "♯") + "/" + A.FLAT[n] : n; }
  /* spell notes the way the key signature does: flats in F, B♭, E♭, A♭, D♭, G♭ major and D, G, C, F, B♭, E♭ minor */
  var FLAT_MAJ = [5, 10, 3, 8, 1, 6], FLAT_MIN = [2, 7, 0, 5, 10, 3];
  function spell(pc, flats) { var n = A.KEYS[pc]; return A.FLAT[n] ? (flats ? A.FLAT[n] : n.replace("#", "♯")) : n; }
  function render() {
    var root_ = parseInt($("[data-root]").value, 10), minor = $("[data-mode]").value === "minor";
    var scale = (minor ? MIN : MAJ).map(function (s) { return (root_ + s) % 12; });
    var cam = minor ? A.CAM_MIN[root_] : A.CAM_MAJ[root_], flats = (minor ? FLAT_MIN : FLAT_MAJ).indexOf(root_) >= 0;
    $("[data-key-name]").textContent = spell(root_, flats) + (minor ? " " + A.t("minor") : " " + A.t("major")) + " · " + cam;
    var rows = [];
    for (var m = 21; m <= 47; m++) {
      var pc = m % 12; if (scale.indexOf(pc) < 0) continue;
      var f = freq(m); if (f < 25 || f > 130) continue;
      var deg = scale.indexOf(pc), role = deg === 0 ? A.t("root") : deg === 4 ? A.t("fifth") : deg === 2 ? A.t("third") : "";
      rows.push("<tr class=\"" + (deg === 0 ? "is-hi" : "") + "\"><td>" + spell(pc, flats) + (Math.floor(m / 12) - 1) + "</td><td class=\"r\">" + f.toFixed(1) + " Hz</td><td class=\"is-dim\">" + role + "</td><td class=\"r\"><button class=\"btn btn--glass btn--small\" type=\"button\" data-tone=\"" + f.toFixed(3) + "\">" + A.t("play") + "</button></td></tr>");
    }
    $("[data-notes]").innerHTML = rows.join("");
  }
  function tone(f) {
    var AC = window.AudioContext || window.webkitAudioContext; if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") ctx.resume();
    if (osc) { try { osc.stop(); } catch (e) {} }
    var vol = parseFloat($("[data-vol]").value) || 0.3, t = ctx.currentTime;
    osc = ctx.createOscillator(); gn = ctx.createGain(); osc.type = "sine"; osc.frequency.value = f;
    gn.gain.setValueAtTime(0, t); gn.gain.linearRampToValueAtTime(vol, t + 0.02); gn.gain.setTargetAtTime(0, t + 1.4, 0.12);
    osc.connect(gn); gn.connect(ctx.destination); osc.start(t); osc.stop(t + 2.2);
  }
  root.addEventListener("click", function (e) { var b = e.target.closest("[data-tone]"); if (b) tone(parseFloat(b.getAttribute("data-tone"))); });
  function conv() {
    var f = parseFloat($("[data-hz]").value), out = $("[data-hz-out]");
    if (!isFinite(f) || f <= 0) { out.textContent = "—"; return; }
    var midi = 69 + 12 * Math.log2(f / ref()), near = Math.round(midi), cents = Math.round((midi - near) * 100);
    out.textContent = nm(((near % 12) + 12) % 12) + (Math.floor(near / 12) - 1) + "  " + (cents === 0 ? A.t("inTune") : (cents > 0 ? "+" : "−") + Math.abs(cents) + " " + A.t("cents"));
  }
  ["[data-root]", "[data-mode]", "[data-a4]"].forEach(function (s) { $(s).addEventListener("input", function () { render(); conv(); }); });
  $("[data-hz]").addEventListener("input", conv);
  Array.prototype.forEach.call(d.querySelectorAll("[data-a4-set]"), function (b) { b.addEventListener("click", function () { $("[data-a4]").value = b.getAttribute("data-a4-set"); render(); conv(); }); });
  render(); conv();
})();
