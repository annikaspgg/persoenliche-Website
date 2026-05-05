import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Datenschutz");

export default function DatenschutzPage() {
  return <PagePlaceholder title="Datenschutz" />;
}
