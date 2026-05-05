import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Vergangenes");

export default function VergangenesPage() {
  return <PagePlaceholder title="Vergangenes" />;
}
