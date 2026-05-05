import type { Metadata } from "next";
import { Download } from "lucide-react";
import VitaContent from "@/content/vita.mdx";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Vita",
  "Lebenslauf von Annika Spegg — Geige, Dramaturgie, Performance.",
);

export default function VitaPage() {
  return (
    <article className="mx-auto max-w-[680px] px-6 py-24 md:py-32">
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

      <div className="mb-16">
        <VitaContent />
      </div>

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
    </article>
  );
}
