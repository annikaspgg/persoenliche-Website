"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string };

const INTERVAL_MS = 5000;

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function VitaSlideshow({ slides }: { slides: Slide[] }) {
  // Shuffle nur clientseitig (vermeidet SSR/Hydration-Mismatch + ist pro Aufruf zufällig)
  const [ordered, setOrdered] = useState<Slide[]>(slides);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Shuffle absichtlich erst nach Mount: vermeidet SSR/Client-Hydration-Mismatch,
    // weil Math.random auf Server und Client unterschiedliche Reihenfolgen produziert.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrdered(shuffle(slides));
  }, [slides]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handle = () => setIsMobile(mq.matches);
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ordered.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [ordered.length, paused]);

  // Größen je Breakpoint
  const ACTIVE_W = isMobile ? 220 : 360;
  const SIDE_W = isMobile ? 56 : 100;
  const GAP = 12;
  // Container-Höhe = aktive Bildhöhe (4:5 portrait) + bisschen Luft
  const HEIGHT = useMemo(() => Math.round((ACTIVE_W * 5) / 4 + 20), [ACTIVE_W]);
  const n = ordered.length;

  return (
    <section
      aria-roledescription="Galerie"
      aria-label="Bildergalerie aus Annikas künstlerischer Arbeit"
      className="relative w-full overflow-hidden select-none"
      style={{ height: HEIGHT }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {ordered.map((s, i) => {
        // Kürzeste Distanz im Kreis (signed)
        let d = i - index;
        if (d > n / 2) d -= n;
        else if (d < -n / 2) d += n;
        const absDist = Math.abs(d);
        const isActive = d === 0;
        const w = isActive ? ACTIVE_W : SIDE_W;
        const sign = Math.sign(d);
        const x = isActive
          ? 0
          : sign *
            (ACTIVE_W / 2 + GAP + SIDE_W / 2 + (absDist - 1) * (SIDE_W + GAP));
        const opacity = isActive
          ? 1
          : Math.max(0.2, 1 - (absDist - 0.5) * 0.16);
        const zIndex = isActive ? 30 : 30 - absDist;

        return (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={
              isActive
                ? `Bild ${i + 1} von ${n} (aktuell): ${s.alt}`
                : `Zu Bild ${i + 1} von ${n} springen: ${s.alt}`
            }
            className="absolute top-1/2 transition-all duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            style={{
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
              width: w,
              opacity,
              zIndex,
            }}
          >
            <div
              className="relative overflow-hidden rounded-[8px] bg-bg-muted shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes={isActive ? `${ACTIVE_W}px` : `${SIDE_W}px`}
                className="object-cover"
              />
            </div>
          </button>
        );
      })}

      {/* Punkt-Indikator unten */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
        {ordered.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-text" : "bg-text/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
