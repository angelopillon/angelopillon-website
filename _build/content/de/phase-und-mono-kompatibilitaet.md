---
slug: phase-und-mono-kompatibilitaet
group: fase-compatibilita-mono
title: "Phase und Monokompatibilität: Tutorial für einen Mix, der überall trägt"
h1: "Phase und Monokompatibilität, Schritt für Schritt"
seo_title: "Phase und Monokompatibilität: Tutorial für den Mix"
description: "So prüfst du Phase und Monokompatibilität im Mix: Korrelation, Polarität der Mikrofone, Kick-Layer, Widener, Bässe in Mono und Prüfung Band für Band."
dek: "Viele hören in Mono, ohne es zu wissen: Handylautsprecher, Bluetooth-Boxen, Anlagen in Lokalen. So prüfst du, dass der Mix keine Teile verliert, wenn die beiden Kanäle summiert werden."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Utility-Plugin mit Mono-Taste", "Korrelationsmesser", "Stereo-Phasenanalysator"]
order: 10
---

<div class="howto-meta"><span><b>Zeit</b>30 Minuten</span><span><b>Niveau</b>Fortgeschritten</span><span><b>Du brauchst</b>Ein Utility-Plugin mit Mono-Taste, einen Korrelationsmesser und den <a href="/tools/stereo-phase-analyzer">Stereo-Phasenanalysator</a></span></div>

Ein Mix, der auf Kopfhörern breit und spektakulär klingt, kann Kick, Stimme oder den halben Synth verlieren, wenn die beiden Kanäle summiert werden. Das passiert öfter, als man denkt, denn Mono ist überall: der Handylautsprecher, viele Bluetooth-Boxen, die Anlagen in Bars und Läden, die Subs in fast jedem Club.

Phase ist kein abstrakter Begriff. Kommen zwei ähnliche Signale mit einer kleinen Verzögerung an oder ist eines gegenüber dem anderen umgedreht, verstärken sich in der Summe manche Frequenzen und andere löschen sich aus. In Stereo merkt das Ohr es oft nicht. In Mono schon.

## So liest du einen Korrelationsmesser

Der Korrelationsmesser misst, wie ähnlich sich linker und rechter Kanal sind:

- **+1**: Die beiden Kanäle sind identisch, das Signal ist mono.
- **0**: Die beiden Kanäle haben nichts miteinander zu tun, der Klang ist sehr breit.
- **Negative Werte**: Die beiden Kanäle sind gegenphasig und löschen sich in der Mono-Summe aus.

Ein gesunder Mix liegt die meiste Zeit zwischen etwa +0,3 und +0,9. Kurze Ausschläge Richtung null in Hallfahnen sind normal. Länger anhaltende negative Werte oder eine niedrige Korrelation in den tiefen Frequenzen sind ein Problem.

## Die Methode, Schritt für Schritt

<ol class="steps-list">
<li><div><h3>Eine Mono-Taste auf den Master legen</h3><p>Setz ans Ende der Master-Kette ein Utility-Plugin mit Mono-Taste. Schalt während des ganzen Mixes oft bei moderater Lautstärke zwischen Stereo und Mono um. Du musst nicht in Mono mischen: Du musst sofort merken, was verschwindet.</p></div></li>
<li><div><h3>Die Polarität von Mehrfachmikrofonierungen prüfen</h3><p>Kick innen und außen, Snare oben und unten, DI und Mikrofon am Verstärker: Jedes Paar muss geprüft werden. Dreh die Polarität eines der beiden um und behalte die Einstellung, die mehr Bass und mehr Körper bringt. Das Mikrofon unter der Snare muss fast immer gedreht werden.</p></div></li>
<li><div><h3>DI und Verstärker zeitlich ausrichten</h3><p>Das Mikrofon vor dem Verstärker kommt nach dem Direktsignal an: Schall legt in einer Millisekunde etwa 34 cm zurück. Verschieb die Mikrofonspur nach vorn, bis die Wellenformen übereinanderliegen. Der Bass wird sofort voller.</p></div></li>
<li><div><h3>Kick-Layer und übereinanderliegende Samples ausrichten</h3><p>Zwei übereinandergelegte Kicks oder eine Kick mit einer 808 können sich gegenseitig auslöschen. Vergrößere die Wellenformen, richte die Attacks aus und probier, die Polarität eines der beiden umzudrehen: Klingen sie zusammen dünner als jedes einzeln, gibt es eine Auslöschung.</p></div></li>
<li><div><h3>Die Bässe auf Mono bringen</h3><p>Unter 100–150 Hz sollte der Mix mono oder fast mono sein. Nimm mit einem Mid/Side-EQ den Seitenkanal in den Bässen heraus oder nutze ein spezielles Plugin. Viele Clubanlagen summieren die Subs auf Mono, und ein im Studio breiter Bass wird auf der Tanzfläche zu einem schwachen Bass.</p></div></li>
<li><div><h3>Widener, Chorus und Haas-Effekt prüfen</h3><p>Eine Verzögerung zwischen 10 und 30 ms auf nur einer Seite macht einen Klang sehr breit, erzeugt in Mono aber ein Kammfilter: Der Klang wird metallisch oder verschwindet. Setz diese Effekte maßvoll ein, bevorzuge echte aufgenommene Doppler und hör jedes verbreiterte Element in Mono.</p></div></li>
<li><div><h3>Hall- und Delay-Returns in Mono hören</h3><p>Viele Stereohallräume sind absichtlich wenig korreliert. Das ist in Ordnung, solange die Stimme in Mono ihren Raum nicht verliert oder hohl wird. Passiert das, mach den Return schmaler oder nutze einen anderen Hall.</p></div></li>
<li><div><h3>Band für Band prüfen</h3><p>Zieh den Mix in den <a href="/tools/stereo-phase-analyzer">Stereo-Phasenanalysator</a>. Er zeigt die Gesamtkorrelation und die Korrelation pro Band, den Lautstärkeverlust beim Umschalten auf Mono, die Zeit in negativer Korrelation und das Vektorskop. Wenn du nur den Seitenkanal hörst, hörst du genau, was in Mono verschwindet.</p></div></li>
<li><div><h3>Zuletzt auf einem Mono-Lautsprecher hören</h3><p>Das Handy oder eine billige Bluetooth-Box sind der härteste Test. Stimme, Kick und Rhythmus müssen klar bleiben. Verschwindet die Kick, geh zurück zu den Bässen und den Layern.</p></div></li>
</ol>

## Die Werte, die ich prüfe

| Messung | Wo sie liegen sollte | Wann es kritisch wird |
|---|---|---|
| Gesamtkorrelation | Zwischen etwa +0,3 und +0,9 | Negativ in mehr als 5 % des Tracks |
| Korrelation unter 200 Hz | Über +0,7 | Unter +0,7 oder negativ |
| Lautstärkeverlust in Mono | Ein oder zwei dB bei einem breiten Mix | Mehr als 3,5 dB |

Das sind dieselben Richtwerte, mit denen der Analysator Probleme markiert.

<blockquote class="pull">Mono ist kein Format der Vergangenheit. So klingt dein Track aus dem Handy von jemandem und auf den Subs fast jedes Clubs.</blockquote>

## Häufige Fragen

### Ist ein Mix mit Korrelation +1 perfekt?

Nein: Er ist mono. Er ist vollkommen kompatibel, hat aber keine Breite. Das Ziel ist ein Mix, der in den Teilen breit ist, die es sein sollen, und in denen zentriert, die den Track tragen: Stimme, Kick, Bass, Snare.

### Ist negative Korrelation immer ein Fehler?

Nein. Manche Effekte erzeugen sie für einen Augenblick, und bestimmte Hallräume streifen sie in ihren Fahnen. Zum Fehler wird sie, wenn sie anhält, die Bässe betrifft oder wenn du in Mono etwas Wichtiges verschwinden hörst.

### Kann das Mastering die Phase reparieren?

Nur teilweise. Im Mastering kann ich die Bässe auf Mono bringen oder die Breite eines Bandes reduzieren, aber ich kann keine zwei Mikrofone oder zwei Samples neu ausrichten, die im Mix summiert wurden. Solche Probleme löst man an der Quelle oder mit [Stem-Mastering](/de/artikel/unterschied-mixing-mastering).

<div class="callout"><p><strong>Fällt dein Mix in Mono auseinander?</strong> Ich repariere es im Mix oder, wenn die Spuren nicht mehr da sind, mit Stem-Mastering. Mix und Master ab $110.</p><a class="cta" href="/de/#contact">Projekt starten</a></div>
