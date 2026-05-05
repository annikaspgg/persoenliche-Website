import type { MetadataRoute } from "next";
import { allProjectSlugs } from "@/content/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/vita",
    "/coming-up",
    "/vergangenes",
    "/downloads",
    "/impressum",
    "/datenschutz",
    "/bildnachweise",
  ];

  const projectPaths = allProjectSlugs().map((slug) => `/vergangenes/${slug}`);

  return [...staticPaths, ...projectPaths].map((path) => {
    const isHome = path === "";
    return {
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1.0 : path.startsWith("/vergangenes") ? 0.7 : 0.6,
    };
  });
}
