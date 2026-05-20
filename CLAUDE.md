# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Interactive sales deck for Mall of America — a single-page, scroll-driven presentation targeting prospective tenants, sponsors, and event partners. Statically exported (no server), deployed to Vercel.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build, outputs static HTML to `out/`
- `npm run lint` — ESLint (flat config, Next.js core-web-vitals + TypeScript rules)
- `npx serve out` — serve the production build locally

No test framework is configured.

## Architecture

**Single-page app**: One route (`src/app/page.tsx`) renders all 8 sections sequentially. Each section is a self-contained component in `src/components/sections/`. Navigation uses `scrollIntoView` with IntersectionObserver to track active section.

**Static export**: `next.config.ts` sets `output: "export"` with unoptimized images. There is no server-side rendering, no API routes, no dynamic routes.

**All components are client components** (`"use client"`). The only server component is `src/app/layout.tsx` which sets up fonts and metadata.

**Design system**: Dark luxury palette defined as CSS custom properties in `src/app/globals.css`, mapped to Tailwind via `@theme inline` (Tailwind v4 syntax). Two font families: Inter (body, `--font-body`) and Playfair Display (headings, `--font-heading`). Gold accent color: `#c8a96e`.

**Animation**: Framer Motion for scroll-triggered reveals (`whileInView`), staggered entrances, and hover effects. The `ScrollReveal` wrapper component handles directional reveal animations. `AnimatedCounter` counts up numbers when scrolled into view.

**Expandable modules**: `src/components/modules/` contains modal overlays (EventsModule, LeasingModule) that open from section CTAs. These are full-screen modals with tabbed content, not separate routes.

**Data**: All content (stats, venue specs, leasing paths, attractions, etc.) lives in `src/lib/constants.ts` with types in `src/types/index.ts`. Section definitions in `SECTIONS` array drive navigation dot indicators and the top navbar.

## Key Patterns

- Path alias: `@/*` maps to `./src/*`
- Utility: `cn()` from `src/lib/utils.ts` (wraps `clsx`)
- Glass card effect: `.glass` CSS class for glassmorphism, also available as `GlassCard` component
- CSS gradient text: `.gradient-gold` class for gold gradient text fill
- Section IDs must match `SECTIONS` array in constants for navigation tracking to work
