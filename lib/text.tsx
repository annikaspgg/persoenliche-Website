import { Fragment, type ReactNode } from "react";

/**
 * Splittet einen String an "Faust" und wickelt jedes Vorkommen in
 * <s>…</s>, damit der Begriff visuell durchgestrichen erscheint.
 * Wird für Titel mit "Faust.Margarete // GRETCHEN WANTS A FULL STORY"
 * eingesetzt — Margarete bleibt im Fokus.
 */
export function strikeFaust(text: string): ReactNode {
  const parts = text.split(/(Faust)/g);
  return parts.map((part, i) =>
    part === "Faust" ? (
      <s key={i} className="decoration-1">
        Faust
      </s>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
