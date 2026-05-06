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
      "Annika Spegg im Profil mit Geige in grünem Samt-Oberteil, Konzertflügel im Hintergrund.",
    file: "hero-geige.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Hero (Dramaturgie)",
    description:
      "Annika Spegg mit Mikrofon und Skript auf der Bühne, im Halbprofil.",
    file: "hero-dramaturgie.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Hero (Performance)",
    description:
      "Annika Spegg in einer Performance mit Schmetterling-Kostüm und Mikrofon, vor einer Lichtinstallation.",
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

  // — Vita —
  {
    usage: "Vita — Skulpturensaal",
    description:
      "Annika Spegg im Profil vor einer Büste auf schwarzem Sockel im Skulpturensaal.",
    file: "vita-skulptur.webp",
    photographer: TBD,
  },

  // — Aktuelles —
  {
    usage: "Startseite — Aktuelles (Slideshow 1: Ensemble)",
    description:
      "Faust.Margarete // GRETCHEN WANTS A FULL STORY — Ensembleporträt der vier Performerinnen.",
    file: "aktuelles-gretchen.jpg",
    photographer: TBD,
  },
  {
    usage: "Startseite — Aktuelles (Slideshow 2: Probenfoto)",
    description:
      "Performerin mit Schwangerschafts-Prothese vor Graffiti-Wand — Probenfoto Faust.Margarete.",
    file: "aktuelles-gretchen-2.webp",
    photographer: TBD,
  },
  {
    usage: "Startseite — Aktuelles (Slideshow 3: Flyer)",
    description:
      "Veranstaltungs-Flyer Faust.Margarete // GRETCHEN WANTS A FULL STORY mit historischen und zeitgenössischen Gretchen-Bildern.",
    file: "aktuelles-gretchen-3.webp",
    photographer: TBD,
  },

  // — Vergangenes / Projekte —
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
    usage: "Vergangenes — Jubiläumskonzert Freiburg (2025)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "jubilaeumskonzert-freiburg-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Duo Zwischen / HUGO-Wettbewerb (2025)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "duo-zwischen-hugo-wettbewerb-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Wanderer, es gibt keinen Weg (2025/2026)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "wanderer-es-gibt-keinen-weg-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — KommentarTheater (2024)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "kommentar-theater-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — In solchen Bildern ist des Menschen Tag beschrieben (2023)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "in-solchen-bildern-des-menschen-tag-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Klimabühne Transparente Welten (2023)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "klimabuehne-transparente-welten-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Klimabühne Der Preis ist heiß (2023)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "klimabuehne-preis-ist-heiss-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Drei Leseperformances (2022)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "drei-leseperformances-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Primadonna 2.0 (2021)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "primadonna-2-0-{main,01,02}.webp",
    photographer: TBD,
  },
  {
    usage: "Vergangenes — Junge Oper Baden-Württemberg (2021)",
    description: "Hauptbild + zwei Galeriebilder.",
    file: "junge-oper-baden-wuerttemberg-{main,01,02}.webp",
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
