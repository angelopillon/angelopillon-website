---
slug: lufs-spiegati
group: lufs-explained
title: "I LUFS spiegati: l’unica guida al loudness che serve a un produttore"
h1: "I LUFS spiegati: l’unica guida al loudness che serve a un produttore"
seo_title: "I LUFS spiegati: la guida al loudness per produttori"
description: "Integrated, short-term, momentary, LRA, true peak: cosa misura davvero ogni numero, cosa ne fanno le piattaforme di streaming e i valori che contano nel 2026."
dek: "Integrated, short-term, momentary, LRA, true peak: cosa misura davvero ogni numero, cosa ne fanno le piattaforme e i valori che contano nel 2026."
date: 2026-07-02
category: loudness
order: 0
---

<div class="tldr"><span class="box__title">In breve</span>
<ul>
<li>Il LUFS misura il volume percepito, con una pesatura in frequenza e un gate sui silenzi: non il livello del segnale.</li>
<li>Integrated è l’intero brano, short-term una finestra di 3 secondi, momentary di 400 ms. L’LRA descrive l’escursione dinamica.</li>
<li>Le piattaforme di streaming <strong>abbassano</strong> i master forti intorno ai −14 LUFS, e alzano poco o niente quelli deboli.</li>
</ul></div>

Il LUFS è il numero più frainteso della produzione musicale moderna, e la confusione costa cara: master schiacciati, drop deboli, giri infiniti di revisioni. Ecco quello che serve davvero sapere per lavorare, senza i compiti a casa delle norme broadcast.

## Cosa misura davvero il LUFS

I meter di picco leggono i massimi elettrici. L’RMS legge la potenza media. Nessuno dei due legge quello che sente il tuo orecchio. Il **LUFS (Loudness Units relative to Full Scale)** applica una pesatura in frequenza che imita l’udito umano, più sensibile ai medio-alti che ai sub, misura l’energia in blocchi sovrapposti di 400 ms e **taglia fuori i silenzi**, così intro e break non abbassano il numero. Un LU corrisponde a un dB di variazione, ma la misura in sé è percettiva. È per questo che tutte le grandi piattaforme l’hanno adottata.

## I quattro numeri del tuo meter

**Integrated** è il loudness dell’intero brano, con il gate: è il numero che le piattaforme usano per normalizzarti. **Short-term** (finestra di 3 secondi) mostra quanto è forte ogni sezione; lo short-term del tuo drop conta per chi ascolta più dell’integrated di tutto il brano. **Momentary** (400 ms) coglie i picchi istantanei di densità. **LRA** (Loudness Range) descrive la distanza tra le parti piano e quelle forti: la musica elettronica vive di solito tra 4 e 8 LU, una colonna sonora dinamica può superare i 15.

<blockquote class="pull">Le piattaforme normalizzano sull’integrated. Chi ascolta sente lo short-term. I grandi master gestiscono tutti e due.</blockquote>

## Cosa fanno davvero le piattaforme

Spotify, YouTube, Amazon e Tidal normalizzano intorno ai **−14 LUFS**, Apple Music intorno ai **−16**, Deezer a −15. Il dettaglio cruciale: **abbassano i brani più forti** fino al riferimento, ma alzano quelli più deboli solo finché i picchi lo permettono, e diverse piattaforme non li alzano affatto. Così un master a −8 LUFS su Spotify suona a −14: lo stesso volume di un master a −14, ma con tutta la densità e, se fatto male, tutta la distorsione della loudness war incorporate. Per questo «devo masterizzare a −14?» è la domanda sbagliata, e ho scritto [un articolo intero su quella giusta](/it/articoli/quanto-forte-deve-essere-il-master).

## True peak: l’altro numero che morde

Il LUFS dice quanto è forte; il **true peak (dBTP)** dice se la forma d’onda supera il fondo scala tra un campione e l’altro. Con un buon limiter true peak con oversampling, un tetto tra **−0,3 e −0,2 dBTP** mantiene puliti i codificatori lossy (AAC, Ogg): la crescita che aggiungono è molto più piccola di un decibel intero, quindi il tanto citato −1 dBTP regala soprattutto volume. Lascialo a 0, però, e regali distorsione a ogni ascolto in streaming. I due numeri insieme, LUFS integrated e dBTP, sono il 90% del controllo prima della consegna.

## Misuralo da solo, gratis

Ho costruito un [misuratore LUFS nel browser](/it/strumenti/misuratore-lufs) che esegue la misura completa ITU-R BS.1770-4: integrated con gate, andamento dello short-term, true peak con oversampling, LRA, più tonalità e BPM, tutto sul tuo dispositivo. Trascinaci dentro il master prima di mandarlo ovunque. Sessanta secondi di controllo valgono sempre più di una nuova consegna.

<div class="callout"><p><strong>Numeri fuori bersaglio?</strong> È letteralmente il mio lavoro. Mastering da $60, perfetto per lo streaming su ogni piattaforma.</p><a class="cta" href="/it/#contact">Sistema il loudness</a></div>
