---
slug: true-peak-minus-1-dbtp
group: true-peak-1-dbtp
title: "True Peak: warum −1 dBTP keine Regel ist und was ich stattdessen prüfe"
seo_title: "True Peak: warum −1 dBTP keine Regel ist"
description: "Was True Peak ist, woher der Rat zu −1 dBTP kommt, warum ich mit einem True-Peak-Limiter bei −0,3/−0,2 dBTP liefere und wie du die Datei nach der Codierung prüfst."
dek: "Die Reserve von −1 dB soll den Track vor verlustbehafteter Codierung schützen. Ein vorsichtiger Rat, kein Gesetz: Mit dem richtigen Limiter und einer Prüfung nach der Codierung verschenkt sie oft nur Lautheit und Punch."
date: 2026-11-05
category: loudness
order: 5
---

<div class="tldr"><span class="box__title">Kurz gesagt</span>
<ul>
<li>Der True Peak ist die Spitze der rekonstruierten Wellenform zwischen zwei Samples. Eine Datei kann in jedem Sample unter 0 dBFS bleiben und diesen Wert nach der Wandlung ins Analoge überschreiten.</li>
<li>Spotify empfiehlt −1 dBTP und −2 dBTP für Master, die lauter als −14 LUFS sind, um Verzerrungen in verlustbehafteten Formaten vorzubeugen.</li>
<li>Ich liefere mit einer Obergrenze von −0,3/−0,2 dBTP, mit einem True-Peak-Limiter mit Oversampling, und prüfe die codierte Datei. Entscheidend ist, dass die codierte Version nicht verzerrt, nicht die Zahl auf dem Meter.</li>
</ul></div>

Wenige Zahlen im Mastering werden mit so viel Überzeugung wiederholt wie „−1 dBTP“. Du findest sie in den Leitfäden der Plattformen, in Foren, in Limiter-Presets. Die Zahl ist nicht falsch: Sie ist eine Sicherheitsreserve für ein bestimmtes Problem. Es geht darum zu verstehen, welches Problem, und ob es in deinem Fall wirklich existiert.

## Samples und die echte Wellenform

Digitales Audio ist eine Folge von Samples. Bei der Wiedergabe verbindet der Wandler die Punkte nicht mit geraden Linien: Er rekonstruiert eine durchgehende Wellenform, die durch alle Samples läuft. Zwischen zwei Samples kann diese Wellenform höher steigen als die Samples selbst.

Das klassische Beispiel ist eine Sinuswelle bei einem Viertel der Samplerate, die genau zwischen Nulldurchgang und Spitze abgetastet wird: Alle Samples liegen bei etwa −3 dBFS, aber die rekonstruierte Welle erreicht 0 dBFS. Ein Sample-Peak-Meter zeigt −3. Ein True-Peak-Meter, das das Signal überabtastet (vierfach, nach ITU-R BS.1770), zeigt 0.

Bei echter Musik passiert das ständig, vor allem bei stark limitierten Mastern: Die Samples sind an die Obergrenze gepresst, und die Wellenform dazwischen überschreitet sie.

## Woher −1 dBTP kommt

Verlustbehaftete Formate wie AAC, Ogg Vorbis und MP3 werfen Informationen weg, um die Datei kleiner zu machen. Das decodierte Signal ist nicht identisch mit dem Original, und die Peaks können etwas wachsen. Überschreitet die decodierte Version die Vollaussteuerung und hat die Wiedergabekette keine Reserve, entsteht Verzerrung.

Die Reserve von 1 dB soll dieses Wachstum in fast jeder Situation abdecken: sehr helles Material, niedrige Bitraten, verschiedene Codecs. Spotify empfiehlt sie in seiner Dokumentation und verlangt 2 dB Reserve für Master, die lauter als −14 LUFS sind, weil ein Master bei der Codierung umso mehr wächst, je dichter er ist. Derselbe Wert steht in den technischen Empfehlungen der AES für Streaming.

## Warum ich sie nicht blind anwende

**Wie stark der Peak wächst, hängt vom Material ab.** Bei einem Master, der gut mit einem True-Peak-Limiter mit Oversampling limitiert und mit den Bitraten bezahlter Abos codiert wurde, beträgt das Wachstum oft wenige Zehntel dB, kein ganzes dB. Bei einem Master mit harten Höhen und aggressivem Clipping kann es viel mehr sein. Eine feste Regel behandelt zwei gegensätzliche Fälle gleich.

**Das dB, das du freilässt, hat einen Preis.** Bei gleicher integrierter Lautheit bedeutet eine um 0,7 dB niedrigere Obergrenze, dass der Limiter 0,7 dB mehr Reduktion auf den Peaks leisten muss. Bei einem Dance- oder Rap-Track heißt das etwas weichere Transienten, eine Kick, die etwas weniger schlägt. Wo es keine Normalisierung gibt, etwa auf Beatport, im Club oder bei DJ-Dateien, ist es auch weniger Lautstärke.

**Ein Teil des Hörens ist nicht mehr verlustbehaftet.** Seit 2025 bietet Spotify Premium-Abonnenten Lossless an, Apple Music, Tidal und Amazon Music tun das seit Jahren. Wer in FLAC oder ALAC hört, bekommt den Master ohne verlustbehaftete Codierung, und dort gibt es das Problem wachsender Peaks nicht.

<blockquote class="pull">Die Reserve soll die codierte Version schützen. Also ist es richtig, die codierte Version zu prüfen, statt die Reserve nach Augenmaß zu wählen.</blockquote>

## Was ich stattdessen prüfe

1. **True-Peak-Limiter mit Oversampling, Obergrenze bei −0,3/−0,2 dBTP.** Der Limiter muss die Peaks zwischen den Samples erkennen, nicht nur die Samples.
2. **Messung des Masters mit einem True-Peak-Meter.** Der [LUFS-Meter](/loudness-meter) tastet vierfach über, wie es die BS.1770 vorsieht, und markiert Peaks über der Schwelle.
3. **Testcodierung.** Ich codiere den Master in AAC mit 256 kbps, dem Format von Apple Music, und in ein hochwertiges verlustbehaftetes Format und messe dann die Peaks der decodierten Version. Die Werkzeuge, die Apple für Apple Digital Masters bereitstellt, dienen genau dazu, Clipping nach der AAC-Codierung zu prüfen.
4. **Clippt die codierte Version, behebe ich die Ursache.** Oft sind es zu aggressive Höhen oder eine zu hart gefahrene Clipping-Stufe. Ich korrigiere das oder senke die Obergrenze um ein paar Zehntel, bis die codierte Version sauber ist.
5. **Ich höre die codierte Version gegen den Master.** Das ist das letzte Wort: Höre ich keinen Unterschied in der Verzerrung, ist der Master fertig.

## Die Ausnahmen, die ich respektiere

Gibt ein Label oder ein Vertrieb in seinen Lieferspezifikationen eine genaue Obergrenze vor, wird diese geliefert: Das ist eine Anforderung des Kunden, keine Mastering-Entscheidung. Dasselbe gilt für Bereiche mit eigenen Normen, etwa Lieferungen fürs Fernsehen.

Und wenn dein Master schon bei −1 dBTP liegt und so klingt, wie du willst, gibt es nichts zu korrigieren: Der Punkt dieses Artikels ist nicht, dass −1 dBTP ein Fehler ist, sondern dass es nicht die einzige richtige Antwort ist.

## So prüfst du deinen Master

Zieh die Datei in den [LUFS-Meter](/loudness-meter) und schau dir den True Peak zusammen mit der integrierten Lautheit an. Öffne dann den [Streaming-Lautheitsrechner](/tools/streaming-loudness-calculator): Er zeigt dir, wo die Peaks nach der Normalisierung jeder Plattform landen. Für das ganze Bild zu den Pegeln setzt der Artikel über [LUFS und Streaming 2026](/de/artikel/lufs-streaming-2026) hier an.

<div class="callout"><p><strong>Ein lauter Master, der auch nach der Codierung sauber bleibt.</strong> Mastering ab $60, Prüfung der codierten Dateien inklusive.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
