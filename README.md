# Annika Spegg — Website V1

Persönliche Website von Annika Spegg (Geige · Dramaturgie · Performance).
Spec, Inhalte und Design-Tokens stehen in [`SPEC.md`](./SPEC.md).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- MDX für Inhalte
- Fonts: Fraunces + Inter via `next/font/google`

## Setup

```bash
pnpm install
pnpm dev
```

Dev-Server läuft auf [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — Dev-Server (Turbopack, default ab Next 16)
- `pnpm build` — Produktions-Build
- `pnpm start` — Produktions-Server
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript ohne Emit

## Struktur

Siehe [`SPEC.md` §8.1](./SPEC.md). Kurz:

- `app/` — Routen (App Router)
- `components/` — UI-Komponenten (`ui/` für Primitives)
- `content/` — MDX-Texte + JSON für Termine
- `lib/` — Helpers (Metadata, Navigation, Utils)
- `public/images/` — Bildmaterial

## Iterationen

Die Website wird in 6 Iterationen gebaut. Iteration 1: Setup & Foundation
(diese). Folgende Iterationen entwickeln Startseite, Vita, Coming Up,
Vergangenes, Downloads und das rechtliche Beiwerk.
