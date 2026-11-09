---
slug: master-lieferformate
group: formati-consegna-master
title: "Lieferformate für den Master: Bittiefe, Samplerate, Dither und Metadaten"
seo_title: "Master-Formate: Bittiefe, Samplerate, Dither, Metadaten"
description: "Welches Format ein Master für den Vertrieb braucht: WAV mit 24 Bit, Samplerate, wann Dither nötig ist, Dateinamen, ISRC-Codes und die Kontrollen vor dem Upload."
dek: "Ein perfekter Master kann durch ein falsches Format oder fehlende Metadaten beschädigt auf den Plattformen landen. Das bereite ich für jede Lieferung vor, und das solltest du vor dem Upload prüfen."
date: 2026-11-09
category: mastering
order: 35
---

<div class="tldr"><span class="box__title">Kurz gesagt</span>
<ul>
<li>Für den Vertrieb: WAV mit 24 Bit in der Samplerate des Projekts oder der, die dein Vertrieb verlangt.</li>
<li>Dither nur, wenn du die Bittiefe reduzierst, etwa von 24 auf 16 Bit, und nur einmal, ganz am Ende.</li>
<li>Klare Namen, ISRC-Codes und korrekte Metadaten verhindern Fehler und Verzögerungen beim Release.</li>
</ul></div>

Das Mastering endet mit einer Datei, und diese Datei muss unversehrt bei Spotify, Apple Music, Beatport und jedem anderen Dienst ankommen. Ein paar Kontrollen vermeiden die häufigsten Überraschungen.

## Bittiefe und Samplerate

Fast alle Vertriebe akzeptieren heute WAV mit 24 Bit, viele auch Sampleraten über 44,1 kHz. Mein Rat: in der Samplerate des Projekts arbeiten und liefern, ohne unnötige Konvertierungen. Verlangt der Vertrieb 16 Bit / 44,1 kHz, wird einmal am Ende konvertiert, mit einem guten Konverter und Dither.

Für das [Apple-Digital-Masters](/de/artikel/apple-digital-masters-erklaert)-Badge braucht es Dateien mit 24 Bit und einen von Apple zugelassenen Mastering-Engineer.

## Dither

Wenn du die Auflösung reduzierst, etwa von 24 auf 16 Bit, werden die letzten Bits abgeschnitten und erzeugen Verzerrung auf sehr niedrigem Pegel. Dither fügt ein unhörbares Rauschen hinzu, das sie in ein neutrales Rauschen verwandelt. Einfache Regeln:

- Nur beim Reduzieren der Bittiefe einsetzen.
- Einmal, als letzter Schritt der Kette.
- Nie auf Dateien, die noch weiterbearbeitet werden, etwa Stems für den Mix.

<blockquote class="pull">Das Format verbessert keinen Master. Das falsche kann ihn verschlechtern, und du merkst es erst, wenn der Track online ist.</blockquote>

## Was ich liefere

| Datei | Verwendung |
|---|---|
| WAV 24 Bit in Projekt-Samplerate | Digitaler Vertrieb und Apple Digital Masters |
| WAV 16 Bit / 44,1 kHz mit Dither | Nur auf Wunsch des Vertriebs oder für CD |
| Extended- oder Club-Version, falls vorhanden | Beatport und DJs |
| Instrumental, auf Anfrage | Sync, Video, Live |

Jeder Master hat sein Ceiling bei −0,3/−0,2 dBTP, auch nach einer Testcodierung geprüft.

## Dateinamen und Metadaten

- Ein klarer Name, überall gleich: `Artist - Title (Extended Mix).wav`.
- Ein eigener ISRC-Code für jede Version: Original, Extended, Instrumental.
- Titel, Artists, Featurings und Remixer genau wie auf dem Cover geschrieben.
- Prüfe, dass die Datei sauber beginnt und endet: keine Klicks, keine überflüssige Stille.

## Vor dem Upload

Hör den Master von Anfang bis Ende, prüfe Lautheit und True Peak mit dem [LUFS-Meter](/loudness-meter) und vergleiche die hochgeladene Datei mit der Vorschau deines Vertriebs. Klingt etwas anders, halt an, bevor du den Release bestätigst.

<div class="callout"><p><strong>Willst du einen Master, der für jede Plattform bereit ist?</strong> Analoges Mastering ab $60: Du bekommst die Dateien in den Formaten, die dein Vertrieb verlangt.</p><a class="cta" href="/de/#contact">Mastering anfragen</a></div>
