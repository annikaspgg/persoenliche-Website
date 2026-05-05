import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nicht gefunden",
  description: "Die angeforderte Seite existiert nicht.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-8 px-6 py-32 md:px-12 md:py-40">
      <p
        className="font-display text-text-muted"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontVariationSettings: "'opsz' 96",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        className="font-display text-text"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontVariationSettings: "'opsz' 120",
          lineHeight: 1.05,
        }}
      >
        Nicht gefunden
      </h1>
      <p className="max-w-prose text-[1.0625rem] leading-[1.6] text-text-muted">
        Die angeforderte Seite gibt es leider nicht — möglicherweise wurde sie
        verschoben oder der Link enthält einen Tippfehler.
      </p>
      <Button as={Link} href="/">
        Zur Startseite
        <ArrowRight size={18} aria-hidden />
      </Button>
    </section>
  );
}
