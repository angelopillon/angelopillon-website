/* Camelot wheel: compatible keys for harmonic mixing */
(function () {
  "use strict";
  var A = window.APT, d = document, root = d.getElementById("camelot");
  if (!root || !A) return;
  var $ = function (s) { return d.querySelector(s); };
  var svg = $("[data-wheel]"), NS = "http://www.w3.org/2000/svg";
  /* code -> pitch class */
  var CODE = {};
  Object.keys(A.CAM_MAJ).forEach(function (pc) { CODE[A.CAM_MAJ[pc]] = { pc: +pc, minor: false }; });
  Object.keys(A.CAM_MIN).forEach(function (pc) { CODE[A.CAM_MIN[pc]] = { pc: +pc, minor: true }; });
  function keyName(code) { var k = CODE[code], n = A.KEYS[k.pc]; n = A.FLAT[n] ? A.FLAT[n] : n; return n + (k.minor ? "m" : ""); }
  function longName(code) { var k = CODE[code], n = A.KEYS[k.pc]; n = A.FLAT[n] ? n.replace("#", "♯") + "/" + A.FLAT[n] : n; return n + " " + (k.minor ? A.t("minor") : A.t("major")); }
  function wrap(n) { return ((n - 1 + 12) % 12) + 1; }
  function rel(code) {
    var n = parseInt(code, 10), L = code.slice(-1), O = L === "A" ? "B" : "A";
    return [
      { c: n + L, kind: "same" },
      { c: wrap(n - 1) + L, kind: "adj" }, { c: wrap(n + 1) + L, kind: "adj" },
      { c: n + O, kind: "rel" },
      { c: wrap(n + 2) + L, kind: "boost" },
      { c: wrap(n + 7) + L, kind: "semi" }
    ];
  }
  function arc(cx, cy, r0, r1, a0, a1) {
    var p = function (r, a) { return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    var A0 = p(r1, a0), A1 = p(r1, a1), B1 = p(r0, a1), B0 = p(r0, a0);
    return "M" + A0 + "A" + r1 + "," + r1 + " 0 0 1 " + A1 + "L" + B1 + "A" + r0 + "," + r0 + " 0 0 0 " + B0 + "Z";
  }
  var segs = {};
  function build() {
    var cx = 260, cy = 260;
    for (var n = 1; n <= 12; n++) {
      var a0 = (n - 1) / 12 * Math.PI * 2 - Math.PI / 2 - Math.PI / 12, a1 = a0 + Math.PI * 2 / 12;
      [["B", 170, 250], ["A", 92, 168]].forEach(function (ring) {
        var code = n + ring[0], path = d.createElementNS(NS, "path");
        path.setAttribute("d", arc(cx, cy, ring[1], ring[2], a0 + 0.006, a1 - 0.006));
        path.setAttribute("tabindex", "0"); path.setAttribute("role", "button"); path.setAttribute("aria-label", code + " " + longName(code));
        path.addEventListener("click", function () { select(code); });
        path.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(code); } });
        svg.appendChild(path); segs[code] = path;
        var am = (a0 + a1) / 2, rm = (ring[1] + ring[2]) / 2;
        var t1 = d.createElementNS(NS, "text"); t1.setAttribute("x", cx + rm * Math.cos(am)); t1.setAttribute("y", cy + rm * Math.sin(am) - 4); t1.setAttribute("text-anchor", "middle"); t1.setAttribute("font-size", "15"); t1.textContent = code; t1.setAttribute("data-code", code);
        var t2 = d.createElementNS(NS, "text"); t2.setAttribute("x", cx + rm * Math.cos(am)); t2.setAttribute("y", cy + rm * Math.sin(am) + 13); t2.setAttribute("text-anchor", "middle"); t2.setAttribute("font-size", "11"); t2.textContent = keyName(code); t2.setAttribute("data-code", code);
        svg.appendChild(t1); svg.appendChild(t2);
      });
    }
    var hub = d.createElementNS(NS, "text"); hub.setAttribute("x", cx); hub.setAttribute("y", cy + 6); hub.setAttribute("text-anchor", "middle"); hub.setAttribute("font-size", "22"); hub.setAttribute("data-hub", "1"); svg.appendChild(hub);
  }
  var FILL = { same: "#7CF2DC", adj: "rgba(124,242,220,0.55)", rel: "rgba(124,242,220,0.55)", boost: "rgba(124,242,220,0.28)", semi: "rgba(124,242,220,0.2)" };
  function select(code) {
    var map = {}; rel(code).forEach(function (r) { if (!map[r.c]) map[r.c] = r.kind; });
    Object.keys(segs).forEach(function (c) { segs[c].setAttribute("fill", map[c] ? FILL[map[c]] : "rgba(124,242,220,0.05)"); segs[c].setAttribute("stroke", "rgba(124,242,220,0.18)"); });
    Array.prototype.forEach.call(svg.querySelectorAll("text[data-code]"), function (t) { var k = map[t.getAttribute("data-code")]; t.setAttribute("fill", k === "same" || k === "adj" || k === "rel" ? "#0C1210" : "rgba(124,242,220,0.85)"); });
    svg.querySelector("[data-hub]").setAttribute("fill", "#7CF2DC"); svg.querySelector("[data-hub]").textContent = code;
    var sel = $("[data-key]"); if (sel) sel.value = code;
    $("[data-list]").innerHTML = rel(code).map(function (r) { return "<tr" + (r.kind === "same" ? " class=\"is-hi\"" : "") + "><td>" + r.c + "</td><td>" + longName(r.c) + "</td><td class=\"is-dim\">" + A.t("k_" + r.kind) + "</td></tr>"; }).join("");
    try { history.replaceState(null, "", "?key=" + code); } catch (e) {}
  }
  build();
  var keySel = $("[data-key]");
  var codes = []; for (var n = 1; n <= 12; n++) { codes.push(n + "A"); codes.push(n + "B"); }
  keySel.innerHTML = codes.map(function (c) { return "<option value=\"" + c + "\">" + c + " · " + longName(c) + "</option>"; }).join("");
  keySel.addEventListener("change", function () { select(keySel.value); });
  var q = new URLSearchParams(location.search).get("key");
  select(q && CODE[q.toUpperCase()] ? q.toUpperCase() : "8A");
})();
