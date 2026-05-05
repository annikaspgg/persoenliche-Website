import type { Metadata } from "next";

export const siteConfig = {
  name: "Annika Spegg",
  url: "https://annikaspegg.de",
  description:
    "Annika Spegg — Musikerin und interdisziplinäre Künstlerin. Geige, Dramaturgie, Performance.",
  locale: "de_DE",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(
  title: string,
  description?: string,
): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description: description ?? siteConfig.description,
    },
  };
}
