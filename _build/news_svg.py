"""Original infographics for the news articles. One SVG per article and language.
Run: python3 _build/news_svg.py  ->  assets/img/news/<key>-<lang>.svg
No third-party images: shapes and text only."""
from pathlib import Path
from html import escape

OUT = Path(__file__).resolve().parent.parent / "assets/img/news"
W, H = 960, 540
BG, PANEL, LINE = "#0C0C12", "#121219", "#26262E"
INK, INK2, INK3 = "#F5F5F7", "#A1A1AA", "#808089"
LIME, VFD, AMBER, VIOLET, PINK, ORANGE = "#A3E635", "#7CF2DC", "#FFC24B", "#8B4DFF", "#FF3DA5", "#FF6A2B"
FONT = "Helvetica Neue, Helvetica, Arial, sans-serif"


def t(x, y, s, size=20, fill=INK, weight=500, anchor="start"):
    return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(str(s))}</text>'


def rect(x, y, w, h, fill=PANEL, r=10, stroke=None):
    st = f' stroke="{stroke}" stroke-width="1.5"' if stroke else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}"{st}/>'


def svg(title, sub, body, source):
    head = t(48, 64, title, 30, INK, 750) + t(48, 98, sub, 18, INK2, 450)
    foot = t(48, H - 26, source, 13, INK3, 450) + t(W - 48, H - 26, "angelopillon.com", 13, INK3, 600, "end")
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" font-family="{FONT}" role="img">'
            f'<title>{escape(title)}</title>{rect(0, 0, W, H, BG, 18)}{head}{body}{foot}</svg>')


L = lambda it, en, de: {"it": it, "en": en, "de": de}


# 1 Logic Pro 13: timeline of the 2026 Logic releases
def logic(lang):
    T = L("Logic Pro nel 2026", "Logic Pro in 2026", "Logic Pro im Jahr 2026")[lang]
    S = L("Le tre tappe dell’anno, da gennaio a novembre", "The year’s three milestones, January to November", "Die drei Etappen des Jahres, Januar bis November")[lang]
    pts = [
        ("28/01", "Logic Pro 12", L(["Session Players AI", "Chord ID"], ["AI Session Players", "Chord ID"], ["KI-Session-Player", "Chord ID"])[lang], VIOLET),
        ("12.3", "Logic Pro 12.3", L(["Alchemy: modo granulare"], ["Alchemy granular mode"], ["Alchemy: Granular-Modus"])[lang], AMBER),
        ("05/11", "Logic Pro 13", L(["Browser unificato", "Stem Splitter per la batteria", "Intelligent Assistant (beta)"], ["Unified Browser", "Stem Splitter for drum parts", "Intelligent Assistant (beta)"], ["Einheitlicher Browser", "Stem Splitter für Drum-Parts", "Intelligent Assistant (Beta)"])[lang], LIME),
    ]
    b = f'<line x1="110" y1="200" x2="850" y2="200" stroke="{LINE}" stroke-width="4"/>'
    for i, (d, name, items, c) in enumerate(pts):
        x = 190 + i * 290
        b += f'<circle cx="{x}" cy="200" r="13" fill="{c}"/>' + t(x, 170, d, 16, INK2, 600, "middle")
        b += rect(x - 135, 236, 270, 60 + 34 * len(items), PANEL, 12, c) + t(x - 115, 276, name, 22, INK, 700)
        for j, it in enumerate(items):
            b += t(x - 115, 314 + j * 34, "· " + it, 17, INK2)
    return svg(T, S, b, L("Fonte: Apple, note di rilascio", "Source: Apple release notes", "Quelle: Apple, Release Notes")[lang])


# 2 Pro Tools 2026.11: one track into six stems
def protools(lang):
    T = L("Stem Separator in Pro Tools 2026.11", "Stem Separator in Pro Tools 2026.11", "Stem Separator in Pro Tools 2026.11")[lang]
    S = L("Fino a sei stem, calcolati in locale, in tutte le versioni", "Up to six stems, processed locally, in every tier", "Bis zu sechs Stems, lokal berechnet, in jeder Version")[lang]
    names = L(["Voce", "Batteria", "Basso", "Chitarra", "Tastiere", "Altro"], ["Vocals", "Drums", "Bass", "Guitar", "Keys", "Other"], ["Vocals", "Drums", "Bass", "Gitarre", "Keys", "Andere"])[lang]
    cols = [PINK, ORANGE, VIOLET, AMBER, VFD, INK3]
    b = rect(48, 250, 230, 76, PANEL, 12, LIME) + t(163, 296, L("Mix stereo", "Stereo mix", "Stereo-Mix")[lang], 20, INK, 700, "middle")
    import math
    wave = " ".join(f"{70 + k * 4},{288 + 14 * math.sin(k * .55) * math.sin(k * .13)}" for k in range(47))
    b += f'<polyline points="{wave}" fill="none" stroke="{LIME}" stroke-width="2" opacity=".35"/>'
    for i, (n, c) in enumerate(zip(names, cols)):
        y = 136 + i * 56
        b += f'<path d="M278 288 C 380 288, 380 {y + 22}, 470 {y + 22}" fill="none" stroke="{c}" stroke-width="2.5"/>'
        b += rect(470, y, 400, 44, PANEL, 10) + rect(470, y, 8, 44, c, 3) + t(496, y + 29, n, 18, INK, 600)
        bars = "".join(f'<rect x="{640 + k * 9}" y="{y + 22 - h}" width="5" height="{2 * h}" fill="{c}" opacity=".7"/>' for k, h in enumerate([(3 + (k * 7 + i * 5) % 13) for k in range(24)]))
        b += bars
    return svg(T, S, b, L("Fonte: Avid, note di rilascio 2026.11", "Source: Avid 2026.11 release notes", "Quelle: Avid, Release Notes 2026.11")[lang])


# 3 Fender American Professional: lineup
def fender(lang):
    T = L("La nuova serie American Professional", "The new American Professional series", "Die neue American-Professional-Serie")[lang]
    S = L("Dieci modelli al lancio, costruiti a Corona, California", "Ten models at launch, built in Corona, California", "Zehn Modelle zum Start, gebaut in Corona, Kalifornien")[lang]
    gtr = ["Stratocaster", "Stratocaster HSS", "Telecaster", "Hot Shot Telecaster", "Jazzmaster", "Jaguar"]
    bass = ["Precision Bass", "Precision Bass V", "Jazz Bass", "Jazz Bass V"]
    b = t(48, 150, L("Chitarre", "Guitars", "Gitarren")[lang], 16, LIME, 700) + t(500, 150, L("Bassi", "Basses", "Bässe")[lang], 16, VFD, 700)
    for i, n in enumerate(gtr):
        b += rect(48, 166 + i * 50, 400, 40, PANEL, 9) + rect(48, 166 + i * 50, 6, 40, LIME, 3) + t(70, 192 + i * 50, n, 18, INK, 600)
    for i, n in enumerate(bass):
        b += rect(500, 166 + i * 50, 412, 40, PANEL, 9) + rect(500, 166 + i * 50, 6, 40, VFD, 3) + t(522, 192 + i * 50, n, 18, INK, 600)
    b += t(500, 400, L("Novità comuni:", "Shared changes:", "Gemeinsame Neuerungen:")[lang], 16, INK2, 700)
    for j, s in enumerate(L(["pickup V-Mod III", "ponti ridisegnati", "tone push-push, nuovi profili del manico"], ["V-Mod III pickups", "redesigned bridges", "push-push tone, reshaped necks"], ["V-Mod-III-Tonabnehmer", "neu gestaltete Brücken", "Push-Push-Tone, neue Halsprofile"])[lang]):
        b += t(500, 430 + j * 26, "· " + s, 16, INK2)
    return svg(T, S, b, L("Fonte: Fender, annuncio di ottobre 2026. Mancine dalla primavera 2027", "Source: Fender, October 2026 announcement. Left-handed models from spring 2027", "Quelle: Fender, Ankündigung Oktober 2026. Linkshänder-Modelle ab Frühjahr 2027")[lang])


# 4 Mac: two MacBook Pro paths
def mac(lang):
    T = L("MacBook Pro: le due strade di novembre", "MacBook Pro: November’s two paths", "MacBook Pro: die zwei Wege im November")[lang]
    S = L("Prezzi di partenza USA dei modelli da 14 pollici", "US starting prices of the 14-inch models", "US-Einstiegspreise der 14-Zoll-Modelle")[lang]
    rows = [("M6", 1999, LIME, L("16–32 GB, 3× Thunderbolt 4, mini-LED", "16–32 GB, 3× Thunderbolt 4, mini-LED", "16–32 GB, 3× Thunderbolt 4, Mini-LED")[lang]),
            ("M5 Pro touch", 2899, VFD, L("OLED touchscreen, da 24 GB", "OLED touchscreen, from 24 GB", "OLED-Touchscreen, ab 24 GB")[lang]),
            ("M5 Max touch", 4499, VIOLET, L("OLED touchscreen", "OLED touchscreen", "OLED-Touchscreen")[lang])]
    b = ""
    for i, (n, p, c, note) in enumerate(rows):
        y = 160 + i * 104
        w = int(p / 4499 * 560)
        b += t(48, y + 30, n, 20, INK, 700) + rect(240, y + 6, w, 38, c, 8) + t(240 + w + 14, y + 33, f"${p:,}", 20, INK, 700)
        b += t(240, y + 72, note, 16, INK2)
    return svg(T, S, b, L("Fonte: Apple. Consegne dal 6 novembre 2026", "Source: Apple. Shipping from 6 November 2026", "Quelle: Apple. Auslieferung ab 6. November 2026")[lang])


# 5 FATSO: signal flow
def fatso(lang):
    T = L("FATSO nativo: il percorso del segnale", "FATSO native: the signal path", "FATSO nativ: der Signalweg")[lang]
    S = L("Saturazione a nastro, trasformatore e compressione in un solo plug-in", "Tape saturation, transformer and compression in one plug-in", "Bandsättigung, Übertrager und Kompression in einem Plug-in")[lang]
    blocks = [("Input", L("più gain, più colore", "more gain, more colour", "mehr Gain, mehr Farbe")[lang], INK3),
              ("Warmth", L("alte più morbide", "softer highs", "weichere Höhen")[lang], AMBER),
              ("Tranny", L("trasformatore", "transformer", "Übertrager")[lang], ORANGE),
              (L("Compressore", "Compressor", "Kompressor")[lang], L("quattro modalità", "four modes", "vier Modi")[lang], LIME),
              ("Output", "", INK3)]
    b = ""
    for i, (n, d, c) in enumerate(blocks):
        x = 48 + i * 176
        b += rect(x, 220, 150, 110, PANEL, 12, c) + t(x + 75, 268, n, 20, INK, 700, "middle")
        if d:
            b += t(x + 75, 300, d, 13, INK2, 500, "middle")
        if i < 4:
            b += f'<path d="M{x + 152} 275 L{x + 172} 275" stroke="{INK3}" stroke-width="3"/><path d="M{x + 166} 268 L{x + 174} 275 L{x + 166} 282" fill="none" stroke="{INK3}" stroke-width="3"/>'
    b += t(48, 400, L("Intro $79 fino al 31/12/2026, poi $149. Upgrade da Apollo DSP: $2,99. Incluso in UAD Spark Studio.", "Intro $79 until 31 Dec 2026, then $149. Upgrade from Apollo DSP: $2.99. Included in UAD Spark Studio.", "Einführungspreis $79 bis 31.12.2026, danach $149. Upgrade von Apollo DSP: $2,99. In UAD Spark Studio enthalten.")[lang], 16, INK2)
    return svg(T, S, b, L("Fonte: Universal Audio, comunicato del 13 ottobre 2026", "Source: Universal Audio press release, 13 October 2026", "Quelle: Universal Audio, Pressemitteilung vom 13. Oktober 2026")[lang])


# 6 AutoTune line-up
def autotune(lang):
    T = L("La gamma AutoTune a fine 2026", "The AutoTune range in late 2026", "Die AutoTune-Reihe Ende 2026")[lang]
    S = L("Cosa c’è in ogni edizione", "What each edition includes", "Was jede Edition enthält")[lang]
    cols = ["AutoTune", "Pro 11", "Advanced"]
    feats = L(["Correzione automatica", "Motore vibrato DVA", "Live mode sotto 1 ms", "Graph Mode (editing manuale)", "Armonie"],
              ["Automatic correction", "DVA vibrato engine", "Live mode under 1 ms", "Graph Mode (manual editing)", "Harmonies"],
              ["Automatische Korrektur", "DVA-Vibrato-Engine", "Live-Modus unter 1 ms", "Graph Mode (manuelle Bearbeitung)", "Harmonien"])[lang]
    grid = [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0]]
    prices = ["$300", "$550", "$450"]
    b = ""
    for j, c in enumerate(cols):
        x = 520 + j * 140
        b += t(x, 150, c, 18, LIME if c == "Advanced" else INK, 700, "middle")
    for i, f in enumerate(feats):
        y = 176 + i * 50
        b += rect(48, y, 864, 40, PANEL if i % 2 == 0 else BG, 8) + t(68, y + 26, f, 17, INK2, 550)
        for j in range(3):
            x = 520 + j * 140
            b += f'<circle cx="{x}" cy="{y + 20}" r="9" fill="{LIME if grid[i][j] else "none"}" stroke="{LIME if grid[i][j] else INK3}" stroke-width="2"/>'
    b += t(68, 456, L("Licenza perpetua", "Perpetual licence", "Dauerlizenz")[lang], 17, INK, 700)
    for j, p in enumerate(prices):
        b += t(520 + j * 140, 456, p, 18, INK, 700, "middle")
    return svg(T, S, b, L("Fonte: Antares, settembre 2026", "Source: Antares, September 2026", "Quelle: Antares, September 2026")[lang])


# 7 Audient Horizon: I/O
def horizon(lang):
    T = L("Audient Horizon: ingressi e uscite", "Audient Horizon: inputs and outputs", "Audient Horizon: Ein- und Ausgänge")[lang]
    S = L("Tre interfacce Thunderbolt 3, senza DSP a bordo", "Three Thunderbolt 3 interfaces, no onboard DSP", "Drei Thunderbolt-3-Interfaces, ohne Onboard-DSP")[lang]
    rows = [("Horizon 8P", 24, 32, "€2.499", L("8 preamp", "8 preamps", "8 Preamps")[lang]),
            ("Horizon 16", 34, 34, "€2.499", L("mix-bus stereo dedicato", "dedicated stereo mix bus", "eigener Stereo-Mixbus")[lang]),
            ("Horizon 32", 50, 50, "€3.299", L("64 canali analogici", "64 analogue channels", "64 analoge Kanäle")[lang])]
    if lang == "en":
        rows = [(a, b_, c, p.replace("€2.499", "$2,799").replace("€3.299", "$3,499"), n) for a, b_, c, p, n in rows]
    b = t(260, 146, "IN", 14, LIME, 700) + t(560, 146, "OUT", 14, VFD, 700)
    for i, (n, i_, o, p, note) in enumerate(rows):
        y = 170 + i * 100
        b += t(48, y + 28, n, 20, INK, 700) + t(48, y + 54, note, 14, INK2)
        b += rect(260, y + 6, i_ * 4.4, 30, LIME, 6) + t(260 + i_ * 4.4 + 10, y + 28, str(i_), 18, INK, 700)
        b += rect(560, y + 6, o * 4.4, 30, VFD, 6) + t(560 + o * 4.4 + 10, y + 28, str(o), 18, INK, 700)
        b += t(912, y + 28, p, 18, INK2, 600, "end")
    b += t(48, 480, L("Fino a 4 unità collegate: 200 ingressi e 200 uscite.", "Up to four units linked: 200 inputs and 200 outputs.", "Bis zu vier Geräte verbunden: 200 Ein- und 200 Ausgänge.")[lang], 16, INK2)
    return svg(T, S, b, L("Fonte: Audient, settembre 2026", "Source: Audient, September 2026", "Quelle: Audient, September 2026")[lang])


# 8 iZotope / NI timeline
def izotope(lang):
    T = L("Chi possiede cosa: il 2026 di NI e iZotope", "Who owns what: NI and iZotope in 2026", "Wem gehört was: NI und iZotope 2026")[lang]
    S = L("Sei mesi che hanno diviso il catalogo", "Six months that split the catalogue", "Sechs Monate, die den Katalog aufgeteilt haben")[lang]
    ev = L([("Gen", "NI in procedura di insolvenza preliminare"), ("Mag", "Accordo per la vendita di NI a inMusic"), ("30 giu", "inMusic completa l’acquisizione di NI"),
            ("2 lug", "Boris FX acquisisce iZotope"), ("15 lug", "Plugin Alliance e Brainworx tornano al fondatore")],
           [("Jan", "NI enters preliminary insolvency"), ("May", "Agreement to sell NI to inMusic"), ("30 Jun", "inMusic completes the NI acquisition"),
            ("2 Jul", "Boris FX acquires iZotope"), ("15 Jul", "Plugin Alliance and Brainworx return to their founder")],
           [("Jan", "NI im vorläufigen Insolvenzverfahren"), ("Mai", "Vereinbarung zum Verkauf von NI an inMusic"), ("30. Jun", "inMusic schließt die NI-Übernahme ab"),
            ("2. Jul", "Boris FX übernimmt iZotope"), ("15. Jul", "Plugin Alliance und Brainworx zurück beim Gründer")])[lang]
    b = f'<line x1="150" y1="140" x2="150" y2="470" stroke="{LINE}" stroke-width="4"/>'
    for i, (d, e) in enumerate(ev):
        y = 160 + i * 70
        c = LIME if i == 3 else VFD
        b += t(126, y + 6, d, 16, INK2, 600, "end") + f'<circle cx="150" cy="{y}" r="10" fill="{c}"/>' + t(180, y + 7, e, 20, INK if i == 3 else INK2, 650 if i == 3 else 500)
    return svg(T, S, b, L("Fonti: Boris FX, inMusic, comunicati di luglio 2026", "Sources: Boris FX and inMusic, July 2026 announcements", "Quellen: Boris FX, inMusic, Mitteilungen vom Juli 2026")[lang])


# 9 Ableton Link Audio
def ableton(lang):
    T = L("Live 12.4: come funziona Link Audio", "Live 12.4: how Link Audio works", "Live 12.4: so funktioniert Link Audio")[lang]
    S = L("Audio multicanale in tempo reale sulla rete locale, via cavo o Wi-Fi", "Real-time multichannel audio over the local network, wired or Wi-Fi", "Mehrkanal-Audio in Echtzeit im lokalen Netz, per Kabel oder WLAN")[lang]
    nodes = [("Live 12.4", 480, 300, LIME), ("Push", 200, 190, VFD), ("Move", 200, 410, VFD), ("Note", 760, 190, VFD), ("Live 12.4", 760, 410, VFD)]
    b = ""
    for n, x, y, c in nodes[1:]:
        b += f'<line x1="{x}" y1="{y}" x2="480" y2="300" stroke="{c}" stroke-width="2.5" stroke-dasharray="7 7"/>'
    for n, x, y, c in nodes:
        w = 170 if n.startswith("Live") else 130
        b += rect(x - w / 2, y - 32, w, 64, PANEL, 14, c) + t(x, y + 7, n, 20, INK, 700, "middle")
    b += t(480, 362, "LAN / Wi-Fi", 15, INK2, 600, "middle")
    return svg(T, S, b, L("Fonte: Ableton, note di rilascio 12.4 (5 maggio 2026)", "Source: Ableton 12.4 release notes (5 May 2026)", "Quelle: Ableton, Release Notes 12.4 (5. Mai 2026)")[lang])


# 10 Pro-C 3: styles count
def proc3(lang):
    T = L("FabFilter Pro-C 3 in numeri", "FabFilter Pro-C 3 in numbers", "FabFilter Pro-C 3 in Zahlen")[lang]
    S = L("Stili di compressione: da 8 a 14", "Compression styles: from 8 to 14", "Kompressionsstile: von 8 auf 14")[lang]
    b = ""
    for k in range(14):
        x = 48 + k * 62
        c = INK3 if k < 8 else LIME
        b += rect(x, 170, 50, 120, c, 8)
    b += t(48, 320, "Pro-C 2: 8", 18, INK2, 650) + t(544, 320, L("+6 nuovi in Pro-C 3", "+6 new in Pro-C 3", "+6 neue in Pro-C 3")[lang], 18, LIME, 700)
    facts = L([("3", "modalità Character: Tube, Diode, Bright"), ("32×", "oversampling massimo"), ("9.1.6", "formato Atmos massimo")],
              [("3", "Character modes: Tube, Diode, Bright"), ("32×", "maximum oversampling"), ("9.1.6", "largest Atmos format")],
              [("3", "Character-Modi: Tube, Diode, Bright"), ("32×", "maximales Oversampling"), ("9.1.6", "größtes Atmos-Format")])[lang]
    for i, (n, d) in enumerate(facts):
        x = 48 + i * 300
        b += t(x, 400, n, 40, INK, 800) + t(x, 432, d, 15, INK2)
    return svg(T, S, b, L("Fonte: FabFilter, 15 gennaio 2026", "Source: FabFilter, 15 January 2026", "Quelle: FabFilter, 15. Januar 2026")[lang])


ALL = dict(logic=logic, protools=protools, fender=fender, mac=mac, fatso=fatso, autotune=autotune, horizon=horizon, izotope=izotope, ableton=ableton, proc3=proc3)

if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for k, fn in ALL.items():
        for lang in ("it", "en", "de"):
            (OUT / f"{k}-{lang}.svg").write_text(fn(lang))
    print(len(list(OUT.glob("*.svg"))), "svg")
