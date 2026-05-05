import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { strikeFaust } from "@/lib/text";

type Props = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: Props) {
  return (
    <li>
      <Link
        href={`/vergangenes/${project.slug}`}
        className="group block transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-bg-muted">
          <Image
            src={project.mainImage.src}
            alt={project.mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mt-5">
          <p className="text-sm text-text-muted">{project.year}</p>
          <h2
            className="mt-1 font-display text-text transition-colors group-hover:text-accent"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
              fontVariationSettings: "'opsz' 60",
              lineHeight: 1.2,
            }}
          >
            {strikeFaust(project.title)}
          </h2>

          {project.role.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.role.map((r) => (
                <li
                  key={r}
                  className="rounded-full bg-bg-muted px-3 py-1 text-xs text-text-muted"
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
