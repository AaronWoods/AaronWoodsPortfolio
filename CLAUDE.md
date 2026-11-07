# CLAUDE.md

Personal portfolio site (social links, work history, education). Vue 3 + Vite + TypeScript, hosted on GitHub Pages at `https://aaronwoods.github.io/AaronWoodsPortfolio/`.

## Commands
- `npm install` – uses `.npmrc` (`legacy-peer-deps=true`) because npm 10 crashes resolving vitest's peer tree without it
- `npm run dev` – local dev server
- `npm run build` – type-check + production build (must pass before any PR)
- `npm run preview` – serve the built `dist/` locally
- `npm run type-check` – `vue-tsc --build`
- `npm run lint` – oxlint then ESLint, both with `--fix`
- `npm run format` – Prettier on `src/`
- `npm run test:unit` – Vitest in watch mode; add `-- --run` for a single pass
- Single test file: `npm run test:unit -- --run src/path/to/file.spec.ts`
- Node: `^22.18.0 || >=24.12.0` (see `engines` in `package.json`)

## Stack
Vue 3.5, Vue Router (hash history), Vite, TypeScript, Vitest + Vue Test Utils (jsdom), ESLint + oxlint, Prettier. No state management library; add one only if needed.

## Hosting constraints (GitHub Pages)
- Static only. No server code, no secrets.
- `base` in `vite.config.ts` is `/AaronWoodsPortfolio/`. Use `import.meta.env.BASE_URL` for asset paths, never absolute `/…` URLs.
- Router uses `createWebHashHistory` so deep links work without server rewrites.
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`: lint, test, build, then deploy on push to `main`). Pages source must be set to "GitHub Actions" in repo settings. Never commit `dist/`.

## Architecture
- Entry: `src/main.ts`; routes in `src/router/index.ts`; pages in `src/views/`; reusable pieces in `src/components/`.
- The scaffold's example content (`HelloWorld`, `TheWelcome`, `AboutView`, etc.) is placeholder and will be replaced.
- Personal content lives in typed files under `src/data/` (to be created). Components render data only; never hardcode links, jobs or dates in templates.
- `<script setup lang="ts">` and Composition API only.
- Small, single-purpose components. No new dependencies without a stated reason.
- `@` aliases `src/`.

## Design principles
- Mobile-first, responsive, light/dark via CSS variables in `src/styles/tokens.css` (to be created).
- Accessible by default: semantic HTML, keyboard nav, visible focus, AA contrast, respect `prefers-reduced-motion`.
- Fast: optimized images, lazy-load below the fold, small bundle.
- External links get `rel="noopener noreferrer"`.

## Git workflow
- Never push to `main`; branch (`feat/…`, `fix/…`) and open a PR.
- One commit per PR. Address review by amending + `git push --force-with-lease`, on your own feature branches only. Multiple commits only for very technical changes, each atomic.
- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`).
- Never add `Co-Authored-By` trailers or any other co-authoring/attribution lines to commits.
- PR description: what and why; screenshot for UI changes.
- Lint, type-check, test and build must pass before opening a PR.

## Don't
- Add analytics or third-party scripts without asking.
- Commit private personal info.
- Bump major dependency versions unprompted.
- Edit the owner's notes in the Obsidian vault (`Projects/AaronWoodsPortfolio/`); read-only context.
