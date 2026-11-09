#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Static site generator for angelopillon.com.

    python3 _build/build.py                  # production build into the repository root
    python3 _build/build.py --preview --out DIR   # self-contained preview (relative links, no analytics)
"""
import datetime
import html as H
import json
import os
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import quote

import markdown
import yaml
from bs4 import BeautifulSoup
from jinja2 import Environment, FileSystemLoader
from markupsafe import Markup
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
import og  # noqa: E402
import strings as S  # noqa: E402
import tools as TL  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
B = ROOT / "_build"
CFG = json.loads((B / "config.json").read_text())
SITE = CFG["site"]
PREVIEW = "--preview" in sys.argv
OUT = Path(sys.argv[sys.argv.index("--out") + 1]).resolve() if "--out" in sys.argv else ROOT
TODAY = datetime.date.today().isoformat()
V = datetime.datetime.now().strftime("%Y%m%d%H%M")
SKIP_OG = "--no-og" in sys.argv

env = Environment(loader=FileSystemLoader(str(B / "templates")), autoescape=True, trim_blocks=False, lstrip_blocks=False)
env.globals["preview"] = PREVIEW
PAGES = []


# ---------------------------------------------------------------- helpers
def file_for(path):
    p = path.split("#")[0].split("?")[0]
    if p.endswith("/"):
        return p.lstrip("/") + "index.html"
    if re.search(r"\.[a-z0-9]+$", p):
        return p.lstrip("/")
    return p.lstrip("/") + ".html"


def slugify(t):
    t = t.lower()
    t = re.sub(r"[àáâä]", "a", t); t = re.sub(r"[èéêë]", "e", t); t = re.sub(r"[ìíîï]", "i", t); t = re.sub(r"[òóôö]", "o", t); t = re.sub(r"[ùúûü]", "u", t)
    t = re.sub(r"<[^>]+>", "", t)
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t[:64] or "s"


def ld(obj):
    return Markup(json.dumps(obj, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/"))


def ui_for(lang):
    u = dict(S.UI[lang])
    u["home"] = S.HOMES[lang]
    u["nav"] = [dict(key=k, label=l, href=h) for k, l, h in S.NAV[lang]]
    u["contact_href"] = S.HOMES[lang] + "#contact"
    u["privacy_href"] = S.PRIVACY_HREF[lang]
    u["feed_href"] = S.FEEDS[lang]
    cl = S.CONTENT_LANG[lang]
    u["tools_href"] = "/it/strumenti/" if cl == "it" else "/tools/"
    u["meter_href"] = TL.TOOLS[0]["path"][cl]
    u["ft_cols"] = [dict(title=t, links=[dict(label=l, href=h, ext=h.startswith("http")) for l, h in items]) for t, items in S.FOOTER[lang]]
    return u


def add_page(**kw):
    kw.setdefault("og_type", "website")
    kw.setdefault("jsonld", [])
    kw.setdefault("scripts", [])
    kw.setdefault("body_class", "")
    kw.setdefault("nav_current", None)
    kw.setdefault("progress", False)
    kw.setdefault("alt_key", None)
    kw.setdefault("lastmod", TODAY)
    kw.setdefault("noindex", False)
    kw.setdefault("og_title", kw["title"].split(" | ")[0])
    PAGES.append(kw)


def crumbs_ld(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + h} for i, (n, h) in enumerate(items)]}


PERSON = {"@type": "Person", "@id": SITE + "/#angelo", "name": "Angelo Pillon", "jobTitle": "Mixing and mastering engineer", "url": SITE + "/",
          "sameAs": [CFG["fiverr"], CFG["soundbetter"]], "image": SITE + "/assets/img/angelo-240.jpg"}


# ---------------------------------------------------------------- articles
def add_ids(soup):
    toc, seen = [], set()
    for h in soup.find_all("h2"):
        if not h.get("id"):
            base = slugify(h.get_text(" ", strip=True)); sid = base; n = 2
            while sid in seen:
                sid = f"{base}-{n}"; n += 1
            h["id"] = sid
        seen.add(h["id"])
        toc.append(dict(id=h["id"], text=h.get_text(" ", strip=True)))
    for h in soup.find_all("h3"):
        if not h.get("id"):
            h["id"] = slugify(h.get_text(" ", strip=True))
    return toc


ART_LANGS = ("it", "en", "de")
ART_BASE = {"en": "/", "it": "/it/articoli/", "de": "/de/artikel/"}
HUBS = {"en": ("/articles", "Articles"), "it": ("/it/articoli/", "Articoli"), "de": ("/de/artikel/", "Artikel")}


def load_articles():
    arts = []
    meta = json.loads((B / "content/en/_articles.json").read_text())
    for m in meta:
        body = (B / f"content/en/{m['slug']}.html").read_text()
        soup = BeautifulSoup(body, "html.parser")
        for em in soup.select("em.serif-i"):
            em.unwrap()
        for sp in soup.select(".tldr .mono"):
            sp["class"] = ["box__title"]
        for a in soup.select("a.cta"):
            a["class"] = ["cta"]
        arts.append(dict(lang="en", slug=m["slug"], group=m["slug"], path="/" + m["slug"], title=m["title"], h1=m["h1"], description=m["description"], dek=m["dek"],
                         date=m["date"], updated=m.get("updated"), cat=m["category"].lower(), minutes=m["minutes"], soup=soup, tutorial=False, howto=None, order=0))
    md = markdown.Markdown(extensions=["extra", "sane_lists", "smarty"], extension_configs={"smarty": {"smart_angled_quotes": True}})
    for lang, f in [(lg, f) for lg in ("it", "en", "de") for f in sorted((B / f"content/{lg}").glob("*.md"))]:
        raw = f.read_text()
        fm, body = raw.split("\n---\n", 1) if raw.startswith("---") else ("", raw)
        meta = yaml.safe_load(fm.lstrip("-\n")) if fm else {}
        md.reset()
        html = md.convert(body).replace("<table>", '<table tabindex="0">')
        html = html.replace("&laquo;", "«").replace("&raquo;", "»")
        soup = BeautifulSoup(html, "html.parser")
        words = len(soup.get_text(" ").split())
        arts.append(dict(lang=lang, slug=meta["slug"], group=meta.get("group") or meta["slug"], path=ART_BASE[lang] + meta["slug"], title=meta["title"], seo_title=meta.get("seo_title"), h1=meta.get("h1", meta["title"]), description=meta["description"],
                         dek=meta["dek"], date=str(meta["date"]), updated=meta.get("updated"), cat=meta["category"], minutes=meta.get("minutes") or max(3, round(words / 210)),
                         soup=soup, tutorial=bool(meta.get("tutorial")), howto=meta.get("howto"), order=int(meta.get("order", 0))))
    for a in arts:
        a["toc"] = add_ids(a["soup"])
        a["cat_label"] = S.CATS[a["cat"]][a["lang"]]
        a["date_label"] = S.date_label(a["date"], a["lang"])
        a["text"] = a["soup"].get_text(" ", strip=True)
    return arts


def article_pages(arts):
    by_group = {}
    for x in arts:
        by_group.setdefault(x["group"], {})[x["lang"]] = x
    for lang in ART_LANGS:
        L = sorted([a for a in arts if a["lang"] == lang], key=lambda a: (a["date"], -a["order"]), reverse=True)
        ui = ui_for(lang)
        hub_path, hub_label = HUBS[lang]
        for i, a in enumerate(L):
            same = [x for x in L if x is not a and x["cat"] == a["cat"]]
            rest = [x for x in L if x is not a and x["cat"] != a["cat"]]
            related = (same + rest)[:3]
            for r in related:
                r.setdefault("href", r["path"])
            prev = L[i - 1] if i > 0 else None
            nxt = L[i + 1] if i + 1 < len(L) else None
            crumbs = [dict(label=ui["home_label"], href=S.HOMES[lang]), dict(label=hub_label, href=hub_path), dict(label=a["cat_label"], href=None)]
            tpl = env.get_template("article.html")
            lang_note = None
            vers = by_group[a["group"]]
            translations = [dict(code=l, name=S.LANG_NAMES[l], href=vers[l]["path"], current=(l == lang)) for l in ART_LANGS if l in vers]
            main = tpl.render(translations=translations, tr_label=S.ART_TR_LABEL[lang], a=dict(a, updated_label=S.date_label(a["updated"], lang) if a.get("updated") else None), ui=ui, crumbs=crumbs, toc=a["toc"], body=Markup(str(a["soup"])),
                              related=[dict(href=r["path"], title=r["title"], cat=r["cat"], cat_label=r["cat_label"], minutes=r["minutes"]) for r in related],
                              prev=dict(href=prev["path"], title=prev["title"]) if prev else None, next=dict(href=nxt["path"], title=nxt["title"]) if nxt else None,
                              share_text=quote(a["title"] + " " + SITE + a["path"], safe=""), share_url=quote(SITE + a["path"], safe=""), share_title=quote(a["title"], safe=""),
                              lang_note=lang_note)
            jl = [{"@context": "https://schema.org", "@type": "BlogPosting", "headline": a["title"], "description": a["description"], "inLanguage": lang,
                   "datePublished": a["date"], "dateModified": a.get("updated") or a["date"], "author": PERSON, "publisher": PERSON,
                   "mainEntityOfPage": SITE + a["path"], "image": SITE + f"/assets/og/{lang}-{a['slug']}.png", "articleSection": a["cat_label"], "wordCount": len(a["text"].split())},
                  crumbs_ld([(ui["home_label"], S.HOMES[lang]), (hub_label, hub_path), (a["title"], a["path"])])]
            if a["tutorial"]:
                steps = []
                for li in a["soup"].select("ol.steps-list > li"):
                    nm = li.find(["h3", "strong"])
                    name = nm.get_text(" ", strip=True) if nm else li.get_text(" ", strip=True)[:80]
                    txt = li.get_text(" ", strip=True)
                    steps.append({"@type": "HowToStep", "name": name, "text": txt[:500]})
                if steps:
                    h = {"@context": "https://schema.org", "@type": "HowTo", "name": a["h1"], "description": a["description"], "inLanguage": lang, "step": steps}
                    if a.get("howto") and a["howto"].get("time"):
                        h["totalTime"] = a["howto"]["time"]
                    if a.get("howto") and a["howto"].get("tools"):
                        h["tool"] = [{"@type": "HowToTool", "name": t} for t in a["howto"]["tools"]]
                    jl.append(h)
            st = a.get("seo_title") or a["title"]
            page_title = st + " | Angelo Pillon" if len(st) <= 54 else st
            add_page(path=a["path"], lang=lang, title=page_title, description=a["description"], main=main, og_type="article", alt_key="art:" + a["group"],
                     og_image=f"/assets/og/{lang}-{a['slug']}.png", og_title=a["title"], jsonld=jl, nav_current="articles", progress=True, lastmod=a.get("updated") or a["date"],
                     og_args=dict(title=a["title"], kicker=a["cat_label"] + (" · Tutorial" if a["tutorial"] and a["cat"] != "tutorial" else ""), cat=a["cat"], readout="angelopillon.com" + (" · " + str(a["minutes"]) + " min")),
                     feed=dict(lang=lang, title=a["title"], description=a["description"], date=a["date"], path=a["path"]))
        # hub
        h = dict(
            en=dict(crumb="Articles", h1="Studio journal", lead="Practical, opinionated articles on mixing, mastering and loudness: the same principles I apply to every track that comes through the studio. Eight are step-by-step tutorials, ten are news from the audio world.",
                    search="Search articles", count_tpl="{n} articles", filter="Filter by topic", all="All", empty="No article matches. Try another word.",
                    other="Leggi anche in italiano:", other_label="articoli in italiano", other_href="/it/articoli/", other_lang="it",
                    title="Mixing and mastering articles | Angelo Pillon", description="Articles on mixing, mastering and loudness: LUFS, true peak, low end, vocals, stems and streaming, from a working mixing and mastering engineer."),
            it=dict(crumb="Articoli", h1="Diario di studio", lead="Articoli pratici, con un punto di vista, su mix, mastering e loudness: gli stessi principi che applico a ogni brano che passa dallo studio. Otto sono tutorial passo passo, dieci sono notizie dal mondo dell’audio.",
                    search="Cerca negli articoli", count_tpl="{n} articoli", filter="Filtra per argomento", all="Tutti", empty="Nessun articolo corrisponde. Prova un’altra parola.",
                    other="Also in English:", other_label="articles in English", other_href="/articles", other_lang="en",
                    title="Articoli su mix, mastering e loudness | Angelo Pillon", description="Articoli e tutorial in italiano su mix, mastering e loudness: LUFS, true peak, gain staging, voce, stem, fase e streaming, da un fonico di mix e mastering."),
            de=dict(crumb="Artikel", h1="Studio-Journal", lead="Praxisnahe Artikel mit klarer Haltung zu Mixing, Mastering und Lautheit: dieselben Prinzipien, die ich bei jedem Track im Studio anwende. Acht davon sind Schritt-für-Schritt-Tutorials, zehn sind Neuigkeiten aus der Audiowelt.",
                    search="Artikel durchsuchen", count_tpl="{n} Artikel", filter="Nach Thema filtern", all="Alle", empty="Kein Artikel passt. Versuch es mit einem anderen Wort.",
                    title="Artikel über Mixing, Mastering und Lautheit | Angelo Pillon", description="Artikel und Tutorials auf Deutsch über Mixing, Mastering und Lautheit: LUFS, True Peak, Gain Staging, Vocals, Stems, Phase und Streaming, von einem Mixing- und Mastering-Engineer."),
        )[lang]
        h["lang_label"] = {"en": "Article language", "it": "Lingua degli articoli", "de": "Sprache der Artikel"}[lang]
        hub_langs = [dict(code=l, name=S.LANG_NAMES[l], href=HUBS[l][0], current=(l == lang), count=sum(1 for x in arts if x["lang"] == l)) for l in ART_LANGS]
        cats_present = []
        for c in ["news", "loudness", "mastering", "mixing", "electronic", "tutorial"]:
            if any(x["cat"] == c or (c == "tutorial" and x["tutorial"]) for x in L):
                cats_present.append(dict(id=c, label=S.CATS[c][lang]))
        posts = [dict(href=x["path"], title=x["title"], dek=x["dek"], cat=x["cat"], cat_label=x["cat_label"], date=x["date"], date_label=x["date_label"],
                      cats=" ".join(sorted({x["cat"]} | ({"tutorial"} if x["tutorial"] else set()))), search=(x["title"] + " " + x["dek"] + " " + x["description"] + " " + x["cat_label"]).lower()) for x in L]
        main = env.get_template("hub.html").render(ui=ui, h=h, cats=cats_present, posts=posts, hub_langs=hub_langs)
        jl = [{"@context": "https://schema.org", "@type": "CollectionPage", "name": h["h1"], "description": h["description"], "inLanguage": lang, "url": SITE + hub_path,
               "mainEntity": {"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": SITE + x["path"], "name": x["title"]} for i, x in enumerate(L)]}},
              crumbs_ld([(ui["home_label"], S.HOMES[lang]), (h["crumb"], hub_path)])]
        add_page(path=hub_path, lang=lang, title=h["title"], description=h["description"], main=main, alt_key="hub-articles", nav_current="articles",
                 og_image=f"/assets/og/{lang}-articles.png", jsonld=jl, og_args=dict(title=h["h1"] + {"en": ": mixing, mastering, loudness", "it": ": mix, mastering, loudness", "de": ": Mixing, Mastering, Lautheit"}[lang], kicker=h["crumb"]))


# ---------------------------------------------------------------- tools
def md_text(t):
    return markdown.markdown(t, extensions=["extra", "sane_lists", "smarty"]).replace("<table>", '<table tabindex="0">').replace("&laquo;", "«").replace("&raquo;", "»")


def md_file(p):
    if not p.exists():
        return ""
    return md_text(p.read_text())


_SECTIONS = {}


def tool_section(lang, key):
    """content/tools/tools.<lang>.md holds one section per tool, each opened by a line '=== id ==='."""
    if lang not in _SECTIONS:
        f = B / f"content/tools/tools.{lang}.md"
        parts, cur = {}, None
        for line in (f.read_text().splitlines() if f.exists() else []):
            m = re.match(r"^===\s*([a-z0-9-]+)\s*===\s*$", line)
            if m:
                cur = m.group(1); parts[cur] = []
            elif cur:
                parts[cur].append(line)
        _SECTIONS[lang] = {k: md_text("\n".join(v).strip() + "\n") for k, v in parts.items()}
    return _SECTIONS[lang].get(key, "")


def tool_list(lang):
    return [dict(href=t["path"][lang], name=t["name"][lang], short=t["short"][lang], mini=t["mini"][lang], id=t["id"]) for t in TL.TOOLS]


def tool_pages():
    for lang in ("en", "it"):
        ui = ui_for(lang)
        for t in TL.TOOLS:
            L = TL.L[lang][t["id"]]
            frag = env.get_template(f"tools/{t['id']}.html").render(L=L)
            explain = tool_section(lang, t["id"])
            others = [o for o in tool_list(lang) if o["id"] != t["id"]][:4]
            main = env.get_template("tool.html").render(ui=ui, t=dict(name=t["name"][lang], h1=t["h1"][lang], lead=t["lead"][lang]), ui_html=Markup(frag), explain=Markup(explain),
                                                       others=others, i18n_json=Markup(json.dumps(L, ensure_ascii=False).replace("</", "<\\/")))
            jl = [{"@context": "https://schema.org", "@type": "WebApplication", "name": t["h1"][lang], "description": t["description"][lang], "url": SITE + t["path"][lang], "inLanguage": lang,
                   "applicationCategory": "MultimediaApplication", "operatingSystem": "Any (web browser)", "isAccessibleForFree": True,
                   "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"}, "author": PERSON},
                  crumbs_ld([(ui["home_label"], S.HOMES[lang]), (ui["tools_label"], ui["tools_href"]), (t["name"][lang], t["path"][lang])])]
            scripts = ["/assets/js/tools/common.js", f"/assets/js/tools/{t['js']}"]
            if t["id"] in ("meter", "stereo", "ab", "streaming"):
                scripts.insert(1, "/assets/js/dsp.js")
            add_page(path=t["path"][lang], lang=lang, title=t["title"][lang], description=t["description"][lang], main=main, alt_key="tool-" + t["id"], nav_current="tools",
                     scripts=scripts, jsonld=jl, og_image=f"/assets/og/{lang}-tool-{t['id']}.png", og_title=t["h1"][lang],
                     og_args=dict(title=t["h1"][lang], kicker=ui["tools_label"], readout=t["mini"][lang]))
        h = TL.HUB[lang]
        hub_path = "/tools/" if lang == "en" else "/it/strumenti/"
        body = tool_section(lang, "hub")
        main = env.get_template("tools_hub.html").render(ui=ui, h=dict(h, body=Markup(body)), tools=tool_list(lang))
        jl = [{"@context": "https://schema.org", "@type": "CollectionPage", "name": h["h1"], "description": h["description"], "inLanguage": lang, "url": SITE + hub_path},
              crumbs_ld([(ui["home_label"], S.HOMES[lang]), (ui["tools_label"], hub_path)])]
        add_page(path=hub_path, lang=lang, title=h["title"], description=h["description"], main=main, alt_key="hub-tools", nav_current="tools", jsonld=jl,
                 og_image=f"/assets/og/{lang}-tools.png", og_args=dict(title=h["h1"], kicker=ui["tools_label"], readout="−14.0 LUFS  −0.3 dBTP"))


# ---------------------------------------------------------------- home
SVG_ICONS = {
    "fiverr": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M13.5 8.2h-1.1c-.9 0-1.4.5-1.4 1.4v.6H9.6v1.6H11V17h1.8v-5.2h2.1V17h1.8v-6.8h-3.9v-.4c0-.3.2-.5.5-.5h.2z" fill="currentColor"/></svg>',
    "soundbetter": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7 13v-2M10 16V8M13 14v-4M16 17V7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    "whatsapp": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.7-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3z"/></svg>',
    "telegram": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 9-8.1c.4-.3-.1-.5-.6-.2L6.4 13.2l-4.7-1.5c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.6.2 1.6 1.2z"/></svg>',
}


def channels_html(lang):
    out = []
    if CFG.get("whatsapp"):
        out.append(f'<a href="https://wa.me/{CFG["whatsapp"]}" rel="noopener" target="_blank">{SVG_ICONS["whatsapp"]}<span>WhatsApp</span></a>')
    if CFG.get("telegram"):
        out.append(f'<a href="https://t.me/{CFG["telegram"]}" rel="noopener" target="_blank">{SVG_ICONS["telegram"]}<span>Telegram</span></a>')
    label = {"en": "Also on", "it": "Anche su", "de": "Auch auf", "es": "También en"}[lang]
    out.append(f'<a href="{CFG["fiverr"]}" rel="noopener" target="_blank">{SVG_ICONS["fiverr"]}<span>{label} Fiverr</span></a>')
    out.append(f'<a href="{CFG["soundbetter"]}" rel="noopener" target="_blank">{SVG_ICONS["soundbetter"]}<span>{label} SoundBetter</span></a>')
    return Markup("".join(out))


def float_html():
    out = []
    if CFG.get("whatsapp"):
        out.append(f'<a href="https://wa.me/{CFG["whatsapp"]}" rel="noopener" target="_blank" aria-label="WhatsApp">{SVG_ICONS["whatsapp"]}</a>')
    if CFG.get("telegram"):
        out.append(f'<a href="https://t.me/{CFG["telegram"]}" rel="noopener" target="_blank" aria-label="Telegram">{SVG_ICONS["telegram"]}</a>')
    return Markup("".join(out)) if out else None


def home_pages(arts):
    for lang in S.LANGS:
        s = dict(S.HOME[lang]); s["units"] = S.UNITS[lang]
        ui = ui_for(lang)
        cl = S.CONTENT_LANG[lang]
        posts = sorted([a for a in arts if a["lang"] == S.ARTICLE_LANG[lang]], key=lambda a: (a["date"], -a["order"]), reverse=True)[:4]
        posts = [dict(href=a["path"], title=a["title"], cat=a["cat"], cat_label=S.CATS[a["cat"]][lang] if lang in S.CATS[a["cat"]] else a["cat_label"], date=a["date"], date_label=S.date_label(a["date"], lang)) for a in posts]
        main = env.get_template("home.html").render(s=s, c=S.COSMOS[lang], lang=lang, reviews=S.REVIEWS, tools=tool_list(cl), posts=posts, channels=channels_html(lang),
                                                     meter_href=TL.TOOLS[0]["path"][cl], tools_href=ui["tools_href"], privacy_href=ui["privacy_href"], form_action="/",
                                                     codes=S.CLIENT_CODES, playlist=S.SPOTIFY_PLAYLIST)
        main = Markup(main) + Markup('<script type="application/json" id="tool-i18n">' + json.dumps(S.BRIDGE[lang], ensure_ascii=False).replace("</", "<\\/") + "</script>")
        org = {"@context": "https://schema.org", "@type": "ProfessionalService", "@id": SITE + "/#service", "name": "Angelo Pillon, mixing and mastering",
               "description": s["description"], "url": SITE + S.HOMES[lang], "image": SITE + "/assets/img/studio-1-1400.jpg", "logo": SITE + "/assets/img/icon-512.png",
               "address": {"@type": "PostalAddress", "addressLocality": "Milano", "addressCountry": "IT"}, "areaServed": "Worldwide", "knowsLanguage": ["en", "it", "de", "es"],
               "founder": PERSON, "sameAs": [CFG["fiverr"], CFG["soundbetter"]], **({"vatID": "IT" + CFG["piva"]} if CFG.get("piva") else {}),
               "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "789"},
               "makesOffer": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": sv["name"]}, "priceSpecification": {"@type": "PriceSpecification", "minPrice": sv["p"], "priceCurrency": "USD"}} for sv in s["services"]]}
        faq = {"@context": "https://schema.org", "@type": "FAQPage", "inLanguage": lang, "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in s["faqs"]]}
        site = {"@context": "https://schema.org", "@type": "WebSite", "name": "Angelo Pillon", "url": SITE + "/", "inLanguage": lang}
        add_page(path=S.HOMES[lang], lang=lang, title=s["title"], description=s["description"], main=Markup(main), alt_key="home", jsonld=[org, faq, site],
                 scripts=["/assets/js/tools/common.js", "/assets/js/tools/bridge.js", "/assets/js/cosmos.js"], og_image=f"/assets/og/{lang}-home.png", og_title=s["title"],
                 og_args=dict(title=s["h1"], kicker={"en": "Mixing and mastering", "it": "Mix e mastering", "de": "Mixing und Mastering", "es": "Mezcla y mastering"}[lang], readout="−8.9 LUFS  −0.3 dBTP"),
                 body_class="is-home")


# ---------------------------------------------------------------- legal + 404
def legal_pages():
    for lang, path, crumb, h1 in (("en", "/privacy-policy", "Privacy", "Privacy and cookie policy"), ("it", "/it/privacy", "Privacy", "Privacy e cookie policy")):
        body = md_file(B / f"content/legal/privacy.{lang}.md")
        main = env.get_template("page.html").render(ui=ui_for(lang), p=dict(crumb=crumb, h1=h1, lead=None, body=Markup(body)))
        add_page(path=path, lang=lang, title=h1 + " | Angelo Pillon", description={"en": "How angelopillon.com handles personal data, cookies and the browser tools, under the GDPR.", "it": "Come angelopillon.com tratta dati personali, cookie e strumenti nel browser, secondo il GDPR."}[lang],
                 main=main, alt_key="privacy", og_image=f"/assets/og/{lang}-home.png")
    ui = ui_for("en")
    nf = Markup(f"""<section class="wrap notfound">
  <div class="glass"><dl class="readouts"><div class="readout"><dt>Signal</dt><dd><b>−∞</b><small>LUFS</small></dd></div><div class="readout"><dt>Status</dt><dd><b>404</b></dd></div></dl></div>
  <h1 class="t-h1">Nothing on this channel.</h1>
  <p class="t-lead" style="max-width:56ch">The page you asked for is not here. It may have moved when the site was rebuilt. <span lang="it">La pagina che cercavi non è qui.</span></p>
  <div class="btn-row"><a class="btn" href="/">Home</a><a class="btn btn--ghost" href="/articles">Articles</a><a class="btn btn--ghost" href="/tools/">Tools</a><a class="btn btn--ghost" href="/it/" lang="it">Italiano</a></div>
</section>""")
    add_page(path="/404.html", lang="en", title="Page not found | Angelo Pillon", description="This page does not exist.", main=nf, noindex=True, og_image="/assets/og/en-home.png", sitemap=False)


# ---------------------------------------------------------------- render
def lang_links(page, groups):
    out = []
    g = groups.get(page["alt_key"]) if page["alt_key"] else None
    for code in S.LANGS:
        href = None
        if g:
            for p in g:
                if p["lang"] == code:
                    href = p["path"]
        if code == page["lang"] and page["path"] != "/404.html":
            href = page["path"]
        out.append(dict(code=code, name=S.LANG_NAMES[code], href=href or S.HOMES[code]))
    return out


def rel_link(from_file, target):
    if PREVIEW is False:
        return target
    t, frag = (target.split("#", 1) + [""])[:2]
    q = ""
    if "?" in t:
        t, q = t.split("?", 1); q = "?" + q
    tf = file_for(t) if t else from_file
    rel = os.path.relpath(tf, os.path.dirname(from_file) or ".")
    return rel + q + ("#" + frag if frag else "")


ATTR = re.compile(r'(\s(?:href|src|action|data-meter|content))="(/[^"/][^"]*|/)"')


A_ABS = re.compile(r'(<a\b[^>]*?\shref=")https://angelopillon\.com(/[^"]*)"')


def finalize(html, page_file):
    # links inside the site become root-relative; canonical, hreflang and og:url stay absolute
    html = A_ABS.sub(lambda m: m.group(1) + m.group(2) + '"', html)
    if PREVIEW:
        html = ATTR.sub(lambda m: f'{m.group(1)}="{rel_link(page_file, m.group(2))}"' if not m.group(2).startswith("//") and not (m.group(1).strip() == "content") else m.group(0), html)
        html = re.sub(r'srcset="([^"]+)"', lambda m: 'srcset="' + ", ".join(rel_link(page_file, u.strip().split(" ")[0]) + (" " + u.strip().split(" ")[1] if " " in u.strip() else "") for u in m.group(1).split(",")) + '"', html)
    return html


def render_all():
    groups = {}
    for p in PAGES:
        if p["alt_key"]:
            groups.setdefault(p["alt_key"], []).append(p)
    base = env.get_template("base.html")
    for p in PAGES:
        ui = ui_for(p["lang"])
        alts = []
        g = groups.get(p["alt_key"]) if p["alt_key"] else None
        if g and len(g) > 1:
            for q in g:
                alts.append(dict(hreflang=q["lang"], href=SITE + q["path"]))
            en = [q for q in g if q["lang"] == "en"]
            if en:
                alts.append(dict(hreflang="x-default", href=SITE + en[0]["path"]))
        scripts = Markup("".join(f'<script src="{s}?v={V}" defer></script>\n' for s in p["scripts"]))
        canonical = SITE + (p["path"] if p["path"] != "/404.html" else "/404")
        html = base.render(lang=p["lang"], ui=ui, title=p["title"], description=p["description"], canonical=canonical, alternates=alts, og_type=p["og_type"],
                           og_title=p["og_title"], og_image=SITE + p["og_image"], main=Markup(p["main"]), jsonld=[ld(j) for j in p["jsonld"]], body_class=p["body_class"],
                           nav_current=p["nav_current"], lang_links=lang_links(p, groups), progress=p["progress"], v=V, year=TODAY[:4], piva=CFG.get("piva"),
                           ga=None if PREVIEW else CFG.get("ga4"), sw=not PREVIEW, scripts=scripts, contact_float=float_html(), noindex=p["noindex"])
        f = file_for(p["path"])
        dest = OUT / f
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(finalize(html, f))


# ---------------------------------------------------------------- feeds, sitemap, misc
def write_feeds():
    for lang, path, title, home in (("en", "feed.xml", "Angelo Pillon, studio journal", "/articles"), ("it", "it/feed.xml", "Angelo Pillon, articoli in italiano", "/it/articoli/"),
                                    ("de", "de/feed.xml", "Angelo Pillon, Studio-Journal", "/de/artikel/")):
        items = sorted([p for p in PAGES if p.get("feed") and p["feed"]["lang"] == lang], key=lambda p: p["feed"]["date"], reverse=True)
        out = ['<?xml version="1.0" encoding="UTF-8"?>', '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>',
               f"<title>{H.escape(title)}</title><link>{SITE}{home}</link><description>{H.escape(title)}</description><language>{lang}</language>",
               f'<atom:link href="{SITE}/{path}" rel="self" type="application/rss+xml"/>']
        for p in items:
            d = datetime.datetime.strptime(p["feed"]["date"], "%Y-%m-%d").strftime("%a, %d %b %Y 09:00:00 +0100")
            out.append(f"<item><title>{H.escape(p['feed']['title'])}</title><link>{SITE}{p['path']}</link><guid>{SITE}{p['path']}</guid><pubDate>{d}</pubDate><description>{H.escape(p['feed']['description'])}</description></item>")
        out.append("</channel></rss>")
        (OUT / path).parent.mkdir(parents=True, exist_ok=True)
        (OUT / path).write_text("\n".join(out))


def write_sitemap():
    groups = {}
    for p in PAGES:
        if p["alt_key"]:
            groups.setdefault(p["alt_key"], []).append(p)
    out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for p in PAGES:
        if p.get("sitemap") is False or p["noindex"]:
            continue
        out.append("  <url>")
        out.append(f"    <loc>{SITE}{p['path']}</loc>")
        out.append(f"    <lastmod>{p['lastmod']}</lastmod>")
        g = groups.get(p["alt_key"]) if p["alt_key"] else None
        if g and len(g) > 1:
            for q in g:
                out.append(f'    <xhtml:link rel="alternate" hreflang="{q["lang"]}" href="{SITE}{q["path"]}"/>')
            en = [q for q in g if q["lang"] == "en"]
            if en:
                out.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{en[0]["path"]}"/>')
        out.append("  </url>")
    out.append("</urlset>")
    (OUT / "sitemap.xml").write_text("\n".join(out) + "\n")
    (OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /_build/\n\nSitemap: {SITE}/sitemap.xml\n")


def write_manifest_sw():
    man = {"name": "Angelo Pillon, mixing and mastering", "short_name": "A. Pillon", "description": "Mixing and mastering in Milan, with free audio tools that work offline.",
           "start_url": "/?source=pwa", "scope": "/", "display": "standalone", "background_color": "#000000", "theme_color": "#000000", "lang": "en",
           "icons": [{"src": "/assets/img/icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "/assets/img/icon-512.png", "sizes": "512x512", "type": "image/png"},
                     {"src": "/assets/img/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}],
           "shortcuts": [{"name": "LUFS meter", "url": "/loudness-meter"}, {"name": "Misuratore LUFS", "url": "/it/strumenti/misuratore-lufs"}, {"name": "Tools", "url": "/tools/"}]}
    (OUT / "manifest.webmanifest").write_text(json.dumps(man, ensure_ascii=False, indent=1))
    tool_urls = sorted({p["path"] for p in PAGES if p["nav_current"] == "tools"})
    precache = ["/", "/it/", "/offline.html", "/assets/css/site.css", "/assets/js/site.js", "/assets/js/motion.js", "/assets/js/cosmos.js", "/assets/js/dsp.js", "/assets/js/tools/common.js",
                "/assets/fonts/mona-sans-vf.woff2", "/assets/fonts/hubot-sans-vf.woff2"] + [f"/assets/js/tools/{t['js']}" for t in TL.TOOLS] + tool_urls
    sw = f"""/* angelopillon.com service worker: tools work offline, pages are network first */
const V = "ap-{V}";
const PRECACHE = {json.dumps(precache)};
self.addEventListener("install", e => {{ e.waitUntil(caches.open(V).then(c => Promise.all(PRECACHE.map(u => c.add(new Request(u, {{ cache: "reload" }})).catch(() => null)))).then(() => self.skipWaiting())); }});
self.addEventListener("activate", e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener("fetch", e => {{
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === "navigate") {{
    e.respondWith(fetch(r).then(res => {{ const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; }}).catch(() => caches.match(r).then(m => m || caches.match("/offline.html"))));
    return;
  }}
  if (u.pathname.startsWith("/assets/")) {{
    e.respondWith(caches.match(r, {{ ignoreSearch: true }}).then(m => m || fetch(r).then(res => {{ const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; }})));
  }}
}});
"""
    if PREVIEW:
        return
    (OUT / "sw.js").write_text(sw)
    off = """<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Offline | Angelo Pillon</title><link rel="stylesheet" href="/assets/css/site.css"></head>
<body><main class="wrap notfound"><h1 class="t-h1">You are offline.</h1><p class="t-lead">The tools you opened before still work offline. <span lang="it">Sei offline: gli strumenti già aperti funzionano anche senza rete.</span></p>
<div class="btn-row"><a class="btn" href="/loudness-meter">LUFS meter</a><a class="btn btn--ghost" href="/tools/">Tools</a><a class="btn btn--ghost" href="/it/strumenti/">Strumenti</a></div></main></body></html>"""
    (OUT / "offline.html").write_text(off)


def write_netlify():
    if PREVIEW:
        return
    toml = """# Netlify configuration for angelopillon.com (static, no build step)
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Frame-Options = "SAMEORIGIN"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/assets/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    Access-Control-Allow-Origin = "*"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=604800"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "/manifest.webmanifest"
  [headers.values]
    Content-Type = "application/manifest+json"

[[redirects]]
  from = "/_build/*"
  to = "/404.html"
  status = 404
  force = true

[[redirects]]
  from = "/articles/"
  to = "/articles"
  status = 301
  force = true

[[redirects]]
  from = "/it/articoli"
  to = "/it/articoli/"
  status = 301

[[redirects]]
  from = "/de/artikel"
  to = "/de/artikel/"
  status = 301

[[redirects]]
  from = "/it/strumenti"
  to = "/it/strumenti/"
  status = 301

[[redirects]]
  from = "/tools"
  to = "/tools/"
  status = 301
"""
    (OUT / "netlify.toml").write_text(toml)


def images():
    img = ROOT / "assets/img"
    img.mkdir(parents=True, exist_ok=True)
    for name in ("studio-1", "studio-2"):
        src = ROOT / f"{name}.jpg"
        if not src.exists():
            src = ROOT / f"assets/img/{name}-1400.jpg"
        im = Image.open(src).convert("RGB")
        for w in (900, 1400, im.width):
            h = round(im.height * w / im.width)
            r = im if w == im.width else im.resize((w, h), Image.LANCZOS)
            tag = "full" if w == im.width else str(w)
            r.save(img / f"{name}-{tag}.webp", "WEBP", quality=82, method=6)
            if w == 1400:
                r.save(img / f"{name}-1400.jpg", "JPEG", quality=82, optimize=True, progressive=True)
    # author portrait: the whole head with some shoulders, from the photo where the face is most visible
    im = Image.open(ROOT / "studio-1.jpg" if (ROOT / "studio-1.jpg").exists() else img / "studio-1-1400.jpg").convert("RGB")
    W, Hh = im.size
    side = int(Hh * 0.6)
    cx = int(W * 0.64)
    box = (cx - side // 2, 0, cx - side // 2 + side, side)
    im.crop(box).resize((240, 240), Image.LANCZOS).save(img / "angelo-240.jpg", "JPEG", quality=86, optimize=True, progressive=True)
    old = img / "angelo-160.jpg"
    if old.exists():
        old.unlink()


def og_images():
    for p in PAGES:
        a = p.get("og_args")
        if not a:
            continue
        dest = ROOT / p["og_image"].lstrip("/")
        if dest.exists() and "--force-og" not in sys.argv:
            continue
        og.og_image(dest, **a)


def copy_assets():
    if OUT == ROOT:
        return
    for d in ("assets",):
        if (OUT / d).exists():
            shutil.rmtree(OUT / d)
        shutil.copytree(ROOT / d, OUT / d)
    for f in ("favicon.ico", "favicon.svg", "apple-touch-icon.png"):
        if (ROOT / f).exists():
            shutil.copy(ROOT / f, OUT / f)


def favicon_svg():
    svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#000"/><text x="29" y="43" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="28" fill="#F5F5F7" letter-spacing="-1">AP</text><circle cx="53" cy="24" r="3.4" fill="#FF3DA5"/></svg>'
    (ROOT / "favicon.svg").write_text(svg)


def bundle_js():
    """Rebuilds assets/js/motion.js and cosmos.js with esbuild when the node toolchain is installed."""
    import subprocess
    if (B / "js/node_modules").exists() and "--no-js" not in sys.argv:
        subprocess.run(["node", "bundle.mjs"], cwd=str(B / "js"), check=True, capture_output=True)


def main():
    bundle_js()
    arts = load_articles()
    home_pages(arts)
    article_pages(arts)
    tool_pages()
    legal_pages()
    OUT.mkdir(parents=True, exist_ok=True)
    images()
    og.icons(ROOT)
    favicon_svg()
    if not SKIP_OG:
        og_images()
    copy_assets()
    render_all()
    write_feeds()
    write_sitemap()
    write_manifest_sw()
    write_netlify()
    print(f"{len(PAGES)} pages -> {OUT}")


if __name__ == "__main__":
    main()
