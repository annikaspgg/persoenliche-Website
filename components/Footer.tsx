import Link from "next/link";
import { contact } from "@/lib/navigation";

const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/bildnachweise", label: "Bildnachweise" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="text-[0.9375rem] text-text transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-text-muted">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={contact.duoZwischen}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Duo Zwischen
              </a>
            </div>
          </div>

          <nav aria-label="Rechtliches">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-text-muted">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-[0.75rem] text-text-muted">
          <p>© {new Date().getFullYear()} Annika Spegg</p>
          <p>Made with ♡ in Leipzig</p>
        </div>
      </div>
    </footer>
  );
}
