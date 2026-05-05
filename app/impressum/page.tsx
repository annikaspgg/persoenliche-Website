import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Impressum",
  "Impressum von annikaspegg.de — Anbieterkennzeichnung gemäß §5 TMG sowie Hinweise zu Haftung und Urheberrecht.",
  { path: "/impressum" },
);

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-[680px] px-6 py-24 md:py-32">
      <h1
        className="mb-12 font-display text-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontVariationSettings: "'opsz' 96",
          lineHeight: 1.05,
        }}
      >
        Impressum
      </h1>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Angaben gemäß §5 TMG
        </h2>
        <p className="mb-2 text-[1.0625rem] leading-[1.6] text-text">
          Annika Spegg<br />
          Mockauer Str. 77<br />
          04357 Leipzig
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Kontakt
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          E-Mail:{" "}
          <a
            href="mailto:annika.spegg@posteo.de"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            annika.spegg@posteo.de
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Annika Spegg<br />
          Mockauer Str. 77<br />
          04357 Leipzig
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Haftung für Inhalte
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          kann jedoch keine Gewähr übernommen werden. Als Diensteanbieterin
          bin ich gemäß §7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 TMG
          bin ich als Diensteanbieterin jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Haftung für Links
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Diese Website enthält Links zu externen Websites Dritter, auf
          deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Urheberrecht
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht.
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
          schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite
          nicht von der Betreiberin erstellt wurden, werden die
          Urheberrechte Dritter beachtet — siehe{" "}
          <a
            href="/bildnachweise"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            Bildnachweise
          </a>
          .
        </p>
      </section>
    </article>
  );
}
