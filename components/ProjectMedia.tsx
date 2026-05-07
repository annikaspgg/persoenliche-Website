"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/lib/projects";

type Props = {
  mainImage: ProjectImage;
  gallery: ProjectImage[];
  /** Wird zwischen Hero und Galerie gerendert (Header + MDX-Body). */
  children?: ReactNode;
};

export function ProjectMedia({ mainImage, gallery, children }: Props) {
  // Hauptbild + Galerie sind eine zusammenhängende Slideshow im Lightbox-Modus.
  const all = useMemo(() => [mainImage, ...gallery], [mainImage, gallery]);
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + all.length) % all.length));
  }, [all.length]);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % all.length));
  }, [all.length]);

  // Tastatur-Navigation + Scroll-Lock, solange die Lightbox offen ist.
  useEffect(() => {
    if (!isOpen) return;
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", handle);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handle);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, prev, next]);

  const gridCols =
    gallery.length === 1
      ? "grid-cols-1"
      : gallery.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* Hero / Hauptbild — klickbar, öffnet Lightbox bei Index 0 */}
      <button
        type="button"
        onClick={() => setActive(0)}
        aria-label={`Bild vergrößern: ${mainImage.alt}`}
        className="group relative mt-10 block aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:aspect-[16/9]"
      >
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={
            mainImage.position
              ? { objectPosition: mainImage.position }
              : undefined
          }
        />
      </button>

      {children}

      {gallery.length > 0 && (
        <section
          aria-label="Galerie"
          className="mt-16 border-t border-border pt-12"
        >
          <ul className={`grid gap-4 ${gridCols}`}>
            {gallery.map((img, i) => (
              <li key={img.src}>
                <button
                  type="button"
                  onClick={() => setActive(i + 1)}
                  aria-label={`Bild vergrößern: ${img.alt}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bild vergrößert"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-text/85 p-4 backdrop-blur-sm md:p-12"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Schließen"
            className="absolute right-4 top-4 z-10 rounded-full bg-bg/90 p-2 text-text shadow-md transition-colors hover:bg-bg"
          >
            <X size={20} aria-hidden />
          </button>

          {all.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Vorheriges Bild"
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-bg/90 p-2 text-text shadow-md transition-colors hover:bg-bg"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Nächstes Bild"
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-bg/90 p-2 text-text shadow-md transition-colors hover:bg-bg"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </>
          )}

          <div
            className="relative h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={all[active].src}
              alt={all[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {all.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-bg/90 px-3 py-1 text-xs text-text-muted">
              {active + 1} / {all.length}
            </p>
          )}
        </div>
      )}
    </>
  );
}
