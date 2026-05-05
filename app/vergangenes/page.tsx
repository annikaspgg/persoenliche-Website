import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Vergangenes",
  "Projektarchiv von Annika Spegg — Musiktheater, Konzerte und Performances.",
);

export default function VergangenesPage() {
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
    </section>
  );
}
