# -*- coding: utf-8 -*-
"""Service landing pages: one page per service and language, each aimed at the words people type when they look for an engineer."""

# index of the matching entry in S.HOME[lang]["services"]
SVC_INDEX = {"mix": 1, "master": 0, "stem": 2, "feedback": 3}
ORDER = ["mix", "master", "stem", "feedback"]

UI = {
    "en": dict(label="Services", includes_h="What you get", need_h="What I need from you", price_h="Prices",
               price_note="Same prices as my Fiverr profile, in US dollars. Albums and catalogues get a custom quote.",
               how_h="How a project runs", faq_h="Questions", other_h="Other services", read_h="From the studio journal",
               cta="Start a project", cta2="Listen to the work", details="Details"),
    "it": dict(label="Servizi", includes_h="Cosa ricevi", need_h="Cosa mi serve da te", price_h="Prezzi",
               price_note="Gli stessi prezzi del mio profilo Fiverr, in dollari. Per album e cataloghi preparo un’offerta su misura.",
               how_h="Come si svolge un progetto", faq_h="Domande", other_h="Altri servizi", read_h="Dal diario di studio",
               cta="Inizia un progetto", cta2="Ascolta il lavoro", details="Dettagli"),
    "de": dict(label="Leistungen", includes_h="Was du bekommst", need_h="Was ich von dir brauche", price_h="Preise",
               price_note="Dieselben Preise wie auf meinem Fiverr-Profil, in US-Dollar. Für Alben und Kataloge gibt es ein individuelles Angebot.",
               how_h="So läuft ein Projekt ab", faq_h="Fragen", other_h="Weitere Leistungen", read_h="Aus dem Studio-Journal",
               cta="Projekt starten", cta2="Arbeiten anhören", details="Details"),
    "es": dict(label="Servicios", includes_h="Qué recibes", need_h="Qué necesito de ti", price_h="Precios",
               price_note="Los mismos precios que en mi perfil de Fiverr, en dólares. Para álbumes y catálogos preparo una oferta a medida.",
               how_h="Cómo es un proyecto", faq_h="Preguntas", other_h="Otros servicios", read_h="Del diario de estudio",
               cta="Empezar un proyecto", cta2="Escuchar el trabajo", details="Detalles"),
}

# articles to link from each service page: matched on group or slug, in the language of the page
RELATED = {
    "mix": ["differenza-mix-mastering", "mixing-vs-mastering", "esportare-tracce-mix-mastering", "export-tracks-for-mixing-and-mastering",
            "scegliere-fonico-mix-mastering", "choosing-a-mixing-and-mastering-engineer", "profondita-mix", "depth-in-the-mix"],
    "master": ["mastering-analogico", "analog-mastering", "quanto-forte-deve-essere-il-master", "how-loud-should-your-master-be",
               "errori-premaster", "premaster-mistakes", "apple-digital-masters-spiegato", "apple-digital-masters-explained"],
    "stem": ["preparare-gli-stem", "stem-preparation-guide", "differenza-mix-mastering", "mixing-vs-mastering",
             "esportare-tracce-mix-mastering", "export-tracks-for-mixing-and-mastering"],
    "feedback": ["tracce-di-riferimento", "fase-compatibilita-mono", "phase-and-mono-compatibility", "mixare-in-cuffia", "mixing-on-headphones",
                 "gain-staging-daw", "gain-staging-in-your-daw"],
}

PAGES = {}

# ------------------------------------------------------------------ English
PAGES["en"] = {
    "mix": dict(
        path="/mixing-engineer", name="Mix and master",
        title="Online Mix Engineer: Mixing & Mastering | Angelo Pillon",
        description="Hire a mix engineer online. Your stems mixed and mastered in a hybrid analog chain in Milan, vocal tuning included. From $110, 3 to 5 days, 4.9/5 from 700+ reviews.",
        h1="Mix engineer for your song, online from Milan",
        lead="Send the stems. I mix and master the track in a hybrid analog and digital chain and send back a record that is balanced, deep and ready to release.",
        sections=[
            ("What a mix engineer does to your track", [
                "A mix is hundreds of small decisions that add up to one feeling. Levels and panning come first, then EQ so each part has its own space, compression so the groove holds together, and reverb and delay to build depth from front to back. Automation does the rest: the vocal that stays on top in every line, the drop that hits harder than the build.",
                "I check phase and mono compatibility on every session, because a wide mix that collapses on a phone or on a club system is not finished. Vocal tuning is part of the mix, not an extra."]),
            ("Plugins for precision, analog for weight", [
                "Corrective work happens in the DAW with UAD, FabFilter and Waves, where every move can be recalled. Then the mix runs through analog stages chosen for the song: SSL Fusion for cohesion and depth, API 2500 for bus compression and punch, a Pultec style EQ for tone, tape for harmonics and low end density, 1176 and LA-2A on vocals and drums.",
                "The master is part of the job. True peak is limited at −0.3 or −0.2 dBTP and loudness is set for where the track is going: streaming, club or radio."]),
            ("Genres I mix every week", [
                "Techno, melodic techno, house, afro house and EDM, where the low end and the space around it carry the track. Pop, R&B and rap, where the vocal has to sit on top without fighting the beat. Rock, when the drums need room and the guitars need width.",
                "I only mix and master. Production, arrangement and edits such as radio versions come from you, ready to mix."]),
        ],
        includes=["Full mix from your stems, with the master included", "Vocal tuning as part of the mix", "A first version with notes on what I changed and why",
                  "Revisions until it is right, unlimited on the 60 stem analog package", "Final WAV master for streaming, club and download"],
        need=["Stems in WAV at the sample rate and bit depth of the session", "Nothing on the master bus", "BPM, a short note about the track and one or two reference songs",
              "Effects you want to keep printed on the stem"],
        faqs=[("How much does it cost to hire a mix engineer?", "Mix and master starts at $110 for up to 10 stems. Up to 30 stems is $160, and up to 60 stems in the analog chain with unlimited revisions is $210. Albums and EPs get a custom quote."),
              ("How long does a mix take?", "Usually 3 to 5 days from the moment I have all the files. For EPs and albums we agree a calendar at the start."),
              ("Do you offer a free test mix?", "No. You can hear finished work in the playlist on the home page and read more than 700 reviews. If you want an opinion on your own mix first, the mix feedback service is made for that."),
              ("Can you work from a stereo file instead of stems?", "Then it is a mastering job, or stem mastering if you can export groups. A real mix needs the separate tracks.")],
    ),
    "master": dict(
        path="/mastering-engineer", name="Mastering",
        title="Online Mastering Engineer: Analog Mastering | Angelo Pillon",
        description="Analog mastering by an Apple Digital Masters certified engineer. Loud, clean and safe on every platform. From $60 a track, 48 hours, 4.9/5 from 700+ reviews.",
        h1="Mastering engineer: analog mastering, online from Milan",
        lead="Send your stereo mix. In about 48 hours you get a master that is loud enough, still dynamic and safe on every platform it will be released on.",
        sections=[
            ("What mastering changes, and what it cannot", [
                "Mastering is the last listen before release. Tonal balance is corrected so the track sounds right on every system, dynamics are controlled without flattening the groove, stereo width is checked against mono, and loudness is set for the destination. On an EP or an album the tracks are matched so they play as one record.",
                "Mastering cannot fix a vocal that is buried or a kick that fights the bass. If I hear that, I tell you before I start, and stem mastering or a mix revision is usually the better route."]),
            ("Loudness and true peak, set for where the track is going", [
                "Streaming services normalise playback, so a master pushed to the limit gains nothing and loses punch. I choose the loudness by genre and destination: club masters run hotter, streaming masters keep more dynamics. True peak is limited at −0.3 or −0.2 dBTP, which keeps level and stays clear of codec clipping.",
                "You can check every version yourself with the free LUFS meter on this site."]),
            ("The analog chain", [
                "After the corrective work in the box, the mix passes through SSL Fusion for cohesion and depth, API 2500 for bus compression, a Pultec style EQ for musical tone shaping and tape for harmonics and low end density. Stages are chosen track by track, not stacked out of habit.",
                "I am an Apple Digital Masters certified engineer, so masters can be delivered to that standard when your distributor supports it."]),
        ],
        includes=["Analog mastering of your stereo mix", "Loudness and true peak set for streaming, club or radio", "Up to 5 revisions",
                  "An EP of 4 tracks at $180, matched track to track", "Final WAV master, plus the formats your distributor asks for"],
        need=["Stereo mix in WAV at the sample rate and bit depth of the session", "No limiter or clipper on the master bus, and a few dB of headroom",
              "One or two reference tracks and where the song will be released"],
        faqs=[("How much does mastering cost?", "$60 for one track with analog mastering, $180 for an EP of four tracks. Albums get a custom quote."),
              ("How loud will my master be?", "As loud as the music allows without damage. For streaming I keep true peak at −0.3 or −0.2 dBTP and choose loudness by genre; club masters usually run hotter."),
              ("How should I export my mix for mastering?", "WAV, same sample rate and bit depth as the session, no limiter on the master bus, peaks a few dB below zero. The export guide in the articles covers every step."),
              ("How many revisions are included?", "Up to five. One or two rounds are usually enough.")],
    ),
    "stem": dict(
        path="/stem-mastering", name="Stem mastering",
        title="Stem Mastering Service Online | Angelo Pillon",
        description="Stem mastering in an analog chain: up to 40 stems, more control than a stereo master without the cost of a full mix. $100 per track, 48 to 72 hours.",
        h1="Stem mastering: more control than a stereo master",
        lead="Export your mix as groups. I master from the stems in the analog chain, so the kick, the bass and the vocal can each be set right before the final limiter.",
        sections=[
            ("When stem mastering is the right choice", [
                "A stereo master treats the whole mix at once. If the vocal is a little low or the bass a little heavy, every fix also touches everything else. With stems I can adjust one group without disturbing the rest, then master the result as a whole.",
                "It suits mixes that are nearly there: the balance is close and the sound is yours, but one or two elements need a hand that a stereo master cannot give."]),
            ("How to export stems", [
                "Group the session into the parts that matter: kick, bass, drums, music, vocals, effects. Export every group from the same start point, at the sample rate and bit depth of the session, with nothing on the master bus. Played together at unity, the stems must sound exactly like your mix.",
                "Up to 40 stems are included."]),
            ("Stem mastering or a full mix?", [
                "Stem mastering keeps your mix decisions and refines them. A full mix starts from the individual tracks and rebuilds balance, space and dynamics. If the stems need more than level, EQ and compression per group, mix and master is the honest answer, and I will tell you so before starting."]),
        ],
        includes=["Mastering from up to 40 stems in the analog chain", "Balance, EQ and dynamics per group before the final master",
                  "Loudness and true peak set for the destination", "Final WAV master"],
        need=["Stems in WAV, all exported from the same start point", "Nothing on the master bus", "Your own stereo bounce as a reference"],
        faqs=[("How much does stem mastering cost?", "$100 per track, for up to 40 stems."),
              ("How long does it take?", "48 to 72 hours."),
              ("What is the difference between stems and multitracks?", "Multitracks are every single channel of the session. Stems are groups of channels bounced together, for example all the drums or all the vocals. Stem mastering works on groups.")],
    ),
    "feedback": dict(
        path="/mix-feedback", name="Mix feedback",
        title="Mix Feedback: Professional Mix Review | Angelo Pillon",
        description="Send your mix and get a PDF report from a working mix engineer: strengths, problems and fixes in order of priority, with spectrum and LUFS analysis. $45, 48 hours.",
        h1="Mix feedback from a working mix engineer",
        lead="You mix your own music and want to know what is holding it back. I listen on a calibrated analog system and send a written report you can act on the same day.",
        sections=[
            ("What is in the report", [
                "A PDF with the verdict first: what works, what does not, and what I would change, in order of priority. Each note has a timestamp, so you know exactly where to listen. Spectrum and LUFS analysis support what the ears say, they do not replace it."]),
            ("What I listen for", [
                "Low end and the relationship between kick and bass. Midrange separation and vocal level. Stereo image, phase and mono compatibility. Depth, dynamics and how the mix translates from studio monitors to a phone and a car."]),
            ("Who it is for", [
                "Producers who mix their own music and want a second pair of trained ears before release or before mastering. If the report says the mix is ready, mastering is the next step. If it is not, you know what to fix and why."]),
        ],
        includes=["PDF report with fixes in order of priority", "Notes with timestamps", "Spectrum and LUFS analysis", "A clear verdict: ready for mastering or not"],
        need=["Your stereo mix in WAV", "One or two reference tracks", "The points you are unsure about"],
        faqs=[("How much does mix feedback cost?", "$45 per track."),
              ("How long does it take?", "Within 48 hours."),
              ("Do you fix the mix for me?", "No, this service is a report. If you want me to do the work, that is mix and master or stem mastering.")],
    ),
}

# ------------------------------------------------------------------ Italiano
PAGES["it"] = {
    "mix": dict(
        path="/it/mix-e-mastering-online", name="Mix e master",
        title="Mix engineer a Milano: mix e mastering online | Angelo Pillon",
        description="Fonico di mix a Milano, anche online. Le tue tracce mixate e masterizzate in catena ibrida analogica, intonazione della voce compresa. Da $110, 3-5 giorni.",
        h1="Mix engineer a Milano: mix e mastering online",
        lead="Mandami le tracce. Mixo e masterizzo il brano in una catena ibrida analogica e digitale e ti torna indietro un disco bilanciato, profondo e pronto per uscire.",
        sections=[
            ("Cosa fa un mix engineer al tuo brano", [
                "Un mix è fatto di centinaia di piccole decisioni che insieme danno una sola sensazione. Prima livelli e panorama, poi l’EQ perché ogni parte abbia il suo spazio, la compressione perché il groove stia insieme, riverbero e delay per costruire la profondità dal davanti al fondo. Il resto lo fanno le automazioni: la voce che resta davanti in ogni frase, il drop che colpisce più forte della salita.",
                "In ogni sessione controllo fase e compatibilità mono, perché un mix largo che si svuota su un telefono o su un impianto da club non è finito. L’intonazione della voce fa parte del mix, non è un extra."]),
            ("Plugin per la precisione, analogico per il peso", [
                "Il lavoro correttivo si fa nel DAW con UAD, FabFilter e Waves, dove ogni scelta si può richiamare. Poi il mix passa negli stadi analogici scelti per quel brano: SSL Fusion per coesione e profondità, API 2500 per compressione di bus e punch, un EQ stile Pultec per il timbro, il nastro per armoniche e densità delle basse, 1176 e LA-2A su voce e batteria.",
                "Il master fa parte del lavoro. Il true peak è limitato a −0,3 o −0,2 dBTP e la loudness è impostata per la destinazione del brano: streaming, club o radio."]),
            ("I generi che mixo ogni settimana", [
                "Techno, melodic techno, house, afro house ed EDM, dove le basse e lo spazio attorno reggono il brano. Pop, R&B e rap, dove la voce deve stare davanti senza litigare con la base. Rock, quando la batteria ha bisogno di aria e le chitarre di larghezza.",
                "Faccio solo mix e mastering. Produzione, arrangiamento ed edit come le radio edit li prepari tu, pronti per il mix."]),
        ],
        includes=["Mix completo dalle tue tracce, con il master compreso", "Intonazione della voce dentro il mix", "Una prima versione con le note su cosa ho cambiato e perché",
                  "Revisioni finché è giusto, illimitate nel pacchetto analogico da 60 stem", "Master finale in WAV per streaming, club e download"],
        need=["Tracce in WAV alla frequenza e alla risoluzione della sessione", "Niente sul bus master", "BPM, una breve nota sul brano e uno o due brani di riferimento",
              "Gli effetti che vuoi tenere, stampati sulla traccia"],
        faqs=[("Quanto costa un mix engineer?", "Mix e master partono da $110 fino a 10 stem. Fino a 30 stem sono $160, fino a 60 stem in catena analogica con revisioni illimitate sono $210. Per album ed EP preparo un’offerta su misura."),
              ("Quanto tempo ci vuole per un mix?", "Di solito da 3 a 5 giorni da quando ho tutti i file. Per EP e album concordiamo un calendario all’inizio."),
              ("Fai un test mix gratuito?", "No. Puoi ascoltare lavori finiti nella playlist in home e leggere più di 700 recensioni. Se prima vuoi un parere sul tuo mix, c’è il servizio di feedback."),
              ("Lavori anche in studio a Milano?", "Lo studio è a Milano e lavoro online con clienti dall’Italia e dall’estero. I file viaggiano con un link e il metodo di lavoro è lo stesso.")],
    ),
    "master": dict(
        path="/it/mastering-online", name="Mastering",
        title="Mastering online e a Milano, in analogico | Angelo Pillon",
        description="Mastering analogico da un fonico certificato Apple Digital Masters. Forte, pulito e sicuro su ogni piattaforma. Da $60 a brano, 48 ore, 4,9/5 su oltre 700 recensioni.",
        h1="Mastering online in catena analogica, da Milano",
        lead="Mandami il mix stereo. In circa 48 ore ricevi un master forte quanto serve, ancora dinamico e sicuro su ogni piattaforma su cui uscirà.",
        sections=[
            ("Cosa cambia il mastering, e cosa non può fare", [
                "Il mastering è l’ultimo ascolto prima dell’uscita. Si corregge il bilanciamento tonale perché il brano suoni giusto su ogni impianto, si controlla la dinamica senza schiacciare il groove, si verifica l’immagine stereo anche in mono e si imposta la loudness per la destinazione. In un EP o in un album i brani vengono allineati perché suonino come un solo disco.",
                "Il mastering non può sistemare una voce sepolta o una cassa che litiga con il basso. Se lo sento te lo dico prima di iniziare: di solito la strada giusta è lo stem mastering o una revisione del mix."]),
            ("Loudness e true peak, impostati per la destinazione", [
                "Le piattaforme di streaming normalizzano il volume, quindi un master spinto al limite non guadagna nulla e perde impatto. Scelgo la loudness in base a genere e destinazione: i master per il club sono più forti, quelli per lo streaming tengono più dinamica. Il true peak è limitato a −0,3 o −0,2 dBTP, così il livello resta e i codec non vanno in clipping.",
                "Puoi controllare ogni versione con il misuratore LUFS gratuito di questo sito."]),
            ("La catena analogica", [
                "Dopo il lavoro correttivo nel computer, il mix passa in SSL Fusion per coesione e profondità, API 2500 per la compressione di bus, un EQ stile Pultec per il timbro e nel nastro per armoniche e densità delle basse. Gli stadi si scelgono brano per brano, non si impilano per abitudine.",
                "Sono certificato Apple Digital Masters, quindi i master possono essere consegnati secondo quello standard quando il tuo distributore lo prevede."]),
        ],
        includes=["Mastering analogico del tuo mix stereo", "Loudness e true peak impostati per streaming, club o radio", "Fino a 5 revisioni",
                  "EP di 4 brani a $180, allineati tra loro", "Master finale in WAV, più i formati richiesti dal distributore"],
        need=["Mix stereo in WAV alla frequenza e alla risoluzione della sessione", "Nessun limiter o clipper sul bus master, e qualche dB di margine",
              "Uno o due brani di riferimento e dove uscirà il pezzo"],
        faqs=[("Quanto costa il mastering?", "$60 per un brano con mastering analogico, $180 per un EP di quattro brani. Per gli album preparo un’offerta su misura."),
              ("Quanto sarà forte il mio master?", "Forte quanto la musica permette senza rovinarla. Per lo streaming tengo il true peak a −0,3 o −0,2 dBTP e scelgo la loudness in base al genere; i master per il club di solito sono più forti."),
              ("Come esporto il mix per il mastering?", "WAV, stessa frequenza e risoluzione della sessione, nessun limiter sul bus master, picchi qualche dB sotto lo zero. La guida all’esportazione negli articoli spiega ogni passaggio."),
              ("Quante revisioni sono comprese?", "Fino a cinque. Di solito bastano uno o due giri.")],
    ),
    "stem": dict(
        path="/it/stem-mastering", name="Stem mastering",
        title="Stem mastering online in analogico | Angelo Pillon",
        description="Stem mastering in catena analogica: fino a 40 stem, più controllo di un master stereo senza il costo di un mix completo. $100 a brano, da 48 a 72 ore.",
        h1="Stem mastering: più controllo di un master stereo",
        lead="Esporta il mix in gruppi. Masterizzo dagli stem nella catena analogica, così cassa, basso e voce si possono sistemare uno per uno prima del limiter finale.",
        sections=[
            ("Quando lo stem mastering è la scelta giusta", [
                "Un master stereo tratta tutto il mix insieme. Se la voce è un po’ bassa o il basso un po’ pesante, ogni correzione tocca anche tutto il resto. Con gli stem posso intervenire su un gruppo senza disturbare gli altri, e poi masterizzare il risultato nel suo insieme.",
                "È adatto ai mix quasi pronti: il bilanciamento c’è e il suono è il tuo, ma uno o due elementi hanno bisogno di una mano che un master stereo non può dare."]),
            ("Come esportare gli stem", [
                "Raggruppa la sessione nelle parti che contano: cassa, basso, batteria, musica, voci, effetti. Esporta ogni gruppo dallo stesso punto di partenza, alla frequenza e alla risoluzione della sessione, senza nulla sul bus master. Suonati insieme a livello unitario, gli stem devono suonare esattamente come il tuo mix.",
                "Sono compresi fino a 40 stem."]),
            ("Stem mastering o mix completo?", [
                "Lo stem mastering tiene le tue scelte di mix e le rifinisce. Un mix completo parte dalle singole tracce e ricostruisce bilanciamento, spazio e dinamica. Se agli stem serve più di livello, EQ e compressione per gruppo, la risposta onesta è mix e master, e te lo dico prima di iniziare."]),
        ],
        includes=["Mastering da un massimo di 40 stem nella catena analogica", "Bilanciamento, EQ e dinamica per gruppo prima del master finale",
                  "Loudness e true peak impostati per la destinazione", "Master finale in WAV"],
        need=["Stem in WAV, tutti esportati dallo stesso punto di partenza", "Niente sul bus master", "Il tuo bounce stereo come riferimento"],
        faqs=[("Quanto costa lo stem mastering?", "$100 a brano, fino a 40 stem."),
              ("Quanto tempo ci vuole?", "Da 48 a 72 ore."),
              ("Che differenza c’è tra stem e multitraccia?", "Le multitracce sono tutti i singoli canali della sessione. Gli stem sono gruppi di canali esportati insieme, per esempio tutta la batteria o tutte le voci. Lo stem mastering lavora sui gruppi.")],
    ),
    "feedback": dict(
        path="/it/feedback-mix", name="Feedback sul mix",
        title="Feedback sul mix: analisi professionale | Angelo Pillon",
        description="Mandami il tuo mix e ricevi un report PDF da un mix engineer: punti di forza, problemi e correzioni in ordine di priorità, con analisi di spettro e LUFS. $45, 48 ore.",
        h1="Feedback sul tuo mix da un mix engineer",
        lead="Mixi da solo e vuoi capire cosa trattiene il brano. Ascolto su un sistema analogico calibrato e ti mando un report scritto su cui puoi lavorare il giorno stesso.",
        sections=[
            ("Cosa c’è nel report", [
                "Un PDF che parte dal verdetto: cosa funziona, cosa no e cosa cambierei, in ordine di priorità. Ogni nota ha il suo minutaggio, così sai esattamente dove ascoltare. Le analisi di spettro e LUFS confermano quello che dicono le orecchie, non lo sostituiscono."]),
            ("Cosa ascolto", [
                "Le basse e il rapporto tra cassa e basso. La separazione sulle medie e il livello della voce. Immagine stereo, fase e compatibilità mono. Profondità, dinamica e come il mix passa dai monitor da studio a un telefono e a un’auto."]),
            ("Per chi è", [
                "Per chi produce e mixa la propria musica e vuole un secondo paio di orecchie allenate prima dell’uscita o prima del mastering. Se il report dice che il mix è pronto, il passo successivo è il mastering. Se non lo è, sai cosa sistemare e perché."]),
        ],
        includes=["Report PDF con le correzioni in ordine di priorità", "Note con i minutaggi", "Analisi di spettro e LUFS", "Un verdetto chiaro: pronto per il mastering oppure no"],
        need=["Il tuo mix stereo in WAV", "Uno o due brani di riferimento", "I punti su cui hai dubbi"],
        faqs=[("Quanto costa il feedback sul mix?", "$45 a brano."),
              ("Quanto tempo ci vuole?", "Entro 48 ore."),
              ("Sistemi tu il mix?", "No, questo servizio è un report. Se vuoi che il lavoro lo faccia io, i servizi sono mix e master oppure stem mastering.")],
    ),
}

# ------------------------------------------------------------------ Deutsch
PAGES["de"] = {
    "mix": dict(
        path="/de/mixing-engineer", name="Mix und Master",
        title="Mixing Engineer online: Mixing & Mastering | Angelo Pillon",
        description="Song mischen lassen vom Mixing Engineer: deine Spuren gemischt und gemastert in einer hybriden Analogkette, Vocal-Tuning inklusive. Ab $110, 3 bis 5 Tage.",
        h1="Mixing Engineer für deinen Song, online aus Mailand",
        lead="Schick mir die Spuren. Ich mische und mastere den Track in einer hybriden analogen und digitalen Kette, und du bekommst eine ausgewogene, tiefe und veröffentlichungsreife Aufnahme zurück.",
        sections=[
            ("Was ein Mixing Engineer mit deinem Track macht", [
                "Ein Mix besteht aus hunderten kleinen Entscheidungen, die zusammen ein Gefühl ergeben. Zuerst Pegel und Panorama, dann EQ, damit jedes Element seinen Platz hat, Kompression, damit der Groove zusammenhält, Hall und Delay für die Tiefe von vorne nach hinten. Den Rest erledigt die Automation: die Stimme, die in jeder Zeile vorne bleibt, der Drop, der härter trifft als der Aufbau.",
                "In jeder Session prüfe ich Phase und Monokompatibilität, denn ein breiter Mix, der auf dem Handy oder auf einer Clubanlage zusammenfällt, ist nicht fertig. Vocal-Tuning gehört zum Mix und ist kein Extra."]),
            ("Plugins für Präzision, Analog für Gewicht", [
                "Die Korrekturen passieren in der DAW mit UAD, FabFilter und Waves, wo jede Einstellung abrufbar bleibt. Danach läuft der Mix durch analoge Stufen, die für den Song gewählt werden: SSL Fusion für Zusammenhalt und Tiefe, API 2500 für Buskompression und Punch, ein EQ im Pultec-Stil für den Klang, Band für Obertöne und Dichte im Bass, 1176 und LA-2A auf Stimme und Drums.",
                "Das Master gehört dazu. Der True Peak wird bei −0,3 oder −0,2 dBTP begrenzt, die Lautheit richtet sich nach dem Ziel des Tracks: Streaming, Club oder Radio."]),
            ("Genres, die ich jede Woche mische", [
                "Techno, Melodic Techno, House, Afro House und EDM, wo der Bass und der Raum darum den Track tragen. Pop, R&B und Rap, wo die Stimme vorne sitzen muss, ohne mit dem Beat zu kämpfen. Rock, wenn die Drums Raum und die Gitarren Breite brauchen.",
                "Ich mache nur Mixing und Mastering. Produktion, Arrangement und Edits wie Radio-Versionen kommen von dir, fertig für den Mix."]),
        ],
        includes=["Kompletter Mix aus deinen Spuren, Master inklusive", "Vocal-Tuning als Teil des Mixes", "Eine erste Version mit Notizen, was ich geändert habe und warum",
                  "Revisionen, bis es passt, unbegrenzt im analogen Paket mit 60 Stems", "Finales WAV-Master für Streaming, Club und Download"],
        need=["Spuren als WAV in Samplerate und Bittiefe der Session", "Nichts auf dem Masterbus", "BPM, eine kurze Notiz zum Track und ein oder zwei Referenzsongs",
              "Effekte, die bleiben sollen, in die Spur gerendert"],
        faqs=[("Was kostet ein Mixing Engineer?", "Mix und Master beginnen bei $110 für bis zu 10 Stems. Bis zu 30 Stems kosten $160, bis zu 60 Stems in der Analogkette mit unbegrenzten Revisionen $210. Für Alben und EPs gibt es ein individuelles Angebot."),
              ("Wie lange dauert ein Mix?", "In der Regel 3 bis 5 Tage, sobald ich alle Dateien habe. Bei EPs und Alben legen wir am Anfang einen Zeitplan fest."),
              ("Gibt es einen kostenlosen Testmix?", "Nein. Fertige Arbeiten hörst du in der Playlist auf der Startseite, dazu gibt es mehr als 700 Bewertungen. Wenn du zuerst eine Meinung zu deinem eigenen Mix möchtest, ist das Mix-Feedback dafür gedacht."),
              ("Arbeitest du auf Deutsch?", "Ja. Deutsch, Englisch, Italienisch und Spanisch.")],
    ),
    "master": dict(
        path="/de/mastering-engineer", name="Mastering",
        title="Mastering Engineer online: analoges Mastering | Angelo Pillon",
        description="Song mastern lassen: analoges Mastering von einem Apple Digital Masters zertifizierten Engineer. Laut, sauber und sicher auf jeder Plattform. Ab $60, 48 Stunden.",
        h1="Mastering Engineer: analoges Mastering, online aus Mailand",
        lead="Schick mir deinen Stereomix. In etwa 48 Stunden bekommst du ein Master, das laut genug ist, dynamisch bleibt und auf jeder Plattform sicher läuft.",
        sections=[
            ("Was Mastering verändert, und was es nicht kann", [
                "Mastering ist das letzte Hören vor dem Release. Die tonale Balance wird korrigiert, damit der Track auf jeder Anlage richtig klingt, die Dynamik wird kontrolliert, ohne den Groove plattzudrücken, das Stereobild wird in Mono geprüft und die Lautheit auf das Ziel eingestellt. Bei einer EP oder einem Album werden die Tracks aneinander angepasst, damit sie wie eine Platte klingen.",
                "Mastering kann keine vergrabene Stimme und keine Kick retten, die mit dem Bass kämpft. Wenn ich das höre, sage ich es dir vor dem Start. Meist ist dann Stem-Mastering oder eine Mix-Revision der bessere Weg."]),
            ("Lautheit und True Peak, passend zum Ziel", [
                "Streamingdienste normalisieren die Wiedergabe. Ein Master am Anschlag gewinnt also nichts und verliert Punch. Ich wähle die Lautheit nach Genre und Ziel: Club-Master sind lauter, Streaming-Master behalten mehr Dynamik. Der True Peak wird bei −0,3 oder −0,2 dBTP begrenzt, das hält den Pegel und bleibt vom Codec-Clipping weg.",
                "Jede Version kannst du selbst mit dem kostenlosen LUFS-Meter dieser Seite prüfen."]),
            ("Die Analogkette", [
                "Nach den Korrekturen im Rechner läuft der Mix durch SSL Fusion für Zusammenhalt und Tiefe, API 2500 für Buskompression, einen EQ im Pultec-Stil für musikalische Klangformung und Band für Obertöne und Dichte im Bass. Die Stufen werden pro Track gewählt, nicht aus Gewohnheit gestapelt.",
                "Ich bin Apple Digital Masters zertifiziert. Master können also nach diesem Standard geliefert werden, wenn dein Vertrieb ihn unterstützt."]),
        ],
        includes=["Analoges Mastering deines Stereomixes", "Lautheit und True Peak für Streaming, Club oder Radio", "Bis zu 5 Revisionen",
                  "EP mit 4 Tracks für $180, aufeinander abgestimmt", "Finales WAV-Master, dazu die Formate, die dein Vertrieb verlangt"],
        need=["Stereomix als WAV in Samplerate und Bittiefe der Session", "Kein Limiter oder Clipper auf dem Masterbus und ein paar dB Headroom",
              "Ein oder zwei Referenztracks und wo der Song erscheint"],
        faqs=[("Was kostet Mastering?", "$60 für einen Track mit analogem Mastering, $180 für eine EP mit vier Tracks. Für Alben gibt es ein individuelles Angebot."),
              ("Wie laut wird mein Master?", "So laut, wie die Musik es ohne Schaden zulässt. Für Streaming halte ich den True Peak bei −0,3 oder −0,2 dBTP und wähle die Lautheit nach Genre; Club-Master sind meist lauter."),
              ("Wie exportiere ich meinen Mix fürs Mastering?", "WAV, gleiche Samplerate und Bittiefe wie die Session, kein Limiter auf dem Masterbus, Spitzen ein paar dB unter null. Der Export-Leitfaden in den Artikeln erklärt jeden Schritt."),
              ("Wie viele Revisionen sind enthalten?", "Bis zu fünf. Meist reichen ein oder zwei Runden.")],
    ),
    "stem": dict(
        path="/de/stem-mastering", name="Stem-Mastering",
        title="Stem-Mastering online, analog | Angelo Pillon",
        description="Stem-Mastering in der Analogkette: bis zu 40 Stems, mehr Kontrolle als beim Stereo-Master ohne die Kosten eines kompletten Mixes. $100 pro Track, 48 bis 72 Stunden.",
        h1="Stem-Mastering: mehr Kontrolle als ein Stereo-Master",
        lead="Exportiere deinen Mix in Gruppen. Ich mastere aus den Stems in der Analogkette, sodass Kick, Bass und Stimme einzeln stimmen, bevor der Limiter kommt.",
        sections=[
            ("Wann Stem-Mastering die richtige Wahl ist", [
                "Ein Stereo-Master behandelt den ganzen Mix auf einmal. Ist die Stimme etwas leise oder der Bass etwas schwer, berührt jede Korrektur auch alles andere. Mit Stems kann ich eine Gruppe anpassen, ohne den Rest zu stören, und danach das Ganze mastern.",
                "Es passt zu Mixen, die fast fertig sind: Die Balance stimmt, der Sound ist deiner, aber ein oder zwei Elemente brauchen Hilfe, die ein Stereo-Master nicht geben kann."]),
            ("So exportierst du Stems", [
                "Gruppiere die Session in die Teile, auf die es ankommt: Kick, Bass, Drums, Musik, Vocals, Effekte. Exportiere jede Gruppe vom selben Startpunkt, in Samplerate und Bittiefe der Session, ohne etwas auf dem Masterbus. Zusammen abgespielt müssen die Stems genau wie dein Mix klingen.",
                "Bis zu 40 Stems sind enthalten."]),
            ("Stem-Mastering oder kompletter Mix?", [
                "Stem-Mastering behält deine Mix-Entscheidungen und verfeinert sie. Ein kompletter Mix beginnt bei den Einzelspuren und baut Balance, Raum und Dynamik neu auf. Brauchen die Stems mehr als Pegel, EQ und Kompression pro Gruppe, ist Mix und Master die ehrliche Antwort, und das sage ich dir vor dem Start."]),
        ],
        includes=["Mastering aus bis zu 40 Stems in der Analogkette", "Balance, EQ und Dynamik pro Gruppe vor dem finalen Master",
                  "Lautheit und True Peak passend zum Ziel", "Finales WAV-Master"],
        need=["Stems als WAV, alle vom selben Startpunkt exportiert", "Nichts auf dem Masterbus", "Dein eigener Stereo-Bounce als Referenz"],
        faqs=[("Was kostet Stem-Mastering?", "$100 pro Track, für bis zu 40 Stems."),
              ("Wie lange dauert es?", "48 bis 72 Stunden."),
              ("Was ist der Unterschied zwischen Stems und Einzelspuren?", "Einzelspuren sind alle Kanäle der Session. Stems sind Gruppen von Kanälen, die zusammen exportiert werden, zum Beispiel alle Drums oder alle Vocals. Stem-Mastering arbeitet mit Gruppen.")],
    ),
    "feedback": dict(
        path="/de/mix-feedback", name="Mix-Feedback",
        title="Mix-Feedback vom Mixing Engineer | Angelo Pillon",
        description="Schick deinen Mix und erhalte einen PDF-Report vom Mixing Engineer: Stärken, Probleme und Korrekturen nach Priorität, mit Spektrum- und LUFS-Analyse. $45, 48 Stunden.",
        h1="Mix-Feedback von einem Mixing Engineer",
        lead="Du mischst deine Musik selbst und willst wissen, was sie zurückhält. Ich höre auf einem kalibrierten analogen System und schicke dir einen Report, mit dem du am selben Tag arbeiten kannst.",
        sections=[
            ("Was im Report steht", [
                "Ein PDF, das mit dem Urteil beginnt: was funktioniert, was nicht und was ich ändern würde, nach Priorität geordnet. Jede Notiz hat einen Zeitstempel, damit du genau weißt, wo du hinhören musst. Spektrum- und LUFS-Analyse stützen, was die Ohren sagen, sie ersetzen es nicht."]),
            ("Worauf ich höre", [
                "Bassbereich und das Verhältnis von Kick und Bass. Trennung in den Mitten und Pegel der Stimme. Stereobild, Phase und Monokompatibilität. Tiefe, Dynamik und wie der Mix von Studiomonitoren auf Handy und Auto übersetzt."]),
            ("Für wen es gedacht ist", [
                "Für Producer, die ihre Musik selbst mischen und vor dem Release oder vor dem Mastering ein zweites Paar geschulter Ohren wollen. Sagt der Report, dass der Mix bereit ist, folgt das Mastering. Wenn nicht, weißt du, was zu tun ist und warum."]),
        ],
        includes=["PDF-Report mit Korrekturen nach Priorität", "Notizen mit Zeitstempeln", "Spektrum- und LUFS-Analyse", "Ein klares Urteil: bereit fürs Mastering oder nicht"],
        need=["Dein Stereomix als WAV", "Ein oder zwei Referenztracks", "Die Punkte, bei denen du unsicher bist"],
        faqs=[("Was kostet das Mix-Feedback?", "$45 pro Track."),
              ("Wie lange dauert es?", "Innerhalb von 48 Stunden."),
              ("Korrigierst du den Mix für mich?", "Nein, diese Leistung ist ein Report. Wenn ich die Arbeit machen soll, ist das Mix und Master oder Stem-Mastering.")],
    ),
}

# ------------------------------------------------------------------ Español
PAGES["es"] = {
    "mix": dict(
        path="/es/ingeniero-de-mezcla", name="Mezcla y master",
        title="Ingeniero de mezcla online: mezcla y mastering | Angelo Pillon",
        description="Contrata a un ingeniero de mezcla online. Tus pistas mezcladas y masterizadas en una cadena híbrida analógica, afinación de voz incluida. Desde $110, de 3 a 5 días.",
        h1="Ingeniero de mezcla para tu canción, online desde Milán",
        lead="Envíame las pistas. Mezclo y masterizo el tema en una cadena híbrida analógica y digital, y te devuelvo un disco equilibrado, profundo y listo para publicar.",
        sections=[
            ("Qué hace un ingeniero de mezcla con tu tema", [
                "Una mezcla son cientos de pequeñas decisiones que juntas dan una sola sensación. Primero niveles y panorama, después EQ para que cada parte tenga su espacio, compresión para que el groove se sostenga, y reverb y delay para construir profundidad de delante hacia atrás. El resto lo hace la automatización: la voz que se mantiene delante en cada frase, el drop que golpea más fuerte que la subida.",
                "En cada sesión reviso fase y compatibilidad mono, porque una mezcla ancha que se vacía en un móvil o en un equipo de club no está terminada. La afinación de voz forma parte de la mezcla, no es un extra."]),
            ("Plugins para la precisión, analógico para el peso", [
                "El trabajo correctivo se hace en el DAW con UAD, FabFilter y Waves, donde cada ajuste se puede recuperar. Después la mezcla pasa por etapas analógicas elegidas para la canción: SSL Fusion para cohesión y profundidad, API 2500 para compresión de bus y pegada, un EQ estilo Pultec para el timbre, cinta para armónicos y densidad en graves, 1176 y LA-2A en voz y batería.",
                "El master forma parte del trabajo. El true peak se limita a −0,3 o −0,2 dBTP y la sonoridad se ajusta al destino del tema: streaming, club o radio."]),
            ("Géneros que mezclo cada semana", [
                "Techno, melodic techno, house, afro house y EDM, donde los graves y el espacio a su alrededor sostienen el tema. Pop, R&B y rap, donde la voz tiene que estar delante sin pelear con la base. Rock, cuando la batería necesita aire y las guitarras anchura.",
                "Solo hago mezcla y mastering. Producción, arreglos y ediciones como las versiones de radio los preparas tú, listos para mezclar."]),
        ],
        includes=["Mezcla completa a partir de tus pistas, con el master incluido", "Afinación de voz dentro de la mezcla", "Una primera versión con notas sobre qué cambié y por qué",
                  "Revisiones hasta que esté bien, ilimitadas en el paquete analógico de 60 stems", "Master final en WAV para streaming, club y descarga"],
        need=["Pistas en WAV a la frecuencia y resolución de la sesión", "Nada en el bus master", "BPM, una nota breve sobre el tema y una o dos canciones de referencia",
              "Los efectos que quieras conservar, impresos en la pista"],
        faqs=[("¿Cuánto cuesta un ingeniero de mezcla?", "Mezcla y master empiezan en $110 hasta 10 stems. Hasta 30 stems son $160, y hasta 60 stems en la cadena analógica con revisiones ilimitadas son $210. Para álbumes y EP preparo una oferta a medida."),
              ("¿Cuánto tarda una mezcla?", "Normalmente de 3 a 5 días desde que tengo todos los archivos. Para EP y álbumes acordamos un calendario al principio."),
              ("¿Haces una mezcla de prueba gratis?", "No. Puedes escuchar trabajos terminados en la playlist de la página principal y leer más de 700 reseñas. Si antes quieres una opinión sobre tu propia mezcla, para eso está el feedback de mezcla."),
              ("¿Trabajas en español?", "Sí. Español, inglés, italiano y alemán.")],
    ),
    "master": dict(
        path="/es/ingeniero-de-mastering", name="Mastering",
        title="Ingeniero de mastering online, analógico | Angelo Pillon",
        description="Mastering analógico de un ingeniero certificado Apple Digital Masters. Fuerte, limpio y seguro en cada plataforma. Desde $60 por tema, 48 horas.",
        h1="Ingeniero de mastering: mastering analógico, online desde Milán",
        lead="Envíame tu mezcla estéreo. En unas 48 horas recibes un master con el volumen necesario, todavía dinámico y seguro en cada plataforma donde se publique.",
        sections=[
            ("Qué cambia el mastering, y qué no puede hacer", [
                "El mastering es la última escucha antes del lanzamiento. Se corrige el balance tonal para que el tema suene bien en cualquier equipo, se controla la dinámica sin aplastar el groove, se comprueba la imagen estéreo en mono y se ajusta la sonoridad al destino. En un EP o un álbum los temas se igualan para que suenen como un solo disco.",
                "El mastering no puede arreglar una voz enterrada ni un bombo que pelea con el bajo. Si lo oigo, te lo digo antes de empezar: lo normal es que convenga el stem mastering o una revisión de la mezcla."]),
            ("Sonoridad y true peak, ajustados al destino", [
                "Las plataformas de streaming normalizan el volumen, así que un master llevado al límite no gana nada y pierde pegada. Elijo la sonoridad según género y destino: los masters para club van más fuertes, los de streaming conservan más dinámica. El true peak se limita a −0,3 o −0,2 dBTP, lo que mantiene el nivel y evita el clipping de los códecs.",
                "Puedes comprobar cada versión con el medidor LUFS gratuito de este sitio."]),
            ("La cadena analógica", [
                "Tras el trabajo correctivo en el ordenador, la mezcla pasa por SSL Fusion para cohesión y profundidad, API 2500 para compresión de bus, un EQ estilo Pultec para dar forma al timbre y cinta para armónicos y densidad en graves. Las etapas se eligen tema a tema, no se apilan por costumbre.",
                "Estoy certificado en Apple Digital Masters, así que los masters pueden entregarse según ese estándar cuando tu distribuidora lo admite."]),
        ],
        includes=["Mastering analógico de tu mezcla estéreo", "Sonoridad y true peak ajustados para streaming, club o radio", "Hasta 5 revisiones",
                  "EP de 4 temas por $180, igualados entre sí", "Master final en WAV, más los formatos que pida tu distribuidora"],
        need=["Mezcla estéreo en WAV a la frecuencia y resolución de la sesión", "Sin limitador ni clipper en el bus master, y unos dB de margen",
              "Una o dos canciones de referencia y dónde se publicará el tema"],
        faqs=[("¿Cuánto cuesta el mastering?", "$60 por un tema con mastering analógico, $180 por un EP de cuatro temas. Para álbumes preparo una oferta a medida."),
              ("¿Qué volumen tendrá mi master?", "Tanto como permita la música sin dañarla. Para streaming mantengo el true peak en −0,3 o −0,2 dBTP y elijo la sonoridad según el género; los masters para club suelen ir más fuertes."),
              ("¿Cómo exporto mi mezcla para el mastering?", "WAV, misma frecuencia y resolución que la sesión, sin limitador en el bus master y con los picos unos dB por debajo de cero."),
              ("¿Cuántas revisiones incluye?", "Hasta cinco. Normalmente bastan una o dos rondas.")],
    ),
    "stem": dict(
        path="/es/stem-mastering", name="Stem mastering",
        title="Stem mastering online, analógico | Angelo Pillon",
        description="Stem mastering en cadena analógica: hasta 40 stems, más control que un master estéreo sin el coste de una mezcla completa. $100 por tema, de 48 a 72 horas.",
        h1="Stem mastering: más control que un master estéreo",
        lead="Exporta tu mezcla en grupos. Masterizo desde los stems en la cadena analógica, para que bombo, bajo y voz queden en su sitio antes del limitador final.",
        sections=[
            ("Cuándo conviene el stem mastering", [
                "Un master estéreo trata toda la mezcla a la vez. Si la voz está un poco baja o el bajo un poco pesado, cada corrección toca también todo lo demás. Con stems puedo ajustar un grupo sin alterar el resto y después masterizar el conjunto.",
                "Encaja con mezclas que están casi listas: el balance está cerca y el sonido es el tuyo, pero uno o dos elementos necesitan una ayuda que un master estéreo no puede dar."]),
            ("Cómo exportar los stems", [
                "Agrupa la sesión en las partes que importan: bombo, bajo, batería, música, voces, efectos. Exporta cada grupo desde el mismo punto de inicio, a la frecuencia y resolución de la sesión, sin nada en el bus master. Reproducidos juntos a nivel unitario, los stems deben sonar exactamente como tu mezcla.",
                "Se incluyen hasta 40 stems."]),
            ("¿Stem mastering o mezcla completa?", [
                "El stem mastering conserva tus decisiones de mezcla y las afina. Una mezcla completa parte de las pistas individuales y reconstruye balance, espacio y dinámica. Si los stems necesitan más que nivel, EQ y compresión por grupo, la respuesta honesta es mezcla y master, y te lo digo antes de empezar."]),
        ],
        includes=["Mastering desde un máximo de 40 stems en la cadena analógica", "Balance, EQ y dinámica por grupo antes del master final",
                  "Sonoridad y true peak ajustados al destino", "Master final en WAV"],
        need=["Stems en WAV, todos exportados desde el mismo punto de inicio", "Nada en el bus master", "Tu propio bounce estéreo como referencia"],
        faqs=[("¿Cuánto cuesta el stem mastering?", "$100 por tema, hasta 40 stems."),
              ("¿Cuánto tarda?", "De 48 a 72 horas."),
              ("¿Qué diferencia hay entre stems y multipistas?", "Las multipistas son todos los canales de la sesión. Los stems son grupos de canales exportados juntos, por ejemplo toda la batería o todas las voces. El stem mastering trabaja con grupos.")],
    ),
    "feedback": dict(
        path="/es/feedback-de-mezcla", name="Feedback de mezcla",
        title="Feedback de mezcla: análisis profesional | Angelo Pillon",
        description="Envía tu mezcla y recibe un informe PDF de un ingeniero de mezcla: puntos fuertes, problemas y correcciones por prioridad, con análisis de espectro y LUFS. $45, 48 horas.",
        h1="Feedback de tu mezcla por un ingeniero de mezcla",
        lead="Mezclas tu propia música y quieres saber qué la frena. Escucho en un sistema analógico calibrado y te envío un informe escrito con el que puedes trabajar el mismo día.",
        sections=[
            ("Qué incluye el informe", [
                "Un PDF que empieza por el veredicto: qué funciona, qué no y qué cambiaría, por orden de prioridad. Cada nota lleva su minuto y segundo, para que sepas exactamente dónde escuchar. Los análisis de espectro y LUFS respaldan lo que dicen los oídos, no lo sustituyen."]),
            ("Qué escucho", [
                "Los graves y la relación entre bombo y bajo. La separación en medios y el nivel de la voz. Imagen estéreo, fase y compatibilidad mono. Profundidad, dinámica y cómo se traduce la mezcla de los monitores de estudio a un móvil y a un coche."]),
            ("Para quién es", [
                "Para productores que mezclan su propia música y quieren un segundo par de oídos entrenados antes del lanzamiento o antes del mastering. Si el informe dice que la mezcla está lista, el siguiente paso es el mastering. Si no, sabes qué arreglar y por qué."]),
        ],
        includes=["Informe PDF con las correcciones por prioridad", "Notas con minuto y segundo", "Análisis de espectro y LUFS", "Un veredicto claro: lista para mastering o no"],
        need=["Tu mezcla estéreo en WAV", "Una o dos canciones de referencia", "Los puntos en los que tienes dudas"],
        faqs=[("¿Cuánto cuesta el feedback de mezcla?", "$45 por tema."),
              ("¿Cuánto tarda?", "En 48 horas."),
              ("¿Arreglas tú la mezcla?", "No, este servicio es un informe. Si quieres que haga yo el trabajo, los servicios son mezcla y master o stem mastering.")],
    ),
}
