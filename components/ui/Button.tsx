import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

type ButtonOwnProps<E extends ElementType> = {
  as?: E;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-3 text-[0.9375rem] leading-none font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover",
  ghost:
    "border border-accent text-accent hover:bg-accent hover:text-bg",
};

export function Button<E extends ElementType = "button">({
  as,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps<E>) {
  const Component = (as ?? "button") as ElementType;
  return (
    <Component className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
