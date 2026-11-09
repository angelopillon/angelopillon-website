---
slug: mixbus-kompression
group: compressione-bus-mix
title: "Mixbus-Kompression: Tutorial, um den Track zusammenzukleben"
h1: "Mixbus-Kompression, Schritt für Schritt"
seo_title: "Mixbus-Kompression: Tutorial Schritt für Schritt"
description: "So stellst du einen Kompressor auf dem Mixbus ein: Ratio, Attack, Release, Sidechain-Filter und wie viel Gain Reduction es braucht, um den Track zu verkleben, ohne ihn zu quetschen."
dek: "Ein Kompressor auf dem Mixbus mit 1 bis 2 dB Gain Reduction lässt einzelne Spuren wie einen Song klingen. Der Trick: früh einsetzen und sanft arbeiten lassen."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT20M
  tools: ["DAW", "Buskompressor im VCA-Stil", "Lautheitsmeter"]
order: 29
---

<div class="howto-meta"><span><b>Zeit</b>20 Minuten</span><span><b>Niveau</b>Mittel</span><span><b>Du brauchst</b>Einen Buskompressor und ein Lautheitsmeter</span></div>

Mixbus-Kompression ist nicht für Lautheit da: Das ist Aufgabe des Masterings. Sie sorgt dafür, dass sich die Spuren gemeinsam bewegen, als würden sie im selben Raum spielen. In meinem Studio läuft der Bus durch einen VCA-Kompressor im SSL-Stil; in der DAW funktioniert jeder gut gebaute Buskompressor.

## Das Vorgehen

<ol class="steps-list">
<li><div><h3>Früh einsetzen, nicht am Ende</h3><p>Setz den Kompressor ein, sobald die grobe Balance steht. Wenn du ihn auf einen fertigen Mix legst, verschiebt er alle Balancen, die du gebaut hast, und du machst die halbe Arbeit noch einmal.</p></div></li>
<li><div><h3>Niedrige Ratio</h3><p>Starte mit 2:1. Bei 4:1 ist die Kompression hörbarer und in aggressiver Musik nützlich, aber zum Verkleben reicht 2:1 fast immer.</p></div></li>
<li><div><h3>Langsamer Attack für die Transienten</h3><p>Zwischen 10 und 30 ms. Bei zu schnellem Attack verlieren Kick und Snare ihren Punch, und der Mix wird flach.</p></div></li>
<li><div><h3>Release im Tempo oder automatisch</h3><p>Zwischen 100 und 300 ms oder Auto. Die Nadel soll zwischen den Schlägen im Takt des Songs auf null zurückgehen: Bleibt sie ständig unten, ist der Release zu lang.</p></div></li>
<li><div><h3>Sidechain filtern</h3><p>Wenn der Kompressor es erlaubt, setz im Sidechain einen Hochpass bei 80 bis 100 Hz. Dann steuert der Bass nicht die ganze Kompression, und der Mix pumpt nicht bei jeder Kick.</p></div></li>
<li><div><h3>Threshold für 1 bis 2 dB Gain Reduction</h3><p>Senke den Threshold, bis sich die Nadel in den lautesten Passagen um 1 bis 2 dB bewegt. Dichte elektronische Musik verträgt 3 dB, selten mehr.</p></div></li>
<li><div><h3>Bei gleicher Lautheit vergleichen</h3><p>Gleiche den Ausgangspegel an und schalte auf Bypass. Ohne Kompressor soll der Mix etwas lockerer wirken, nicht lauter. Klingt er im Bypass besser, nimm Gain Reduction weg.</p></div></li>
</ol>

## Startwerte

| Parameter | Wert |
|---|---|
| Ratio | 2:1, bis 4:1 bei aggressiver Musik |
| Attack | 10 bis 30 ms |
| Release | 100 bis 300 ms oder Auto |
| Sidechain-Filter | Hochpass bei 80 bis 100 Hz |
| Gain Reduction | 1 bis 2 dB, höchstens 3 |

<blockquote class="pull">Ein Buskompressor soll sich mit dem Song bewegen, nicht gegen ihn. Steht er ständig bei −4 dB, macht er den Mix nur leiser.</blockquote>

## Mischen fürs Mastering

Geht der Track zu einem Mastering-Engineer, lass den Buskompressor nur drin, wenn er Teil des gewünschten Sounds ist. Was nicht bleiben sollte, ist ein Limiter, der den Mix auf 0 dBFS drückt: Er nimmt dem Mastering den Spielraum. Die vollständige Liste findest du unter [Fehler im Premaster](/de/artikel/fehler-im-premaster).

<div class="callout"><p><strong>Klingt dein Mix wie einzelne Spuren?</strong> Mix und Master ab $110, mit dem Bus durch die analoge Kette.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
