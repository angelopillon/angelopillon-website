---
slug: true-peak-1-dbtp
title: "True peak: perché −1 dBTP non è una regola, e cosa controllo al suo posto"
seo_title: "True peak: perché −1 dBTP non è una regola"
description: "Cos’è il true peak, da dove nasce il consiglio di −1 dBTP, perché consegno a −0,3/−0,2 dBTP con un limiter true peak e come verificare il file dopo la codifica."
dek: "Il margine di −1 dB nasce per proteggere il brano dalla codifica lossy. È un consiglio prudente, non una legge: con il limiter giusto e una verifica dopo la codifica, spesso regala solo volume e punch."
date: 2026-11-05
category: loudness
order: 5
---

<div class="tldr"><span class="box__title">In breve</span>
<ul>
<li>Il true peak è il picco della forma d’onda ricostruita, tra un campione e l’altro. Un file può restare sotto 0 dBFS in ogni campione e superarlo una volta convertito in analogico.</li>
<li>Spotify consiglia −1 dBTP, e −2 dBTP per i master più forti di −14 LUFS, per proteggersi dalla distorsione dei formati lossy.</li>
<li>Io consegno con il tetto a −0,3/−0,2 dBTP, con un limiter true peak con oversampling, e verifico il file codificato. Conta che la versione codificata non distorca, non il numero sul meter.</li>
</ul></div>

Pochi numeri nel mastering vengono ripetuti con la stessa convinzione di «−1 dBTP». Lo trovi nelle guide delle piattaforme, nei forum, nei preset dei limiter. Non è un numero sbagliato: è un margine di sicurezza pensato per un problema preciso. Il punto è capire quale problema, e se nel tuo caso esiste davvero.

## Campioni e forma d’onda reale

L’audio digitale è una sequenza di campioni. Il convertitore, in riproduzione, non unisce i punti con delle linee: ricostruisce una forma d’onda continua che passa per tutti i campioni. Tra un campione e l’altro quella forma d’onda può salire più in alto dei campioni stessi.

L’esempio classico è una sinusoide a un quarto della frequenza di campionamento, campionata a metà strada tra lo zero e il picco: tutti i campioni valgono circa −3 dBFS, ma l’onda ricostruita arriva a 0 dBFS. Un meter di picco a campione legge −3. Un meter true peak, che sovracampiona il segnale (di quattro volte, secondo la ITU-R BS.1770), legge 0.

Con la musica vera succede di continuo, soprattutto nei master molto limitati: i campioni sono schiacciati contro il tetto e la forma d’onda tra di loro lo supera.

## Da dove viene −1 dBTP

I formati lossy come AAC, Ogg Vorbis e MP3 buttano via informazioni per ridurre il peso del file. Il segnale decodificato non è identico all’originale e i picchi possono crescere un po’. Se la versione decodificata supera il fondo scala e la catena di riproduzione non ha margine, il risultato è distorsione.

Il margine di 1 dB serve a coprire questa crescita in quasi ogni situazione: materiale molto brillante, bitrate bassi, codec diversi. Spotify lo raccomanda nella sua documentazione, e chiede 2 dB di margine ai master più forti di −14 LUFS, perché più un master è denso più tende a crescere in codifica. Lo stesso valore compare nelle raccomandazioni tecniche dell’AES per lo streaming.

## Perché non lo applico alla cieca

**Quanto cresce il picco dipende dal materiale.** Su un master limitato bene con un limiter true peak con oversampling, codificato ai bitrate degli abbonamenti a pagamento, la crescita è spesso di pochi decimi di dB, non di un dB intero. Su un master con alti duri e clipping aggressivo può essere molto di più. Una regola fissa tratta allo stesso modo due casi opposti.

**Il dB che lasci ha un costo.** A parità di loudness integrato, abbassare il tetto di 0,7 dB significa chiedere al limiter 0,7 dB di riduzione in più sui picchi. Su un brano dance o rap vuol dire transienti un po’ più morbidi, una cassa che colpisce un po’ meno. Dove non c’è normalizzazione, come su Beatport, in club o nei file per DJ, è anche volume in meno.

**Una parte degli ascolti non è più lossy.** Dal 2025 Spotify offre il lossless agli abbonati Premium, Apple Music, Tidal e Amazon Music lo offrono da anni. Chi ascolta in FLAC o ALAC riceve il master senza codifica lossy, e lì il problema della crescita dei picchi non esiste.

<blockquote class="pull">Il margine serve a proteggere la versione codificata. Allora la cosa giusta è controllare la versione codificata, non scegliere il margine a occhio.</blockquote>

## Cosa controllo al suo posto

1. **Limiter true peak con oversampling, tetto a −0,3/−0,2 dBTP.** Il limiter deve rilevare i picchi tra i campioni, non solo i campioni.
2. **Misura del master con un meter true peak.** Il [misuratore LUFS](/it/strumenti/misuratore-lufs) sovracampiona di quattro volte, come prevede la BS.1770, e segnala i picchi sopra la soglia.
3. **Codifica di prova.** Codifico il master in AAC a 256 kbps, il formato di Apple Music, e in un formato lossy ad alta qualità, poi misuro i picchi della versione decodificata. Gli strumenti che Apple mette a disposizione per gli Apple Digital Masters servono proprio a verificare il clipping dopo la codifica AAC.
4. **Se la versione codificata va in clip, intervengo sulla causa.** Spesso sono alti troppo aggressivi o uno stadio di clipping spinto troppo. Correggo quello, oppure abbasso il tetto di qualche decimo, finché la versione codificata è pulita.
5. **Ascolto la versione codificata contro il master.** È l’ultima parola: se non sento differenze di distorsione, il master è pronto.

## Le eccezioni che rispetto

Se un’etichetta o un distributore indica un tetto preciso nelle specifiche di consegna, si consegna quello: è un requisito del cliente, non una scelta di mastering. Lo stesso vale per i contesti con norme proprie, come le consegne per la televisione.

E se il tuo master sta già a −1 dBTP e suona come vuoi, non c’è niente da correggere: il punto di questo articolo non è che −1 dBTP sia un errore, ma che non è l’unica risposta giusta.

## Come verificare il tuo master

Trascina il file nel [misuratore LUFS](/it/strumenti/misuratore-lufs) e guarda il true peak insieme al loudness integrato. Poi apri il [calcolatore di loudness per lo streaming](/it/strumenti/calcolatore-loudness-streaming): ti mostra dove finiscono i picchi dopo la normalizzazione di ogni piattaforma. Se vuoi il quadro completo sui livelli, l’articolo su [LUFS e streaming nel 2026](/it/articoli/lufs-streaming-2026) parte da qui.

<div class="callout"><p><strong>Master forte, pulito anche dopo la codifica.</strong> Mastering da $60, con la verifica dei file codificati inclusa.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
