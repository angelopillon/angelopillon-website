---
slug: esportare-tracce-mix-mastering
title: "Come esportare le tracce per mix e mastering: Ableton, FL Studio, Logic, Pro Tools e Cubase"
h1: "Esportare le tracce per mix e mastering, DAW per DAW"
seo_title: "Esportare le tracce per mix e mastering, DAW per DAW"
description: "Come preparare ed esportare tracce, stem e premaster: formati, punto di partenza, code degli effetti, nomi. Per Ableton, FL Studio, Logic, Pro Tools e Cubase."
dek: "Metà dei problemi di un mix nasce prima del mix: file che non partono dallo stesso punto, riverberi tagliati, limiter dimenticati sul master. Ecco come evitarli."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT45M
  tools: ["DAW", "Servizio di trasferimento file"]
order: 6
---

<div class="howto-meta"><span><b>Tempo</b>Da 20 a 45 minuti</span><span><b>Livello</b>Base</span><span><b>Serve</b>Il progetto aperto nel tuo DAW e un servizio come WeTransfer, Google Drive o Dropbox</span></div>

Quando apro una sessione nuova, i primi minuti mi dicono quanto sarà fluido il lavoro. Se i file partono tutti dallo stesso punto, hanno nomi chiari e arrivano con una nota su tempo e tonalità, si comincia subito a mixare. Se no, si comincia con le domande. Questo tutorial ti porta dalla sessione finita alla cartella pronta da inviare.

## Il metodo, valido per ogni DAW

<ol class="steps-list">
<li><div><h3>Salva una copia del progetto</h3><p>Lavora su una copia chiamata, per esempio, «Titolo_export». Così puoi togliere plugin e automazioni senza rischiare la versione originale.</p></div></li>
<li><div><h3>Togli tutto dal master</h3><p>Disattiva limiter, maximizer, clipper e compressori sul master. Se il tuo bilanciamento dipende da quella catena, esporta comunque una versione con il master processato: mi servirà come riferimento, non come materiale di lavoro.</p></div></li>
<li><div><h3>Decidi cosa stampare e cosa no</h3><p>Lascia attivi gli effetti che fanno parte del suono: il distorsore sul synth, il filtro automatizzato, il chorus sulla chitarra. Togli i trattamenti di bilanciamento generici, come gli equalizzatori correttivi «da mix» o la compressione sui bus. Se un riverbero o un delay è parte dell’idea, esportalo come traccia separata, così posso dosarlo.</p></div></li>
<li><div><h3>Fai partire tutto dallo stesso punto</h3><p>Ogni file deve iniziare allo stesso istante, di solito la battuta 1 o il punto zero della sessione, anche se lo strumento entra dopo un minuto. È la regola più importante: se i file sono allineati, il mix si ricompone da solo.</p></div></li>
<li><div><h3>Lascia le code</h3><p>Estendi l’intervallo di esportazione di qualche secondo dopo l’ultima nota, in modo che riverberi e delay si esauriscano. Una coda tagliata non si recupera.</p></div></li>
<li><div><h3>Imposta formato e risoluzione</h3><p>WAV, alla frequenza di campionamento del progetto, a 24 bit o 32 bit float. Niente normalizzazione, niente dither se esporti a 32 bit float, niente MP3. Se la sessione è a 44,1 kHz, esporta a 44,1: convertire non aggiunge qualità.</p></div></li>
<li><div><h3>Dai nomi chiari</h3><p>Numero, strumento, dettaglio: «01_Kick», «02_Snare_Top», «14_Voce_Lead», «15_Voce_Doppie». Evita «Audio 12» e «Traccia senza nome». Se una traccia ha già la sua elaborazione stampata, scrivilo nel nome: «08_Synth_Lead_FX».</p></div></li>
<li><div><h3>Controlla, comprimi e invia</h3><p>Reimporta i file in un progetto vuoto e verifica che suonino allineati come nell’originale. Aggiungi un bounce del tuo mix come riferimento e una nota con BPM, tonalità, brani di riferimento e scadenza. Comprimi la cartella in uno zip e inviala con WeTransfer, Google Drive o Dropbox.</p></div></li>
</ol>

## Le istruzioni DAW per DAW

Uso i nomi dei menu in inglese, la lingua in cui la maggior parte dei produttori usa il DAW: se il tuo è in italiano, le voci sono le equivalenti. I nomi cambiano un po’ tra una versione e l’altra, ma il percorso resta questo.

### Ableton Live

Apri **File › Export Audio/Video** (Cmd/Ctrl + Shift + R). In «Rendered Track» scegli **All Individual Tracks**: Live esporta un file per ogni traccia e per ogni traccia di ritorno. Imposta l’inizio a 1.1.1 e una lunghezza che comprenda le code. Disattiva «Normalize», «Render as Loop» e «Convert to Mono». Se vuoi i file senza gli effetti dei ritorni e del master, lascia spenta «Include Return and Master Effects». Formato WAV, 24 bit o 32 bit.

### FL Studio

Prima di tutto, controlla che ogni strumento sia instradato a un proprio canale del mixer: FL esporta per canale del mixer, non per canale del Channel rack. Poi **File › Export › Wave file** (Ctrl + R). Modalità «Full song», coda impostata su «Leave remainder» per non tagliare riverberi e delay, formato 24 bit o 32 bit float. Attiva **Split mixer tracks** per ottenere un file per ogni canale del mixer, e lascia disattivati gli effetti del master.

### Logic Pro

Usa **File › Export › All Tracks as Audio Files** (Shift + Cmd + E). Formato WAVE, 24 bit o 32 bit float, «Normalize» su Off. Lascia spenta «Bypass Effect Plug-ins» se vuoi stampare l’elaborazione e attiva «Include Audio Tail». Logic esporta tutti i file dall’inizio del progetto, quindi restano allineati.

### Pro Tools

Seleziona nella timeline tutto il brano, dall’inizio della sessione alla fine delle code. Seleziona le tracce, fai clic destro sul nome di una di esse e scegli **Bounce** (Track Bounce). Imposta WAV, interleaved, 24 bit o 32 bit float alla frequenza della sessione e usa il bounce offline per fare prima. Nelle versioni senza Track Bounce, puoi fare il bounce di una traccia alla volta mettendola in solo, oppure usare Commit.

### Cubase

Imposta i locatori dall’inizio del brano alla fine delle code, poi apri **File › Export › Audio Mixdown**. Nella lista dei canali a sinistra seleziona tutti quelli da esportare: Cubase crea un file per ciascuno. L’esportazione di più canali insieme è disponibile nelle edizioni maggiori, come Cubase Pro; nelle altre esporti un canale alla volta. Formato Wave, 24 bit o 32 bit float, frequenza del progetto. Lascia disattivati il downmix mono e l’esportazione in tempo reale, a meno che tu non usi hardware esterno.

## E per il mastering?

Per il mastering stereo mi basta un solo file: il tuo mix esportato come sopra, senza limiter sul master. Picchi tra −6 e −3 dBFS sono comodi; l’importante è che non ci sia clipping. Se vuoi che senta come lo immagini a volume pieno, aggiungi la versione con il tuo limiter, chiamandola «riferimento».

Per lo **stem mastering** servono di solito da quattro a otto gruppi (ne accetto fino a 40), per esempio batteria, basso, voce, musica ed effetti, esportati con lo stesso metodo. Prima di inviarli fai una prova: se li sommi in un progetto vuoto devono suonare esattamente come il tuo mix. Se suonano diversi, probabilmente c’è un compressore sul bus master che lavorava sull’insieme.

<div class="box"><span class="box__title">Checklist prima dell’invio</span>
<ul>
<li>Tutti i file partono dallo stesso punto e hanno la stessa durata.</li>
<li>WAV, frequenza del progetto, 24 bit o 32 bit float, niente normalizzazione.</li>
<li>Nessun limiter o maximizer sul master.</li>
<li>Code di riverberi e delay intere.</li>
<li>Nomi chiari, numerati.</li>
<li>Bounce del tuo mix come riferimento.</li>
<li>Nota con BPM, tonalità, riferimenti e scadenza.</li>
</ul></div>

Se non conosci BPM e tonalità del brano, il [misuratore LUFS](/it/strumenti/misuratore-lufs) li stima dal file, insieme a loudness e true peak. E se vuoi capire come impostare i livelli prima dell’esportazione, parti dal [tutorial sul gain staging](/it/articoli/gain-staging-daw).

<div class="callout"><p><strong>Cartella pronta?</strong> Mandami il link nel modulo di contatto: rispondo di solito entro poche ore.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
