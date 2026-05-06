import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import VitaContent from "@/content/vita.mdx";
import { Button } from "@/components/ui/Button";
import { HomeFelder } from "@/components/HomeFelder";
import { VitaStations } from "@/components/VitaStations";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Vita",
  "Lebenslauf von Annika Spegg: Geigerin, Dramaturgin und Performerin. Studien in Freiburg, Stuttgart und Leipzig. Stipendiatin AMH und GfMA.",
  { path: "/vita" },
);

export default function VitaPage() {
  return (
    <>
      {/* Heading + Fließtext in 680-px-Spalte; Bild rechts oben (Magazin-Layout) */}
      <section className="mx-auto max-w-[680px] px-6 pt-24 md:pt-32">
        <h1
          className="mb-12 font-display text-text"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontVariationSettings: "'opsz' 96",
            lineHeight: 1.05,
          }}
        >
          Vita
        </h1>

        {/*
          Mobile: kompakt zentriert über dem Text.
          Desktop (≥ md): float-right, fester Breite, der Fließtext läuft links vorbei.
        */}
        <figure className="relative mx-auto mb-6 aspect-[3/4] w-2/3 max-w-[260px] overflow-hidden rounded-[8px] bg-bg-muted md:float-right md:mx-0 md:mb-4 md:ml-8 md:w-[260px] md:max-w-none">
          <Image
            src="/images/vita/vita-skulptur.webp"
            alt="Annika Spegg im Skulpturensaal, im Profil vor einer Büste auf schwarzem Sockel."
            fill
            sizes="(max-width: 768px) 60vw, 260px"
            className="object-cover"
            style={{
              objectPosition: "center",
              transform: "scale(1.15)",
              transformOrigin: "center bottom",
            }}
          />
        </figure>

        <div>
          <VitaContent />
        </div>

        {/* Float am Ende der Spalte sauber abschließen */}
        <div className="clear-both" />
      </section>

      {/* Bild zwischen Fließtext und Stationen — gleiche Breite wie der Text oben */}
      <section className="mx-auto mt-10 max-w-[680px] px-6 md:mt-14">
        <figure className="relative aspect-[3/2] overflow-hidden rounded-[8px] bg-bg-muted">
          <Image
            src="/images/vita/vita-bosch.webp"
            alt="Annika Spegg von hinten vor einem Triptychon (Weltgericht-Altar) im Museum — Paradies, Endgericht und Hölle in dunklen Grün- und Erdtönen."
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover"
          />
        </figure>
      </section>

      {/* Strukturierter Lebenslauf nach Feldern */}
      <div className="mt-10 md:mt-14">
        <VitaStations />
      </div>

      {/* Drei Felder — Geige · Dramaturgie · Performance, Texte 1:1 von Startseite */}
      <HomeFelder showVitaLink={false} />

      {/* Abschluss: Kurzvita-PDF */}
      <section className="mx-auto max-w-[680px] px-6 pb-24 md:pb-32">
        <div className="border-t border-border pt-10">
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
    </>
  );
}
