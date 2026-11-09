---
slug: gain-staging-im-daw
group: gain-staging-daw
title: "Gain Staging in der DAW: Schritt-für-Schritt-Tutorial für einen sauberen Mix"
h1: "Gain Staging in der DAW, Schritt für Schritt"
seo_title: "Gain Staging in der DAW: Tutorial Schritt für Schritt"
description: "So stellst du die Pegel in der DAW von der Aufnahme bis zum Master-Bus ein: Clip Gain, auf −18 dBFS kalibrierte Plugins, Headroom fürs Mastering. Tutorial mit praktischen Werten."
dek: "Eine DAW mit 32 Bit Float clippt intern nicht, aber Plugins und deine Ohren reagieren auf den Pegel. Hier ist meine Methode in acht Schritten."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Peak-Meter", "VU- oder RMS-Meter", "LUFS-Meter"]
order: 2
---

<div class="howto-meta"><span><b>Zeit</b>30 Minuten pro Session</span><span><b>Niveau</b>Einsteiger</span><span><b>Du brauchst</b>Deine DAW, ein Peak-Meter und ein VU- oder RMS-Meter</span></div>

Gain Staging heißt, den Pegel an jeder Stelle der Kette zu kontrollieren: von der Aufnahme zum ersten Plugin, von einem Plugin zum nächsten, von den Kanälen über die Busse bis zum Master. Das Ziel ist einfach. Jeder Prozessor soll in dem Bereich arbeiten, für den er gebaut wurde, die Fader sollen in einer bequemen Position stehen und der Mix soll mit Headroom ins Mastering gehen.

Wenn ich eine Session mit ordentlichen Pegeln bekomme, startet der Mix schneller und klingt besser. Wenn ich Spuren bekomme, die die Plugins 15 dB heißer treffen als vorgesehen, verbringe ich die erste Stunde damit herauszufinden, welche Verzerrung gewollt ist und welche nicht.

## Warum es auch mit 32 Bit Float noch zählt

Die Mix-Engine einer modernen DAW rechnet mit Gleitkomma: Ein Kanal kann über 0 dBFS gehen, ohne intern zu clippen. Das stimmt, erledigt das Thema aber nicht, aus vier Gründen.

- **Plugins, die Hardware emulieren, reagieren auf den Pegel.** Kompressoren, Sättiger und EQs nach analogem Vorbild sind auf einen Referenzpegel kalibriert, oft 0 VU = −18 dBFS. Triffst du sie 12 dB heißer, bekommst du Kompression und Verzerrung, die du nicht gewählt hast.
- **Manche Plugins clippen trotzdem.** Nicht alle rechnen intern mit Gleitkomma, und viele Limiter und Clipper haben eine feste Obergrenze.
- **Die finale Datei clippt.** Ein WAV mit 24 Bit endet bei 0 dBFS: Alles darüber wird beim Export abgeschnitten.
- **Lautstärke täuscht das Ohr.** Lauter wirkt immer besser. Hebt ein Plugin den Pegel um 3 dB an, scheint es den Klang zu verbessern, auch wenn es ihn verschlechtert.

## Die Methode in acht Schritten

<ol class="steps-list">
<li><div><h3>Session einrichten und mit Headroom aufnehmen</h3><p>Arbeite mit 24 Bit oder 32 Bit Float in der Samplerate des Projekts, ohne Limiter auf dem Master. Bei der Aufnahme peilst du Peaks zwischen −12 und −6 dBFS und einen mittleren Pegel um −18 dBFS an. Bei 24 Bit ist das Rauschen des Wandlers viel geringer als das von Mikrofon und Raum: „Heiß“ aufzunehmen verbessert nichts und riskiert Clipping.</p></div></li>
<li><div><h3>Jede Quelle mit Clip Gain auf einen ähnlichen Pegel bringen</h3><p>Bevor du ein Plugin einsetzt, bringst du jede Audiospur mit Clip Gain (oder Region Gain) auf einen mittleren Pegel von etwa −18 dBFS RMS, mit den Fadern auf 0. Drum-Samples kommen oft mit Peaks bei 0 dBFS: Senk sie hier ab, nicht mit dem Fader.</p></div></li>
<li><div><h3>Einen Trim an den Anfang virtueller Instrumente setzen</h3><p>Synths und Sampler haben kein Clip Gain. Senk die Ausgangslautstärke des Instruments oder setz als erstes Plugin ein Gain-Utility ein, und bring auch diese Spuren auf etwa −18 dBFS im Mittel. Viele Presets sind dafür gemacht, im Laden zu beeindrucken, nicht dafür, in einem Mix zu sitzen.</p></div></li>
<li><div><h3>Die Kalibrierung analog modellierter Plugins respektieren</h3><p>Schau im Handbuch nach, welchem Pegel 0 VU entspricht: meistens −18 dBFS, manchmal −20 oder −14. Setz ein VU-Meter vor das Plugin und stell den Eingang so ein, dass die Nadel in den lautesten Stellen um 0 VU pendelt. Wenn du mehr Sättigung willst, fahr den Eingang höher und wisse, was du tust.</p></div></li>
<li><div><h3>Ein- und Ausgang jedes Plugins angleichen</h3><p>Stell nach jedem Prozessor den Ausgang so ein, dass der wahrgenommene Pegel mit aktivem und umgangenem Plugin gleich ist. Viele Plugins haben eine Auto-Gain- oder Gain-Match-Funktion: Nutz sie. Nur dann sagt dir der Bypass, ob der Prozessor den Klang verbessert oder ihn nur lauter macht.</p></div></li>
<li><div><h3>Mit den Fadern ausbalancieren, ausgehend von einem Leitelement</h3><p>Wähl das Element, das den Track trägt (in der Elektronik oft die Kick, in Pop und Rap die Stimme), und setz es auf etwa −18 dBFS im Mittel. Bau alles andere darum herum. Landet ein Fader unter −20 dB, geh zurück zum Clip Gain: In diesem Bereich ist der Faderweg zu empfindlich für feine Korrekturen.</p></div></li>
<li><div><h3>Busse und Master prüfen</h3><p>Kein Bus darf clippen, vor allem nicht mit Plugins mit fester Obergrenze. Auf dem Master sollten die Peaks des Mixes vor jedem Prozessor bei etwa −6 dBFS liegen. Bist du zu heiß, senk alle Kanäle gemeinsam ab (mit einem VCA oder indem du alle auswählst), nicht den Master-Fader: In Ableton, Logic und FL Studio liegen die Inserts des Masters vor dem Fader, also ändert das Absenken des Masters nicht den Pegel, der in die Plugins geht. Pro Tools ist die Ausnahme: Beim Master Fader liegen die Inserts nach dem Fader.</p></div></li>
<li><div><h3>Fürs Mastering exportieren und prüfen</h3><p>Nimm Limiter und Maximizer vom Master und exportiere ein WAV mit 24 Bit oder 32 Bit Float in der Samplerate des Projekts, ohne Normalisierung. Peaks zwischen −6 und −3 dBFS sind bequem, aber was wirklich zählt, ist, dass nichts clippt. Zieh die Datei in den <a href="/loudness-meter">LUFS-Meter</a>, um Peaks und True Peak zu prüfen.</p></div></li>
</ol>

## Die Fehler, die ich am häufigsten sehe

**Der Limiter auf dem Master, „um zu hören, wie es klingen wird“.** Das ist verständlich, aber wenn die Balance vom Limiter abhängt, ändert sich der Mix, sobald du ihn entfernst. Wenn du darauf hin mischen willst, ist das in Ordnung: Schick mir zwei Versionen, mit und ohne.

**Den Master-Fader absenken, um Clipping zu vermeiden.** In den meisten DAWs senkt das den Ausgang, aber nicht den Pegel, der an den Inserts ankommt: Der Kompressor auf dem Mix-Bus arbeitet weiter zu viel.

**Plugins bei unterschiedlicher Lautstärke vergleichen.** Das ist der Grund, warum so viele Mixe mit zu viel Höhen und zu viel Kompression enden: Jede Entscheidung schien besser, weil sie ein bisschen lauter war.

**Normalisieren beim Export.** Das hebt die Datei bis 0 dBFS an und nimmt dir den Headroom, den du dir gelassen hast. Lass es bei Dateien für Mix oder Mastering immer ausgeschaltet.

<blockquote class="pull">Gain Staging ist keine Pegelregel. Es sorgt dafür, dass jedes Plugin so arbeitet, wie es gebaut wurde, und dass du mit den Ohren urteilst, nicht mit der Lautstärke.</blockquote>

## Und bei rein digitalen Plugins?

Ein sauberer digitaler EQ oder ein Kompressor ohne analoge Modellierung ändert seinen Charakter nicht mit dem Eingangspegel: Dort dient Gain Staging vor allem dazu, die Fader bequem zu halten und bei gleicher Lautstärke zu vergleichen. Die Methode bleibt gleich, nur wie streng du mit den Eingangspegeln bist, ändert sich.

Wenn der Mix fertig ist, bereite die Spuren oder das Premaster nach [dem Tutorial zum Export für Mixing und Mastering](/de/artikel/spuren-exportieren-fuer-mixing-und-mastering) vor und wirf einen Blick auf die [häufigsten Fehler im Premaster](/de/artikel/fehler-im-premaster).

<div class="callout"><p><strong>Soll ich die Pegel für dich ordnen?</strong> Mix und Master ab $110: Du schickst mir die Spuren, ich schicke dir einen Master, der für jede Plattform bereit ist.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
