import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <h1
        className="font-display text-6xl text-text md:text-7xl lg:text-8xl"
        style={{ fontVariationSettings: "'opsz' 120" }}
      >
        Startseite
      </h1>

      {/* Smoke-Test der Designtokens — wird in Iteration 2 ersetzt */}
      <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-8">
        <Button>Primary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Link href="/vita">Beispiel-Link</Link>
      </div>
    </section>
  );
}
