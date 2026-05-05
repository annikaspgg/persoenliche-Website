import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkProps = ComponentPropsWithoutRef<typeof NextLink> & {
  external?: boolean;
  children: ReactNode;
};

const styles =
  "text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent-hover";

export function Link({
  external,
  className,
  children,
  href,
  ...rest
}: LinkProps) {
  if (external) {
    return (
      <a
        href={typeof href === "string" ? href : href.toString()}
        className={cn(styles, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(styles, className)} {...rest}>
      {children}
    </NextLink>
  );
}
