# portfolio-prxdev

Antonino Junior's personal portfolio, built with React + Vite + TypeScript.
Live at **https://antonino3g.github.io/portfolio-prxdev/**.

## Use it as a base

This is a small, plain repo — no build magic, no hidden config. If you like the
look of it, feel free to fork or copy it and turn it into your own portfolio.
No permission needed, just check the [Making it yours](#making-it-yours) and
[Content and license](#content-and-license) sections below before you publish.

If this saved you some time, a star is always appreciated.

## Tech stack

- **React 19** + **React DOM 19**
- **Vite 6** as the build tool and dev server
- **TypeScript 5.7+**, compiled with `tsc -b` before every build
- **@vitejs/plugin-react** for Fast Refresh
- Plain CSS (`src/styles/global.css`) — no CSS framework, no component library
- A small hand-rolled i18n layer (React Context), no external i18n package

That's the whole dependency list — check `package.json` if you want the exact
versions.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) and build for production into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
public/
  Antonino Junior - CV BR.pdf      # résumé, pt-BR
  Antonino Junior - RESUME.pdf     # résumé, en/es
  assets/                          # images, videos and favicons served as-is
src/
  App.tsx                          # composes all the sections
  main.tsx                         # app bootstrap, imports the global CSS
  components/                      # Header, Hero, Work, ProjectCard, etc.
  hooks/                           # useAutoplayVideo, useRailProgress, useReducedMotion
  i18n/                            # language context + pt/en/es dictionaries
  lib/asset.ts                     # resolves asset URLs against the Vite base path
  styles/global.css                # all of the site's CSS, in one file
```

## Making it yours

1. **Swap the content** — edit the dictionaries in `src/i18n/` (`pt.ts`, `en.ts`,
   `es.ts`) to replace the text with your own, in whichever languages you need.
2. **Swap the media** — replace the files in `public/assets/` (images, videos,
   favicons) and the résumé PDFs in `public/` with your own.
3. **Update the Vite `base`** — this is the step people forget, and it's the
   one that actually breaks the deploy. Open `vite.config.ts` and change `base`
   to match your own repository name:

   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   });
   ```

   If this doesn't match your GitHub Pages project path, the site will build
   fine locally and then load a blank page in production.

## i18n and deployment

Language switching (pt/en/es) is handled by a small React Context in
`src/i18n/`, not by a library — the dictionary set is small enough that a
dependency wasn't worth it. The selected language is persisted to
`localStorage`.

Deployment is automated: `.github/workflows/deploy.yml` builds the project on
every push to `main` and publishes `dist/` straight to GitHub Pages, using the
official `upload-pages-artifact` / `deploy-pages` actions — no `gh-pages`
branch and no build output committed to the repo.

If you fork this, remember to set **Settings → Pages → Source** to
**GitHub Actions** in your own repository. Without it the workflow runs but
nothing gets published.

## Content and license

There's no license file in this repo, so treat the **code** as free to use,
copy and adapt for your own portfolio.

The **personal content is not** — the text, photos, the résumé PDFs and the
project videos under `public/` and in the i18n dictionaries belong to
Antonino Junior. If you reuse this repo, please swap all of that out for your
own content instead of republishing his.
