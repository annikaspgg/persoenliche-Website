import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { meta as rawMeta } from "@/content/aktuelles.mdx";
import { strikeFaust } from "@/lib/text";

type AktuellesMeta = {
  title: string;
  image: string;
  imageAlt: string;
  flyer?: string;
  flyerAlt?: string;
  role?: string;
  paragraphs: string[];
  cast?: string;
  links?: Array<{ href: string; label: string }>;
  dates: Array<{ date: string; venue: string; city?: string }>;
};

const meta = rawMeta as AktuellesMeta;

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00`));
}

export function AktuellesCard() {
  return (
    <section
      aria-labelledby="aktuelles-heading"
      className="border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <h2
          id="aktuelles-heading"
          className="font-display text-text"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontVariationSettings: "'opsz' 96",
          }}
        >
          Aktuelles
        </h2>

        <article className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Linke Spalte: Gruppenbild oben, Flyer darunter */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="relative aspect-[2/3] overflow-hidden rounded-[8px] bg-bg-muted">
              <Image
                src={meta.image}
                alt={meta.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {meta.flyer && (
              <div className="relative aspect-[2/3] overflow-hidden rounded-[8px] bg-bg-muted">
                <Image
                  src={meta.flyer}
                  alt={meta.flyerAlt ?? "Flyer"}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Rechte Spalte: Titel, Beschreibung, Mit, Termine, Tickets */}
          <div className="md:col-span-7 md:pt-2">
            <h3
              className="font-display text-text"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                fontVariationSettings: "'opsz' 72",
                lineHeight: 1.15,
              }}
            >
              {strikeFaust(meta.title)}
            </h3>

            {meta.role && (
              <p className="mt-3 text-sm text-text-muted">{meta.role}</p>
            )}

            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.6] text-text">
              {meta.paragraphs.map((p, i) => (
                <p key={i}>{strikeFaust(p)}</p>
              ))}
            </div>

            {meta.cast && (
              <p className="mt-6 text-[0.9375rem] text-text-muted">
                <span className="font-medium text-text">Mit:</span> {meta.cast}
              </p>
            )}

            <ul className="mt-8 space-y-2 border-t border-border pt-6 text-[0.9375rem] text-text-muted">
              {meta.dates.map((d) => (
                <li
                  key={`${d.date}-${d.venue}`}
                  className="flex flex-wrap items-baseline gap-x-4"
                >
                  <span className="font-medium text-text">
                    {formatDate(d.date)}
                  </span>
                  <span>{d.venue}</span>
                </li>
              ))}
            </ul>

            {meta.links && meta.links.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {meta.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
                    >
                      {link.label}
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
