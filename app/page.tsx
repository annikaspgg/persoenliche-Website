import type { Metadata } from "next";
import { HeroHover } from "@/components/HeroHover";
import { AktuellesCard } from "@/components/AktuellesCard";
import { HomeFelder } from "@/components/HomeFelder";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Annika Spegg — Geige, Dramaturgie, Performance",
  },
  description:
    "Musikerin und interdisziplinäre Künstlerin. Geige, Dramaturgie, Performance — auf der Suche nach neuen Formaten. Aktuell auf Tour mit Faust.Margarete.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Annika Spegg — Geige, Dramaturgie, Performance",
    description:
      "Musikerin und interdisziplinäre Künstlerin. Geige, Dramaturgie, Performance — auf der Suche nach neuen Formaten. Aktuell auf Tour mit Faust.Margarete.",
    url: siteConfig.url,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Annika Spegg",
  jobTitle: ["Geigerin", "Dramaturgin", "Performerin"],
  url: siteConfig.url,
  birthDate: "1998",
  birthPlace: {
    "@type": "Place",
    name: "Stuttgart",
    address: { "@type": "PostalAddress", addressCountry: "DE" },
  },
  sameAs: [
    "https://instagram.com/annika_spgg",
    "https://duozwischen.de",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroHover />
      <AktuellesCard />
      <HomeFelder />
    </>
  );
}
