import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Impressum");

export default function ImpressumPage() {
  return <PagePlaceholder title="Impressum" />;
}
