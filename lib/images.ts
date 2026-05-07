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
  /**
   * CSS object-position für object-cover Crops. Default: "center".
   * Beispiele: "center", "right center", "50% 30%".
   */
  position?: string;
};

export const heroImages: Record<Feld, ImageEntry> = {
  geige: {
    src: "/images/hero/hero-geige.webp",
    alt:
      "Annika Spegg im Profil mit Geige in grünem Samt-Oberteil, Konzertflügel im Hintergrund.",
    width: 1600,
    height: 1066,
    // Landscape-Quelle, fits den breiten Hero gut — leichter Bias nach rechts hält Annika zentriert.
    position: "60% center",
  },
  dramaturgie: {
    src: "/images/hero/hero-dramaturgie.webp",
    alt:
      "Annika Spegg mit Mikrofon und Skript auf der Bühne, im Halbprofil — dramaturgische Bühnensituation.",
    width: 1067,
    height: 1600,
    // Portrait-Quelle in landscape-Hero: Gesicht liegt im oberen Drittel der Quelle.
    // "center 25%" hält Annikas Gesicht klar im sichtbaren Ausschnitt.
    position: "center 25%",
  },
  performance: {
    src: "/images/hero/hero-performance.webp",
    alt:
      "Annika Spegg in einer Performance: silbernes Bodysuit mit lila-rosa Schmetterlingsflügeln, sitzt mit Mikrofon auf einer Holzbühne vor warmem Spotlight.",
    width: 1065,
    height: 1600,
    // Portrait-Quelle: Crop bei 40 % — Gesicht und Mikrofon zentral im sichtbaren Bereich.
    position: "center 40%",
  },
};

export const homeImages: Record<Feld, ImageEntry> = {
  geige: {
    // Quellbild ist landscape 3:2 — wird per object-cover in den 4:5-Container geschnitten.
    // Annika steht rechts der Bildmitte; "65% center" hält sie und die Geige im sichtbaren Ausschnitt.
    src: "/images/home/home-geige.jpg",
    alt: "Annika Spegg spielt Geige in grünem Samt-Oberteil bei einem Kammerkonzert, links ein Pianist am Flügel.",
    width: 1600,
    height: 1066,
    position: "65% center",
  },
  dramaturgie: {
    src: "/images/home/home-dramaturgie.jpg",
    alt: "Annika Spegg in einer dramaturgischen Bühnensituation: mit Skript und Mikrofon, im Dialog mit einer Performerin auf einer Leiter.",
    width: 1067,
    height: 1600,
  },
  performance: {
    src: "/images/home/home-performance.jpg",
    alt: "Annika Spegg in einer Performance: spielt Geige in einem silbernen Kostüm vor dunklem Bühnenhintergrund, von rotem und blauem Licht angestrahlt.",
    width: 1067,
    height: 1600,
    // Portrait-Quelle in 4:5-Container: viel schwarzer Hintergrund über Annikas Kopf —
    // Crop nach oben verschieben, sodass Gesicht und Geige weiter oben im Frame sitzen.
    position: "center 25%",
  },
};

export const feldLabel: Record<Feld, string> = {
  geige: "Geige",
  dramaturgie: "Dramaturgie",
  performance: "Performance",
};

export const feldOrder: Feld[] = ["geige", "dramaturgie", "performance"];
