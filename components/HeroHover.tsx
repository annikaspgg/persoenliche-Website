"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  feldLabel,
  feldOrder,
  heroImages,
  homeImages,
  type Feld,
} from "@/lib/images";
import { cn } from "@/lib/utils";

// Weicher schwarzer Glow + heller Text, sobald über einem der drei Wörter gehovert/fokussiert wird.
// rgba aus --text (#1A1815) — passt zur warmen Markenpalette besser als reines Schwarz.
const GLOW_SHADOW =
  "0 0 14px rgba(26, 24, 21, 0.9), 0 0 28px rgba(26, 24, 21, 0.55)";
const GLOW_TRANSITION =
  "text-shadow 800ms ease-in-out, color 200ms ease-in-out";

export function HeroHover() {
  const [active, setActive] = useState<Feld | null>(null);
  const isHovering = active !== null;

  return (
    <section className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-bg">
      {/* Crossfade-Bilder — nur Desktop sichtbar (Hover existiert dort) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        {feldOrder.map((feld) => {
          const img = heroImages[feld];
          const isActive = active === feld;
          return (
            <div
              key={feld}
              className={cn(
                "absolute inset-0 transition-opacity duration-[800ms] ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover"
                style={img.position ? { objectPosition: img.position } : undefined}
              />
              {/* Dunkler Tint hinter dem Bild, damit der weiße Hover-Text klar liest */}
              <div className="absolute inset-0 bg-text/35" />
            </div>
          );
        })}
      </div>

      {/* Inhalt */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="flex flex-col gap-8">
          <h1
            className={cn(
              "font-display leading-[0.95] tracking-tight",
              isHovering ? "text-bg" : "text-text",
            )}
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontVariationSettings: "'opsz' 120",
              textShadow: isHovering ? GLOW_SHADOW : undefined,
              transition: GLOW_TRANSITION,
            }}
          >
            Annika Spegg
          </h1>

          {/* Interaktive Wörter — nur Desktop */}
          <div
            className={cn(
              "hidden font-display md:block",
              isHovering ? "text-bg" : "text-text",
            )}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontVariationSettings: "'opsz' 72",
              textShadow: isHovering ? GLOW_SHADOW : undefined,
              transition: GLOW_TRANSITION,
            }}
          >
            {feldOrder.map((feld, i) => (
              <span key={feld}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(feld)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(feld)}
                  onBlur={() => setActive(null)}
                  aria-pressed={active === feld}
                  aria-label={`Bild zum Bereich ${feldLabel[feld]} einblenden`}
                  className={cn(
                    "cursor-pointer",
                    active === feld &&
                      "underline decoration-1 underline-offset-[0.2em]",
                  )}
                >
                  {feldLabel[feld]}
                </button>
                {i < feldOrder.length - 1 && (
                  <span aria-hidden className="mx-3">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Sub-Zeile (immer sichtbar) */}
          <p
            className={cn(
              "max-w-2xl",
              isHovering ? "text-bg" : "text-text-muted",
            )}
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              lineHeight: 1.5,
              textShadow: isHovering ? GLOW_SHADOW : undefined,
              transition: GLOW_TRANSITION,
            }}
          >
            Musikerin und interdisziplinäre Künstlerin auf der Suche nach neuen
            Formaten.
          </p>
        </div>

        {/* Mobile: drei Karten statt Hover */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {feldOrder.map((feld) => {
            const img = homeImages[feld];
            return (
              <Link
                key={feld}
                href={`#feld-${feld}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[8px] bg-bg-muted"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={img.position ? { objectPosition: img.position } : undefined}
                />
                <div className="absolute inset-0 bg-bg/30" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span
                    className="font-display text-3xl text-bg"
                    style={{
                      fontVariationSettings: "'opsz' 72",
                      textShadow: GLOW_SHADOW,
                    }}
                  >
                    {feldLabel[feld]}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
