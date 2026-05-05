import Image from "next/image";
import Link from "next/link";
import {
  feldLabel,
  feldOrder,
  homeImages,
  type Feld,
} from "@/lib/images";

/**
 * Texte 1:1 aus SPEC.md §5.1 — Änderungen nur nach Rücksprache mit Annika.
 */
const feldText: Record<Feld, string> = {
  geige:
    "Als Geigerin lege ich einen Schwerpunkt auf alte und neue Musik und spiele mit Ensembles wie der Stiftskantorei Stuttgart, il cappriccio, dem Hathor Ensemble (Alte Musik) oder Ensemble Resonanz und dem Zentaur Quartett (Neue Musik). Ebenso bin ich in der Orchesterwelt zuhause; im Staatsorchester Stuttgart habe ich von 2022–2025 gearbeitet, regelmäßig führen mich Aushilfen ans Stuttgarter Kammerorchester oder das Gewandhaus zu Leipzig.",
  dramaturgie:
    "Als Dramaturgin arbeite ich gerne mit klassischen Stoffen und Überschreibungen. Besonders interessiere ich mich für Gegenwartsdramatik und Musiktheater. Meine Projekte umfassen Opernarbeiten verschiedener Epochen (Venus and Adonis, Leipzig 2025; Der Wald — Klischee total, Berlin 2023; Don Giovanni, Baden-Württemberg 2021) ebenso wie demokratiefördernde Formate (Rat der Generationen, Leipzig 2025).",
  performance:
    "Als Performerin trete ich in eigenen und fremden (Musik-)Theaterstücken und Performances auf. Häufig reflektiere ich dabei meine Wurzeln aus der klassischen Musik — etwa in meiner Durational Solo Performance In solchen Bildern ist des Menschen Tag vollendet (Stuttgart 2023).",
};

type Props = {
  /**
   * Blendet pro Karte den "Mehr in der Vita"-Link ein. Default: true.
   * Auf der Vita-Seite selbst wird der Link ausgeblendet (würde sonst auf sich selbst zeigen).
   */
  showVitaLink?: boolean;
};

export function HomeFelder({ showVitaLink = true }: Props = {}) {
  return (
    <section
      aria-label="Geige, Dramaturgie, Performance"
      className="border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-12">
          {feldOrder.map((feld) => {
            const img = homeImages[feld];
            return (
              <article
                key={feld}
                id={`feld-${feld}`}
                className="flex scroll-mt-24 flex-col gap-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={img.position ? { objectPosition: img.position } : undefined}
                  />
                </div>

                <h3
                  className="font-display text-text"
                  style={{
                    fontSize: "2rem",
                    fontVariationSettings: "'opsz' 72",
                    lineHeight: 1.1,
                  }}
                >
                  {feldLabel[feld]}
                </h3>

                <p className="text-[1.0625rem] leading-[1.6] text-text-muted">
                  {feldText[feld]}
                </p>

                {showVitaLink && (
                  <Link
                    href="/vita"
                    className="text-[0.9375rem] text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
                  >
                    Mehr in der Vita
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
