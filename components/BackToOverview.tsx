"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Zurück-zur-Übersicht-Link, der per router.back() die Browser-History
 * auspoppt — dadurch wird die Scroll-Position der vorherigen Seite vom
 * Browser wieder hergestellt (anders als ein normaler Link, der oben
 * landet). Fallback: push("/vergangenes"), wenn keine History da ist
 * (z. B. wenn die Detailseite direkt via URL geöffnet wurde).
 */
export function BackToOverview({ children, className }: Props) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Modifier-Tasten / Mittelklick → Browser sein lassen (neuer Tab usw.)
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/vergangenes");
    }
  }

  return (
    <Link href="/vergangenes" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
