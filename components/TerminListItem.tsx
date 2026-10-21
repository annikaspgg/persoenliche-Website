import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { strikeFaust } from "@/lib/text";
import type { Termin } from "@/lib/termine";

export type { Termin };

const dayFormatter = new Intl.DateTimeFormat("de-DE", { weekday: "long" });
const fullDateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function parseDate(iso: string): Date {
  return new Date(`${iso}T00:00:00`);
}

type Props = {
  termin: Termin;
  dimmed?: boolean;
};

export function TerminListItem({ termin, dimmed = false }: Props) {
  const date = parseDate(termin.date);
  const weekday = dayFormatter.format(date);
  const formatted = fullDateFormatter.format(date);
  const formattedEnd = termin.endDate
    ? fullDateFormatter.format(parseDate(termin.endDate))
    : null;

  return (
    <li
      className={cn(
        "border-t border-border py-10 transition-opacity",
        dimmed && "opacity-40",
      )}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="text-sm capitalize text-text-muted">{weekday}</p>
          <p
            className="mt-1 font-display text-text"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontVariationSettings: "'opsz' 72",
              lineHeight: 1.05,
            }}
          >
            {formatted}
          </p>
          {formattedEnd && (
            <p className="mt-1 text-sm text-text-muted">bis {formattedEnd}</p>
          )}
        </div>

        <div className="md:col-span-8">
          <div
            className={cn(
              "grid gap-6",
              termin.image ? "md:grid-cols-[1fr_auto] md:items-start" : "",
            )}
          >
            <div>
              <h2
                className="font-display text-text"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  fontVariationSettings: "'opsz' 60",
                  lineHeight: 1.2,
                }}
              >
                {strikeFaust(termin.title)}
              </h2>

              <p className="mt-2 text-[1rem] text-text">
                {termin.venue}
                {termin.city && termin.city !== termin.venue
                  ? `, ${termin.city}`
                  : ""}
                {termin.role && (
                  <>
                    {" · "}
                    <span className="text-text-muted">{termin.role}</span>
                  </>
                )}
              </p>

              {termin.note && (
                <p className="mt-3 text-[0.9375rem] italic text-text-muted">
                  {termin.note}
                </p>
              )}

              {termin.links && termin.links.length > 0 && (
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {termin.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.9375rem] text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
                    >
                      {l.label}
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  ))}
                </p>
              )}
            </div>

            {termin.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-bg-muted md:w-48">
                <Image
                  src={termin.image.src}
                  alt={termin.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
