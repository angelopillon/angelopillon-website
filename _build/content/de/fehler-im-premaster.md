---
slug: fehler-im-premaster
group: errori-premaster
title: "Fehler im Premaster, die das Mastering verschlechtern, und wie du sie vermeidest"
seo_title: "Fehler im Premaster, die du vor dem Mastering vermeiden solltest"
description: "Limiter auf dem Master, Clipping, Normalisierung, MP3, abgeschnittene Fahnen, Widener auf dem Bus: die häufigsten Fehler in Dateien fürs Mastering und wie du sie behebst."
dek: "Das Mastering beginnt mit dem, was ich bekomme. Das sind die Fehler, die ich in Premastern am häufigsten sehe, und was du tun kannst, bevor du auf „Exportieren“ drückst."
date: 2026-11-05
category: mastering
order: 13
---

<div class="tldr"><span class="box__title">Kurz gesagt</span>
<ul>
<li>Das Premaster ist der Stereomix, den du ins Mastering schickst: WAV in der Samplerate des Projekts, 24 Bit oder 32 Bit Float, ohne Limiter, ohne Clipping, ohne Normalisierung.</li>
<li>Fehler bei Pegel und Format behebst du in fünf Minuten. Mixfehler wie scharfe Zischlaute oder breite Bässe verstärkt das Mastering.</li>
<li>Eine Notiz mit Referenzen und dem Ziel des Tracks ist so viel wert wie eine perfekte Datei.</li>
</ul></div>

Jede Woche bekomme ich Premaster aller Art. Die meisten sind völlig in Ordnung. Einige kommen mit Problemen, die das Endergebnis mehr kosten, als sich der Exportierende vorstellt, und fast immer hätten sie sich in wenigen Minuten vermeiden lassen. Ich habe sie hier gesammelt, nach Art geordnet.

## Pegelfehler

**Der Limiter auf dem Master.** Das ist der häufigste Fehler. Ein Limiter auf dem Premaster hat den Headroom, den ich zum Arbeiten brauche, schon verbraucht: Die Peaks sind plattgedrückt, und ich kann nicht mehr entscheiden, wie und wie stark der Track laut wird. Nimm ihn vor dem Export heraus. Hängt deine Balance von ihm ab, schick mir beide Versionen: die ohne zum Arbeiten, die mit als Referenz dafür, wie du ihn dir vorstellst.

**Clipping beim Export.** Ein WAV mit 24 Bit endet bei 0 dBFS: Alles darüber wird abgeschnitten, und das lässt sich nicht zurückholen. Prüf die Peaks der exportierten Datei mit dem [LUFS-Meter](/loudness-meter), der auch geclippte Samples markiert.

**Aktivierte Normalisierung.** Sie hebt die Datei bis 0 dBFS an und löscht den Headroom, den du dir gelassen hast. Lass sie immer aus.

**Die Angst, „zu leise“ zu liefern.** Ein Premaster mit Peaks zwischen −6 und −3 dBFS ist perfekt. Die finale Lautstärke entscheidet das Mastering: Ein lauteres Premaster ergibt keinen besseren Master.

## Formatfehler

**MP3 oder AAC statt WAV.** Ein verlustbehaftetes Format hat schon Informationen verloren, und das Mastering verstärkt die Artefakte der Codierung. Es braucht ein WAV oder ein AIFF.

**Geänderte Samplerate.** Exportiere in der Samplerate des Projekts. Ein Projekt mit 44,1 kHz auf 96 kHz zu bringen bringt keine Qualität, nur eine größere Datei.

**Unnötiges oder doppeltes Dither.** Exportierst du in 32 Bit Float, brauchst du kein Dither. Exportierst du in 24 Bit, ist einmaliges Dithern in Ordnung. Nie in 16 Bit: Die finale Reduktion mache ich.

**Abgeschnittener Anfang und abgeschnittenes Ende.** Lass ein paar Zehntelsekunden Stille vor dem ersten Klang und die ganze Fahne am Ende. Willst du eine Blende, mach sie nicht im Premaster: Sag es mir, ich mache sie nach dem Limiter, wo sie besser klingt.

<blockquote class="pull">Fehler bei Pegel und Format sind in fünf Minuten behoben. Mixfehler macht das Mastering nur deutlicher.</blockquote>

## Mixfehler, die das Mastering verstärkt

**Aggressive Zischlaute und Becken.** Der Limiter und die zusätzliche Lautstärke machen sie noch härter. Ein De-Esser auf der Stimme und eine Kontrolle der Höhen auf den Becken, im Mix, sind viel mehr wert als jede Korrektur im Mastering.

**Zu laute oder zu breite Bässe.** Ein zu großer Sub lässt den Limiter im Bass arbeiten, und der Track „pumpt“ mit der Kick. Ein breiter Bass wird in Mono und auf Clubanlagen schwächer. Prüf die Bässe mit dem [Stereo-Phasenanalysator](/tools/stereo-phase-analyzer).

**Stereo-Widener auf dem Master-Bus.** Sie lassen den Mix größer wirken, können aber Phasenprobleme erzeugen, die in Mono und nach der Codierung auftauchen. Wenn du Breite brauchst, such sie bei den einzelnen Elementen.

**Zu viel Bus-Kompression.** Ein hart gefahrener Kompressor auf dem Mix-Bus nimmt Transienten weg, die das Mastering nicht zurückgeben kann. Wenn dir der Sound gefällt, ist das in Ordnung: Er sollte aber nur wenige dB arbeiten.

**Eine Stimme am falschen Platz.** Ist die Stimme zu leise oder zu laut, kann das Mastering wenig tun, ohne alles andere anzufassen. Hier hilft eine Überarbeitung des Mixes oder [Stem-Mastering](/de/artikel/unterschied-mixing-mastering).

## Kommunikationsfehler

**Keine Referenzen.** Zwei oder drei Tracks, die so klingen, wie deiner klingen soll, sagen mir mehr als zehn Zeilen Beschreibung.

**Kein Ziel.** Streaming, Club, beides? Erscheint der Track als Single oder auf einer EP? Die Entscheidungen zur Lautheit ändern sich. Bei Zweifeln lies, [was die Plattformen mit deinem Master machen](/de/artikel/lufs-streaming-2026).

**Versionen mit verwirrenden Namen.** „Mix_final_v3_ok_ENDGUELTIG.wav“ hilft niemandem. Ein Name, ein Datum, eine Version.

<div class="box"><span class="box__title">Checkliste fürs Premaster</span>
<ul>
<li>WAV oder AIFF in der Samplerate des Projekts, 24 Bit oder 32 Bit Float.</li>
<li>Kein Limiter, Maximizer oder Clipper auf dem Master.</li>
<li>Kein Clipping, Normalisierung aus.</li>
<li>Peaks zwischen −6 und −3 dBFS, vor allem aber kein Clipping.</li>
<li>Stille am Anfang, ganze Fahne am Ende, keine Blende.</li>
<li>Eine Version mit deinem Limiter als Referenz, wenn der Mix von ihm abhängt.</li>
<li>Zwei oder drei Referenztracks und das Ziel des Tracks.</li>
</ul></div>

Für das komplette Vorgehen in deiner DAW folg dem [Tutorial zum Export der Spuren](/de/artikel/spuren-exportieren-fuer-mixing-und-mastering).

<div class="callout"><p><strong>Premaster fertig?</strong> Mastering ab $60, Lieferung in 48 Stunden. Stimmt etwas mit der Datei nicht, sage ich es dir, bevor ich anfange.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
