import type { ComponentType } from "react";
import { compareProjects, type ProjectMeta } from "@/lib/projects";

import GretchenBody, { meta as gretchenMeta } from "./gretchen-wants-a-full-story.mdx";
import RatBody, { meta as ratMeta } from "./rat-der-generationen.mdx";
import VenusBody, { meta as venusMeta } from "./venus-and-adonis.mdx";
import DuoBody, { meta as duoMeta } from "./duo-zwischen-hugo-wettbewerb.mdx";
import KommentarBody, { meta as kommentarMeta } from "./kommentar-theater.mdx";

export type ProjectEntry = {
  meta: ProjectMeta;
  Body: ComponentType;
};

const entries: ProjectEntry[] = [
  { meta: gretchenMeta as ProjectMeta, Body: GretchenBody },
  { meta: ratMeta as ProjectMeta, Body: RatBody },
  { meta: venusMeta as ProjectMeta, Body: VenusBody },
  { meta: duoMeta as ProjectMeta, Body: DuoBody },
  { meta: kommentarMeta as ProjectMeta, Body: KommentarBody },
];

export const projects: ProjectEntry[] = [...entries].sort((a, b) =>
  compareProjects(a.meta, b.meta),
);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.meta.slug === slug);
}

export function allProjectSlugs(): string[] {
  return projects.map((p) => p.meta.slug);
}
