// Zentrale Datumslogik für alle Veranstaltungen (Coming Up + Vergangenes).
// Bewusst ohne "@/"-Imports, damit `node --test` die Datei direkt laden kann.

export type TerminLink = { label: string; href: string };

export type Termin = {
  /** Erster (bzw. einziger) Veranstaltungstag, ISO-Format: "2026-10-10" */
  date: string;
  /** Optional: letzter Tag bei mehrtägigen Veranstaltungen, ISO-Format */
  endDate?: string;
  title: string;
  venue: string;
  city?: string;
  note?: string;
  role?: string;
  links?: TerminLink[];
  image?: { src: string; alt: string };
};

const berlinDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Berlin",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** Heutiges Datum in Europe/Berlin als ISO-String, z. B. "2026-10-21". */
export function berlinToday(now: Date = new Date()): string {
  return berlinDateFormatter.format(now);
}

/** Letzter Veranstaltungstag — entscheidet über aktuell vs. vergangen. */
function lastDay(t: Termin): string {
  return t.endDate ?? t.date;
}

/**
 * Teilt Termine in kommende (aufsteigend) und vergangene (absteigend).
 * Ein Termin bleibt bis einschließlich seines letzten Tages "kommend".
 * ISO-Daten lassen sich direkt als Strings vergleichen.
 */
export function splitTermine(
  termine: Termin[],
  today: string,
): { upcoming: Termin[]; past: Termin[] } {
  const upcoming = termine
    .filter((t) => lastDay(t) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = termine
    .filter((t) => lastDay(t) < today)
    .sort((a, b) => lastDay(b).localeCompare(lastDay(a)));
  return { upcoming, past };
}
