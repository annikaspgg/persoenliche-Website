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
      {/* Heading + Fließtext in 680-px-Spalte */}
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

        <div>
          <VitaContent />
        </div>
      </section>

      {/* Vollbreiten-Bild — Annika im Skulpturensaal */}
      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-12 lg:px-20">
        <figure className="relative mx-auto aspect-[3/4] max-w-2xl overflow-hidden rounded-[8px] bg-bg-muted md:aspect-[4/3] md:max-w-none">
          <Image
            src="/images/vita/vita-skulptur.webp"
            alt="Annika Spegg im Skulpturensaal, im Profil vor einer Büste auf schwarzem Sockel."
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </figure>
      </section>

      {/* Strukturierter Lebenslauf nach Feldern */}
      <div className="mt-24 md:mt-32">
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
