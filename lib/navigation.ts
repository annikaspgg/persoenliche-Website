export const mainNav = [
  { href: "/vita", label: "Vita" },
  { href: "/coming-up", label: "Coming Up" },
  { href: "/vergangenes", label: "Vergangenes" },
  { href: "/downloads", label: "Downloads" },
] as const;

export type MainNavItem = (typeof mainNav)[number];

export const contact = {
  email: "kontakt@annikaspegg.de", // TODO: vor Launch durch echte Adresse ersetzen
  instagram: "https://instagram.com/annika_spgg",
  duoZwischen: "https://duozwischen.de",
} as const;
