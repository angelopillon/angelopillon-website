---
slug: fase-compatibilita-mono
title: "Fase e compatibilità mono: tutorial per un mix che regge ovunque"
h1: "Fase e compatibilità mono, passo passo"
seo_title: "Fase e compatibilità mono: tutorial per il mix"
description: "Come controllare fase e compatibilità mono nel mix: correlazione, polarità dei microfoni, layer di cassa, widener, basse in mono e verifica banda per banda."
dek: "Molti ascoltano in mono senza saperlo: altoparlanti dei telefoni, casse Bluetooth, impianti dei locali. Ecco come verificare che il mix non perda pezzi quando i due canali si sommano."
date: 2026-11-05
category: tutorial
tutorial: true
howto:
  time: PT30M
  tools: ["DAW", "Plugin utility con tasto mono", "Correlatore di fase", "Analizzatore di fase stereo"]
order: 10
---

<div class="howto-meta"><span><b>Tempo</b>30 minuti</span><span><b>Livello</b>Intermedio</span><span><b>Serve</b>Un plugin utility con il tasto mono, un correlatore e l’<a href="/it/strumenti/analizzatore-fase-stereo">analizzatore di fase stereo</a></span></div>

Un mix ampio e spettacolare in cuffia può perdere la cassa, la voce o metà del synth quando i due canali vengono sommati. Succede più spesso di quanto si pensi, perché il mono è ovunque: l’altoparlante del telefono, molte casse Bluetooth, gli impianti di bar e negozi, i sub di quasi tutti i club.

La fase non è un concetto astratto. Se due segnali simili arrivano con un piccolo ritardo, o uno è capovolto rispetto all’altro, nella somma alcune frequenze si rinforzano e altre si cancellano. In stereo l’orecchio spesso non se ne accorge. In mono sì.

## Come leggere un correlatore

Il correlatore misura quanto si assomigliano il canale sinistro e quello destro:

- **+1**: i due canali sono identici, il segnale è mono.
- **0**: i due canali non hanno relazione, il suono è molto largo.
- **Valori negativi**: i due canali sono in controfase, e nella somma mono si cancellano.

Un mix sano sta per gran parte del tempo tra circa +0,3 e +0,9. Brevi discese verso lo zero nelle code dei riverberi sono normali. Valori negativi prolungati, o una correlazione bassa nelle basse frequenze, sono un problema.

## Il metodo, passo per passo

<ol class="steps-list">
<li><div><h3>Metti un tasto mono sul master</h3><p>Inserisci alla fine della catena del master un plugin utility con il tasto mono. Passa da stereo a mono spesso, a volume moderato, durante tutto il mix. Non serve mixare in mono: serve accorgersi subito di quello che sparisce.</p></div></li>
<li><div><h3>Controlla la polarità delle riprese multi-microfono</h3><p>Cassa dentro e fuori, rullante sopra e sotto, DI e microfono sull’amplificatore: ogni coppia va controllata. Inverti la polarità di uno dei due e tieni la posizione che dà più basse e più corpo. Il microfono sotto il rullante, quasi sempre, va invertito.</p></div></li>
<li><div><h3>Allinea nel tempo DI e amplificatore</h3><p>Il microfono davanti all’amplificatore arriva dopo il segnale diretto: il suono percorre circa 34 cm in un millisecondo. Sposta la traccia del microfono indietro finché le forme d’onda coincidono. Le basse diventano subito più piene.</p></div></li>
<li><div><h3>Allinea i layer di cassa e i campioni sovrapposti</h3><p>Due casse sovrapposte, o una cassa con un 808, possono cancellarsi a vicenda. Ingrandisci le forme d’onda, allinea gli attacchi e prova a invertire la polarità di uno dei due: se insieme suonano più sottili di quanto suoni ciascuno da solo, c’è una cancellazione.</p></div></li>
<li><div><h3>Porta le basse in mono</h3><p>Sotto i 100–150 Hz il mix dovrebbe essere mono, o quasi. Usa un EQ in mid/side per togliere il canale side nelle basse, oppure un plugin dedicato. Molti impianti da club sommano i sub in mono, e un basso largo in studio diventa un basso debole in pista.</p></div></li>
<li><div><h3>Controlla widener, chorus ed effetto Haas</h3><p>Un ritardo tra 10 e 30 ms su un solo lato allarga molto un suono, ma in mono crea un filtro a pettine: il suono diventa metallico o sparisce. Usa questi effetti con misura, preferisci le doppie registrate vere, e ascolta ogni elemento allargato in mono.</p></div></li>
<li><div><h3>Ascolta i ritorni di riverbero e delay in mono</h3><p>Molti riverberi stereo sono volutamente poco correlati. Va bene, finché in mono la voce non perde il suo spazio o diventa vuota. Se succede, riduci l’ampiezza del ritorno o usa un riverbero diverso.</p></div></li>
<li><div><h3>Verifica banda per banda</h3><p>Trascina il mix nell’<a href="/it/strumenti/analizzatore-fase-stereo">analizzatore di fase stereo</a>. Ti mostra la correlazione complessiva e per banda, la perdita di volume nel passaggio a mono, il tempo passato in correlazione negativa e il vettorscopio. Con l’ascolto del solo canale side senti esattamente cosa sparisce in mono.</p></div></li>
<li><div><h3>Fai l’ultimo ascolto su un altoparlante mono</h3><p>Il telefono o una cassa Bluetooth economica sono il test più severo. Voce, cassa e ritmo devono restare chiari. Se la cassa sparisce, torna alle basse e ai layer.</p></div></li>
</ol>

## I valori che controllo

| Misura | Dove dovrebbe stare | Quando preoccuparsi |
|---|---|---|
| Correlazione complessiva | Tra circa +0,3 e +0,9 | Negativa per più del 5% del brano |
| Correlazione sotto i 200 Hz | Sopra +0,7 | Sotto +0,7, o negativa |
| Perdita di volume in mono | Uno o due dB su un mix ampio | Oltre 3,5 dB |

Sono gli stessi riferimenti che usa l’analizzatore per segnalare i problemi.

<blockquote class="pull">Il mono non è un formato del passato. È il modo in cui il tuo brano suona dal telefono di qualcuno, e nei sub di quasi ogni club.</blockquote>

## Domande frequenti

### Un mix con correlazione +1 è perfetto?

No: è mono. È perfettamente compatibile, ma non ha ampiezza. L’obiettivo è un mix largo nelle parti che devono esserlo, centrato in quelle che reggono il brano: voce, cassa, basso, rullante.

### La correlazione negativa è sempre un errore?

No. Alcuni effetti la producono per un istante, e certi riverberi la sfiorano nelle code. Diventa un errore quando dura, quando riguarda le basse, o quando in mono senti sparire qualcosa di importante.

### Il mastering può sistemare la fase?

Solo in parte. In mastering posso portare in mono le basse o ridurre l’ampiezza di una banda, ma non posso riallineare due microfoni o due campioni sommati nel mix. Quei problemi si risolvono alla fonte, oppure con lo [stem mastering](/it/articoli/differenza-mix-mastering).

<div class="callout"><p><strong>Il mix si sfalda in mono?</strong> Lo sistemo nel mix o, se le tracce non ci sono più, con lo stem mastering. Mix e master da 90 euro.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
