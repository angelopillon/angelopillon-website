---
slug: gain-staging-daw
title: "Gain staging nel DAW: tutorial passo passo per un mix pulito"
h1: "Gain staging nel DAW, passo passo"
seo_title: "Gain staging nel DAW: tutorial passo passo"
description: "Come impostare i livelli nel DAW dalla registrazione al master bus: clip gain, plugin tarati a −18 dBFS, margine per il mastering. Tutorial con valori pratici."
dek: "Un DAW a 32 bit float non va in clip al suo interno, ma i plugin e le tue orecchie reagiscono al livello. Ecco il metodo che uso in otto passaggi."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Meter di picco", "Meter VU o RMS", "Misuratore LUFS"]
order: 2
---

<div class="howto-meta"><span><b>Tempo</b>30 minuti su una sessione</span><span><b>Livello</b>Base</span><span><b>Serve</b>Il tuo DAW, un meter di picco e un meter VU o RMS</span></div>

Gain staging significa controllare il livello in ogni punto della catena: dalla registrazione al primo plugin, da un plugin all’altro, dai canali ai bus fino al master. L’obiettivo è semplice. Ogni processore deve lavorare nella zona per cui è stato progettato, i fader devono stare in una posizione comoda e il mix deve arrivare al mastering con margine.

Quando ricevo una sessione con i livelli in ordine, il mix parte più veloce e suona meglio. Quando ricevo tracce che entrano nei plugin 15 dB più calde del previsto, passo la prima ora a capire quale distorsione è voluta e quale no.

## Perché conta ancora, anche a 32 bit float

Il motore di mix di un DAW moderno lavora in virgola mobile: un canale può superare 0 dBFS senza andare in clip al suo interno. È vero, ma non chiude il discorso, per quattro motivi.

- **I plugin che emulano l’hardware reagiscono al livello.** Compressori, saturatori ed equalizzatori modellati su macchine analogiche sono tarati su un livello di riferimento, spesso 0 VU = −18 dBFS. Se li colpisci 12 dB più forte ottieni compressione e distorsione che non hai scelto.
- **Alcuni plugin vanno in clip comunque.** Non tutti lavorano internamente in virgola mobile, e molti limiter e clipper hanno un tetto fisso.
- **Il file finale va in clip.** Un WAV a 24 bit si ferma a 0 dBFS: tutto quello che sta sopra viene tagliato in esportazione.
- **Il volume inganna l’orecchio.** Più forte sembra sempre meglio. Se un plugin alza il livello di 3 dB, ti sembrerà migliorare il suono anche quando lo peggiora.

## Il metodo in otto passaggi

<ol class="steps-list">
<li><div><h3>Imposta la sessione e registra con margine</h3><p>Lavora a 24 bit o 32 bit float, alla frequenza di campionamento del progetto, senza limiter sul master. In registrazione punta a picchi tra −12 e −6 dBFS e a un livello medio intorno a −18 dBFS. A 24 bit il rumore del convertitore è molto più basso di quello del microfono e della stanza: registrare «caldo» non migliora niente e rischia il clip.</p></div></li>
<li><div><h3>Porta ogni sorgente a un livello simile con il clip gain</h3><p>Prima di inserire qualsiasi plugin, usa il clip gain (o il gain della regione) per portare ogni traccia audio a un livello medio di circa −18 dBFS RMS, con i fader a 0. I sample di batteria arrivano spesso con i picchi a 0 dBFS: abbassali qui, non con il fader.</p></div></li>
<li><div><h3>Metti un trim in cima agli strumenti virtuali</h3><p>Synth e sampler non hanno clip gain. Abbassa il volume d’uscita dello strumento o inserisci come primo plugin un’utility di guadagno, e porta anche queste tracce intorno a −18 dBFS di media. Molti preset sono pensati per impressionare in negozio, non per stare in un mix.</p></div></li>
<li><div><h3>Rispetta la taratura dei plugin analogici</h3><p>Controlla nel manuale a quale livello corrisponde 0 VU: di solito −18 dBFS, a volte −20 o −14. Inserisci un meter VU prima del plugin e regola l’ingresso perché l’ago oscilli intorno a 0 VU nelle parti più forti. Se vuoi più saturazione, alza l’ingresso sapendo cosa stai facendo.</p></div></li>
<li><div><h3>Pareggia ingresso e uscita di ogni plugin</h3><p>Dopo ogni processore, regola l’uscita perché il livello percepito sia uguale con il plugin attivo e in bypass. Molti plugin hanno una funzione di auto gain o gain match: usala. Solo così il bypass ti dice se il processore migliora il suono o lo rende soltanto più forte.</p></div></li>
<li><div><h3>Bilancia con i fader partendo da un elemento guida</h3><p>Scegli l’elemento che regge il brano (spesso la cassa nell’elettronica, la voce nel pop e nel rap) e fissalo intorno a −18 dBFS di media. Costruisci il resto attorno a lui. Se un fader finisce sotto i −20 dB, torna al clip gain: in quella zona la corsa del fader è troppo sensibile per fare regolazioni fini.</p></div></li>
<li><div><h3>Controlla bus e master</h3><p>Nessun bus deve andare in clip, soprattutto se usi plugin a tetto fisso. Sul master, prima di qualsiasi processore, i picchi del mix dovrebbero stare intorno a −6 dBFS. Se sei troppo alto, abbassa tutti i canali insieme (con un VCA o selezionandoli tutti), non il fader del master: in Ableton, Logic e FL Studio gli insert del master sono prima del fader, quindi abbassare il master non cambia il livello che entra nei plugin. Pro Tools è l’eccezione: sul Master Fader gli insert sono dopo il fader.</p></div></li>
<li><div><h3>Esporta per il mastering e verifica</h3><p>Togli limiter e maximizer dal master, esporta un WAV a 24 bit o 32 bit float alla frequenza del progetto, senza normalizzazione. Picchi tra −6 e −3 dBFS sono comodi, ma la cosa che conta davvero è che non ci sia clipping. Trascina il file nel <a href="/it/strumenti/misuratore-lufs">misuratore LUFS</a> per controllare picchi e true peak.</p></div></li>
</ol>

## Gli errori che vedo più spesso

**Il limiter sul master «per sentire come suonerà».** È comprensibile, ma se il bilanciamento dipende dal limiter, togliendolo il mix cambia. Se vuoi lavorarci sopra, va bene: mandami due versioni, con e senza.

**Il fader del master abbassato per evitare il clip.** Nella maggior parte dei DAW abbassa l’uscita ma non il livello che arriva agli insert: il compressore sul mix bus continua a lavorare troppo.

**I plugin confrontati a volumi diversi.** È il motivo per cui tanti mix finiscono con troppi alti e troppa compressione: ogni scelta sembrava migliore perché era un po’ più forte.

**La normalizzazione in esportazione.** Alza il file fino a 0 dBFS e toglie il margine che ti eri preso. Tienila sempre disattivata per i file destinati al mix o al mastering.

<blockquote class="pull">Il gain staging non è una regola di livello. È il modo per far lavorare ogni plugin come è stato progettato e per giudicare con le orecchie, non con il volume.</blockquote>

## E con i plugin solo digitali?

Un equalizzatore digitale pulito o un compressore senza modellazione analogica non cambia carattere con il livello d’ingresso: lì il gain staging serve soprattutto a tenere i fader comodi e a confrontare a pari volume. Il metodo resta lo stesso, cambia solo quanto sei severo con i livelli d’ingresso.

Quando il mix è pronto, prepara le tracce o il premaster seguendo [il tutorial sull’esportazione per mix e mastering](/it/articoli/esportare-tracce-mix-mastering), e dai un’occhiata agli [errori più comuni nel premaster](/it/articoli/errori-premaster).

<div class="callout"><p><strong>Preferisci che i livelli li sistemi io?</strong> Mix e master da 90 euro: mi mandi le tracce, ti restituisco un master pronto per ogni piattaforma.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
