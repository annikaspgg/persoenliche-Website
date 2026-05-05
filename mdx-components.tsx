import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes } from "react";

function isExternal(href: string | undefined): boolean {
  return !!href && /^https?:\/\//.test(href);
}

function MdxAnchor({
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      className="text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    ...components,
    p: ({ children }) => (
      <p className="mb-7 text-[1.125rem] leading-[1.6] text-text last:mb-0">
        {children}
      </p>
    ),
    a: MdxAnchor,
    strong: ({ children }) => (
      <strong className="font-medium text-text">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    ul: ({ children }) => (
      <ul className="mb-7 list-disc space-y-2 pl-6 text-[1.125rem] leading-[1.6] text-text">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-7 list-decimal space-y-2 pl-6 text-[1.125rem] leading-[1.6] text-text">
        {children}
      </ol>
    ),
  };
}
