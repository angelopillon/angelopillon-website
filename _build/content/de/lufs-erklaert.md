---
slug: lufs-erklaert
group: lufs-explained
title: "LUFS erklärt: der einzige Lautheits-Leitfaden, den Produzenten brauchen"
seo_title: "LUFS erklärt: der Lautheits-Leitfaden für Produzenten"
description: "Integrated, Short-Term, Momentary, LRA, True Peak: was jede Zahl wirklich misst, was Streaming-Plattformen damit machen und welche Werte 2026 zählen."
dek: "Integrated, Short-Term, Momentary, LRA, True Peak: was jede Zahl wirklich misst, was die Plattformen damit machen und welche Werte 2026 zählen."
date: 2026-07-02
category: loudness
order: 0
---

<div class="tldr"><span class="box__title">Kurz gesagt</span>
<ul>
<li>LUFS misst die wahrgenommene Lautheit, mit Frequenzgewichtung und einem Gate für Stille: nicht den Signalpegel.</li>
<li>Integrated ist der ganze Track, Short-Term ein 3-Sekunden-Fenster, Momentary 400 ms. LRA beschreibt die Dynamikspanne.</li>
<li>Streaming-Plattformen <strong>senken</strong> laute Master auf etwa −14 LUFS ab und heben leise kaum oder gar nicht an.</li>
</ul></div>

LUFS ist die am meisten missverstandene Zahl der modernen Musikproduktion, und die Verwirrung kostet echtes Geld: plattgedrückte Master, schwache Drops, endlose Revisionsschleifen. Hier ist das Wissen, das du für die Arbeit wirklich brauchst, ohne die Hausaufgaben der Broadcast-Normen.

## Was LUFS wirklich misst

Peak-Meter lesen elektrische Maxima. RMS liest die mittlere Leistung. Keines von beiden liest, was dein Ohr erlebt. **LUFS (Loudness Units relative to Full Scale)** wendet eine Frequenzgewichtung an, die das menschliche Gehör nachbildet, das für obere Mitten empfindlicher ist als für Subs, misst die Energie in überlappenden Blöcken von 400 ms und **blendet Stille aus**, damit Intros und Breakdowns die Zahl nicht nach unten ziehen. Eine LU entspricht einem dB Veränderung, aber die Messung selbst ist wahrnehmungsbasiert. Deshalb haben sich alle großen Plattformen darauf geeinigt.

## Die vier Zahlen auf deinem Meter

**Integrated** ist die Lautheit des ganzen Tracks, mit Gate: die Zahl, mit der die Plattformen dich normalisieren. **Short-Term** (3-Sekunden-Fenster) zeigt, wie laut sich jeder Abschnitt anfühlt; das Short-Term deines Drops zählt für den Hörer mehr als das Integrated des ganzen Tracks. **Momentary** (400 ms) erfasst kurze Dichtespitzen. **LRA** (Loudness Range) beschreibt den Abstand zwischen leisen und lauten Teilen: Elektronische Musik liegt meist bei 4–8 LU, eine dynamische Filmmusik kann über 15 liegen.

<blockquote class="pull">Plattformen normalisieren auf Integrated. Hörer fühlen Short-Term. Großartige Master beherrschen beides.</blockquote>

## Was die Plattformen wirklich tun

Spotify, YouTube, Amazon und Tidal normalisieren auf etwa **−14 LUFS**, Apple Music auf etwa **−16**, Deezer auf −15. Das entscheidende Detail: Sie **senken lautere Tracks** auf den Referenzwert ab, heben leisere aber nur an, solange die Peaks es zulassen, und mehrere Plattformen heben sie gar nicht an. Ein Master mit −8 LUFS spielt auf Spotify also mit −14: dieselbe Lautstärke wie ein Master mit −14, aber mit der ganzen Dichte und, wenn schlecht gemacht, der ganzen eingebrannten Verzerrung des Loudness War. Deshalb ist „Soll ich auf −14 mastern?“ die falsche Frage, und ich habe [einen ganzen Artikel über die richtige](/de/artikel/wie-laut-sollte-ein-master-sein) geschrieben.

## True Peak: die andere Zahl, die beißt

LUFS sagt, wie laut; **True Peak (dBTP)** sagt, ob deine Wellenform zwischen den Samples über die Vollaussteuerung hinausgeht. Mit einem guten True-Peak-Limiter mit Oversampling hält eine Obergrenze von **−0,3 bis −0,2 dBTP** verlustbehaftete Encoder (AAC, Ogg) sauber: Das Überschwingen, das sie hinzufügen, ist viel kleiner als ein ganzes Dezibel, also verschenkt das oft zitierte −1 dBTP vor allem Pegel. Fährst du dagegen bis 0, verschenkst du bei jedem Stream Verzerrung. Die beiden Zahlen zusammen, Integrated LUFS und dBTP, sind 90 % deiner Kontrolle vor der Auslieferung.

## Miss es selbst, kostenlos

Ich habe einen [LUFS-Meter im Browser](/loudness-meter) gebaut, der die vollständige Messung nach ITU-R BS.1770-4 durchführt: Integrated mit Gate, Short-Term-Verlauf, True Peak mit Oversampling, LRA, dazu Tonart und BPM, komplett auf deinem Gerät. Zieh deinen Master hinein, bevor du ihn irgendwohin schickst. Sechzig Sekunden Prüfung schlagen jedes Mal eine erneute Lieferung.

<div class="callout"><p><strong>Zahlen neben dem Ziel?</strong> Genau das ist mein Job. Mastering ab $60, perfekt fürs Streaming auf jeder Plattform.</p><a class="cta" href="/de/#contact">Lautheit korrigieren</a></div>
