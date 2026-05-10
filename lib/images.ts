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
      "Annika Spegg im grauen Cardigan und schwarzen Top, hält das Mikrofon zum Mund und ein Tablet in der anderen Hand, vor blau-violettem Bühnenhintergrund — Querformat-Aufnahme mit viel offenem Raum links.",
    width: 1672,
    height: 941,
    // Querformat-Quelle (~16:9) füllt den Desktop-Hero fast aspect-genau.
    // Default-Center reicht — Annika sitzt rechts im Bild, links bleibt Platz
    // für den Titel-Overlay.
  },
  performance: {
    src: "/images/hero/hero-performance.webp",
    alt:
      "Annika Spegg sitzt mit Mikrofon auf einer Holzbühne in gemustertem Bodysuit mit violett-rosa Stoff-Drapierungen an den Schultern, eine zweite Performerin im Hintergrund mit langen Bühnenstangen vor schwarzem Raum und warmen Spotlights.",
    width: 1672,
    height: 941,
    // Querformat-Quelle (~16:9) füllt den Desktop-Hero fast aspect-genau.
    // Annika sitzt mittig-rechts, links bleibt Platz für den Titel-Overlay.
    // Y=60 % schiebt das Bild leicht nach oben (mehr Bühne unten sichtbar,
    // weniger schwarze Decke).
    position: "center 60%",
    // Leichter Zoom, damit die Performerin im Vordergrund präsenter wird.
    scale: 1.15,
  },
};

export const homeImages: Record<Feld, ImageEntry> = {
  geige: {
    // Quelle ist jetzt 1066x1066-Quadrat (rechtsbündig aus dem 1600x1066-Original
    // gecroppt — der unscharfe Flügel links ist weg). In 4:3-Mobile-Hero (1.333)
    // entsteht so vertikaler Crop-Spielraum (mobilePosition Y greift). In
    // 4:5-HomeFelder bleibt's horizontaler Crop, default-Center reicht.
    src: "/images/home/home-geige.webp",
    alt: "Annika Spegg spielt Geige im Profil in grünem Samtoberteil, im Hintergrund unscharf der Konzertflügel und das Notenpult eines weiteren Musikers.",
    width: 1066,
    height: 1066,
    // Mobile Hero: nach oben biased (= Bildinhalt rutscht hoch, mehr Geige
    // und Hände im unteren Frame-Bereich, weniger Decke oben).
    mobilePosition: "center 65%",
  },
  dramaturgie: {
    src: "/images/home/home-dramaturgie.webp",
    alt: "Annika Spegg im grauen Cardigan und schwarzen Top spricht ins Mikrofon und hält ein Skript in der Hand, vor blau-violettem Bühnenhintergrund.",
    width: 1067,
    height: 1600,
    // Mobile Hero (4:3 Container, 2:3 Quelle): nach oben biased — mehr vom
    // Mikro/Skript unten sichtbar, weniger leerer Bühnenhintergrund oben.
    mobilePosition: "center 45%",
  },
  performance: {
    src: "/images/home/home-performance.webp",
    alt: "Annika Spegg in einer Performance: silbernes Bodysuit mit lila-rosa Schmetterlingsflügeln, sitzt mit Mikrofon auf einer Holzbühne vor warmem Spotlight.",
    width: 1065,
    height: 1600,
    // Mobile Hero: nach oben biased — mehr Bühne/Beine unten sichtbar,
    // weniger schwarze Decke über dem Kopf.
    mobilePosition: "center 55%",
  },
};

export const feldLabel: Record<Feld, string> = {
  geige: "Geige",
  dramaturgie: "Dramaturgie",
  performance: "Performance",
};

export const feldOrder: Feld[] = ["geige", "dramaturgie", "performance"];
