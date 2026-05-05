"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Scroll im Hintergrund sperren, solange das mobile Menü offen ist.
  // Reset bei jedem Pathwechsel passiert über onClick auf den Links unten.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link
          href="/"
          onClick={close}
          className="font-display text-2xl tracking-tight text-text transition-colors hover:text-accent md:text-[1.75rem]"
          style={{ fontVariationSettings: "'opsz' 48" }}
        >
          Annika Spegg
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[0.9375rem] transition-colors hover:text-accent",
                      active ? "text-accent" : "text-text",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[68px] z-30 origin-top border-b border-border bg-bg transition-transform duration-200 md:hidden",
          open ? "translate-y-0" : "-translate-y-[120%]",
        )}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <Link
                  href={item.href}
                  onClick={close}
                  className="block px-6 py-5 font-display text-2xl text-text hover:text-accent"
                  style={{ fontVariationSettings: "'opsz' 48" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
