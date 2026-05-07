export type ProjectImage = {
  src: string;
  alt: string;
  /**
   * Optionale CSS object-position für object-cover Crops.
   * Default: "center". Beispiele: "center 20%", "right center".
   */
  position?: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectMeta = {
  title: string;
  slug: string;
  year: number;
  /** Übergeordnete Sortierhilfe innerhalb eines Jahres (höher = weiter oben) */
  order?: number;
  role: string[];
  mainImage: ProjectImage;
  gallery?: ProjectImage[];
  links?: ProjectLink[];
};

export function compareProjects(a: ProjectMeta, b: ProjectMeta): number {
  if (a.year !== b.year) return b.year - a.year;
  const ao = a.order ?? 0;
  const bo = b.order ?? 0;
  return bo - ao;
}
