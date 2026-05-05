import type { Metadata } from "next";
import comingUpData from "@/content/coming-up.json";
import { TerminListItem, type Termin } from "@/components/TerminListItem";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Coming Up",
  "Kommende Konzerte und Aufführungen von Annika Spegg: Streichquartett, Faust.Margarete und neue Opernarbeiten in Leipzig, Stuttgart und Frankfurt.",
  { path: "/coming-up" },
);

const termine = comingUpData as Termin[];

function todayMidnight(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function parseDate(iso: string): Date {
  return new Date(`${iso}T00:00:00`);
}

export default function ComingUpPage() {
  const today = todayMidnight();

  const sorted = [...termine].sort(
    (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime(),
  );

  const upcoming = sorted.filter((t) => parseDate(t.date) >= today);
  const past = sorted.filter((t) => parseDate(t.date) < today);

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

      {upcoming.length === 0 && past.length === 0 && (
        <p className="mt-12 text-text-muted">
          Aktuell sind keine Termine veröffentlicht.
        </p>
      )}

      {upcoming.length > 0 && (
        <ul className="mt-12 border-b border-border">
          {upcoming.map((t) => (
            <TerminListItem key={`${t.date}-${t.venue}`} termin={t} />
          ))}
        </ul>
      )}

      {past.length > 0 && (
        <section className="mt-20" aria-labelledby="past-heading">
          <h2
            id="past-heading"
            className="font-display text-text-muted"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontVariationSettings: "'opsz' 72",
              lineHeight: 1.1,
            }}
          >
            Vergangen
          </h2>
          <ul className="mt-8 border-b border-border">
            {past.map((t) => (
              <TerminListItem
                key={`${t.date}-${t.venue}`}
                termin={t}
                dimmed
              />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
