import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { allProjectSlugs, getProjectBySlug } from "@/content/projects";
import { ProjectMedia } from "@/components/ProjectMedia";
import { pageMetadata } from "@/lib/metadata";
import { strikeFaust } from "@/lib/text";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return pageMetadata("Projekt nicht gefunden");
  return pageMetadata(
    project.meta.title,
    `${project.meta.year} · ${project.meta.role.join(", ")} · Annika Spegg.`,
    { path: `/vergangenes/${slug}` },
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { meta, Body } = project;

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <Link
        href="/vergangenes"
        className="inline-flex items-center gap-2 text-[0.9375rem] text-text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden />
        Zurück zur Übersicht
      </Link>

      <ProjectMedia
        mainImage={meta.mainImage}
        gallery={meta.gallery ?? []}
      >
        <header className="mt-12">
          <p className="text-sm text-text-muted">{meta.year}</p>
          <h1
            className="mt-2 font-display text-text"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontVariationSettings: "'opsz' 96",
              lineHeight: 1.05,
            }}
          >
            {strikeFaust(meta.title)}
          </h1>

          {meta.role.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {meta.role.map((r) => (
                <li
                  key={r}
                  className="rounded-full bg-bg-muted px-3 py-1 text-xs text-text-muted"
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="mt-12 max-w-[680px]">
          <Body />
        </div>
      </ProjectMedia>

      {meta.links && meta.links.length > 0 && (
        <section
          aria-labelledby="project-links-heading"
          className="mt-16 border-t border-border pt-12"
        >
          <h2
            id="project-links-heading"
            className="font-display text-text"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              fontVariationSettings: "'opsz' 60",
              lineHeight: 1.2,
            }}
          >
            Links
          </h2>
          <ul className="mt-6 space-y-3">
            {meta.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
                >
                  {link.label}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-20 border-t border-border pt-10">
        <Link
          href="/vergangenes"
          className="inline-flex items-center gap-2 text-[0.9375rem] text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden />
          Zurück zur Übersicht
        </Link>
      </div>
    </article>
  );
}
