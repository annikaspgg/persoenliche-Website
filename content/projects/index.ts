import type { ComponentType } from "react";
import { compareProjects, type ProjectMeta } from "@/lib/projects";

import RatBody, { meta as ratMeta } from "./rat-der-generationen.mdx";
import VenusBody, { meta as venusMeta } from "./venus-and-adonis.mdx";
import JubilaeumBody, { meta as jubilaeumMeta } from "./jubilaeumskonzert-freiburg.mdx";
import DuoBody, { meta as duoMeta } from "./duo-zwischen-hugo-wettbewerb.mdx";
import WandererBody, { meta as wandererMeta } from "./wanderer-es-gibt-keinen-weg.mdx";
import KommentarBody, { meta as kommentarMeta } from "./kommentar-theater.mdx";
import InSolchenBildernBody, { meta as inSolchenBildernMeta } from "./in-solchen-bildern-des-menschen-tag.mdx";
import KlimabuehneTransparenteBody, { meta as klimabuehneTransparenteMeta } from "./klimabuehne-transparente-welten.mdx";
import KlimabuehnePreisBody, { meta as klimabuehnePreisMeta } from "./klimabuehne-preis-ist-heiss.mdx";
import DreiLeseBody, { meta as dreiLeseMeta } from "./drei-leseperformances.mdx";
import PrimadonnaBody, { meta as primadonnaMeta } from "./primadonna-2-0.mdx";
import JungeOperBody, { meta as jungeOperMeta } from "./junge-oper-baden-wuerttemberg.mdx";

export type ProjectEntry = {
  meta: ProjectMeta;
  Body: ComponentType;
};

const entries: ProjectEntry[] = [
  { meta: ratMeta as ProjectMeta, Body: RatBody },
  { meta: venusMeta as ProjectMeta, Body: VenusBody },
  { meta: jubilaeumMeta as ProjectMeta, Body: JubilaeumBody },
  { meta: duoMeta as ProjectMeta, Body: DuoBody },
  { meta: wandererMeta as ProjectMeta, Body: WandererBody },
  { meta: kommentarMeta as ProjectMeta, Body: KommentarBody },
  { meta: inSolchenBildernMeta as ProjectMeta, Body: InSolchenBildernBody },
  { meta: klimabuehneTransparenteMeta as ProjectMeta, Body: KlimabuehneTransparenteBody },
  { meta: klimabuehnePreisMeta as ProjectMeta, Body: KlimabuehnePreisBody },
  { meta: dreiLeseMeta as ProjectMeta, Body: DreiLeseBody },
  { meta: primadonnaMeta as ProjectMeta, Body: PrimadonnaBody },
  { meta: jungeOperMeta as ProjectMeta, Body: JungeOperBody },
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
