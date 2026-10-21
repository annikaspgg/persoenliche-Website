import type { Metadata } from "next";
import { TerminListItem } from "@/components/TerminListItem";
import { pageMetadata } from "@/lib/metadata";
import { getTermine } from "@/lib/termine.server";

export const metadata: Metadata = pageMetadata(
  "Coming Up",
  "Kommende Konzerte und Aufführungen von Annika Spegg: Streichquartett, Faust.Margarete und neue Opernarbeiten in Leipzig, Stuttgart und Frankfurt.",
  { path: "/coming-up" },
);

export default async function ComingUpPage() {
  const { upcoming } = await getTermine();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <h1
        className="font-display text-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontVariationSettings: "'opsz' 96",
          lineHeight: 1.05,
        }}
      >
        Coming Up
      </h1>

      {upcoming.length === 0 ? (
        <p className="mt-12 text-text-muted">
          Aktuell sind keine Termine veröffentlicht.
        </p>
      ) : (
        <ul className="mt-12 border-b border-border">
          {upcoming.map((t) => (
            <TerminListItem key={`${t.date}-${t.venue}`} termin={t} />
          ))}
        </ul>
      )}
    </section>
  );
}
