import type { Metadata } from "next";
import { bildnachweise } from "@/content/bildnachweise";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Bildnachweise",
  "Verzeichnis aller auf der Website verwendeten Fotos mit Fotograf:innen-Angaben.",
);

export default function BildnachweisePage() {
  return (
    <article className="mx-auto max-w-[840px] px-6 py-24 md:py-32">
      <h1
        className="font-display text-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontVariationSettings: "'opsz' 96",
          lineHeight: 1.05,
        }}
      >
        Bildnachweise
      </h1>

      <p className="mt-6 max-w-[680px] text-[1.0625rem] leading-[1.6] text-text-muted">
        Alle auf dieser Website verwendeten Fotos mit Verwendungsort und
        Fotograf:in. Bei Fragen zur Nutzung bitte direkt Kontakt aufnehmen.
      </p>

      <dl className="mt-12 divide-y divide-border border-y border-border">
        {bildnachweise.map((item, i) => (
          <div
            key={`${item.file}-${i}`}
            className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-6"
          >
            <dt className="md:col-span-4">
              <p className="text-[1rem] font-medium text-text">
                {item.usage}
              </p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {item.file}
              </p>
            </dt>
            <dd className="md:col-span-8">
              <p className="text-[0.9375rem] text-text">{item.description}</p>
              <p className="mt-2 text-[0.875rem] italic text-text-muted">
                {item.photographerUrl ? (
                  <a
                    href={item.photographerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
                  >
                    {item.photographer ?? item.photographerUrl}
                  </a>
                ) : (
                  item.photographer ?? "[Fotograf:in TBD]"
                )}
                {item.license && (
                  <span className="text-text-muted">{` · ${item.license}`}</span>
                )}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
