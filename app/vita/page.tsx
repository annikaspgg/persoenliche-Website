import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Vita");

export default function VitaPage() {
  return <PagePlaceholder title="Vita" />;
}
