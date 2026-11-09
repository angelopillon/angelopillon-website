---
slug: spuren-exportieren-fuer-mixing-und-mastering
group: esportare-tracce-mix-mastering
title: "Spuren für Mixing und Mastering exportieren: Ableton, FL Studio, Logic, Pro Tools und Cubase"
h1: "Spuren für Mixing und Mastering exportieren, DAW für DAW"
seo_title: "Spuren für Mixing und Mastering exportieren"
description: "So bereitest du Spuren, Stems und Premaster vor und exportierst sie: Formate, Startpunkt, Effektfahnen, Benennung. Für Ableton, FL Studio, Logic, Pro Tools und Cubase."
dek: "Die Hälfte der Probleme eines Mixes entsteht vor dem Mix: Dateien, die nicht am selben Punkt beginnen, abgeschnittene Hallfahnen, vergessene Limiter auf dem Master. So vermeidest du sie."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT45M
  tools: ["DAW", "Dateiübertragungsdienst"]
order: 6
---

<div class="howto-meta"><span><b>Zeit</b>20 bis 45 Minuten</span><span><b>Niveau</b>Einsteiger</span><span><b>Du brauchst</b>Das offene Projekt in deiner DAW und einen Dienst wie WeTransfer, Google Drive oder Dropbox</span></div>

Wenn ich eine neue Session öffne, sagen mir die ersten Minuten, wie flüssig die Arbeit laufen wird. Beginnen alle Dateien am selben Punkt, haben klare Namen und kommen mit einer Notiz zu Tempo und Tonart, fange ich sofort an zu mischen. Wenn nicht, fange ich mit Fragen an. Dieses Tutorial bringt dich von der fertigen Session zum versandfertigen Ordner.

## Die Methode, gültig für jede DAW

<ol class="steps-list">
<li><div><h3>Eine Kopie des Projekts speichern</h3><p>Arbeite mit einer Kopie, zum Beispiel „Titel_export“. So kannst du Plugins und Automationen entfernen, ohne die Originalversion zu gefährden.</p></div></li>
<li><div><h3>Den Master leer räumen</h3><p>Deaktiviere Limiter, Maximizer, Clipper und Kompressoren auf dem Master. Hängt deine Balance von dieser Kette ab, exportiere trotzdem eine Version mit bearbeitetem Master: Ich nutze sie als Referenz, nicht als Arbeitsmaterial.</p></div></li>
<li><div><h3>Entscheiden, was gedruckt wird und was nicht</h3><p>Lass die Effekte aktiv, die zum Sound gehören: die Verzerrung auf dem Synth, den automatisierten Filter, den Chorus auf der Gitarre. Entferne allgemeine Balance-Bearbeitung wie korrigierende „Mix“-EQs oder Bus-Kompression. Gehört ein Hall oder Delay zur Idee, exportiere ihn als eigene Spur, damit ich ihn dosieren kann.</p></div></li>
<li><div><h3>Alles am selben Punkt beginnen lassen</h3><p>Jede Datei muss im selben Moment beginnen, meist bei Takt 1 oder am Nullpunkt der Session, auch wenn das Instrument erst nach einer Minute einsetzt. Das ist die wichtigste Regel: Sind die Dateien ausgerichtet, setzt sich der Mix von selbst wieder zusammen.</p></div></li>
<li><div><h3>Die Fahnen behalten</h3><p>Verlängere den Exportbereich um ein paar Sekunden nach der letzten Note, damit Hall und Delays ausklingen. Eine abgeschnittene Fahne lässt sich nicht zurückholen.</p></div></li>
<li><div><h3>Format und Auflösung einstellen</h3><p>WAV in der Samplerate des Projekts, 24 Bit oder 32 Bit Float. Keine Normalisierung, kein Dither beim Export in 32 Bit Float, kein MP3. Läuft die Session mit 44,1 kHz, exportiere mit 44,1: Konvertieren bringt keine Qualität.</p></div></li>
<li><div><h3>Klare Namen vergeben</h3><p>Nummer, Instrument, Detail: „01_Kick“, „02_Snare_Top“, „14_Vocal_Lead“, „15_Vocal_Doppler“. Vermeide „Audio 12“ und „Spur ohne Namen“. Ist die Bearbeitung einer Spur schon gedruckt, schreib es in den Namen: „08_Synth_Lead_FX“.</p></div></li>
<li><div><h3>Prüfen, zippen und senden</h3><p>Importiere die Dateien in ein leeres Projekt und prüfe, ob sie so ausgerichtet klingen wie im Original. Leg einen Bounce deines Mixes als Referenz bei und eine Notiz mit BPM, Tonart, Referenztracks und Deadline. Pack den Ordner in ein ZIP und schick ihn mit WeTransfer, Google Drive oder Dropbox.</p></div></li>
</ol>

## Die Anleitung DAW für DAW

Ich verwende die englischen Menünamen, die Sprache, in der die meisten Produzenten ihre DAW nutzen: Ist deine auf Deutsch, heißen die Einträge entsprechend. Die Namen ändern sich von Version zu Version ein wenig, der Weg bleibt aber derselbe.

### Ableton Live

Öffne **File › Export Audio/Video** (Cmd/Strg + Shift + R). Wähl bei „Rendered Track“ **All Individual Tracks**: Live exportiert eine Datei pro Spur und pro Return-Spur. Setz den Start auf 1.1.1 und eine Länge, die die Fahnen einschließt. Deaktiviere „Normalize“, „Render as Loop“ und „Convert to Mono“. Willst du die Dateien ohne die Effekte der Returns und des Masters, lass „Include Return and Master Effects“ aus. Format WAV, 24 oder 32 Bit.

### FL Studio

Prüf zuerst, ob jedes Instrument auf einen eigenen Mixer-Kanal geroutet ist: FL exportiert pro Mixer-Kanal, nicht pro Kanal im Channel Rack. Dann **File › Export › Wave file** (Strg + R). Modus „Full song“, Fahne auf „Leave remainder“, damit Hall und Delays nicht abgeschnitten werden, Format 24 Bit oder 32 Bit Float. Aktiviere **Split mixer tracks**, um eine Datei pro Mixer-Kanal zu bekommen, und lass die Effekte des Masters aus.

### Logic Pro

Nutze **File › Export › All Tracks as Audio Files** (Shift + Cmd + E). Format WAVE, 24 Bit oder 32 Bit Float, „Normalize“ auf Off. Lass „Bypass Effect Plug-ins“ aus, wenn du die Bearbeitung drucken willst, und aktiviere „Include Audio Tail“. Logic exportiert alle Dateien ab dem Projektanfang, sie bleiben also ausgerichtet.

### Pro Tools

Wähl in der Timeline den ganzen Song aus, vom Anfang der Session bis zum Ende der Fahnen. Wähl die Spuren aus, klick mit rechts auf den Namen einer davon und wähl **Bounce** (Track Bounce). Stell WAV, interleaved, 24 Bit oder 32 Bit Float in der Samplerate der Session ein und nutz den Offline-Bounce, um Zeit zu sparen. In Versionen ohne Track Bounce kannst du eine Spur nach der anderen im Solo bouncen oder Commit verwenden.

### Cubase

Setz die Locatoren vom Anfang des Songs bis zum Ende der Fahnen und öffne dann **File › Export › Audio Mixdown**. Wähl in der Kanalliste links alle Kanäle aus, die du exportieren willst: Cubase erstellt für jeden eine Datei. Der Export mehrerer Kanäle auf einmal ist in den größeren Editionen wie Cubase Pro verfügbar; in den anderen exportierst du einen Kanal nach dem anderen. Format Wave, 24 Bit oder 32 Bit Float, Samplerate des Projekts. Lass Mono-Downmix und Echtzeit-Export aus, außer du nutzt externe Hardware.

## Und fürs Mastering?

Fürs Stereo-Mastering reicht mir eine einzige Datei: dein Mix, exportiert wie oben, ohne Limiter auf dem Master. Peaks zwischen −6 und −3 dBFS sind bequem; wichtig ist, dass nichts clippt. Wenn ich hören soll, wie du ihn dir bei voller Lautstärke vorstellst, leg die Version mit deinem Limiter bei und nenn sie „Referenz“.

Fürs **Stem-Mastering** brauchst du meist vier bis acht Gruppen (ich nehme bis zu 40), zum Beispiel Drums, Bass, Vocals, Musik und Effekte, mit derselben Methode exportiert. Mach vor dem Senden einen Test: In einem leeren Projekt zusammengelegt, müssen sie genau wie dein Mix klingen. Klingen sie anders, lag wahrscheinlich ein Kompressor auf dem Master-Bus, der auf das Ganze gearbeitet hat.

<div class="box"><span class="box__title">Checkliste vor dem Senden</span>
<ul>
<li>Alle Dateien beginnen am selben Punkt und sind gleich lang.</li>
<li>WAV, Samplerate des Projekts, 24 Bit oder 32 Bit Float, keine Normalisierung.</li>
<li>Kein Limiter oder Maximizer auf dem Master.</li>
<li>Hall- und Delay-Fahnen vollständig.</li>
<li>Klare, nummerierte Namen.</li>
<li>Ein Bounce deines Mixes als Referenz.</li>
<li>Eine Notiz mit BPM, Tonart, Referenzen und Deadline.</li>
</ul></div>

Kennst du BPM und Tonart des Tracks nicht, schätzt der [LUFS-Meter](/loudness-meter) sie aus der Datei, zusammen mit Lautheit und True Peak. Und wenn du verstehen willst, wie du die Pegel vor dem Export einstellst, fang mit dem [Gain-Staging-Tutorial](/de/artikel/gain-staging-im-daw) an.

<div class="callout"><p><strong>Ordner fertig?</strong> Schick mir den Link über das Kontaktformular: Ich antworte meist innerhalb weniger Stunden.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
