---
slug: limiter-im-mastering
group: limiter-mastering
title: "Der Limiter im Mastering: Tutorial für Lautheit ohne Verzerrung"
h1: "Den Mastering-Limiter einstellen, Schritt für Schritt"
seo_title: "Limiter im Mastering: Einstellungen Schritt für Schritt"
description: "So stellst du den Mastering-Limiter ein: True-Peak-Ceiling bei −0,3/−0,2 dBTP, Oversampling, Attack und Release, wie viel Gain Reduction vertretbar ist und wie du das Ergebnis prüfst."
dek: "Der Limiter ist das letzte Glied der Kette und entscheidet, ob ein Master laut und sauber oder laut und anstrengend klingt. Die Einstellungen zählen weniger als die Arbeit, die du ihm aufbürdest."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT20M
  tools: ["DAW", "True-Peak-Limiter mit Oversampling", "LUFS- und True-Peak-Meter"]
order: 31
---

<div class="howto-meta"><span><b>Zeit</b>20 Minuten</span><span><b>Niveau</b>Mittel</span><span><b>Du brauchst</b>Einen True-Peak-Limiter und ein Lautheitsmeter</span></div>

Ein Limiter macht nur eins: Er verhindert, dass das Signal eine Obergrenze überschreitet. Der Haken: Er tut das, indem er Spitzen absenkt, und wenn es viele laute Spitzen gibt, fängt er an, die Musik zu quetschen. Ein guter lauter Master entsteht vor dem Limiter: ein ausgewogener Mix, in dem Kompression und Sättigung die spitzesten Peaks schon geglättet haben.

## Das Vorgehen

<ol class="steps-list">
<li><div><h3>Ceiling auf −0,3/−0,2 dBTP</h3><p>Mit einem True-Peak-Limiter mit Oversampling hält ein Ceiling von −0,3 oder −0,2 dBTP die Datei nach der Codierung frei von Verzerrung, ohne Lautheit zu verschenken. Warum, erkläre ich im Artikel über <a href="/de/artikel/true-peak-minus-1-dbtp">True Peak</a>.</p></div></li>
<li><div><h3>Oversampling und True Peak aktivieren</h3><p>Ohne Oversampling überwacht der Limiter nur die Samples, und Spitzen zwischen den Samples rutschen durch. 4x ist ein guter Startpunkt.</p></div></li>
<li><div><h3>Attack und Lookahead</h3><p>Ein Lookahead zwischen 1 und 5 ms lässt den Limiter sich auf die Spitze vorbereiten. Kürzer erhält Transienten, länger ist im Bass sauberer.</p></div></li>
<li><div><h3>Release</h3><p>Starte mit Auto-Release. Zu kurz verzerrt den Bass, zu lang lässt den Track nach jeder Kick pumpen.</p></div></li>
<li><div><h3>Gain in kleinen Schritten anheben</h3><p>Beobachte die Gain Reduction in den lautesten Passagen. Bis 2 oder 3 dB ist es fast immer transparent; ab 4 oder 5 dB hörst du, wie die Kick ihren Punch verliert und der Mix zugeht. Brauchst du mehr, arbeite vor dem Limiter.</p></div></li>
<li><div><h3>Lautheit messen</h3><p>Prüfe integrierte und Short-Term-LUFS sowie True Peak über den ganzen Track. Das <a href="/loudness-meter">LUFS-Meter</a> der Website macht das im Browser.</p></div></li>
<li><div><h3>Bei gleicher Lautheit vergleichen</h3><p>Senke den Ausgang des Masters auf die Lautheit des Original-Mixes und vergleiche. Klingt der Master bei gleichem Pegel kleiner als der Mix, arbeitet der Limiter zu viel.</p></div></li>
</ol>

## Startwerte

| Parameter | Wert |
|---|---|
| Ceiling | −0,3 / −0,2 dBTP |
| Oversampling | 4x oder mehr |
| Lookahead | 1 bis 5 ms |
| Release | Auto, dann nach Gehör |
| Gain Reduction auf den Spitzen | 2 bis 3 dB, selten über 4 |

<blockquote class="pull">Der Limiter macht keine Lautheit. Er schützt sie. Lautheit entsteht vorher, im Mix und in der Mastering-Kette.</blockquote>

## Zwei Limiter in Serie

Bei sehr lauten Tracks nutze ich manchmal zwei Stufen: einen Clipper oder sanften Limiter, der 1 bis 2 dB von den schnellsten Spitzen nimmt, dann den finalen Limiter. Jede Stufe arbeitet wenig, und das Ergebnis ist sauberer als ein Limiter mit 5 dB.

<div class="callout"><p><strong>Lauter, aber anstrengender Master?</strong> Analoges Mastering bringt den Pegel dahin, wo er hingehört, ohne den Track zu quetschen. Ab $60.</p><a class="cta" href="/de/#contact">Mastering anfragen</a></div>
