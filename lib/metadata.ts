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

/** Static reference to the dynamically generated /opengraph-image route */
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Annika Spegg — Geige, Dramaturgie, Performance",
};

export function pageMetadata(
  title: string,
  description?: string,
  options?: { path?: string },
): Metadata {
  const desc = description ?? siteConfig.description;
  const url = options?.path ? `${siteConfig.url}${options.path}` : undefined;
  return {
    title,
    description: desc,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description: desc,
      url,
      images: [ogImage],
    },
    twitter: {
      title: `${title} — ${siteConfig.name}`,
      description: desc,
      images: [ogImage],
    },
  };
}
