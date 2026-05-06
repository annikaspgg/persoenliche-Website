"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const INTERVAL_MS = 5000;

export function AktuellesSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  function advance() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <button
      type="button"
      onClick={advance}
      aria-label={`Bild ${index + 1} von ${slides.length} — klicken für nächstes Bild`}
      className="group relative block aspect-[2/3] w-full overflow-hidden rounded-[8px] bg-bg-muted"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-bg" : "bg-bg/40"
            }`}
            style={{ boxShadow: "0 0 4px rgba(0,0,0,0.4)" }}
          />
        ))}
      </div>
    </button>
  );
}
