# -*- coding: utf-8 -*-
"""Tool pages: metadata and interface strings (English and Italian)."""

COMMON = {
    "en": dict(decoding="Decoding…", busy="Analyzing… {p}%", done="Measured: {name}", error="That file could not be read. Try WAV, AIFF, FLAC or MP3.", notAudio="That is not an audio file.",
               copied="Copied", play="Play", pause="Pause", none="None", no="No", waiting="Waiting for a track", drop="Drop a WAV, AIFF, FLAC or MP3 here, or choose a file. Analysis runs on your computer; nothing is uploaded.",
               choose="Choose a file", privacy="Runs locally. Nothing is uploaded."),
    "it": dict(decoding="Decodifico…", busy="Analizzo… {p}%", done="Misurato: {name}", error="Il file non si legge. Prova con WAV, AIFF, FLAC o MP3.", notAudio="Questo non è un file audio.",
               copied="Copiato", play="Play", pause="Pausa", none="Nessuno", no="No", waiting="In attesa di un brano", drop="Trascina qui un WAV, AIFF, FLAC o MP3, oppure scegli un file. L’analisi avviene sul tuo computer: non viene caricato nulla.",
               choose="Scegli un file", privacy="Gira in locale. Non viene caricato nulla."),
}

PLAT_NOTES = {
    "en": dict(pClub="No normalization: plays as mastered", pLimiter="Raised into Spotify’s limiter", pNoUp="Quieter than the reference, not raised", pCapped="Raised only as far as the peaks allow", pDown="Turned down", pOn="At the reference"),
    "it": dict(pClub="Nessuna normalizzazione: suona come masterizzato", pLimiter="Alzato fino al limiter di Spotify", pNoUp="Più basso del riferimento, non viene alzato", pCapped="Alzato solo quanto permettono i picchi", pDown="Abbassato", pOn="Al riferimento"),
}

TOOLS = [
    dict(id="meter", js="meter.js", mini={"en": "−14.0 LUFS", "it": "−14,0 LUFS"},
         path={"en": "/loudness-meter", "it": "/it/strumenti/misuratore-lufs"},
         name={"en": "LUFS meter", "it": "Misuratore LUFS"},
         h1={"en": "Online LUFS meter", "it": "Misuratore LUFS online"},
         title={"en": "Free online LUFS meter: loudness, true peak, LRA | Angelo Pillon", "it": "Misuratore LUFS online gratuito: loudness, true peak, LRA | Angelo Pillon"},
         description={"en": "Measure integrated, short-term and momentary LUFS, oversampled true peak, LRA, key and tempo in your browser. See how Spotify, Apple Music and YouTube will play your master.",
                      "it": "Misura LUFS integrati, short-term e momentary, true peak sovracampionato, LRA, tonalità e BPM nel browser. Scopri come Spotify, Apple Music e YouTube riprodurranno il tuo master."},
         lead={"en": "The full ITU-R BS.1770-4 measurement, plus key, tempo and a platform-by-platform preview. Drop your master; nothing leaves your computer.",
               "it": "La misura completa ITU-R BS.1770-4, più tonalità, BPM e un’anteprima piattaforma per piattaforma. Trascina il master: nulla lascia il tuo computer."},
         short={"en": "Integrated, short-term and momentary loudness, true peak, range, key and tempo.", "it": "Loudness integrata, short-term e momentary, true peak, range, tonalità e BPM."}),
    dict(id="stereo", js="stereo.js", mini={"en": "+0.82 corr", "it": "+0,82 corr"},
         path={"en": "/tools/stereo-phase-analyzer", "it": "/it/strumenti/analizzatore-fase-stereo"},
         name={"en": "Stereo and phase analyzer", "it": "Analizzatore di fase e stereo"},
         h1={"en": "Stereo and phase analyzer", "it": "Analizzatore di fase e stereo"},
         title={"en": "Stereo and phase analyzer: correlation, mono compatibility | Angelo Pillon", "it": "Analizzatore di fase e stereo: correlazione e compatibilità mono | Angelo Pillon"},
         description={"en": "Check phase correlation, stereo width, balance and mono compatibility of a mix or master, overall and per frequency band, with a live vectorscope and mono switch.",
                      "it": "Controlla correlazione di fase, ampiezza stereo, bilanciamento e compatibilità mono di un mix o di un master, in totale e per banda, con vettorscopio live e ascolto in mono."},
         lead={"en": "How wide your mix really is, where it falls apart in mono, and whether the low end is safe for a club system.",
               "it": "Quanto è davvero largo il tuo mix, dove si sfalda in mono e se le basse sono sicure su un impianto da club."},
         short={"en": "Correlation, mid and side balance, and mono compatibility, overall and per band.", "it": "Correlazione, bilanciamento mid e side e compatibilità mono, in totale e per banda."}),
    dict(id="ab", js="ab.js", mini={"en": "B −1.6 dB", "it": "B −1,6 dB"},
         path={"en": "/tools/ab-reference-player", "it": "/it/strumenti/confronto-ab-reference"},
         name={"en": "A/B reference player", "it": "Confronto A/B con reference"},
         h1={"en": "A/B reference player", "it": "Confronto A/B con una reference"},
         title={"en": "A/B reference track player, loudness-matched | Angelo Pillon", "it": "Confronto A/B con una traccia di riferimento, a pari loudness | Angelo Pillon"},
         description={"en": "Compare your mix with a reference track at the same loudness, switching instantly between them. Blind mode included. Runs in your browser.",
                      "it": "Confronta il tuo mix con una traccia di riferimento alla stessa loudness, passando dall’una all’altra senza pause. Con modalità alla cieca. Gira nel browser."},
         lead={"en": "Louder always sounds better, so the comparison is only fair at equal loudness. Load two tracks and switch without a gap.",
               "it": "Più forte sembra sempre meglio: il confronto è onesto solo a pari loudness. Carica due brani e passa dall’uno all’altro senza pause."},
         short={"en": "Your track against a reference, loudness-matched, switched without a gap.", "it": "Il tuo brano contro una reference, a pari loudness, senza pause nel cambio."}),
    dict(id="delay", js="delay.js", mini={"en": "124 BPM 484 ms", "it": "124 BPM 484 ms"},
         path={"en": "/tools/delay-reverb-calculator", "it": "/it/strumenti/calcolatore-delay-riverbero"},
         name={"en": "Delay and reverb calculator", "it": "Calcolatore delay e riverbero"},
         h1={"en": "Delay and reverb time calculator", "it": "Calcolatore dei tempi di delay e riverbero"},
         title={"en": "BPM to ms delay and reverb calculator with tap tempo | Angelo Pillon", "it": "Calcolatore BPM in ms per delay e riverbero, con tap tempo | Angelo Pillon"},
         description={"en": "Convert BPM to delay times in milliseconds for straight, dotted and triplet notes, with reverb pre-delay and decay, compressor release and a tap tempo.",
                      "it": "Converti i BPM in tempi di delay in millisecondi per note normali, puntate e terzinate, con pre-delay e decadimento del riverbero, release del compressore e tap tempo."},
         lead={"en": "Type the tempo or tap it. Every value is in milliseconds and copies with one click.", "it": "Scrivi il tempo o battilo. Ogni valore è in millisecondi e si copia con un clic."},
         short={"en": "Tap the tempo and get delay times, pre-delay and decay in milliseconds.", "it": "Batti il tempo e ottieni delay, pre-delay e decadimento in millisecondi."}),
    dict(id="tuning", js="tuning.js", mini={"en": "F1 43.7 Hz", "it": "Fa1 43,7 Hz"},
         path={"en": "/tools/kick-808-tuning", "it": "/it/strumenti/accordatura-kick-808"},
         name={"en": "Kick and 808 tuning", "it": "Accordatura di kick e 808"},
         h1={"en": "Kick and 808 tuning chart", "it": "Tabella per accordare kick e 808"},
         title={"en": "Kick and 808 tuning: note to frequency chart by key | Angelo Pillon", "it": "Accordare kick e 808: tabella note e frequenze per tonalità | Angelo Pillon"},
         description={"en": "Find the frequencies of every note in your key between 25 and 130 Hz, convert Hz to notes and cents, and play reference tones to tune your kick and 808.",
                      "it": "Trova le frequenze di ogni nota della tua tonalità tra 25 e 130 Hz, converti gli Hz in note e cent e ascolta toni di riferimento per accordare kick e 808."},
         lead={"en": "Pick the key of the track. The chart shows where the root, third and fifth sit in the low register.", "it": "Scegli la tonalità del brano. La tabella mostra dove cadono fondamentale, terza e quinta nel registro basso."},
         short={"en": "Notes to frequencies, and the low fundamentals that fit your key.", "it": "Note in frequenze, e le fondamentali basse adatte alla tua tonalità."}),
    dict(id="streaming", js="streaming.js", mini={"en": "Spotify −4.9 dB", "it": "Spotify −4,9 dB"},
         path={"en": "/tools/streaming-loudness-calculator", "it": "/it/strumenti/calcolatore-loudness-streaming"},
         name={"en": "Streaming loudness preview", "it": "Anteprima loudness streaming"},
         h1={"en": "Streaming loudness calculator", "it": "Calcolatore della loudness in streaming"},
         title={"en": "Streaming loudness calculator: Spotify, Apple Music, YouTube | Angelo Pillon", "it": "Calcolatore loudness streaming: Spotify, Apple Music, YouTube | Angelo Pillon"},
         description={"en": "Enter integrated LUFS and true peak, or measure a file, and see how much Spotify, Apple Music, YouTube, Tidal, Amazon Music and Deezer turn your master up or down.",
                      "it": "Inserisci LUFS integrati e true peak, o misura un file, e scopri di quanto Spotify, Apple Music, YouTube, Tidal, Amazon Music e Deezer alzano o abbassano il tuo master."},
         lead={"en": "Normalization decides how loud your master actually plays. This shows the gain each platform applies and what happens to the peaks.",
               "it": "La normalizzazione decide quanto forte suona davvero il tuo master. Qui vedi il guadagno che applica ogni piattaforma e cosa succede ai picchi."},
         short={"en": "How much each platform turns your master down, and what happens to the peaks.", "it": "Di quanto ogni piattaforma abbassa il tuo master, e cosa succede ai picchi."}),
    dict(id="camelot", js="camelot.js", mini={"en": "8A 7A 9A 8B", "it": "8A 7A 9A 8B"},
         path={"en": "/tools/camelot-wheel", "it": "/it/strumenti/ruota-camelot"},
         name={"en": "Camelot wheel", "it": "Ruota di Camelot"},
         h1={"en": "Interactive Camelot wheel", "it": "Ruota di Camelot interattiva"},
         title={"en": "Interactive Camelot wheel for harmonic mixing | Angelo Pillon", "it": "Ruota di Camelot interattiva per il mixaggio armonico | Angelo Pillon"},
         description={"en": "Pick a key or a Camelot code and see every compatible key for harmonic mixing: adjacent, relative, energy boost and semitone change.",
                      "it": "Scegli una tonalità o un codice Camelot e vedi tutte le tonalità compatibili per il mixaggio armonico: adiacenti, relative, energy boost e cambio di semitono."},
         lead={"en": "Choose a key on the wheel. Compatible keys light up, with the move that gets you there.", "it": "Scegli una tonalità sulla ruota. Si accendono quelle compatibili, con il tipo di passaggio."},
         short={"en": "Compatible keys for harmonic mixing, from any key or Camelot code.", "it": "Tonalità compatibili per il mixaggio armonico, da qualsiasi tonalità o codice Camelot."}),
]

L = {"en": {}, "it": {}}
L["en"]["meter"] = dict(
    target="Target", integrated="Integrated", stmax="Short-term max", mmax="Momentary max", tp="True peak", sp="Sample peak", corr="Correlation", tempo="Tempo", key="Key",
    width="Width (S/M)", duration="Duration", loudest="Loudest at", plr="PLR",
    vQuiet="Too quiet to gate an integrated loudness.", vOn="Integrated loudness is on your {t} LUFS target.", vOver="{d} LU louder than your {t} LUFS target.", vUnder="{d} LU quieter than your {t} LUFS target.",
    tpOver="True peak {tp} dBTP will clip after lossy encoding.", tpEdge="True peak {tp} dBTP is at the edge of the −0.3 to −0.2 dBTP ceiling.", tpOk="True peak {tp} dBTP is safe.",
    plrDense="very dense", plrLoud="dense", plrBal="balanced", plrDyn="dynamic",
    cClip="Clipping", cClipYes="{n} runs of samples at full scale", cTp="True peak ceiling", cTpOver="Above −0.1 dBTP: lower the limiter ceiling", cTpEdge="Between −0.35 and −0.1 dBTP", cTpOk="Below −0.35 dBTP",
    cPlr="Peak to loudness", cPhase="Phase", cPhaseBad="Negative correlation: parts cancel in mono", cPhaseWide="Very wide: check in mono", cPhaseOk="Healthy",
    cMono="Dual mono", cMonoYes="Left and right are identical", cDc="DC offset", cFloor="Quietest passages", cLoud="Loudest moment", cKey="Key estimate",
    conf_High="high confidence", conf_Medium="medium confidence", conf_Low="low confidence",
    refDone="Reference measured: {name}", needMain="Measure your own track first.", reportCopied="Report copied", measuredWith="Measured with",
    t_stream="Streaming −14", t_apple="Apple −16", t_club="Club −9", t_custom="Custom", copy_report="Copy report",
    h_timeline="Short-term loudness", h_wave="Waveform", h_platforms="How platforms will play it", h_checks="Checks", h_compare="Compare with a reference",
    th_platform="Platform", th_ref="Reference", th_gain="Gain", th_peak="Peak after", th_note="Note", th_metric="Measure", th_yours="Your track", th_refcol="Reference", th_diff="Difference",
    drop_ref="Drop a reference track to compare it with yours.", tempo_unit="BPM",
)
L["it"]["meter"] = dict(
    target="Target", integrated="Integrato", stmax="Short-term max", mmax="Momentary max", tp="True peak", sp="Picco campione", corr="Correlazione", tempo="Tempo", key="Tonalità",
    width="Ampiezza (S/M)", duration="Durata", loudest="Punto più forte", plr="PLR",
    vQuiet="Troppo basso per calcolare una loudness integrata.", vOn="La loudness integrata è sul tuo target di {t} LUFS.", vOver="{d} LU più forte del tuo target di {t} LUFS.", vUnder="{d} LU più basso del tuo target di {t} LUFS.",
    tpOver="Un true peak di {tp} dBTP andrà in clipping dopo la codifica.", tpEdge="Un true peak di {tp} dBTP è al limite del tetto −0,3/−0,2 dBTP.", tpOk="True peak {tp} dBTP: sicuro.",
    plrDense="molto denso", plrLoud="denso", plrBal="equilibrato", plrDyn="dinamico",
    cClip="Clipping", cClipYes="{n} gruppi di campioni a fondo scala", cTp="Tetto di true peak", cTpOver="Sopra −0,1 dBTP: abbassa il ceiling del limiter", cTpEdge="Tra −0,35 e −0,1 dBTP", cTpOk="Sotto −0,35 dBTP",
    cPlr="Picco su loudness", cPhase="Fase", cPhaseBad="Correlazione negativa: in mono alcune parti si cancellano", cPhaseWide="Molto largo: controlla in mono", cPhaseOk="Sana",
    cMono="Dual mono", cMonoYes="Sinistro e destro sono identici", cDc="Offset DC", cFloor="Passaggi più bassi", cLoud="Momento più forte", cKey="Stima della tonalità",
    conf_High="affidabilità alta", conf_Medium="affidabilità media", conf_Low="affidabilità bassa",
    refDone="Reference misurata: {name}", needMain="Prima misura il tuo brano.", reportCopied="Report copiato", measuredWith="Misurato con",
    t_stream="Streaming −14", t_apple="Apple −16", t_club="Club −9", t_custom="Altro", copy_report="Copia il report",
    h_timeline="Loudness short-term", h_wave="Forma d’onda", h_platforms="Come lo riprodurranno le piattaforme", h_checks="Controlli", h_compare="Confronta con una reference",
    th_platform="Piattaforma", th_ref="Riferimento", th_gain="Guadagno", th_peak="Picco dopo", th_note="Nota", th_metric="Misura", th_yours="Il tuo brano", th_refcol="Reference", th_diff="Differenza",
    drop_ref="Trascina un brano di riferimento per confrontarlo con il tuo.", tempo_unit="BPM",
)
L["en"]["stereo"] = dict(
    r_corr="Average correlation", r_cmin="Lowest correlation", r_neg="Time below zero", r_bal="Balance", r_width="Width (S/M)", r_mono="Mono fold-down",
    band0="Sub", band1="Bass", band2="Low mids", band3="Mids", band4="Presence", band5="Air",
    th_band="Band", th_corr="Correlation", th_width="Width", th_share="Energy", h_bands="Per band", h_tl="Correlation over time", h_scope="Vectorscope, loudest 8 seconds", h_notes="What it means", h_live="Listen",
    nMonoFile="The file is mono or dual mono: there is no stereo image to check.", nLowWide="The low end is wide: below 200 Hz it should be close to mono for vinyl and club systems.",
    nNeg="{p}% of the track has negative correlation: those parts lose level or disappear in mono.", nMonoLoss="Summed to mono the track drops {d} LU: more than the 3 LU of fully uncorrelated material.",
    nBal="The {s} channel is {d} dB louder.", left="left", right="right", nOk="The stereo field is healthy: good correlation, a mono-safe low end and a centred balance.",
    m_stereo="Stereo", m_mono="Mono", m_side="Side", live_corr="Live correlation",
)
L["it"]["stereo"] = dict(
    r_corr="Correlazione media", r_cmin="Correlazione minima", r_neg="Tempo sotto lo zero", r_bal="Bilanciamento", r_width="Ampiezza (S/M)", r_mono="Somma in mono",
    band0="Sub", band1="Bassi", band2="Medio-bassi", band3="Medi", band4="Presenza", band5="Aria",
    th_band="Banda", th_corr="Correlazione", th_width="Ampiezza", th_share="Energia", h_bands="Per banda", h_tl="Correlazione nel tempo", h_scope="Vettorscopio, gli 8 secondi più forti", h_notes="Cosa significa", h_live="Ascolta",
    nMonoFile="Il file è mono o dual mono: non c’è un’immagine stereo da controllare.", nLowWide="Le basse sono larghe: sotto i 200 Hz dovrebbero essere quasi mono, per vinile e impianti da club.",
    nNeg="Il {p}% del brano ha correlazione negativa: quelle parti perdono livello o spariscono in mono.", nMonoLoss="Sommato in mono il brano perde {d} LU: più dei 3 LU di un materiale del tutto scorrelato.",
    nBal="Il canale {s} è più forte di {d} dB.", left="sinistro", right="destro", nOk="Il campo stereo è sano: buona correlazione, basse sicure in mono e bilanciamento al centro.",
    m_stereo="Stereo", m_mono="Mono", m_side="Side", live_corr="Correlazione live",
)
L["en"]["ab"] = dict(
    a="A, your track", b="B, reference", empty="No track loaded", applied="matched by {g}", hidden="Hidden for blind listening", ready="Ready. Press play, then switch with A, B or X.",
    addOther="Loaded. Add the other track.", match="Match loudness", blind="Blind mode", reveal="Reveal", revealed="1 was {one}, 2 was {two}.",
    keys="Keys: space plays and pauses, A and B select, X switches.",
)
L["it"]["ab"] = dict(
    a="A, il tuo brano", b="B, la reference", empty="Nessun brano caricato", applied="allineato di {g}", hidden="Nascosto per l’ascolto alla cieca", ready="Pronto. Premi play e cambia con A, B o X.",
    addOther="Caricato. Aggiungi l’altro brano.", match="Pari loudness", blind="Alla cieca", reveal="Svela", revealed="1 era {one}, 2 era {two}.",
    keys="Tasti: spazio avvia e ferma, A e B selezionano, X scambia.",
)
L["en"]["delay"] = dict(
    bpm="Tempo (BPM)", tap="Tap tempo", tapMore="Keep tapping", taps="{n} taps", half="Half", double="Double", note="Note", straight="Straight", dotted="Dotted", triplet="Triplet", rate="LFO rate",
    h_delay="Delay times", h_reverb="Reverb", h_dyn="Dynamics", pre="Pre-delay", decay="Decay", total="Total", range_from="From", range_to="To",
    rvTight="Tight", rvSmall="Small room", rvMedium="Medium hall", rvLarge="Large hall", dynComp="Compressor release", dynSide="Sidechain duck", dynGate="Gate hold",
    copiedMs="Copied {v}", click_copy="Click a value to copy it.", space_tap="Space bar also taps.",
)
L["it"]["delay"] = dict(
    bpm="Tempo (BPM)", tap="Tap tempo", tapMore="Continua a battere", taps="{n} battute", half="Metà", double="Doppio", note="Nota", straight="Normale", dotted="Puntata", triplet="Terzina", rate="Velocità LFO",
    h_delay="Tempi di delay", h_reverb="Riverbero", h_dyn="Dinamica", pre="Pre-delay", decay="Decadimento", total="Totale", range_from="Da", range_to="A",
    rvTight="Stretto", rvSmall="Stanza piccola", rvMedium="Sala media", rvLarge="Sala grande", dynComp="Release del compressore", dynSide="Ducking del sidechain", dynGate="Hold del gate",
    copiedMs="Copiato {v}", click_copy="Fai clic su un valore per copiarlo.", space_tap="Anche la barra spaziatrice batte il tempo.",
)
L["en"]["tuning"] = dict(
    root_l="Key", mode_l="Mode", minor="minor", major="major", a4="A4 reference (Hz)", vol="Tone volume", note="Note", freq="Frequency", role="Role",
    root="Root", fifth="Fifth", third="Third", play="Play", h_chart="Low notes in this key", h_conv="Hz to note", hz="Frequency (Hz)", inTune="in tune", cents="cents",
    warn="Reference tones are pure sines in the sub range: start with the volume low, especially on headphones.",
)
L["it"]["tuning"] = dict(
    root_l="Tonalità", mode_l="Modo", minor="minore", major="maggiore", a4="Riferimento La4 (Hz)", vol="Volume del tono", note="Nota", freq="Frequenza", role="Ruolo",
    root="Fondamentale", fifth="Quinta", third="Terza", play="Ascolta", h_chart="Note basse in questa tonalità", h_conv="Da Hz a nota", hz="Frequenza (Hz)", inTune="intonata", cents="cent",
    warn="I toni di riferimento sono sinusoidi pure nella zona sub: parti con il volume basso, soprattutto in cuffia.",
)
L["en"]["streaming"] = dict(
    i="Integrated loudness (LUFS)", tp="True peak (dBTP)", th_platform="Platform", th_ref="Reference", th_gain="Gain", th_out="Plays at", th_peak="Peak after", th_note="Note",
    sDown="On Spotify this master plays {g} dB quieter than you made it.", sUp="On Spotify this master can be raised by about {g} dB.", sOn="On Spotify this master plays at the level you made it.",
    tpOver="True peak above −0.1 dBTP: lossy encoding will clip. Lower the limiter ceiling.", tpEdge="True peak at the edge: −0.3 to −0.2 dBTP from a proper true peak limiter is the safe ceiling.",
    tpLow="True peak well below −1 dBTP: there is level left on the table.", tpOk="True peak is in a safe range.", measure="Or measure a file",
)
L["it"]["streaming"] = dict(
    i="Loudness integrata (LUFS)", tp="True peak (dBTP)", th_platform="Piattaforma", th_ref="Riferimento", th_gain="Guadagno", th_out="Suona a", th_peak="Picco dopo", th_note="Nota",
    sDown="Su Spotify questo master suona {g} dB più basso di come l’hai fatto.", sUp="Su Spotify questo master può essere alzato di circa {g} dB.", sOn="Su Spotify questo master suona al livello a cui l’hai fatto.",
    tpOver="True peak sopra −0,1 dBTP: la codifica lossy andrà in clipping. Abbassa il ceiling del limiter.", tpEdge="True peak al limite: −0,3/−0,2 dBTP con un buon limiter true peak è il tetto sicuro.",
    tpLow="True peak molto sotto −1 dBTP: stai lasciando livello sul tavolo.", tpOk="Il true peak è in una zona sicura.", measure="Oppure misura un file",
)
L["en"]["camelot"] = dict(
    pick="Key", minor="minor", major="major", th_code="Code", th_key="Key", th_move="Move",
    k_same="Same key", k_adj="One step: the safest mix", k_rel="Relative major or minor: change of mood", k_boost="Two steps up: energy boost", k_semi="Up a semitone: dramatic lift",
)
L["it"]["camelot"] = dict(
    pick="Tonalità", minor="minore", major="maggiore", th_code="Codice", th_key="Tonalità", th_move="Passaggio",
    k_same="Stessa tonalità", k_adj="Un passo: il mix più sicuro", k_rel="Relativa maggiore o minore: cambio d’atmosfera", k_boost="Due passi in su: energy boost", k_semi="Un semitono in su: salto drammatico",
)
for lang in ("en", "it"):
    for k in L[lang]:
        L[lang][k] = dict(COMMON[lang], **PLAT_NOTES[lang], **L[lang][k])

HUB = {
    "en": dict(h1="Free audio tools", lead="Seven tools I use every day, rebuilt to run in your browser. Your audio is processed on your computer and never uploaded.",
               other="Italiano:", other_label="strumenti in italiano", other_href="/it/strumenti/", other_lang="it",
               title="Free audio tools for mixing and mastering | Angelo Pillon", description="Free browser tools for producers and engineers: LUFS meter, stereo and phase analyzer, A/B reference player, delay calculator, kick tuning, streaming loudness and Camelot wheel."),
    "it": dict(h1="Strumenti audio gratuiti", lead="Sette strumenti che uso ogni giorno, rifatti per girare nel browser. L’audio viene elaborato sul tuo computer e non viene mai caricato.",
               other="English:", other_label="tools in English", other_href="/tools/", other_lang="en",
               title="Strumenti audio gratuiti per mix e mastering | Angelo Pillon", description="Strumenti gratuiti nel browser per produttori e fonici: misuratore LUFS, analizzatore di fase, confronto A/B, calcolatore delay, accordatura kick, loudness streaming e ruota di Camelot."),
}
