export const mainNav = [
  { href: "/vita", label: "Vita" },
  { href: "/coming-up", label: "Coming Up" },
  { href: "/vergangenes", label: "Vergangenes" },
  { href: "/downloads", label: "Downloads" },
] as const;

export type MainNavItem = (typeof mainNav)[number];

export const contact = {
  email: "annika.spegg@posteo.de",
  instagram: "https://instagram.com/annika_spgg",
  duoZwischen: "https://duozwischen.de",
} as const;
