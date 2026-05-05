declare module "*.mdx" {
  import type { ComponentType } from "react";

  /**
   * Each MDX file may export its own `meta` shape. The typing here is
   * intentionally permissive — concrete types live next to the consumer
   * (e.g. `lib/projects.ts` for project pages) and are asserted at the
   * import site.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const meta: any;

  const Component: ComponentType;
  export default Component;
}
