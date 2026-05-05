import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Downloads & Links",
  "Kurzvita, Pressefotos, Hörproben und externe Profile von Annika Spegg.",
);

const pressPhotos = [
  {
    slug: "geige",
    label: "Pressefoto Geige",
    preview: "/images/press/press-geige.svg",
    file: "/downloads/press/press-geige.jpg",
  },
  {
    slug: "dramaturgie",
    label: "Pressefoto Dramaturgie",
    preview: "/images/press/press-dramaturgie.svg",
    file: "/downloads/press/press-dramaturgie.jpg",
  },
  {
    slug: "performance",
    label: "Pressefoto Performance",
    preview: "/images/press/press-performance.svg",
    file: "/downloads/press/press-performance.jpg",
  },
];

const videos = [
  {
    label: "Als Geigerin",
    note: "Konzertaufnahmen — YouTube-Link",
  },
  {
    label: "Als Performerin",
    note: "Primadonna (wanke.ensemble) — YouTube-Link",
  },
  {
    label: "Als Dramaturgin",
    note: "KommentarTheater — YouTube-Link",
  },
];

const profiles = [
  { label: "Instagram @annika_spgg", url: "https://instagram.com/annika_spgg" },
  { label: "Duo Zwischen", url: "https://duozwischen.de" },
  {
    label: "Akademie Musiktheater heute",
    url: "https://akademie-musiktheater-heute.de",
  },
  {
    label: "Gesellschaft für Musik und Ästhetik",
    url: "https://gesellschaft-fuer-musik-und-aesthetik.de",
  },
];

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-display text-text"
      style={{
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        fontVariationSettings: "'opsz' 80",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  );
}

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <h1
        className="font-display text-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontVariationSettings: "'opsz' 96",
          lineHeight: 1.05,
        }}
      >
        Downloads & Links
      </h1>

      <p className="mt-6 max-w-2xl text-text-muted">
        Pressetexte, druckfähige Pressefotos, Hörproben und externe Profile —
        alles auf einer Seite.
      </p>

      {/* 1. Kurzvita */}
      <section
        aria-labelledby="kurzvita-heading"
        className="mt-20 border-t border-border pt-12"
      >
        <SectionHeading id="kurzvita-heading">Kurzvita</SectionHeading>
        <p className="mt-6 max-w-[680px] text-[1.0625rem] leading-[1.6] text-text">
          Eine Seite Pressetext mit den wichtigsten Stationen — direkt
          verwendbar für Programmhefte und Ankündigungen.
        </p>
        <div className="mt-8">
          <Button
            as="a"
            href="/downloads/annika-spegg-kurzvita.pdf"
            download
          >
            <Download size={18} aria-hidden />
            Kurzvita als PDF herunterladen
          </Button>
        </div>
      </section>

      {/* 2. Pressefotos */}
      <section
        aria-labelledby="pressefotos-heading"
        className="mt-20 border-t border-border pt-12"
      >
        <SectionHeading id="pressefotos-heading">Pressefotos</SectionHeading>
        <p className="mt-6 max-w-[680px] text-[1.0625rem] leading-[1.6] text-text">
          Hochauflösende Bilder zur freien Verwendung in Print und Online —
          bitte Bildrechte und Fotograf:in bei jeder Veröffentlichung
          angeben.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {pressPhotos.map((photo) => (
            <li key={photo.slug}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-bg-muted">
                <Image
                  src={photo.preview}
                  alt={photo.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[1rem] text-text">{photo.label}</h3>
              <p className="mt-1 text-sm italic text-text-muted">
                Fotograf:in: TBD
              </p>
              <div className="mt-4">
                <Button as="a" href={photo.file} download variant="ghost">
                  <Download size={16} aria-hidden />
                  Original (JPG)
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Videos / Hörproben */}
      <section
        aria-labelledby="videos-heading"
        className="mt-20 border-t border-border pt-12"
      >
        <SectionHeading id="videos-heading">Videos & Hörproben</SectionHeading>
        <p className="mt-6 max-w-[680px] text-[1.0625rem] leading-[1.6] text-text">
          Externe Videos sind als Links eingebunden, nicht als Embeds — so
          werden ohne Klick keine Daten an YouTube übertragen.
        </p>

        <ul className="mt-10 max-w-2xl space-y-6">
          {videos.map((v) => (
            <li
              key={v.label}
              className="flex flex-col gap-2 border-b border-border pb-6 last:border-b-0"
            >
              <p className="font-display text-text" style={{ fontSize: "1.25rem", fontVariationSettings: "'opsz' 60" }}>
                {v.label}
              </p>
              <p className="text-sm text-text-muted">{v.note}</p>
              <p className="text-sm italic text-text-muted">
                URL folgt — wird von Annika ergänzt.
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Profile & Links */}
      <section
        aria-labelledby="profile-heading"
        className="mt-20 border-t border-border pt-12"
      >
        <SectionHeading id="profile-heading">Profile & Links</SectionHeading>
        <ul className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
          {profiles.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-5 text-[1rem] text-text transition-colors hover:text-accent"
              >
                <span>{p.label}</span>
                <ArrowUpRight size={18} aria-hidden className="shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
