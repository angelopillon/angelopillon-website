---
slug: lufs-streaming-2026
group: lufs-streaming-2026
title: "LUFS und Streaming 2026: was die Plattformen mit deinem Master machen"
seo_title: "LUFS und Streaming 2026: was die Plattformen machen"
description: "Spotify, Apple Music, YouTube, Tidal, Amazon Music und Deezer: die Normalisierungswerte 2026 und was sie wirklich für die Lautheit deines Masters bedeuten."
dek: "Die Normalisierung macht laute Master leiser und hebt leise kaum an. Hier sind die aktuellen Werte und wie du sie nutzt, ohne einer Zahl hinterherzujagen."
date: 2026-11-05
category: loudness
order: 1
---

<div class="tldr"><span class="box__title">Kurz gesagt</span>
<ul>
<li>Spotify normalisiert im Modus Normal auf −14 LUFS, in Laut auf −11 und in Leise auf −19. Apple Music arbeitet mit −16, Deezer mit etwa −15, YouTube, Tidal und Amazon Music mit etwa −14.</li>
<li>Ein Master, der lauter ist als der Referenzwert, wird leiser gemacht. Ein leiserer wird nur angehoben, wenn er bei den Peaks Reserve hat, und auf mehreren Plattformen überhaupt nicht.</li>
<li>Die richtige Lautheit hängt vom Genre und vom Arrangement ab, nicht von der Plattform. Erst messen, dann entscheiden.</li>
</ul></div>

Jede Woche fragt mich jemand: „Auf wie viele LUFS soll ich für Spotify mastern?“ Die Frage ist berechtigt, geht aber von einer falschen Idee aus: dass die Plattform belohnt, wer genau eine bestimmte Zahl trifft. Das tut sie nicht. Die Normalisierung ist eine automatische Lautstärkeregelung, und ihre Regeln zu kennen hilft nur bei einer Sache: zu wissen, wie laut dein Track neben den anderen wirklich klingt.

## Was LUFS misst

LUFS (Loudness Units relative to Full Scale) misst die wahrgenommene Lautheit nach der Empfehlung ITU-R BS.1770. Die Messung gewichtet die Frequenzen ungefähr so wie das Ohr, ignoriert Stille und liefert einen Mittelwert über den ganzen Track: den Integrated-Wert. Eine LU entspricht einem dB. Misst dein Master −9 LUFS und die Plattform arbeitet mit −14, senkt der Player ihn um 5 dB ab. Das ist alles.

Der Rest der Messung (Short-Term, Momentary, Loudness Range) zeigt dir, wie sich die Lautheit über die Zeit bewegt, und ist im Mastering sehr nützlich. Die Plattformen schauen aber nur auf zwei Zahlen: Integrated und True Peak.

## Die Werte der Plattformen 2026

| Plattform | Referenz | Lauterer Master | Leiserer Master |
|---|---|---|---|
| Spotify, Normal (Standard) | −14 LUFS | Abgesenkt | Angehoben, mit 1 dB Reserve zum True Peak |
| Spotify, Laut | −11 LUFS | Abgesenkt | Angehoben, mit einem Limiter, der bei −1 dB greift |
| Spotify, Leise | −19 LUFS | Abgesenkt | Angehoben, mit 1 dB Reserve |
| Apple Music (Sound Check) | −16 LUFS | Abgesenkt | Nur so weit angehoben, wie die Peaks es zulassen |
| YouTube | etwa −14 LUFS | Abgesenkt | Nicht angehoben |
| Tidal | etwa −14 LUFS | Abgesenkt | Nicht angehoben |
| Amazon Music | etwa −14 LUFS | Abgesenkt | Nicht angehoben |
| Deezer | etwa −15 LUFS | Abgesenkt | Nicht angehoben |

Spotify dokumentiert seine Werte im Detail, inklusive der Grenzfälle. Bei den anderen Plattformen stammen die Zahlen aus knapperer Dokumentation und aus Messungen in der Praxis: Nimm sie als verlässliche Orientierung, nicht als Naturkonstanten, und prüf sie ab und zu nach.

### Drei Spotify-Details, die zählen

**Alben und Playlists verhalten sich unterschiedlich.** Hört jemand ein Album von Anfang bis Ende, wendet Spotify eine einzige Verstärkung auf die ganze Platte an: Der intimste Track bleibt intimer als die anderen, genau so, wie du es im Mastering entschieden hast. Im Shuffle und in Playlists wird dagegen jeder Track einzeln normalisiert.

**Ein leiser Master wird weniger angehoben, als du denkst.** Spotify hebt Tracks unter −14 nur so lange an, wie der True Peak unter −1 dBTP bleibt. In Spotifys offiziellem Beispiel erreicht ein Track mit −20 LUFS und Peaks bei −5 dBTP nur −16 LUFS.

**Lossless ist da und ändert, was du liefern solltest.** Seit September 2025 können Premium-Abonnenten in FLAC bis 24 Bit und 44,1 kHz hören. Die Normalisierung bleibt gleich, aber eine Datei mit 24 Bit erreicht den Hörer mit ihrer vollen Auflösung. Wenn dein Vertrieb es akzeptiert, liefere den Master mit 24 Bit.

## Was mit einem lauten Master passiert

Nimm einen Master mit −8 LUFS und einem True Peak von −0,3 dBTP. Auf Spotify im Modus Normal wird er um 6 dB abgesenkt: Er spielt mit −14, die Peaks liegen bei −6,3 dBTP. Auf Apple Music geht er um 8 dB runter. Keine Plattform bestraft dich: Sie macht dich leiser, mehr nicht.

Das eigentliche Problem liegt woanders. Wenn du für −8 die Transienten plattgedrückt hast und die Kick ihren Attack verloren hat, klingt dein Track bei gleicher Lautstärke flacher als einer, der mit −10 und mehr Punch gemastert wurde. Die Normalisierung gleicht die Lautstärke an, nicht die Dichte und nicht die Lebendigkeit. Deshalb lässt sich der Loudness War im Streaming nicht gewinnen: Du gewinnst, indem du den Track auf die richtige Weise laut machst, mit dosierter Sättigung und Clipping vor dem Limiter, damit der Limiter nur noch die Peaks abfangen muss.

## Was mit einem leisen Master passiert

Jetzt ein Master mit −16 LUFS und Peaks bei −1,5 dBTP. Spotify würde ihn gern um 2 dB anheben, aber die Peaks lägen dann bei +0,5 dBTP: Um 1 dB Reserve zu lassen, hebt Spotify ihn nur um ein halbes dB an. Er spielt mit −15,5, etwas leiser als die anderen. YouTube und Tidal heben ihn gar nicht an.

Eine dynamische Ballade kann sich das leisten, weil ihre Stärke in den Kontrasten liegt. Ein Dance-Track nicht: In der Playlist kommt er nach vollen, dichten Tracks und wirkt schon ab dem ersten Takt matt.

## Also, wie laut?

Die Zahl bestimmt die Musik, nicht die Plattform. Zur Orientierung: Hier landen die meisten modernen Veröffentlichungen, die ich mastere, immer mit einem True Peak zwischen −0,3 und −0,2 dBTP:

- **Pop, Rap, R&B, Indie fürs Streaming:** zwischen −11 und −8 LUFS integrated.
- **Techno, House und Club-Elektronik:** zwischen −11 und −9 LUFS, weil es auf Beatport und am DJ-Mixer keine Normalisierung gibt und ein Track, der im Ordner des DJs viel leiser ist als die anderen, schwach wirkt.
- **Akustik, Jazz, Filmmusik:** zwischen −16 und −12 LUFS, weil die Wirkung in der Dynamik liegt.

Innerhalb dieser Bereiche ist der richtige Punkt dort, wo ein weiteres dB Limiting keine Dichte mehr bringt und anfängt, Punch zu kosten. Das ist bei jedem Arrangement anders: Ein sparsamer Track erreicht ihn früh, eine volle Produktion kann viel weiter gehen.

<blockquote class="pull">Die Normalisierung gleicht die Lautstärke an. Die Dichte kann sie nicht angleichen: Genau die masterst du.</blockquote>

## Die zweite Zahl: True Peak

Der True Peak misst die Spitzen, die zwischen zwei Samples entstehen, wenn das Signal rekonstruiert wird. Ich arbeite mit einem True-Peak-Limiter mit Oversampling und einer Obergrenze zwischen −0,3 und −0,2 dBTP. Spotify empfiehlt −1 dBTP und −2, wenn der Master lauter als −14 LUFS ist: In einem eigenen Artikel erkläre ich, [warum ich das nicht als Regel behandle](/de/artikel/true-peak-minus-1-dbtp) und was ich stattdessen prüfe.

## In einer Minute prüfen

1. Zieh den Master in den [LUFS-Meter](/loudness-meter): Er zeigt Integrated, Short-Term, True Peak, Loudness Range und eine Vorschau für jede Plattform. Die Datei verlässt deinen Computer nicht.
2. Wenn du die Zahlen schon kennst, zeigt der [Streaming-Lautheitsrechner](/tools/streaming-loudness-calculator), wie stark jeder Dienst den Track anhebt oder absenkt und wo die Peaks landen.
3. Vergleich ihn bei gleicher Lautheit mit einem Referenztrack aus deinem Genre, mit dem [A/B-Referenzplayer](/tools/ab-reference-player). Das ist der Test, der dir wirklich sagt, ob der Master trägt.

<div class="callout"><p><strong>Du willst einen Master, der auf jeder Plattform trägt?</strong> Mastering ab $60, Lieferung in 48 Stunden, mit einer Club-Version, wenn der Track eine braucht.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
