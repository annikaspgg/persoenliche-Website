@AGENTS.md

## Deploy-Workflow

Das Vercel-Projekt liegt in **Annikas Team-Scope**, nicht im lokalen Account. Das `vercel`-CLI scheitert deshalb immer mit „no access" / „project deleted". Stattdessen ist **GitHub → Vercel Auto-Deploy** eingerichtet: jeder Push auf `main` triggert automatisch ein Production-Deploy.

**Regel:** niemals `vercel`, `npx vercel`, `vercel --prod` o.ä. ausführen oder vorschlagen. Auch nicht `.vercel/` löschen oder relinken.

**Workflow nach jeder Änderung:**

1. Code-Änderung
2. `npm run lint && npm run build` (lokal prüfen)
3. `git add` → `git commit` → `git push`
4. Fertig — Vercel deployt automatisch.
