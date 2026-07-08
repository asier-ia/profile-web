# Portfolio

A sleek, modern portfolio template inspired by the [Sawad](https://sawad.framer.website) Framer template, built with **React + Vite + Tailwind CSS v4 + Framer Motion** and deployed via **GitHub Pages**.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** (CSS-first `@theme` config)
- **Framer Motion** (`motion`) for scroll-reveals, marquee, custom cursor
- **Lenis** for smooth scrolling
- **React Router v7** with `HashRouter` (safe for GitHub Pages)
- **react-helmet-async** for per-project meta tags
- **i18next** + **react-i18next** (trilingual: ES / EN / EU)
- **lucide-react** for UI icons (inline SVGs for brand logos: GitHub, Instagram, LinkedIn)

## Project structure

```
src/
├── components/
│   ├── layout/      Navbar, Footer, CustomCursor, LenisProvider, ProfileSidebar, ScrollToTop
│   ├── ui/          AnimatedText, Marquee, ScrollReveal, SectionHeading,
│   │                LanguageSwitcher, BrandIcons
│   └── sections/    Hero, Stats, SkillsMarquee, Projects, Experience, Tools, Contact
├── data/            Static TS data: profile, projects, experience, tools, skills
│                    (all multi-lang: each file exposes `getXxx(lang)` and a `RawXxx` shape)
├── hooks/           useLenis, useLocalizedData (useProfile, useProjects, …)
├── i18n/            i18next init + locales/{es,en,eu}.json
├── lib/             motion.ts (shared variants & easings)
├── pages/           Home, ProjectDetail, NotFound
├── types/           Shared TypeScript types (Lang = 'es' | 'en' | 'eu')
├── App.tsx          Layout + Routes (ProfileSidebar mounted here)
├── main.tsx         Root (imports './i18n' before render)
└── index.css        Tailwind import + @theme tokens (eucalyptus palette)
```

## Getting started

```bash
# 1. Use Node 20+ (nvm recommended)
nvm use --lts

# 2. Install
npm install

# 3. Dev server
npm run dev          # http://localhost:5173

# 4. Production build
npm run build        # outputs to ./dist
npm run preview      # preview the production build

# 5. Lint
npm run lint
```

## Customizing your content

All copy & data lives in `src/data/*.ts` and `src/i18n/locales/*.json`. Both the data and the UI strings are split across **three languages**: `es`, `en`, `eu`.

### Data files (multi-lang)

Each data file has a `RawXxx` shape with non-translatable fields + an `i18n: Record<Lang, …>` map, and exports a `getXxx(lang)` function that returns the localized object.

| File | What |
|---|---|
| `src/data/profile.ts` | Name, short name, role, tagline, intro, email, location, avatar, socials, languages |
| `src/data/projects.ts` | Project cards and detail pages (each entry's `slug` becomes the URL: `/#/project/<slug>`) |
| `src/data/experience.ts` | Career timeline |
| `src/data/tools.ts` | Tools grid (with `icon` field — name of a lucide-react icon) |
| `src/data/skills.ts` | Skills marquee + stats counter |

### UI strings

Edit the JSON files in `src/i18n/locales/`. Add new keys to all three.

### Design tokens

Colors, fonts and radii live in `src/index.css` under `@theme`. The default palette is **eucalyptus** (`#88c9a1`) on a soft dark background.

## Profile sidebar (PC only)

The fixed left sidebar (`src/components/layout/ProfileSidebar.tsx`) is shown on screens ≥ `md` and hidden on mobile. It contains the avatar, name, role, tagline, location, email, language proficiency, social icons and the language switcher. The main content shifts to the right with `md:pl-72` in `App.tsx`.

On mobile, the same social links remain available in the footer and in the slide-down mobile menu.

## Adding a new project

Add an entry to `src/data/projects.ts` (all three languages):

```ts
{
  slug: 'my-new-project',
  year: 2026,
  cover: 'https://…/cover.jpg',
  stack: ['React', 'Vite'],
  featured: true,
  i18n: {
    es: { title: '…', category: '…', role: '…', summary: '…', description: '…' },
    en: { title: '…', category: '…', role: '…', summary: '…', description: '…' },
    eu: { title: '…', category: '…', role: '…', summary: '…', description: '…' },
  },
}
```

The route `/project/my-new-project` is generated automatically.

## Adding a new tool

Add an entry to `src/data/tools.ts` with the matching `icon` (must be a key of the `iconMap` in `src/components/sections/Tools.tsx`, e.g. `Code2`, `Coffee`, `Atom`, `Workflow`, `Database`, `Container`, `Wind`, `Box`, `GitBranch`, `FileCode`, `Zap`). Add a description in all three languages.

## Language switcher

A `LanguageSwitcher` component is mounted in two places: the navbar (always visible) and the sidebar bottom (PC only). It writes the choice to `localStorage` (`lng` key) and updates `<html lang>` and meta tags automatically.

Supported languages: `es`, `en`, `eu`. Detection order: `localStorage` → `navigator`.

## Deploying to GitHub Pages

### One-time setup

1. Create a new **empty** GitHub repo (e.g. `portfolio`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<you>/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

That's it. The workflow at `.github/workflows/deploy.yml` will:

- Install with `npm ci`
- Build with `npm run build`
- Publish the `dist/` folder to Pages

Every push to `main` triggers a deploy. You can watch it under the **Actions** tab.

### Customizing the base path

If your repo is **not** at the root of a user page (i.e. you'll serve it at `https://<user>.github.io/<repo>/`), change `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/portfolio/',  // <-- your repo name
  // ...
})
```

`HashRouter` means deep links work with no extra config: `https://<user>.github.io/portfolio/#/project/my-slug`.

## License

MIT — use freely for your own portfolio.
