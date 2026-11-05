=== hub ===
## Perché esistono questi strumenti

Ogni giorno faccio misure: il loudness prima e dopo il mastering, la correlazione di un mix molto largo, il tempo di un delay, l’altezza di una cassa. Questi sono gli stessi controlli, nella versione che volevo poter dare ai miei clienti: gratuiti, senza registrazione e senza caricare da nessuna parte musica ancora inedita.

## Come funzionano

Ogni strumento gira nel tuo browser. I file audio vengono decodificati e analizzati sul tuo computer con la Web Audio API e non vengono mai inviati a un server. Dopo la prima visita, gli strumenti funzionano anche offline.

## Cosa non sostituiscono

Un meter ti dice dove si trova un brano, non se suona bene. Usa i numeri per controllare le orecchie, poi fidati delle orecchie. Quando numeri e orecchie non sono d’accordo e non capisci perché, è esattamente il tipo di problema che risolvo nel mix e nel mastering.

Se vuoi approfondire, gli articoli su [LUFS e streaming nel 2026](/it/articoli/lufs-streaming-2026) e sul [true peak](/it/articoli/true-peak-1-dbtp) spiegano i numeri più importanti.

=== meter ===
## Cosa significano i numeri

- **Integrato** è il loudness dell’intero brano, con il gating che impedisce a silenzi e intro tranquille di abbassarlo. È il valore che le piattaforme di streaming usano per decidere il volume di riproduzione.
- **Short-term max** è il tratto di 3 secondi più forte, di solito il drop o il ritornello. **Momentary max** sono i 400 ms più forti.
- **True peak** è il punto più alto della forma d’onda ricostruita, misurato con un sovracampionamento di quattro volte, come prevede la BS.1770. **Picco campione** è il valore del campione più alto. Quando il true peak è più alto, la forma d’onda supera i campioni tra un campione e l’altro.
- **LRA**, il loudness range, è la distanza tra le parti più tranquille e quelle più forti: dal 10° al 95° percentile del loudness short-term, come nella EBU Tech 3342.
- **Ampiezza (S/M)** confronta il segnale side con il mid. Più è basso, più il brano è stretto.
- **Tonalità** e **tempo** sono stime, con un livello di affidabilità per la tonalità. Usale come punto di partenza.

## I target sono riferimenti, non obiettivi

I pulsanti del target (Streaming −14, Apple −16, Club −9 o Altro) decidono solo con cosa confrontare la lettura. Una piattaforma di streaming riproduce un master a −9 LUFS a −14: non premia un master che ci arriva da solo. La tabella delle piattaforme mostra cosa fa ogni servizio al tuo file: il guadagno applicato, il livello a cui suona e dove finiscono i picchi.

## Controlli e confronto

I controlli segnalano clipping, offset DC, problemi di fase e di compatibilità mono, un rapporto tra picchi e loudness insolito e un true peak sopra il tetto. Masterizzo con un tetto tra −0,3 e −0,2 dBTP e un limiter true peak: spiego perché in [questo articolo](/it/articoli/true-peak-1-dbtp).

Trascina un brano commerciale nel pannello di confronto per vedere i due brani affiancati. Confrontare lo short-term del tuo drop con quello del riferimento ti dice più di quanto ti dica l’integrated.

## Precisione e privacy

Il misuratore decodifica il file nel browser, lo ricampiona a 48 kHz e applica la pesatura K, il gating e il sovracampionamento del true peak previsti dalla ITU-R BS.1770-4. Una sinusoide stereo a 997 Hz a −20 dBFS legge −20,0 LUFS, come deve. Il tuo audio non lascia mai il tuo computer.

=== stereo ===
## Cosa misura

- **Correlazione media e minima:** quanto si assomigliano i canali sinistro e destro, da +1 (mono) a 0 (nessuna relazione) a −1 (polarità opposta).
- **Tempo sotto lo zero:** la parte del brano con correlazione negativa. In quei momenti, in mono, il brano perde volume o qualcosa sparisce.
- **Bilanciamento:** se un canale è più forte dell’altro.
- **Ampiezza (S/M):** l’energia del side rispetto a quella del mid.
- **Somma in mono:** di quanto si abbassa il brano sommato in mono, in LU. Un materiale del tutto scorrelato perde 3 LU; una perdita maggiore indica materiale in controfase.
- **Per banda:** correlazione, ampiezza e quota di energia in sei bande, dai sub all’aria.
- **Correlazione nel tempo** e **vettorscopio** degli otto secondi più forti, per trovare esattamente dove l’immagine si sfalda.

## Come leggerlo

Un mix sano sta per gran parte del tempo tra circa +0,3 e +0,9. Brevi discese verso lo zero nelle code dei riverberi sono normali. Sotto i 200 Hz la correlazione dovrebbe restare sopra +0,7: gli impianti da club sommano i sub in mono, e un basso largo si indebolisce proprio dove conta di più. L’analizzatore segnala una correlazione negativa per più del 5% del brano e una perdita in mono oltre 3,5 LU.

## Ascolta quello che sparisce

Passa da **Stereo** a **Mono** e a **Side** mentre il brano suona. Il side è esattamente ciò che si cancella quando il brano viene sommato in mono: se lì senti la cassa, il basso o la voce principale, qualcosa è fuori fase. Il metodo completo è nel [tutorial su fase e compatibilità mono](/it/articoli/fase-compatibilita-mono).

Analisi e riproduzione avvengono nel browser. Nulla viene caricato.

=== ab ===
## Perché pareggiare il loudness

Un brano che suona 1 dB più forte sembra più pieno, più brillante e più coinvolgente, anche quando non è migliore. Confrontare il tuo mix con un riferimento masterizzato senza pareggiare il volume è il modo più comune per prendere le decisioni sbagliate. Questo player misura il loudness integrato dei due brani e applica il guadagno che li rende uguali prima che tu li ascolti.

## Come si usa

1. Carica il tuo brano come A e un riferimento come B. Vanno bene WAV, AIFF, FLAC e MP3.
2. Lascia attivo **Pari loudness**. Il guadagno applicato a ogni brano compare sotto il nome.
3. Premi play e passa dall’uno all’altro con i pulsanti o con la tastiera: lo spazio avvia e ferma, A e B selezionano, X scambia. I due brani restano nella stessa posizione, quindi confronti lo stesso momento.
4. Attiva **Alla cieca** per nascondere quale è quale. Ascolta, decidi, poi premi **Svela**.

## Cosa ascoltare

Comincia dalle basse: allo stesso volume, la tua cassa è chiara quanto quella del riferimento, il basso altrettanto solido? Poi la voce: sta davanti nello stesso modo? Poi gli alti: il riferimento è più morbido, o più aperto? Una differenza che senti ancora a pari loudness è una differenza vera.

Scegli riferimenti recenti nel tuo genere. Tutto avviene sul tuo computer: i file non vengono mai caricati.

=== delay ===
## La tabella dei delay

Ogni riga è una figura musicale al tuo tempo, in millisecondi, in tre versioni: normale, puntata (una volta e mezza più lunga) e terzinata (due terzi). L’ultima colonna dà lo stesso valore come frequenza in hertz, per LFO, tremolo e auto-pan. Fai clic su un valore per copiarlo.

I delay da un quarto stanno nel groove. L’ottavo puntato crea il movimento «rotolante» di tanti dischi pop e dance. Le terzine fanno swingare il delay contro una batteria dritta. Su una voce, un ottavo o un quarto, filtrato in modo che si ripetano solo i medi, non copre la frase successiva.

## Riverbero e dinamica

La tabella del riverbero propone pre-delay e decay per quattro dimensioni di stanza, in modo che la coda finisca a tempo invece di sporcare il colpo successivo. Un pre-delay più lungo tiene la sorgente vicina e le dà spazio intorno. Ne parlo nell’articolo sulla [profondità nel mix](/it/articoli/profondita-mix).

La tabella della dinamica suggerisce i rilasci per compressori, sidechain e gate, legati al tempo. Un rilascio che si chiude poco prima del colpo successivo fa respirare il compressore con il groove invece che contro.

## Tap tempo

Se non conosci il BPM, batti il tempo sul pulsante grande, o con la barra spaziatrice, insieme al brano. Bastano pochi colpi per una lettura stabile. Usa Metà e Doppio per passare tra half-time e double-time.

Sono punti di partenza: un arrangiamento pieno chiede spesso code più corte di quelle che suggerisce il calcolo.

=== tuning ===
## La tabella

Scegli fondamentale e modo del brano. La tabella elenca le note basse di quella tonalità, dai sub profondi ai medio-bassi, con la frequenza e il ruolo: fondamentale, terza o quinta. Sono le altezze su cui possono stare il corpo di una cassa o un 808 senza scontrarsi con l’armonia. Puoi suonarle per sentirle insieme al brano, partendo con il volume basso: sono sinusoidi pure.

## Da Hz a nota

Scrivi una frequenza, per esempio la fondamentale della cassa letta su un analizzatore di spettro, e il convertitore mostra la nota più vicina e di quanti cent è crescente o calante. Riaccorda il campione di quella quantità nel campionatore.

## Riferimento e notazione

Il riferimento predefinito è La = 440 Hz. Se un progetto è accordato a 432 o 442 Hz, cambialo e tutte le frequenze si aggiornano.

La tabella usa la notazione scientifica, in cui il Do centrale è C4. Ableton, Logic, Pro Tools e Cubase di solito chiamano quel Do C3, FL Studio C5. Se il tuo DAW mostra un’ottava diversa, fidati della frequenza. Il metodo completo è nel [tutorial su kick e 808](/it/articoli/accordare-kick-808).

=== streaming ===
## Come funziona il calcolo

Inserisci il loudness integrato e il true peak del tuo master, oppure trascina il file e lascia che la pagina li misuri. Per ogni piattaforma la tabella mostra il livello di riferimento, il guadagno applicato, il livello a cui suonerà il brano e dove finisce il true peak dopo quel guadagno.

- **Più forte del riferimento:** la piattaforma abbassa il brano. Nient’altro cambia.
- **Più basso del riferimento:** Spotify e Apple Music lo alzano solo quanto permettono i picchi; YouTube, Tidal, Amazon Music e Deezer non lo alzano.
- **Spotify Alto**, a −11 LUFS, alza i brani più bassi fino a un limiter che interviene a −1 dB.
- **Beatport e la riproduzione in club** non normalizzano: suona quello che consegni.

## Da dove vengono i valori

Spotify documenta la normalizzazione nel dettaglio: −14 LUFS in modalità Normale, quella predefinita, −11 in Alto, −19 in Basso, con 1 dB di margine sul true peak quando alza un brano. Sound Check di Apple Music lavora a −16. I valori di YouTube, Tidal e Amazon Music (intorno a −14) e di Deezer (intorno a −15) vengono da documentazione più sintetica e da misure. Sono riferimenti affidabili, ma possono cambiare nel tempo.

## Cosa farne

Un master abbassato di 5 dB non viene penalizzato: suona allo stesso volume degli altri, con la densità che ha. La domanda utile non è come arrivare a −14, ma come suona il tuo brano accanto agli altri quando tutti suonano a −14. Per sentirlo, confrontalo con un riferimento a pari loudness nel [confronto A/B](/it/strumenti/confronto-ab-reference). Il quadro completo è in [LUFS e streaming nel 2026](/it/articoli/lufs-streaming-2026).

=== camelot ===
## Come funziona la ruota

Il sistema Camelot assegna a ogni tonalità un codice da 1 a 12, con A per le minori e B per le maggiori. I codici vicini hanno quasi tutte le note in comune, quindi il passaggio dall’uno all’altro suona naturale. Fai clic su una tonalità e si accendono quelle compatibili, con il tipo di passaggio:

- **Stesso codice:** la stessa tonalità, il mix più morbido.
- **Un passo in un senso o nell’altro**, per esempio da 8A a 7A o 9A: il cambio più sicuro.
- **Stesso numero, lettera diversa**, da 8A a 8B: la relativa maggiore o minore, un cambio di atmosfera.
- **Due passi avanti:** una spinta di energia che funziona per poche battute.
- **Un semitono sopra:** un salto drammatico, ideale su un break.

## Trovare la tonalità di un brano

Se non conosci la tonalità, il [misuratore LUFS](/it/strumenti/misuratore-lufs) la stima dal file, con un livello di affidabilità. Sull’elettronica molto densa il riconoscimento è buono ma non perfetto: confermalo a orecchio sulla linea di basso.

## Anche per chi produce

La ruota non serve solo ai DJ. Scrivere in una tonalità vicina a quelle che suonano i DJ del tuo genere rende il brano più facile da mixare, e la ruota aiuta a scegliere la tonalità di un remix o di un edit. Se lavori sulle basse, abbinala allo [strumento di accordatura kick e 808](/it/strumenti/accordatura-kick-808).
