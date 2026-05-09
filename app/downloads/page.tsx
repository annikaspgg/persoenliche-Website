import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
import { strikeFaust } from "@/lib/text";

export const metadata: Metadata = pageMetadata(
  "Downloads & Links",
  "Pressetexte, hochauflösende Pressefotos, Hörproben und externe Profile von Annika Spegg — alles auf einer Seite zum Direktdownload.",
  { path: "/downloads" },
);

type PressPhoto = {
  slug: string;
  label: string;
  preview: string;
  file: string;
  /** Optional CSS object-position für die Card-Vorschau. Default: "center". */
  position?: string;
};

const pressPhotos: PressPhoto[] = [
  {
    slug: "geige",
    label: "Pressefoto Geige",
    preview: "/images/press/press-geige.webp",
    file: "/downloads/press/press-geige.jpg",
    // Landscape-Quelle in 4:5-Card → horizontal-Crop. "100% center" zeigt
    // die rechte Seite der Quelle (Annika + Geige), versteckt linke Pianist-Seite.
    position: "100% center",
  },
  {
    slug: "dramaturgie",
    label: "Pressefoto Dramaturgie",
    preview: "/images/press/press-dramaturgie.webp",
    file: "/downloads/press/press-dramaturgie.jpg",
  },
  {
    slug: "performance",
    label: "Pressefoto Performance",
    preview: "/images/press/press-performance.webp",
    file: "/downloads/press/press-performance.jpg",
  },
];

const videos = [
  {
    label: "Als Geigerin",
    note: "Konzertaufnahme",
    url: "https://www.youtube.com/watch?v=T2VQG4BGO08",
  },
  {
    label: "Als Performerin",
    note: "Primadonna (wanke.ensemble)",
    url: "https://www.youtube.com/watch?v=p5iYfuOuUFE",
  },
  {
    label: "Als Dramaturgin",
    note: "KommentarTheater",
    url: "https://youtu.be/2aCi2zae1NY?si=87cWfDid0Zydd6mE&t=363",
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
    url: "https://www.gfmuae.de/",
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
          {strikeFaust(
            "Annika Spegg (*1998) ist Musikerin und interdisziplinäre Künstlerin, die sich der Suche nach neuen künstlerischen Formaten verschrieben hat. Parallel zum Geigenstudium absolvierte sie ein Studium der Germanistik und Philosophie. Aktuell ist sie an der HMT Leipzig im Master Dramaturgie eingeschrieben; zuvor studierte sie im Master Violine an der HMDK Stuttgart, wo sie sich verstärkt der Neuen und der Alten Musik zuwendete und 2024 mit Auszeichnung abschloss. Eigene Musiktheater-Produktionen (darunter z. B. Pionier:in Ingolstadt (2022) und KommentarTheater (2024)), in denen sie als Dramaturgin, Darstellerin und Geigerin eingebunden ist, entstehen seit 2022. An der HMDK Stuttgart übernahm sie zwischen 2022 und 2024 mit Robert Rülke leitende Funktionen in der Klimabühne, die nach künstlerischen Antworten auf den Klimawandel sucht. Orchesterengagements führten sie ans Staatsorchester Stuttgart, Stuttgarter Kammerorchester, Gewandhaus Leipzig und Ensemble Resonanz Hamburg. Seit 2024 ist sie Stipendiatin der Akademie Musiktheater heute in der Sparte Dramaturgie. 2025 erhielt sie neben dem Stipendium der Gesellschaft für Musik und Ästhetik das #MusikerZukunft-Stipendium der Deutschen Orchesterstiftung für ihr feministisches Kammermusiktheater Faust.Margarete // Gretchen wants a full story, das 2026 in Leipzig und Stuttgart aufgeführt wird.",
          )}
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
                  style={photo.position ? { objectPosition: photo.position } : undefined}
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

        <ul className="mt-10 max-w-2xl divide-y divide-border border-y border-border">
          {videos.map((v) => (
            <li key={v.label}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
              >
                <span className="flex flex-col gap-1">
                  <span
                    className="font-display text-text group-hover:text-accent"
                    style={{
                      fontSize: "1.25rem",
                      fontVariationSettings: "'opsz' 60",
                    }}
                  >
                    {v.label}
                  </span>
                  <span className="text-sm text-text-muted">{v.note}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden className="shrink-0" />
              </a>
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
