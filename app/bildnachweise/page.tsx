import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Bildnachweise");

export default function BildnachweisePage() {
  return <PagePlaceholder title="Bildnachweise" />;
}
