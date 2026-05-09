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
  /**
   * Optionaler Zoom (transform: scale(...)). Wirkt zusätzlich zu object-cover.
   * Default: 1 (keine Skalierung).
   */
  scale?: number;
  /**
   * transform-origin für `scale`. Bestimmt, an welcher Kante der Zoom verankert ist.
   * Default: "center". Beispiele: "center bottom" (unten verankert, Top wird mehr gecroppt).
   */
  scaleOrigin?: string;
  /**
   * Optionaler object-position-Override speziell für die mobile Hero-Karte
   * in HeroHover (md:hidden). Wenn gesetzt, überschreibt sie `position` nur
   * dort — HomeFelder und alle anderen Stellen lesen weiterhin `position`.
   */
  mobilePosition?: string;
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
    // Landscape-Quelle (1600x1066, 3:2). In 4:5-HomeFelder-Container wird sie
    // per object-cover horizontal beschnitten; "65% center" hält Annika + Geige
    // rechts im sichtbaren Ausschnitt.
    src: "/images/home/home-geige.webp",
    alt: "Annika Spegg spielt Geige im Profil in grünem Samtoberteil, im Hintergrund unscharf der Konzertflügel und das Notenpult eines weiteren Musikers.",
    width: 1600,
    height: 1066,
    position: "65% center",
  },
  dramaturgie: {
    src: "/images/home/home-dramaturgie.webp",
    alt: "Annika Spegg im grauen Cardigan und schwarzen Top spricht ins Mikrofon und hält ein Skript in der Hand, vor blau-violettem Bühnenhintergrund.",
    width: 1067,
    height: 1600,
    // Mobile Hero-Karte (4:3 Container, 2:3 Quelle): Crop nach unten biased,
    // damit Annikas Kopf und Mikrofon im oberen Frame-Bereich sitzen.
    mobilePosition: "center 25%",
  },
  performance: {
    src: "/images/home/home-performance.webp",
    alt: "Annika Spegg in einer Performance: silbernes Bodysuit mit lila-rosa Schmetterlingsflügeln, sitzt mit Mikrofon auf einer Holzbühne vor warmem Spotlight.",
    width: 1065,
    height: 1600,
    // Mobile Hero-Karte: Bildinhalt etwas nach unten biased, damit Gesicht
    // und Mikrofon klar im 4:3-Frame sitzen.
    mobilePosition: "center 30%",
  },
};

export const feldLabel: Record<Feld, string> = {
  geige: "Geige",
  dramaturgie: "Dramaturgie",
  performance: "Performance",
};

export const feldOrder: Feld[] = ["geige", "dramaturgie", "performance"];
