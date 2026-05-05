import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Downloads & Links");

export default function DownloadsPage() {
  return <PagePlaceholder title="Downloads & Links" />;
}
