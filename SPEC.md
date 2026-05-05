# SPEC.md — Website Annika Spegg

> Stand: Mai 2026 · Sprache: Deutsch · Repo-internes Steuerungsdokument für Build und KI-gestützte Entwicklung mit Claude Code.

---

## 1. Projekt-Übersicht

**Was:** Persönliche Website für Annika Spegg (*1998), Geigerin, Dramaturgin und Performerin.

**Ziel:** Atmosphärische, professionelle Online-Präsenz, die ihre drei künstlerischen Felder gleichberechtigt zeigt und als Anlaufstelle für Veranstalter:innen, Kolleg:innen und Stipendien-Jurys dient.

**Primäre Zielgruppen:**
- Veranstalter:innen (Häuser, Festivals, Kammermusikreihen)
- Regisseur:innen, Komponist:innen, Kollektive
- Stiftungen / Jurys (für Bewerbungen)
- Presse

**Sekundär:** persönliches Publikum, Studierende, Kollaborator:innen.

**Erfolg ist:** Veranstalter:innen finden in unter 30 Sekunden, in welcher Funktion sie Annika engagieren wollen, und haben einen Pressefoto- und Bio-Download mit zwei Klicks.

---

## 2. Brand & Voice

**Welt:** Neue Musik, Alte Musik, zeitgenössisches Musiktheater, feministische Performance, demokratiefördernde Projekte. Akademie Musiktheater heute, Klimabühne, Duo Zwischen.

**Ton:** ernsthaft-reflektiert, nicht pathetisch. Klar, präzise, leicht poetisch. Selbstbewusst ohne Selbstdarstellung. Niemals Marketing-Sprech.

**Was wir vermeiden:**
- Klassik-Klischees (Burgund, Goldschnörkel, Konzertfoto-Pathos, "Virtuosin" als Wort)
- Korporate "Über mich"-Floskeln und Stockfoto-Anmutung
- Englische Buzzwords im Deutsch-Fließtext
- Überanimierte UI, Parallax-Spielereien, Scroll-Hijacking

**Was wir suchen:**
- Editoriale Anmutung (wie ein gut gemachtes Kulturmagazin)
- Bilder dominieren, Typografie zurückhaltend
- Weißraum als Gestaltungsmittel
- Klare Hierarchien, ruhige Bewegungen

---

## 3. Sitemap

| Pfad | Titel | Inhalt |
|---|---|---|
| `/` | Startseite | Name + 3 Felder mit Hover-Bildwechsel · Aktuelles · drei Mini-Texte |
| `/vita` | Vita | Langer Fließtext + Kurzvita-Download |
| `/coming-up` | Coming Up | Liste der nächsten Projekte mit Daten + Links |
| `/vergangenes` | Vergangenes | Projekt-Archiv (Cards mit Jahr/Titel/Bild/Beschreibung) |
| `/downloads` | Downloads & Links | Kurzvita-PDF, Pressefotos, Social-Links, YouTube |
| `/impressum` | Impressum | Pflichtangaben |
| `/datenschutz` | Datenschutz | DSGVO-Standardtext |

**Header:** Schriftzug "Annika Spegg" links, Menü rechts (Vita · Coming Up · Vergangenes · Downloads). Mobile: Hamburger.

**Footer:** Kontakt-E-Mail, Instagram, Duo Zwischen, Impressum, Datenschutz, Bildrechte-Hinweis.

---

## 4. Seitenspezifikationen

### 4.1 Startseite (`/`)

Drei Sections, vertikal:

**4.1.1 Hero (mind. 90vh):**
- Default-Zustand: warmer neutraler Hintergrund (`--bg`), große Typografie:
  - Zeile 1: `Annika Spegg` (Display-Font, sehr groß)
  - Zeile 2 darunter: `Geige · Dramaturgie · Performance` (drei interaktive Wörter, mit Mittelpunkten getrennt)
  - Zeile 3 (kleiner, gedämpft): *Musikerin und interdisziplinäre Künstlerin auf der Suche nach neuen Formaten.*
- Hover über "Geige" → Hintergrund-Bild fadet ein (800ms crossfade), siehe Image-Mapping 7.1
- Hover über "Dramaturgie" → anderes Bild
- Hover über "Performance" → anderes Bild
- Hover-Wort wird leicht hervorgehoben (z.B. Akzent-Farbe oder Underline-Animation)
- Mobile: keine Hover-Logik. Stattdessen drei Karten untereinander mit jeweils eigenem Bild + Begriff-Label, jede klickbar führt nach unten zum Mini-Text-Block.

**4.1.2 Aktuelles (1 Section):**
- Großes Featured-Card für das aktuell wichtigste Projekt (Stand 2026: *Faust.Margarete // GRETCHEN WANTS A FULL STORY*)
- Bild + Titel + 1–2 Sätze + nächste Aufführungstermine + externer Link
- Editierbar über `content/aktuelles.mdx` (oder ein einzelnes JSON-Feld), damit Annika das selbst tauschen kann

**4.1.3 Drei Mini-Texte (Geige · Dramaturgie · Performance):**
- Drei Spalten desktop / drei Reihen mobile
- Jeweils: Bild + Begriff (Display-Font) + ~3 Sätze (siehe Content-Library 5.1)
- Optional Link "Mehr in der Vita"

### 4.2 Vita (`/vita`)
- Fließtext aus Content-Library 5.2
- Maximale Lesebreite ~680px
- Sparsame Absatzführung, keine Headings nötig
- Inline-Links zu erwähnten Institutionen (AMH, Gesellschaft für Musik und Ästhetik, Duo Zwischen, Klimabühne)
- Am Ende: Download-Button "Kurzvita als PDF"

### 4.3 Coming Up (`/coming-up`)
Chronologische Liste, älteste oben oder neueste oben (Annika fragen — Default: nächster Termin oben). Pro Eintrag:
- Datum (groß, links, Display-Font)
- Titel + Ensemble/Kontext
- Ort + Venue (mit externem Link wenn vorhanden)
- 1–2 Sätze Beschreibung
- Optional Bild
- Vergangene Termine ggf. ausgegraut oder ausgeblendet

Datenquelle: `content/coming-up.json` — leicht editierbar.

### 4.4 Vergangenes (`/vergangenes`)
Inhalte basieren auf dem Portfolio-PDF. Struktur:

Pro Projekt eine Card oder ein Eintrag:
- Jahr + Titel
- 1–3 Bilder (Grid oder kleines Carousel)
- Funktion (Dramaturgie / Violine / Performance / Konzeption — als Tag/Pill)
- Kurzbeschreibung (2–4 Sätze)
- Externe Links (Reviews, Trailer, Veranstalter, Programmhefte)

Pro Projekt eine MDX-Datei in `/content/projects/`.

Optionaler Filter nach Funktion (Geige / Dramaturgie / Performance) — kann Phase 2 sein.

### 4.5 Downloads & Links (`/downloads`)
- **Kurzvita** (DE) als PDF — Download-Button
- **Pressefotos** — 3–5 hochauflösende Bilder mit Bildrechte-Hinweis und Download-Button pro Bild (oder ZIP-Download)
- **Hörproben / Videos:**
  - Als Geigerin: YouTube-Link
  - Als Performerin: YouTube-Link (*Primadonna*)
  - Als Dramaturgin: YouTube-Link (*KommentarTheater*)
- **Externe Profile:**
  - Instagram: [@annika_spgg](https://instagram.com/annika_spgg)
  - Duo Zwischen: [duozwischen.de](https://duozwischen.de)
  - Akademie Musiktheater heute (Stipendium)
  - Gesellschaft für Musik und Ästhetik

---

## 5. Content-Library

> Verbindlicher Quelltext der Website. Änderungen nur nach Rücksprache mit Annika.

### 5.1 Startseite — Drei Mini-Texte

**Geige:**
> Als Geigerin lege ich einen Schwerpunkt auf alte und neue Musik und spiele mit Ensembles wie der Stiftskantorei Stuttgart, il cappriccio, dem Hathor Ensemble (Alte Musik) oder Ensemble Resonanz und dem Zentaur Quartett (Neue Musik). Ebenso bin ich in der Orchesterwelt zuhause; im Staatsorchester Stuttgart habe ich von 2022–2025 gearbeitet, regelmäßig führen mich Aushilfen ans Stuttgarter Kammerorchester oder das Gewandhaus zu Leipzig.

**Dramaturgie:**
> Als Dramaturgin arbeite ich gerne mit klassischen Stoffen und Überschreibungen. Besonders interessiere ich mich für Gegenwartsdramatik und Musiktheater. Meine Projekte umfassen Opernarbeiten verschiedener Epochen (*Venus and Adonis*, Leipzig 2025; *Der Wald — Klischee total*, Berlin 2023; *Don Giovanni*, Baden-Württemberg 2021) ebenso wie demokratiefördernde Formate (*Rat der Generationen*, Leipzig 2025).

**Performance:**
> Als Performerin trete ich in eigenen und fremden (Musik-)Theaterstücken und Performances auf. Häufig reflektiere ich dabei meine Wurzeln aus der klassischen Musik — etwa in meiner Durational Solo Performance *In solchen Bildern ist des Menschen Tag vollendet* (Stuttgart 2023).

**One-Liner Selbstbeschreibung:**
> Musikerin und interdisziplinäre Künstlerin, hauptsächlich an kleinen musiktheatralen Formaten arbeitend — als Geigerin, Dramaturgin und Performerin.

### 5.2 Vita (Langfassung)

> Ich bin 1998 in Stuttgart geboren und in Ludwigsburg aufgewachsen. Mein Abitur habe ich 2015 am dortigen Goethe-Gymnasium absolviert.
>
> Fürs Bachelor-Studium zog es mich nach Freiburg. An der Albert-Ludwigs-Universität habe ich Germanistik und Philosophie studiert (Abschluss 2020) und an der Musikhochschule Violine bei Prof. Muriel Cantoreggi und Prof. Sebastian Hamann (2021).
>
> Das Masterstudium Violine habe ich an der Hochschule für Musik und Darstellende Kunst Stuttgart bei Prof. Nurit Stark abgelegt (2024) und danach noch einen Master Dramaturgie an der Hochschule für Musik und Theater Leipzig absolviert (2026).
>
> Als Geigerin hatte ich für zwei Spielzeiten eine Akademie und einen Zeitvertrag an der Staatsoper Stuttgart inne (Violine II tutti). Außerdem war und bin ich regelmäßig als Aushilfe bei anderen Orchestern beschäftigt, etwa im Ensemble Resonanz, Stuttgarter Kammerorchester und Gewandhaus zu Leipzig.
>
> Eigene Performances und Musiktheaterprojekte entstehen seit 2022 in Frankfurt, Berlin, Leipzig und Stuttgart. Für *GRETCHEN WANTS A FULL STORY* habe ich 2025 das #Musikerzukunft-Stipendium der Deutschen Orchesterstiftung bekommen. Sehr geprägt hat mich außerdem die mehrjährige Arbeit bei der Initiative Klimabühne, ehemals ein Projekt von Studierenden der HMDK Stuttgart, die nach künstlerischen Antworten auf den Klimawandel sucht.
>
> Mit dem Geiger Robert Rülke gründete ich 2022 das **Duo Zwischen**. Gemeinsam haben wir uns zur Aufgabe gemacht, der Gattung des Violinduos aus ihrem Schattendasein zu verhelfen und selten gespieltes Repertoire aufzuführen, vorwiegend aus dem 20. und 21. Jahrhundert. Gut durchdachte und politisch relevante Programme stehen dabei für uns an wichtigster Stelle. 2025 haben wir den 2. Preis beim HUGO-Wettbewerb der Montforter Zwischentöne gewonnen.
>
> Ich bin außerdem Stipendiatin in der Sparte Dramaturgie der [Akademie Musiktheater heute](https://akademie-musiktheater-heute.de) (2024–2026) und der [Gesellschaft für Musik und Ästhetik](https://gesellschaft-fuer-musik-und-aesthetik.de).

### 5.3 Kurzvita (für PDF-Download und Pressezwecke)

> Annika Spegg (*1998) ist Musikerin und interdisziplinäre Künstlerin, die sich der Suche nach neuen künstlerischen Formaten verschrieben hat. Parallel zum Geigenstudium absolvierte sie ein Studium der Germanistik und Philosophie. Aktuell ist sie an der HMT Leipzig im Master Dramaturgie eingeschrieben; zuvor studierte sie im Master Violine an der HMDK Stuttgart, wo sie sich verstärkt der Neuen und der Alten Musik zuwendete und 2024 mit Auszeichnung abschloss. Eigene Musiktheater-Produktionen (darunter z.B. *Pionier:in Ingolstadt* (2022) und *KommentarTheater* (2024)), in denen sie als Dramaturgin, Darstellerin und Geigerin eingebunden ist, entstehen seit 2022. An der HMDK Stuttgart übernahm sie zwischen 2022 und 2024 mit Robert Rülke leitende Funktionen in der Klimabühne, die nach künstlerischen Antworten auf den Klimawandel sucht. Orchesterengagements führten sie ans Staatsorchester Stuttgart, Stuttgarter Kammerorchester, Gewandhaus Leipzig und Ensemble Resonanz Hamburg. Seit 2024 ist sie Stipendiatin der Akademie Musiktheater heute in der Sparte Dramaturgie. 2025 erhielt sie neben dem Stipendium der Gesellschaft für Musik und Ästhetik das #MusikerZukunft-Stipendium der Deutschen Orchesterstiftung für ihr feministisches Kammermusiktheater *Faust.Margarete // Gretchen wants a full story*, das 2026 in Leipzig und Stuttgart aufgeführt wird.

### 5.4 Coming Up — Aktuelle Termine (Stand Mai 2026)

```json
[
  {
    "date": "2026-05-07",
    "title": "Begegnungen — Streichquartettkonzert mit dem Zentaur-Quartett",
    "venue": "Grieg-Begegnungsstätte Leipzig",
    "city": "Leipzig",
    "link": "https://www.leipzig-im.de/index.php?section=details&auswahl=veranstaltungen&auswahl2=225150",
    "role": "Geige"
  },
  {
    "date": "2026-05-08",
    "title": "Begegnungen — Streichquartettkonzert mit dem Zentaur-Quartett",
    "venue": "Dresden",
    "role": "Geige"
  },
  {
    "date": "2026-05-09",
    "title": "Begegnungen — Streichquartettkonzert mit dem Zentaur-Quartett",
    "venue": "Chemnitz",
    "role": "Geige"
  },
  {
    "date": "2026-05-23",
    "title": "Faust.Margarete // GRETCHEN WANTS A FULL STORY",
    "venue": "Ost-Passage Theater Leipzig",
    "city": "Leipzig",
    "link": "https://ost-passage-theater.de/veranstaltungen/_f_a_u_s_t__margarete____gretchen_wants_a_full_story?timestamp=1779562800",
    "role": "Künstlerische Leitung / Performance"
  },
  {
    "date": "2026-05-24",
    "title": "Faust.Margarete // GRETCHEN WANTS A FULL STORY",
    "venue": "Ost-Passage Theater Leipzig",
    "city": "Leipzig",
    "role": "Künstlerische Leitung / Performance"
  },
  {
    "date": "2026-06-14",
    "title": "Begegnungen — Streichquartettkonzert mit dem Zentaur-Quartett",
    "venue": "Winterthur",
    "role": "Geige"
  },
  {
    "date": "2026-06-25",
    "title": "Faust.Margarete // GRETCHEN WANTS A FULL STORY",
    "venue": "Studio Theater Stuttgart",
    "city": "Stuttgart",
    "link": "https://www.studiotheater.de/product/10362/",
    "role": "Künstlerische Leitung / Performance"
  },
  {
    "date": "2026-06-26",
    "title": "Faust.Margarete // GRETCHEN WANTS A FULL STORY",
    "venue": "Studio Theater Stuttgart",
    "role": "Künstlerische Leitung / Performance"
  },
  {
    "date": "2026-06-27",
    "title": "Faust.Margarete // GRETCHEN WANTS A FULL STORY",
    "venue": "Studio Theater Stuttgart",
    "role": "Künstlerische Leitung / Performance"
  },
  {
    "date": "2026-10-26",
    "title": "Sonst gute Nacht — Uraufführung dreier Kurzopern",
    "venue": "Frankfurt Lab",
    "city": "Frankfurt",
    "link": null,
    "note": "im Rahmen der Akademie Musiktheater heute",
    "role": "Dramaturgie"
  }
]
```

### 5.5 Vergangenes — Projekte aus dem Portfolio (Quelle: Portfolio-PDF)

Eine Datei pro Projekt unter `/content/projects/`. Verbindliche Liste:

- 2026 *Faust.Margarete // GRETCHEN WANTS A FULL STORY* — Künstlerische Leitung
- 2025 *Rat der Generationen* (Theater der Jungen Welt + GDG) — Dramaturgie
- 2025 *Venus and Adonis* (HMT Leipzig) — Dramaturgie
- 2025 *Duo Zwischen* — 2. Preis HUGO-Wettbewerb Montforter Zwischentöne — Violine + Konzertdesign
- 2024 *KommentarTheater* (mit Konrad Amrhein, Haus am Dom Frankfurt) — Dramaturgie + Musik
- 2023 *Der Wald. Klischee total* (operation der kuenste, Berlin) — Darstellung + Musik
- 2023 *Der Preis ist heiß* (Klimabühne) — Dramaturgie + Musik
- 2023 *Klimabühne Transparente Welten* (HMDK Stuttgart) — Konzeption + Performance
- 2023 *In solchen Bildern ist des Menschen Tag vollendet* — Solo-Performance
- 2022 *Hock am Turm — Drei Leseperformances* (HMDK Stuttgart)
- 2022 *Pionier:in Ingolstadt* (HfMDK Frankfurt) — Konzept + Dramaturgie + Performance + Musik
- 2021/2022 *Primadonna* (wanke.ensemble) — Violine + Performance
- 2021 *Don Giovanni* (Junge Oper Baden-Württemberg) — musikalische + dramaturgische Mitarbeit

---

## 6. Design System

### 6.1 Farbpalette

Als CSS Custom Properties in `globals.css`:

| Token | Hex | Verwendung |
|---|---|---|
| `--bg` | `#FAF7F2` | Standard-Hintergrund, warmes Off-White |
| `--bg-muted` | `#F0EBE2` | Cards, sekundäre Flächen |
| `--text` | `#1A1815` | Fließtext, Headlines |
| `--text-muted` | `#6B655C` | Metadaten, Captions |
| `--accent` | `#C8392E` | Akzent, Links, Buttons (Anlehnung an das Gretchen-Rot) |
| `--accent-hover` | `#A82E25` | Hover-State |
| `--border` | `#E5DFD3` | Subtile Trennlinien |

Dark Mode: nicht im MVP. Optional v2.

**Kontrast prüfen:** `--accent` auf `--bg` muss WCAG AA erfüllen — vor Launch testen, ggf. Akzent dunkler.

### 6.2 Typografie

**Display (Headlines, Hero):** *Fraunces* (Google Fonts, variable, opsz + soft + wonk).
- Hero-Headline "Annika Spegg": `clamp(3rem, 9vw, 7rem)`, weight 400, opsz 120, line-height 1
- Section-Headlines: `clamp(2rem, 4vw, 3rem)`, weight 400
- Optical sizes nutzen!

**Body (Fließtext, UI):** *Inter* (Google Fonts).
- Default: `1.125rem` / line-height 1.6
- Smaller text: `0.9375rem` / line-height 1.5

**Mono (optional, für Daten/Metadaten):** System-Default mono-stack reicht.

Beide Fonts via `next/font/google` mit `display: 'swap'`.

### 6.3 Spacing

8-Punkt-Grid: 4, 8, 16, 24, 32, 48, 64, 96, 128 px. Tailwind-Default passt 1:1.

### 6.4 Layout

- **Mobile-first**.
- Maximal-Breite Container: 1280px (`max-w-7xl`).
- Maximal-Lesetextbreite: 680px (`max-w-[680px]`).
- Padding seitlich: 24px mobile, 48px tablet, 80px desktop.
- Vertical rhythm: 96px zwischen Hauptsections desktop, 64px mobile.

### 6.5 Komponenten

- **Button (primary):** `--bg` Text auf `--accent` Hintergrund, 4px radius, kein Schatten, `padding: 12px 24px`.
- **Button (ghost):** Border-only in `--accent`, fill on hover.
- **Card:** `--bg-muted` Hintergrund, 24px Padding, 8px radius.
- **Link:** `--accent`, `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px`. Hover: `--accent-hover`.

### 6.6 Animationen

- Hover-Crossfade Hero: 800ms `ease-in-out`.
- Page-Transitions: einfacher 200ms Fade-In auf Mount.
- Kein Scroll-Hijacking, kein Parallax. Scroll-Reveals nur sehr dezent (oder gar nicht).
- `prefers-reduced-motion` respektieren — alle Animationen abschaltbar.

---

## 7. Image-Mapping

### 7.1 Hero (Hover-Bilder)

| Auslöser | Bild (Quelle) | Pfad | Crop-Hinweis |
|---|---|---|---|
| Default | (kein Bild) | — | nur Typografie auf `--bg` |
| Geige | grüner Samt am Pult (PDF/WhatsApp Bild 6) | `/images/hero/hero-geige.webp` | Center, leicht nach rechts orientiert, Pianoflügel sichtbar |
| Dramaturgie | HUGO-Bühne mit Mikrofon (Bild 17) | `/images/hero/hero-dramaturgie.webp` | mittig, Bühnen-Atmosphäre erhalten |
| Performance | rot/blau Licht (Bild 12) | `/images/hero/hero-performance.webp` | Center, Gesicht im oberen Drittel |

**Alle Hero-Bilder:** 2400×1600px WebP, Quality 85. Werden als `next/image` geladen, der Browser bekommt responsive srcset.

### 7.2 Mini-Texte Startseite (kleinere Bilder)

| Bereich | Bild | Pfad |
|---|---|---|
| Geige | Sommer-Portrait mit Geige (Bild 5) | `/images/home/home-geige.webp` |
| Dramaturgie | Mikrofon + Skript (Bild 9) | `/images/home/home-dramaturgie.webp` |
| Performance | Schmetterling-Kostüm (Bild 14) | `/images/home/home-performance.webp` |

### 7.3 Aktuelles-Card

Gretchen-Bild aus dem Portfolio-PDF (Seite 2) oder neues Pressefoto. **TBD: mit Annika klären.**

### 7.4 Pressefotos `/downloads`

3 hochauflösende Bilder zum Download (jeweils Original-JPG + WebP für die Vorschau):

- Geige-Pressefoto: Bild 18 (grüner Samt) oder Bild 5
- Dramaturgie-Pressefoto: Bild 9 oder Bild 17
- Performance-Pressefoto: Bild 12 oder Bild 14

Pro Foto: Caption mit Fotograf:in (Bildrechte!).

### 7.5 Bildnachweise

Eigene Seite `/bildnachweise`, im Footer verlinkt. Listet alle verwendeten Bilder mit:

- Bildbeschreibung / Verwendungsort auf der Site
- Fotograf:in (mit Link wenn vorhanden)
- Lizenzhinweis falls relevant

Keine Inline-Captions auf den Hauptseiten — hält das Design sauber. Die zentrale Seite genügt rechtlich, solange im Footer eindeutig auf "Bildnachweise" verlinkt wird.

---

## 8. Tech Stack & Conventions

**Framework:** Next.js 15 (App Router) + TypeScript
**Styling:** Tailwind CSS v4 (mit `@theme` für CSS-Variablen aus Sektion 6.1)
**Content:** MDX für Vita + Projekttexte (in `/content/`)
**Bilder:** `next/image`, lokale Dateien in `/public/images/`
**Fonts:** `next/font/google` (Fraunces + Inter)
**Hosting:** Vercel
**Domain:** TBD (`annikaspegg.de` empfohlen)
**Analytics:** keine im MVP. Falls später, dann Plausible (DSGVO-konform).

### 8.1 Ordnerstruktur

```
/app
  /(site)
    page.tsx                   # Startseite
    /vita/page.tsx
    /coming-up/page.tsx
    /vergangenes/page.tsx
    /vergangenes/[slug]/page.tsx
    /downloads/page.tsx
    /impressum/page.tsx
    /datenschutz/page.tsx
  layout.tsx
  globals.css
/components
  /ui                          # Button, Card, Link, Badge
  Header.tsx
  Footer.tsx
  HeroHover.tsx                # Die Hover-Bildwechsel-Komponente
  ProjectCard.tsx
  TerminListItem.tsx
/content
  vita.mdx
  aktuelles.mdx
  /projects                    # ein .mdx pro Vergangenes-Projekt
  coming-up.json
/public
  /images
    /hero
    /home
    /press
    /projects
  /downloads
    annika-spegg-kurzvita.pdf
/lib
  metadata.ts                  # Default SEO + Helpers
SPEC.md                        # dieses Dokument
README.md
```

### 8.2 Naming-Konventionen

- Bilddateien: `bereich-beschreibung-NN.webp` (z.B. `hero-geige-pult-01.webp`)
- Components: PascalCase
- MDX-Frontmatter (Projekte): `title`, `year`, `role`, `image`, `links`, `slug`

### 8.3 Code-Stil

- TypeScript strict
- Server Components default, Client Components nur wo nötig (HeroHover ist eine)
- Keine externen UI-Libs — pures Tailwind
- Lucide React für Icons

---

## 9. Asset Pipeline

Vor Upload alle Bilder durch:
1. Squoosh oder ähnliches → WebP, Quality 80–85
2. Max 1600px lange Kante (Hero-Bilder ggf. 2400px)
3. `next/image` erzeugt automatisch responsive srcset
4. Bei Pressefotos: zusätzlich Original-JPG (max 4MB) in `/public/downloads/press/` für Download

PDF Kurzvita: aus Pages/InDesign exportiert als PDF/A-1, max 500KB.

---

## 10. Accessibility & SEO

- Semantisches HTML (`<header>`, `<main>`, `<article>`, `<nav>`).
- Alle Bilder mit aussagekräftigen `alt`-Texten — nicht "Foto von Annika", sondern z.B. "Annika Spegg spielt Violine im grünen Samtkleid bei einem Kammerkonzert".
- Color-Contrast WCAG AA (Akzent-Rot auf Off-White prüfen).
- Focus-States sichtbar (kein `outline: none` ohne Ersatz).
- `<title>` und `meta description` pro Seite.
- Open Graph + Twitter Card mit Pressefoto.
- `/sitemap.xml` und `/robots.txt`.
- JSON-LD `Person` Schema auf Startseite.
- Lang-Tag: `<html lang="de">`.

---

## 11. Rechtliches

- **Impressum:** verantwortlich Annika Spegg, ladungsfähige Adresse + Kontakt-Mail. Annika muss finale Version freigeben.
- **Datenschutz:** Standard-DSGVO-Text (Generator wie e-recht24, anwaltlich nur falls Tracking dazu kommt). Da wir kein Tracking, keine Formulare und kein Newsletter haben, fällt der Text minimal aus.
- **Bildrechte:** pro Bild Fotograf:in vermerken — entweder direkt am Bild als Caption oder zentral auf einer "Credits"-Seite. **Vor Launch klären: liegen für alle Bilder die Nutzungsrechte vor?**

---

## 12. Entscheidungen

- ✅ **Domain:** registriert (Daniel verwaltet)
- ✅ **Bildrechte:** vorhanden — Nachweise auf eigener Seite `/bildnachweise`, im Footer verlinkt (siehe 7.5)
- ✅ **Default-Hero:** nur Typografie auf `--bg`, keine Default-Bilder
- ✅ **Filter `/vergangenes`:** Phase 2, nicht im MVP
- ✅ **EN-Version:** nein
- ✅ **Newsletter:** nein
- ✅ **Kontakt:** nur E-Mail-Link, kein Formular
- ✅ **Akzent-Farbe:** `#C8392E` (Gretchen-Rot) bestätigt
- ✅ **Sortierung Coming Up:** nächster Termin oben (chronologisch aufsteigend), vergangene Termine gedimmt am Ende

### Verbleibende Platzhalter (vor Launch zu füllen)

- [ ] Kontakt-E-Mail-Adresse von Annika
- [ ] Ladungsfähige Adresse für Impressum
- [ ] Fotograf:innen-Namen pro Bild für Bildnachweise
- [ ] Finale Kurzvita-PDF (aktuell Platzhalter)

---

## 13. Phasen & Milestones

**MVP (Launch-Ready):**
1. Setup (Next.js + Tailwind + Fonts + globals.css mit Tokens) + Layout (Header/Footer) + Routing-Skeleton
2. Startseite mit Hover-Bildwechsel
3. Vita
4. Coming Up
5. Downloads + Impressum + Datenschutz
6. Vergangenes (mit 5–8 Kern-Projekten, Rest kann nachgepflegt werden)

**Phase 2:**
- Vergangenes komplett befüllt + Filter
- Pressefotos-Lightbox
- evtl. Galerie pro Projekt

**Phase 3 (optional):**
- EN-Version
- Newsletter
- Blog/Texte-Sektion

---

## 14. Workflow mit Claude Code

Pro Etappe ein klarer Prompt mit Bezug auf dieses Dokument:

> "Lies SPEC.md. Implementiere [konkretes Feature aus Sektion X]. Halte dich an die Tokens aus 6.1, die Typografie aus 6.2 und die Ordnerstruktur aus 8.1."

Nach jeder Etappe: lokal sichten, committen, pushen. Nicht alles in einem Rutsch bauen.
