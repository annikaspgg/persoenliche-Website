import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Coming Up");

export default function ComingUpPage() {
  return <PagePlaceholder title="Coming Up" />;
}
