---
slug: errori-premaster
title: "Gli errori nel premaster che peggiorano il mastering, e come evitarli"
seo_title: "Errori nel premaster da evitare prima del mastering"
description: "Limiter sul master, clipping, normalizzazione, MP3, code tagliate, widener sul bus: gli errori più comuni nei file che arrivano al mastering e come correggerli."
dek: "Il mastering parte da quello che ricevo. Ecco gli errori che vedo più spesso nei premaster, e cosa fare prima di premere «esporta»."
date: 2026-11-05
category: mastering
order: 13
---

<div class="tldr"><span class="box__title">In breve</span>
<ul>
<li>Il premaster è il mix stereo che mandi al mastering: WAV alla frequenza del progetto, 24 o 32 bit float, senza limiter, senza clipping, senza normalizzazione.</li>
<li>Gli errori di livello e di formato si correggono in cinque minuti. Quelli di mix, come sibilanti dure o basse larghe, il mastering li amplifica.</li>
<li>Una nota con i riferimenti e la destinazione del brano vale quanto un file perfetto.</li>
</ul></div>

Ogni settimana ricevo premaster di ogni tipo. La maggior parte va benissimo. Una parte arriva con problemi che costano al risultato finale più di quanto chi l’ha esportata immagini, e quasi sempre si potevano evitare in pochi minuti. Li ho raccolti qui, divisi per tipo.

## Errori di livello

**Il limiter sul master.** È l’errore più frequente. Un limiter sul premaster ha già usato il margine che mi serve per lavorare: i picchi sono schiacciati e non posso più decidere io come e quanto rendere forte il brano. Toglilo prima di esportare. Se il tuo bilanciamento dipende da lui, mandami entrambe le versioni: quella senza per lavorare, quella con come riferimento di come lo immagini.

**Il clipping in esportazione.** Un WAV a 24 bit si ferma a 0 dBFS: tutto quello che sta sopra viene tagliato, e il taglio non si recupera. Controlla i picchi del file esportato con il [misuratore LUFS](/it/strumenti/misuratore-lufs), che segnala anche i campioni in clip.

**La normalizzazione attiva.** Alza il file fino a 0 dBFS e cancella il margine che ti eri lasciato. Tienila sempre spenta.

**La paura di consegnare «basso».** Un premaster con i picchi tra −6 e −3 dBFS è perfetto. Il volume finale lo decide il mastering: un premaster più forte non dà un master migliore.

## Errori di formato

**MP3 o AAC al posto del WAV.** Un formato lossy ha già perso informazioni, e il mastering amplifica gli artefatti della codifica. Serve un WAV, o un AIFF.

**Frequenza di campionamento cambiata.** Esporta alla frequenza del progetto. Portare un progetto a 44,1 kHz a 96 kHz non aggiunge qualità, aggiunge solo peso al file.

**Dither inutile o doppio.** Se esporti a 32 bit float, il dither non serve. Se esporti a 24 bit va bene applicarlo una volta. Mai a 16 bit: la riduzione finale la faccio io.

**Inizio e fine tagliati.** Lascia qualche decimo di secondo di silenzio prima del primo suono e tutta la coda alla fine. Se vuoi una dissolvenza, non farla nel premaster: dimmelo, la faccio dopo il limiter, dove suona meglio.

<blockquote class="pull">Gli errori di livello e di formato si correggono in cinque minuti. Quelli di mix, il mastering li rende più evidenti.</blockquote>

## Errori di mix che il mastering amplifica

**Sibilanti e piatti aggressivi.** Il limiter e l’aumento di volume li rendono ancora più duri. Un de-esser sulla voce e un controllo degli alti sui piatti, nel mix, valgono molto più di qualsiasi correzione in mastering.

**Basse troppo forti o troppo larghe.** Un sub fuori misura fa lavorare il limiter sulle basse e il brano «pompa» con la cassa. Un basso largo si indebolisce in mono e sugli impianti da club. Controlla le basse con l’[analizzatore di fase stereo](/it/strumenti/analizzatore-fase-stereo).

**Allargatori stereo sul master bus.** Fanno sembrare il mix più grande, ma possono creare problemi di fase che emergono in mono e dopo la codifica. Se ti serve ampiezza, cercala sui singoli elementi.

**Troppa compressione sul bus.** Un compressore spinto sul mix bus toglie transienti che il mastering non può restituire. Se ti piace il suono, va bene: ma dovrebbe lavorare per pochi dB.

**Una voce fuori posto.** Se la voce è troppo bassa o troppo alta, il mastering può aiutare poco senza toccare tutto il resto. Qui la soluzione è una revisione del mix o lo [stem mastering](/it/articoli/differenza-mix-mastering).

## Errori di comunicazione

**Nessun riferimento.** Due o tre brani che suonano come vorresti suonasse il tuo mi dicono più di dieci righe di descrizione.

**Nessuna destinazione.** Streaming, club, entrambi? Il brano esce come singolo o in un EP? Le scelte sul loudness cambiano. Se hai dubbi, leggi [quanto forte deve essere un master per lo streaming](/it/articoli/lufs-streaming-2026).

**Versioni con nomi confusi.** «Mix_finale_v3_ok_DEF.wav» non aiuta nessuno. Un nome, una data, una versione.

<div class="box"><span class="box__title">Checklist del premaster</span>
<ul>
<li>WAV o AIFF, alla frequenza del progetto, 24 bit o 32 bit float.</li>
<li>Nessun limiter, maximizer o clipper sul master.</li>
<li>Nessun clipping, normalizzazione spenta.</li>
<li>Picchi tra −6 e −3 dBFS, ma conta soprattutto l’assenza di clipping.</li>
<li>Silenzio all’inizio, coda intera alla fine, nessuna dissolvenza.</li>
<li>Versione con il tuo limiter come riferimento, se il mix dipende da lui.</li>
<li>Due o tre brani di riferimento e la destinazione del brano.</li>
</ul></div>

Per la procedura completa nel tuo DAW, segui il [tutorial sull’esportazione delle tracce](/it/articoli/esportare-tracce-mix-mastering).

<div class="callout"><p><strong>Premaster pronto?</strong> Mastering da $60, consegna in 48 ore. Se qualcosa nel file non va, te lo dico prima di cominciare.</p><a class="cta" href="/it/#contact">Inizia un progetto</a></div>
