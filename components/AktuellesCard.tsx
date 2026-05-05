import Image from "next/image";
import { meta as rawMeta } from "@/content/aktuelles.mdx";

type AktuellesMeta = {
  title: string;
  image: string;
  imageAlt: string;
  role?: string;
  description: string;
  link?: { href: string; label: string };
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
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-bg-muted">
              <Image
                src={meta.image}
                alt={meta.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 md:pt-2">
            <h3
              className="font-display text-text"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                fontVariationSettings: "'opsz' 72",
                lineHeight: 1.15,
              }}
            >
              {meta.title}
            </h3>

            {meta.role && (
              <p className="mt-3 text-sm text-text-muted">{meta.role}</p>
            )}

            <p className="mt-6 text-[1.0625rem] leading-[1.6] text-text">
              {meta.description}
            </p>

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

            {meta.link && (
              <a
                href={meta.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
              >
                {meta.link.label} ↗
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
