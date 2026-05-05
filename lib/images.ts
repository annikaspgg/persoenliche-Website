/**
 * Image-Mapping für Startseite — siehe SPEC §7.1 / §7.2.
 *
 * Solange noch keine echten Pressefotos vorliegen, zeigen die Pfade auf
 * SVG-Platzhalter. Sobald Annika die WebP-Dateien geliefert hat, wird hier
 * `.svg` durch `.webp` ersetzt — die Komponenten müssen nicht angefasst
 * werden.
 */

export type Feld = "geige" | "dramaturgie" | "performance";

type ImageEntry = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroImages: Record<Feld, ImageEntry> = {
  geige: {
    src: "/images/hero/hero-geige.svg",
    alt:
      "Annika Spegg am Pult mit grünem Samtkleid, Konzertflügel im Hintergrund — Hero-Bild für den Bereich Geige.",
    width: 2400,
    height: 1600,
  },
  dramaturgie: {
    src: "/images/hero/hero-dramaturgie.svg",
    alt:
      "Bühnensituation mit Mikrofon und gesetztem Licht beim HUGO-Wettbewerb — Hero-Bild für den Bereich Dramaturgie.",
    width: 2400,
    height: 1600,
  },
  performance: {
    src: "/images/hero/hero-performance.svg",
    alt:
      "Annika Spegg in einer Performance, gesetzt in rotem und blauem Bühnenlicht — Hero-Bild für den Bereich Performance.",
    width: 2400,
    height: 1600,
  },
};

export const homeImages: Record<Feld, ImageEntry> = {
  geige: {
    src: "/images/home/home-geige.svg",
    alt: "Sommerportrait von Annika Spegg mit Geige.",
    width: 1200,
    height: 1500,
  },
  dramaturgie: {
    src: "/images/home/home-dramaturgie.svg",
    alt: "Mikrofon und Skript auf einem Tisch — Arbeitssituation Dramaturgie.",
    width: 1200,
    height: 1500,
  },
  performance: {
    src: "/images/home/home-performance.svg",
    alt: "Annika Spegg in einem Schmetterling-Kostüm bei einer Performance.",
    width: 1200,
    height: 1500,
  },
};

export const feldLabel: Record<Feld, string> = {
  geige: "Geige",
  dramaturgie: "Dramaturgie",
  performance: "Performance",
};

export const feldOrder: Feld[] = ["geige", "dramaturgie", "performance"];
