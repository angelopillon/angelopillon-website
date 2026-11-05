/* Delay and reverb calculator with tap tempo */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("delay");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var bpmIn = $("[data-bpm]"), taps = [], tapBtn = $("[data-tap]");
  var NOTES = [["1/1", 4], ["1/2", 2], ["1/4", 1], ["1/8", 0.5], ["1/16", 0.25], ["1/32", 0.125], ["1/64", 0.0625]];
  function ms(v) { return v >= 1000 ? (v / 1000).toFixed(2) + " s" : v.toFixed(v < 100 ? 1 : 0) + " ms"; }
  function cell(v) { return "<button type=\"button\" class=\"copy\" data-v=\"" + v.toFixed(2) + "\">" + ms(v) + "</button>"; }
  function render() {
    var bpm = parseFloat(bpmIn.value);
    if (!isFinite(bpm) || bpm < 20 || bpm > 400) return;
    var beat = 60000 / bpm;
    $("[data-tbody]").innerHTML = NOTES.map(function (n) {
      var v = beat * n[1];
      return "<tr><td>" + n[0] + "</td><td class=\"r\">" + cell(v) + "</td><td class=\"r\">" + cell(v * 1.5) + "</td><td class=\"r\">" + cell(v * 2 / 3) + "</td><td class=\"r is-dim\">" + (1000 / v).toFixed(2) + " Hz</td></tr>";
    }).join("");
    var bar = beat * 4;
    var rows = [[A.t("rvTight"), beat * 0.0625, beat], [A.t("rvSmall"), beat * 0.125, beat * 2], [A.t("rvMedium"), beat * 0.25, bar], [A.t("rvLarge"), beat * 0.25, bar * 2]];
    $("[data-reverb]").innerHTML = rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td class=\"r\">" + cell(r[1]) + "</td><td class=\"r\">" + cell(r[2] - r[1]) + "</td><td class=\"r is-dim\">" + ms(r[2]) + "</td></tr>"; }).join("");
    $("[data-dyn]").innerHTML = [[A.t("dynComp"), beat * 0.25, beat * 0.5], [A.t("dynSide"), beat * 0.5, beat], [A.t("dynGate"), beat * 0.125, beat * 0.25]]
      .map(function (r) { return "<tr><td>" + r[0] + "</td><td class=\"r\">" + cell(r[1]) + "</td><td class=\"r\">" + cell(r[2]) + "</td></tr>"; }).join("");
    var big = $("[data-bpm-read]"); if (big) big.textContent = bpm.toFixed(bpm % 1 ? 1 : 0);
    try { history.replaceState(null, "", "?bpm=" + bpm); } catch (e) {}
  }
  root.addEventListener("click", function (e) { var b = e.target.closest("button.copy"); if (b) A.copy(b.getAttribute("data-v"), A.t("copiedMs", { v: b.textContent })); });
  bpmIn.addEventListener("input", render);
  $("[data-half]").addEventListener("click", function () { bpmIn.value = (parseFloat(bpmIn.value) / 2).toFixed(1).replace(/\.0$/, ""); render(); });
  $("[data-double]").addEventListener("click", function () { bpmIn.value = (parseFloat(bpmIn.value) * 2).toFixed(1).replace(/\.0$/, ""); render(); });
  function tap() {
    var now = performance.now();
    if (taps.length && now - taps[taps.length - 1] > 2000) taps = [];
    taps.push(now); if (taps.length > 9) taps.shift();
    tapBtn.classList.add("is-hit"); setTimeout(function () { tapBtn.classList.remove("is-hit"); }, 90);
    if (taps.length >= 2) {
      var sum = 0; for (var i = 1; i < taps.length; i++) sum += taps[i] - taps[i - 1];
      var bpm = 60000 / (sum / (taps.length - 1));
      bpmIn.value = bpm.toFixed(1).replace(/\.0$/, ""); render();
      $("[data-tap-n]").textContent = A.t("taps", { n: taps.length });
    } else $("[data-tap-n]").textContent = A.t("tapMore");
  }
  tapBtn.addEventListener("click", tap);
  d.addEventListener("keydown", function (e) { if (e.code === "Space" && !/input|select|textarea/i.test(e.target.tagName)) { e.preventDefault(); tap(); } });
  var q = new URLSearchParams(location.search).get("bpm"); if (q && isFinite(parseFloat(q))) bpmIn.value = q;
  render();
})();
