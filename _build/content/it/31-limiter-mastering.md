---
slug: limiter-mastering
title: "Il limiter nel mastering: tutorial per volume senza distorsione"
h1: "Impostare il limiter nel mastering, passo passo"
seo_title: "Limiter nel mastering: impostazioni passo passo"
description: "Come impostare il limiter di mastering: tetto true peak a −0,3/−0,2 dBTP, oversampling, attacco e rilascio, quanta riduzione si può dare e come verificare il risultato."
dek: "Il limiter è l'ultimo anello della catena e quello che decide se il master è forte e pulito o forte e stanco. Le impostazioni contano meno di quanto lavoro gli chiedi."
date: 2026-11-09
category: tutorial
tutorial: true
howto:
  time: PT20M
  tools: ["DAW", "Limiter true peak con oversampling", "Meter LUFS e true peak"]
order: 31
---

<div class="howto-meta"><span><b>Tempo</b>20 minuti</span><span><b>Livello</b>Intermedio</span><span><b>Serve</b>Un limiter true peak e un meter di loudness</span></div>

Un limiter fa una cosa sola: impedisce al segnale di superare un tetto. Il problema è che per farlo abbassa i picchi, e se i picchi sono tanti e forti comincia a schiacciare la musica. Un buon master forte nasce prima del limiter: mix bilanciato, compressione e saturazione che hanno già tolto i picchi più appuntiti.

## La procedura

<ol class="steps-list">
<li><div><h3>Imposta il tetto a −0,3/−0,2 dBTP</h3><p>Con un limiter true peak con oversampling, il tetto a −0,3 o −0,2 dBTP tiene il file al sicuro dalla distorsione dopo la codifica e non regala volume. Ne parlo nell'articolo sul <a href="/it/articoli/true-peak-1-dbtp">true peak</a>.</p></div></li>
<li><div><h3>Attiva l'oversampling e il true peak</h3><p>Senza oversampling il limiter controlla solo i campioni, e i picchi tra un campione e l'altro passano. 4x è un buon punto di partenza.</p></div></li>
<li><div><h3>Attacco e lookahead</h3><p>Un lookahead tra 1 e 5 ms permette al limiter di prepararsi al picco. Più corto conserva i transienti, più lungo è più pulito sulle basse.</p></div></li>
<li><div><h3>Rilascio</h3><p>Parti dalla modalità automatica. Un rilascio troppo corto distorce le basse, uno troppo lungo fa pompare il brano dopo ogni colpo di cassa.</p></div></li>
<li><div><h3>Alza il guadagno a piccoli passi</h3><p>Guarda la riduzione sui passaggi più forti. Fino a 2-3 dB è quasi sempre trasparente; oltre i 4-5 dB senti la cassa perdere punta e il mix chiudersi. Se ti serve di più, lavora prima del limiter.</p></div></li>
<li><div><h3>Misura la loudness</h3><p>Controlla LUFS integrati, short-term e true peak sul brano intero. Il <a href="/it/strumenti/misuratore-lufs">misuratore LUFS</a> del sito lo fa nel browser.</p></div></li>
<li><div><h3>Confronta a pari volume</h3><p>Abbassa l'uscita del master fino a pareggiare la loudness del mix originale e confronta. Se il master suona più piccolo del mix a pari volume, il limiter sta lavorando troppo.</p></div></li>
</ol>

## Valori di partenza

| Parametro | Valore |
|---|---|
| Tetto | −0,3 / −0,2 dBTP |
| Oversampling | 4x o più |
| Lookahead | 1 – 5 ms |
| Rilascio | automatico, poi a orecchio |
| Riduzione sui picchi | 2 – 3 dB, raramente oltre 4 |

<blockquote class="pull">Il limiter non fa il volume. Lo difende. Il volume si costruisce prima, nel mix e nella catena di mastering.</blockquote>

## Due limiter in serie

Su brani molto forti a volte uso due stadi: un clipper o un limiter leggero che toglie 1-2 dB dei picchi più rapidi, poi il limiter finale. Ognuno lavora poco, e il risultato è più pulito di un solo limiter che lavora 5 dB.

<div class="callout"><p><strong>Master forte ma stanco?</strong> Il mastering analogico porta il volume dove serve senza schiacciare il brano. Da $60.</p><a class="cta" href="/it/#contact">Richiedi il mastering</a></div>
