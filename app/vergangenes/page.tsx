import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { TerminListItem } from "@/components/TerminListItem";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { getTermine } from "@/lib/termine.server";

export const metadata: Metadata = pageMetadata(
  "Vergangenes",
  "Projektarchiv von Annika Spegg: Musiktheater, Konzerte und Performances zwischen 2021 und 2026 — von Don Giovanni bis Faust.Margarete.",
  { path: "/vergangenes" },
);

export default async function VergangenesPage() {
  const { past } = await getTermine();

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
        Vergangenes
      </h1>

      <p className="mt-6 max-w-2xl text-text-muted">
        Auswahl realisierter Projekte. Weitere Arbeiten werden nach und nach
        ergänzt.
      </p>

      <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.meta.slug} project={p.meta} />
        ))}
      </ul>

      {past.length > 0 && (
        <section className="mt-24" aria-labelledby="past-events-heading">
          <h2
            id="past-events-heading"
            className="font-display text-text"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontVariationSettings: "'opsz' 80",
              lineHeight: 1.1,
            }}
          >
            Vergangene Veranstaltungen
          </h2>
          <ul className="mt-8 border-b border-border">
            {past.map((t) => (
              <TerminListItem key={`${t.date}-${t.venue}`} termin={t} />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
