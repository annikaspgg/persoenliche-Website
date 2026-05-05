import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Datenschutz",
  "Datenschutz auf annikaspegg.de — keine Cookies, kein Tracking, kein Newsletter. Hinweise zu Vercel-Hosting und DSGVO-Rechten.",
  { path: "/datenschutz" },
);

const STAND = "Mai 2026";

export default function DatenschutzPage() {
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
        Datenschutz
      </h1>

      <p className="mb-10 text-[1.0625rem] leading-[1.6] text-text">
        Diese Website verarbeitet personenbezogene Daten auf das absolut
        notwendige Minimum. Es gibt keine Cookies, kein Tracking, keinen
        Newsletter und keine Formulare.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Verantwortliche
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Annika Spegg<br />
          Mockauer Str. 77<br />
          04357 Leipzig
        </p>
        <p className="mt-3 text-[1.0625rem] leading-[1.6] text-text">
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
          Was wir nicht tun
        </h2>
        <ul className="mb-2 list-disc space-y-2 pl-6 text-[1.0625rem] leading-[1.6] text-text">
          <li>Keine Cookies — auch keine technisch notwendigen.</li>
          <li>Kein Tracking, keine Analyse-Tools (Google Analytics o. ä.).</li>
          <li>Kein Newsletter, kein Kontaktformular.</li>
          <li>Keine Social-Media-Plugins, keine eingebetteten Videos.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Server-Logs (Hosting)
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Die Website wird bei der Vercel Inc. (340 S Lemon Ave #4133,
          Walnut, CA 91789, USA) gehostet. Beim Aufruf erhebt der
          Hosting-Provider in Server-Logs technisch notwendige Daten:
          IP-Adresse, Datum und Uhrzeit, aufgerufene URL, Browser,
          Betriebssystem und Referrer-URL. Rechtsgrundlage ist Art. 6 Abs.
          1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der
          Website). Die Logs werden in der Regel innerhalb von 14 Tagen
          gelöscht. Vercel ist nach dem EU-US Data Privacy Framework
          zertifiziert; mehr Infos unter{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Externe Inhalte
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Auf der Seite Downloads & Links verweisen einzelne Links zu
          YouTube und Instagram. Diese werden bewusst nur als Links
          eingebunden, nicht als Embeds — d. h. ohne aktives Anklicken
          werden keine Daten an YouTube oder Meta übertragen. Sobald Sie
          einem Link folgen, gelten die Datenschutzbestimmungen des
          jeweiligen Anbieters.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl text-text" style={{ fontVariationSettings: "'opsz' 60" }}>
          Ihre Rechte
        </h2>
        <p className="text-[1.0625rem] leading-[1.6] text-text">
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
          Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO),
          deren Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
          der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20)
          sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21).
          Wenden Sie sich dafür an die oben genannte E-Mail-Adresse.
          Außerdem steht Ihnen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu (Art. 77 DSGVO).
        </p>
      </section>

      <p className="mt-12 text-sm text-text-muted">Stand: {STAND}</p>
    </article>
  );
}
