import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Plugin-Namen als Strings — Turbopack erwartet serialisierbare Optionen
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/webp"],
  },
};

export default withMDX(nextConfig);
