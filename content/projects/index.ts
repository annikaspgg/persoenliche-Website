import type { ComponentType } from "react";
import { compareProjects, type ProjectMeta } from "@/lib/projects";

import RatBody, { meta as ratMeta } from "./rat-der-generationen.mdx";
import VenusBody, { meta as venusMeta } from "./venus-and-adonis.mdx";
import JubilaeumBody, { meta as jubilaeumMeta } from "./jubilaeumskonzert-freiburg.mdx";
import DuoBody, { meta as duoMeta } from "./duo-zwischen-hugo-wettbewerb.mdx";
import KommentarBody, { meta as kommentarMeta } from "./kommentar-theater.mdx";
import InSolchenBildernBody, { meta as inSolchenBildernMeta } from "./in-solchen-bildern-des-menschen-tag.mdx";
import KlimabuehneTransparenteBody, { meta as klimabuehneTransparenteMeta } from "./klimabuehne-transparente-welten.mdx";
import KlimabuehnePreisBody, { meta as klimabuehnePreisMeta } from "./klimabuehne-preis-ist-heiss.mdx";
import DreiLeseBody, { meta as dreiLeseMeta } from "./drei-leseperformances.mdx";

// Ohne echte Thumbnails — vorerst nicht in der Liste:
// - wanderer-es-gibt-keinen-weg
// - primadonna-2-0
// - junge-oper-baden-wuerttemberg
// MDX-Dateien bleiben liegen, sobald Thumbnails da sind, hier wieder importieren + entries-Eintrag ergänzen.

export type ProjectEntry = {
  meta: ProjectMeta;
  Body: ComponentType;
};

const entries: ProjectEntry[] = [
  { meta: ratMeta as ProjectMeta, Body: RatBody },
  { meta: venusMeta as ProjectMeta, Body: VenusBody },
  { meta: jubilaeumMeta as ProjectMeta, Body: JubilaeumBody },
  { meta: duoMeta as ProjectMeta, Body: DuoBody },
  { meta: kommentarMeta as ProjectMeta, Body: KommentarBody },
  { meta: inSolchenBildernMeta as ProjectMeta, Body: InSolchenBildernBody },
  { meta: klimabuehneTransparenteMeta as ProjectMeta, Body: KlimabuehneTransparenteBody },
  { meta: klimabuehnePreisMeta as ProjectMeta, Body: KlimabuehnePreisBody },
  { meta: dreiLeseMeta as ProjectMeta, Body: DreiLeseBody },
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
