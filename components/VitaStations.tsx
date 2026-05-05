import { feldLabel, feldOrder, type Feld } from "@/lib/images";

type Station = {
  period: string;
  text: string;
};

/**
 * Strukturierter Lebenslauf je Feld — ergänzt den Fließtext aus content/vita.mdx.
 * Quelle: vom Annika gelieferte Liste; chronologisch nach jüngster Aktivität.
 */
const stations: Record<Feld, Station[]> = {
  geige: [
    {
      period: "seit 2025",
      text: "Aushilfe Gewandhaus zu Leipzig und Stuttgarter Kammerorchester",
    },
    {
      period: "seit 2023",
      text: "Akademie und Zeitvertrag im Staatsorchester Stuttgart (Violine 2 tutti)",
    },
    {
      period: "seit 2023",
      text: "Aushilfe Ensemble Resonanz",
    },
    {
      period: "seit 2023",
      text: "Duo Zwischen — Violin- und Konzertkonzeptionsduo mit Robert Rülke",
    },
    {
      period: "2021–2024",
      text: "MA-Studium an der HMDK Stuttgart bei Prof. Nurit Stark und Prof. Christine Busch",
    },
    {
      period: "2016–2021",
      text: "BA-Studium an der MH Freiburg bei Prof. Sebastian Hamann und Prof. Muriel Cantoreggi",
    },
  ],
  dramaturgie: [
    {
      period: "2026",
      text: "Sonst gute Nacht (Frankfurt LAB, Akademie Musiktheater heute)",
    },
    { period: "2025", text: "Rat der Generationen (TdjW Leipzig)" },
    { period: "2025", text: "Venus and Adonis (HMT und Bachfest Leipzig)" },
    { period: "2024", text: "KommentarTheater (Haus am Dom, Frankfurt a. M.)" },
    { period: "2022", text: "Pionier:in Ingolstadt (HfMDK Frankfurt)" },
    { period: "2024–2026", text: "MA-Studium Dramaturgie an der HMT Leipzig" },
    {
      period: "2016–2020",
      text: "BA-Studium Germanistik und Philosophie an der Albert-Ludwigs-Universität Freiburg",
    },
  ],
  performance: [
    { period: "2022–2025", text: "Klimabühne" },
    {
      period: "2023",
      text: "In solchen Bildern ist des Menschen Tag beschrieben — Solo-Durational Performance in vier Sätzen",
    },
    {
      period: "2022",
      text: "Die Sprache der Auberginen // Einzelwesenfantasien // Camilles Geschichten",
    },
    {
      period: "2021–2024",
      text: "Arbeit mit u. a. Jessie Marino, Britta Wirthmüller, Christian Grüny, Marita Tatari",
    },
  ],
};

export function VitaStations() {
  return (
    <section
      aria-label="Stationen — Geige, Dramaturgie, Performance"
      className="border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <h2
          className="font-display text-text"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontVariationSettings: "'opsz' 80",
            lineHeight: 1.1,
          }}
        >
          Stationen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3 lg:gap-x-12">
          {feldOrder.map((feld) => (
            <article key={feld}>
              <h3
                className="font-display text-text"
                style={{
                  fontSize: "1.625rem",
                  fontVariationSettings: "'opsz' 60",
                  lineHeight: 1.1,
                }}
              >
                {feldLabel[feld]}
              </h3>

              <ul className="mt-6 space-y-5">
                {stations[feld].map((s, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-sm text-text-muted">{s.period}</span>
                    <span className="text-[1rem] leading-[1.5] text-text">
                      {s.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
