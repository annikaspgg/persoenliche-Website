/**
 * Bildverzeichnis aller auf der Website verwendeten Fotos.
 * Annika trägt die Fotograf:innen vor Launch nach (`photographer`).
 *
 * Reihenfolge: nach Verwendungsort (Startseite → Vergangenes → Pressefotos).
 */

export type Bildnachweis = {
  usage: string;
  description: string;
  file: string;
  photographer?: string;
  photographerUrl?: string;
  license?: string;
};

const TBD = "[Fotograf:in TBD]";

export const bildnachweise: Bildnachweis[] = [
  // — Startseite Hero —
  {
    usage: "Startseite — Hero (Geige)",
    description:
      "Annika Spegg am Pult mit grünem Samtkleid, Konzertflügel im Hintergrund.",
    file: "hero-geige.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Hero (Dramaturgie)",
    description: "Bühnensituation mit Mikrofon beim HUGO-Wettbewerb.",
    file: "hero-dramaturgie.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Hero (Performance)",
    description: "Annika Spegg in rotem und blauem Bühnenlicht.",
    file: "hero-performance.webp",
    photographer: TBD,
  },

  // — Startseite Mini-Texte —
  {
    usage: "Startseite — Mini-Text Geige",
    description: "Sommerportrait von Annika Spegg mit Geige.",
    file: "home-geige.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Mini-Text Dramaturgie",
    description: "Mikrofon und Skript auf einem Tisch.",
    file: "home-dramaturgie.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Mini-Text Performance",
    description: "Annika Spegg im Schmetterling-Kostüm bei einer Performance.",
    file: "home-performance.webp",
    photographer: TBD,
  },

  // — Aktuelles —
  {
    usage: "Startseite — Aktuelles",
    description:
      "Faust.Margarete // GRETCHEN WANTS A FULL STORY — Pressefoto folgt.",
    file: "aktuelles-gretchen.webp",
    photographer: TBD,
  },

  // — Vergangenes / Projekte —
  {
    usage: "Vergangenes — Faust.Margarete (2026)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "gretchen-wants-a-full-story-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Rat der Generationen (2025)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "rat-der-generationen-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Venus and Adonis (2025)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "venus-and-adonis-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Duo Zwischen / HUGO-Wettbewerb (2025)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "duo-zwischen-hugo-wettbewerb-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — KommentarTheater (2024)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "kommentar-theater-{main,01,02}.webp",
    photographer: TBD,
  },

  // — Pressefotos (Downloads) —
  {
    usage: "Downloads — Pressefoto Geige",
    description: "Hochauflösendes Pressefoto Geige.",
    file: "press-geige.jpg",
    photographer: TBD,
  },
  {
    usage: "Downloads — Pressefoto Dramaturgie",
    description: "Hochauflösendes Pressefoto Dramaturgie.",
    file: "press-dramaturgie.jpg",
    photographer: TBD,
  },
  {
    usage: "Downloads — Pressefoto Performance",
    description: "Hochauflösendes Pressefoto Performance.",
    file: "press-performance.jpg",
    photographer: TBD,
  },
];
