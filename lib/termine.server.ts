import { connection } from "next/server";
import termineData from "@/content/termine.json";
import { berlinToday, splitTermine, type Termin } from "@/lib/termine";

/**
 * Liefert die Termine geteilt nach heutigem Datum (Europe/Berlin).
 * `connection()` erzwingt Rendering pro Request — sonst würde Next die Seite
 * beim Build vorrendern und die Aufteilung bis zum nächsten Deploy einfrieren.
 */
export async function getTermine() {
  await connection();
  return splitTermine(termineData as Termin[], berlinToday());
}
