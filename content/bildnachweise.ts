/**
 * Bildverzeichnis aller auf der Website verwendeten Fotos.
 * Annika trägt die Fotograf:innen noch nach (`photographer`) — bis dahin bleibt
 * das Feld leer und wird nicht angezeigt.
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

export const bildnachweise: Bildnachweis[] = [
  // — Startseite Hero —
  {
    usage: "Startseite — Hero (Geige)",
    description:
      "Annika Spegg im Profil mit Geige in grünem Samt-Oberteil, Konzertflügel im Hintergrund.",
    file: "hero-geige.webp",  },
  {
    usage: "Startseite — Hero (Dramaturgie)",
    description:
      "Annika Spegg im grauen Cardigan mit Mikrofon und Tablet vor blau-violettem Bühnenhintergrund — Querformat-Aufnahme mit viel Negativraum links.",
    file: "hero-dramaturgie.webp",  },
  {
    usage: "Startseite — Hero (Performance)",
    description:
      "Annika Spegg in silbernem Bodysuit mit lila-rosa Schmetterlingsflügeln, sitzt mit Mikrofon auf einer Holzbühne vor warmem Spotlight.",
    file: "hero-performance.webp",  },

  // — Startseite Mini-Texte —
  {
    usage: "Startseite — Mini-Text Geige",
    description:
      "Annika Spegg im Profil mit Geige in grünem Samtoberteil, im Hintergrund unscharf der Konzertflügel.",
    file: "home-geige.webp",  },
  {
    usage: "Startseite — Mini-Text Dramaturgie",
    description:
      "Annika Spegg im grauen Cardigan und schwarzen Top am Mikrofon mit Skript in der Hand.",
    file: "home-dramaturgie.webp",  },
  {
    usage: "Startseite — Mini-Text Performance",
    description:
      "Annika Spegg im silbernen Bodysuit mit lila-rosa Schmetterlingsflügeln und Mikrofon, sitzend auf einer Holzbühne vor warmem Spotlight.",
    file: "home-performance.webp",  },

  // — Vita —
  {
    usage: "Vita — Skulpturensaal",
    description:
      "Annika Spegg im Profil vor einer Büste auf schwarzem Sockel im Skulpturensaal.",
    file: "vita-skulptur.webp",  },
  {
    usage: "Vita — Triptychon im Museum",
    description:
      "Annika Spegg von hinten vor einem Weltgericht-Altar im Museum (Paradies, Endgericht, Hölle).",
    file: "vita-bosch.webp",  },
  {
    usage: "Vita — Bildergalerie (12 Slides)",
    description:
      "Coverflow-Slideshow zwischen Stationen und PDF-Button mit Eindrücken aus Annikas künstlerischer Arbeit.",
    file: "gallery/gallery-{blau-haende,flosse,sommer,maske,konzertsaal,wiese-trio,hugo,gretchen,trio-backstein,wiese-kasten,bemalte-geige,duo-sustainable}.webp",  },

  // — Aktuelles —
  {
    usage: "Startseite — Aktuelles (Slideshow 1: Ensemble)",
    description:
      "Faust.Margarete // GRETCHEN WANTS A FULL STORY — Ensembleporträt der vier Performerinnen.",
    file: "aktuelles-gretchen.jpg",  },
  {
    usage: "Startseite — Aktuelles (Slideshow 2: Probenfoto)",
    description:
      "Performerin mit Schwangerschafts-Prothese vor Graffiti-Wand — Probenfoto Faust.Margarete.",
    file: "aktuelles-gretchen-2.webp",  },
  {
    usage: "Startseite — Aktuelles (Slideshow 3: Flyer)",
    description:
      "Veranstaltungs-Flyer Faust.Margarete // GRETCHEN WANTS A FULL STORY mit historischen und zeitgenössischen Gretchen-Bildern.",
    file: "aktuelles-gretchen-3.webp",  },

  // — Vergangenes / Projekte —
  {
    usage: "Vergangenes — Faust.Margarete // GRETCHEN WANTS A FULL STORY (2026)",
    description:
      "Szenenfotos der Uraufführung im Ost-Passage Theater Leipzig (Hauptbild Spiegel-Szene + drei Galeriebilder: Geige, Spiegelblick, Blaulicht).",
    file: "faust-margarete-{main,01,02,03}.jpg",  },
  {
    usage: "Vergangenes — Rat der Generationen (2025)",
    description:
      "Hauptbild (Bühne mit Netz und Bändern) + drei Galeriebilder aus dem „lebendigen Archiv“ des Rats.",
    file: "rat-der-generationen-{main,01,02,03}.webp",  },
  {
    usage: "Vergangenes — Venus and Adonis (2025)",
    description: "Hauptbild + vier Galeriebilder vom Barockopernpasticcio (HMT/Bachfest Leipzig).",
    file: "venus-and-adonis-{main,01,02,03,04}.webp",  },
  {
    usage: "Vergangenes — Jubiläumskonzert Freiburg (2025)",
    description:
      "Klaviertrio mit Annika Spegg, Beverly Ellis und Alfonso Gomez beim Konzert zur 10-Jahres-Partnerschaft Freiburg–Suwon (Hauptbild + 2 Galeriebilder).",
    file: "jubilaeumskonzert-freiburg-{main,01,02}.webp",  },
  {
    usage: "Vergangenes — Hugo-Wettbewerb / Duo Zwischen (2025)",
    description:
      "Preisverleihung Hugo-Wettbewerb der Montforter Zwischentöne 2025 (Hauptbild + 2 Bühnenfotos).",
    file: "duo-zwischen-hugo-wettbewerb-{main,01,02}.webp",  },
  {
    usage: "Vergangenes — KommentarTheater (2024)",
    description:
      "Hauptbild Bühnensituation (Toiletten + AI-Kopf-Projektion) + Premieren-Plakat.",
    file: "kommentar-theater-{main,01}.webp",  },
  {
    usage: "Vergangenes — In solchen Bildern ist des Menschen Tag beschrieben (2023)",
    description:
      "Probenraum-/Werkstatt-Bilder zur Solo-Performance: bemalte Geige auf Staffelei (Hauptbild) + 2 Detailbilder.",
    file: "in-solchen-bildern-des-menschen-tag-{main,01,02}.webp",  },
  {
    usage: "Vergangenes — Klimabühne Transparente Welten (2023)",
    description:
      "Bühnenfotos der Klimabühne-Produktion zum Thema Meer (Hauptbild + 2 Szenenfotos).",
    file: "klimabuehne-transparente-welten-{main,01,02}.webp",
    photographer: "Jule Lotte Bröcker",
  },
  {
    usage: "Vergangenes — Klimabühne Der Preis ist heiß (2023)",
    description:
      "Bühnenfotos zur Game-Show-Klimabühne (Hauptbild Stufenleiter-Szene + 1 Geigen-Klavier-Aufnahme).",
    file: "klimabuehne-preis-ist-heiss-{main,01}.webp",  },
  {
    usage: "Vergangenes — Drei Leseperformances (2022)",
    description:
      "Annika Spegg liest am Mikrofon im Außenbereich beim Hock am Turm, davor spielen Kinder.",
    file: "drei-leseperformances-main.webp",  },

  // — Pressefotos (Downloads) —
  {
    usage: "Downloads — Pressefoto Geige",
    description:
      "Annika Spegg im Profil mit Geige in grünem Samtoberteil, im Hintergrund unscharf der Konzertflügel.",
    file: "press-geige.jpg",  },
  {
    usage: "Downloads — Pressefoto Dramaturgie",
    description:
      "Annika Spegg im grauen Cardigan und schwarzen Top am Mikrofon mit Skript in der Hand.",
    file: "press-dramaturgie.jpg",  },
  {
    usage: "Downloads — Pressefoto Performance",
    description:
      "Annika Spegg lächelnd mit kunstvoll verändeter Geige (mit Pferdehaar bezogen) — atmosphärische Aufnahme bei Lampenlicht.",
    file: "press-performance.jpg",  },
];
