---
slug: lufs-streaming-2026
title: "LUFS e streaming nel 2026: cosa fanno le piattaforme al tuo master"
seo_title: "LUFS e streaming nel 2026: cosa fanno le piattaforme"
description: "Spotify, Apple Music, YouTube, Tidal, Amazon Music e Deezer: i livelli di normalizzazione nel 2026 e cosa significano davvero per il loudness del tuo master."
dek: "La normalizzazione abbassa i master forti e alza poco quelli deboli. Ecco i valori aggiornati e come usarli senza inseguire un numero."
date: 2026-11-05
category: loudness
order: 1
---

<div class="tldr"><span class="box__title">In breve</span>
<ul>
<li>Spotify normalizza a −14 LUFS nella modalità Normale, a −11 in Alto e a −19 in Basso. Apple Music lavora a −16, Deezer intorno a −15, YouTube, Tidal e Amazon Music intorno a −14.</li>
<li>Un master più forte del riferimento viene abbassato. Uno più debole viene alzato solo se ha margine sui picchi, e su diverse piattaforme non viene alzato affatto.</li>
<li>Il loudness giusto dipende dal genere e dall’arrangiamento, non dalla piattaforma. Prima misuri, poi decidi.</li>
</ul></div>

Ogni settimana qualcuno mi chiede «a quanti LUFS devo masterizzare per Spotify?». È una domanda sensata, ma parte da un’idea sbagliata: che la piattaforma premi chi arriva esattamente a un certo numero. Non è così. La normalizzazione è un controllo del volume automatico, e conoscerne le regole serve a una cosa sola: sapere quanto forte suonerà davvero il tuo brano accanto a quelli degli altri.

## Cosa misura il LUFS

Il LUFS (Loudness Units relative to Full Scale) misura il volume percepito secondo la raccomandazione ITU-R BS.1770. Pesa le frequenze più o meno come le pesa l’orecchio, ignora i silenzi e restituisce un valore medio sull’intero brano: l’integrated. Un LU vale un dB. Se il tuo master misura −9 LUFS e la piattaforma lavora a −14, il player lo abbassa di 5 dB. Tutto qui.

Il resto della misura (short-term, momentary, loudness range) ti racconta come si muove il volume nel tempo, ed è utilissimo in mastering. Le piattaforme però guardano due numeri soltanto: l’integrated e il true peak.

## I valori delle piattaforme nel 2026

| Piattaforma | Riferimento | Master più forte | Master più debole |
|---|---|---|---|
| Spotify, Normale (predefinita) | −14 LUFS | Abbassato | Alzato lasciando 1 dB di margine sul true peak |
| Spotify, Alto | −11 LUFS | Abbassato | Alzato, con un limiter che interviene a −1 dB |
| Spotify, Basso | −19 LUFS | Abbassato | Alzato lasciando 1 dB di margine |
| Apple Music (Sound Check) | −16 LUFS | Abbassato | Alzato solo quanto permettono i picchi |
| YouTube | circa −14 LUFS | Abbassato | Non alzato |
| Tidal | circa −14 LUFS | Abbassato | Non alzato |
| Amazon Music | circa −14 LUFS | Abbassato | Non alzato |
| Deezer | circa −15 LUFS | Abbassato | Non alzato |

Spotify documenta i suoi valori nel dettaglio, compresi i casi limite. Per le altre piattaforme i numeri arrivano da documentazione più sintetica e da misure sul campo: prendili come riferimento affidabile, non come costanti fisiche, e ricontrollali ogni tanto.

### Tre dettagli di Spotify che contano

**Album e playlist non si comportano allo stesso modo.** Quando qualcuno ascolta un album dall’inizio alla fine, Spotify applica un unico guadagno all’intero disco: il brano più intimo resta più intimo degli altri, esattamente come l’avevi deciso in mastering. In shuffle e nelle playlist, invece, ogni brano viene normalizzato da solo.

**Un master debole sale meno di quanto pensi.** Spotify alza i brani più bassi di −14 solo finché il true peak resta sotto −1 dBTP. Nel suo esempio ufficiale, un brano a −20 LUFS con picchi a −5 dBTP arriva soltanto a −16 LUFS.

**Il lossless c’è, e cambia cosa conviene consegnare.** Dal settembre 2025 gli abbonati Premium possono ascoltare in FLAC fino a 24 bit e 44,1 kHz. La normalizzazione resta la stessa, ma un file consegnato a 24 bit arriva all’ascoltatore con tutta la sua risoluzione. Se il distributore lo accetta, consegna il master a 24 bit.

## Cosa succede a un master forte

Prendi un master a −8 LUFS con il true peak a −0,3 dBTP. Su Spotify, in modalità Normale, viene abbassato di 6 dB: suona a −14, con i picchi a −6,3 dBTP. Su Apple Music scende di 8 dB. Nessuna piattaforma ti punisce: ti abbassa, e basta.

Il problema vero è un altro. Se per arrivare a −8 hai schiacciato i transienti e la cassa ha perso l’attacco, a parità di volume il tuo brano suonerà più piatto di uno masterizzato a −10 con più punch. La normalizzazione pareggia il volume, non la densità né la vita del suono. Per questo sullo streaming la gara al volume non si vince: si vince facendo diventare forte il brano nel modo giusto, con saturazione e clipping dosati prima del limiter, in modo che il limiter debba solo fermare i picchi.

## Cosa succede a un master debole

Ora un master a −16 LUFS, con i picchi a −1,5 dBTP. Spotify vorrebbe alzarlo di 2 dB, ma i picchi finirebbero a +0,5 dBTP: per lasciare 1 dB di margine lo alza solo di mezzo dB. Suona a −15,5, un po’ più basso degli altri. YouTube e Tidal non lo alzano proprio.

Una ballad dinamica può permetterselo, perché la sua forza sta nei contrasti. Una traccia dance no: in playlist arriva dopo brani pieni e densi, e sembra spenta già dalla prima battuta.

## Allora, quanto forte?

Il numero lo decide la musica, non la piattaforma. Come orientamento, ecco dove finiscono la maggior parte delle uscite moderne che masterizzo, sempre con il true peak tra −0,3 e −0,2 dBTP:

- **Pop, rap, R&B, indie pensati per lo streaming:** tra −11 e −8 LUFS integrated.
- **Techno, house ed elettronica da club:** tra −11 e −9 LUFS, perché su Beatport e in console non c’è normalizzazione e un brano molto più basso degli altri nella cartella del DJ sembra debole.
- **Acustico, jazz, musica per immagini:** tra −16 e −12 LUFS, perché l’impatto vive nella dinamica.

Dentro queste fasce, il punto giusto è quello in cui un altro dB di limitazione smette di aggiungere densità e comincia a togliere punch. È diverso per ogni arrangiamento: un brano scarno ci arriva presto, una produzione piena può andare molto più in là.

<blockquote class="pull">La normalizzazione pareggia il volume. Non può pareggiare la densità: è quella che stai masterizzando.</blockquote>

## Il secondo numero: il true peak

Il true peak misura i picchi che si formano tra un campione e l’altro quando il segnale viene ricostruito. Lavoro con un limiter true peak con oversampling e un tetto tra −0,3 e −0,2 dBTP. Spotify consiglia −1 dBTP, e −2 se il master è più forte di −14 LUFS: in un articolo a parte spiego [perché non la tratto come una regola](/it/articoli/true-peak-1-dbtp) e cosa controllo al suo posto.

## Come verificare in un minuto

1. Trascina il master nel [misuratore LUFS](/it/strumenti/misuratore-lufs): ti restituisce integrated, short-term, true peak, loudness range e un’anteprima piattaforma per piattaforma. Il file non lascia il tuo computer.
2. Se conosci già i numeri, il [calcolatore di loudness per lo streaming](/it/strumenti/calcolatore-loudness-streaming) mostra quanto ogni servizio alza o abbassa il brano e dove finiscono i picchi.
3. Confronta con un brano di riferimento del tuo genere a pari loudness, con il [confronto A/B](/it/strumenti/confronto-ab-reference). È il test che ti dice davvero se il master regge.

<div class="callout"><p><strong>Vuoi un master che regga su ogni piattaforma?</strong> Mastering da $60, consegna in 48 ore, con una versione club se il brano ne ha bisogno.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
