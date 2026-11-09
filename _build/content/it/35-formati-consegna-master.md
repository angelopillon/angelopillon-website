---
slug: formati-consegna-master
title: "Formati di consegna del master: bit, frequenza, dither e metadati"
seo_title: "Formati del master: bit, sample rate, dither e metadati"
description: "Quale formato serve per distribuire un master: WAV a 24 bit, frequenza di campionamento, quando usare il dither, nomi dei file, codici ISRC e controlli prima del caricamento."
dek: "Un master perfetto può arrivare sulle piattaforme rovinato da un formato sbagliato o da metadati mancanti. Ecco cosa preparo per ogni consegna e cosa controllare prima di caricare."
date: 2026-11-09
category: mastering
order: 35
---

<div class="tldr"><span class="box__title">In breve</span>
<ul>
<li>Per la distribuzione: WAV a 24 bit alla frequenza del progetto, o quella richiesta dal distributore.</li>
<li>Il dither serve solo quando riduci i bit, ad esempio da 24 a 16, e si applica una volta sola, alla fine.</li>
<li>Nomi chiari, ISRC e metadati corretti evitano errori e ritardi nella pubblicazione.</li>
</ul></div>

Il mastering finisce con un file, e quel file deve arrivare intatto su Spotify, Apple Music, Beatport e su qualsiasi altro servizio. Bastano pochi controlli per evitare le sorprese più comuni.

## Bit e frequenza di campionamento

Oggi quasi tutti i distributori accettano WAV a 24 bit, e molti anche frequenze superiori a 44,1 kHz. Il mio consiglio: lavorare e consegnare alla frequenza del progetto, senza conversioni inutili. Se il distributore chiede 16 bit / 44,1 kHz, la conversione si fa una sola volta, alla fine, con un buon convertitore e il dither.

Per il badge [Apple Digital Masters](/it/articoli/apple-digital-masters-spiegato) servono file a 24 bit e un fonico approvato da Apple.

## Il dither

Quando riduci la risoluzione, ad esempio da 24 a 16 bit, gli ultimi bit vengono tagliati e producono una distorsione a bassissimo livello. Il dither aggiunge un rumore impercettibile che la trasforma in un fruscio neutro. Regole semplici:

- Si usa solo quando riduci i bit.
- Una volta sola, come ultimo passaggio della catena.
- Mai su file che verranno lavorati ancora, come gli stem per il mix.

<blockquote class="pull">Il formato non migliora un master. Ma un formato sbagliato può peggiorarlo, e non te ne accorgi finché il brano non è online.</blockquote>

## Cosa consegno

| File | Uso |
|---|---|
| WAV 24 bit, frequenza del progetto | Distribuzione digitale e Apple Digital Masters |
| WAV 16 bit / 44,1 kHz con dither | Solo se richiesto dal distributore o per CD |
| Versione extended o club, se esiste | Beatport e DJ |
| Strumentale, se richiesta | Sync, video, live |

Su ogni master il tetto è a −0,3/−0,2 dBTP, verificato anche dopo una codifica di prova.

## Nomi dei file e metadati

- Nome chiaro e uguale ovunque: `Artista - Titolo (Extended Mix).wav`.
- Codice ISRC diverso per ogni versione: original, extended, strumentale.
- Titolo, artisti, featuring e remixer scritti come nella copertina.
- Controlla che il file inizi e finisca puliti: nessun clic, nessun silenzio di troppo.

## Prima di caricare

Ascolta il master dall'inizio alla fine, controlla loudness e true peak con il [misuratore LUFS](/it/strumenti/misuratore-lufs) e confronta il file caricato con l'anteprima del distributore. Se qualcosa suona diverso, fermati prima di confermare la pubblicazione.

<div class="callout"><p><strong>Vuoi il master pronto per ogni piattaforma?</strong> Mastering analogico da $60: ricevi i file nei formati richiesti dal tuo distributore.</p><a class="cta" href="/it/#contact">Richiedi il mastering</a></div>
