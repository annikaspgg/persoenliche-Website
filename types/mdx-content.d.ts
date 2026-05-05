declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    title: string;
    image: string;
    imageAlt: string;
    role?: string;
    description: string;
    link?: { href: string; label: string };
    dates: Array<{
      date: string;
      venue: string;
      city?: string;
    }>;
  };

  const Component: ComponentType;
  export default Component;
}
