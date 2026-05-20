# Mall of America — Interactive Sales Deck

A fully interactive, browser-based sales deck for **Mall of America**, the largest shopping mall in the United States. Built as a cinematic, luxury-grade presentation tool for prospective tenants, sponsors, and event partners.

## Live Demo

> Deploy to Vercel for a live URL: `npx vercel`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Deployment | Vercel (static export) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Serve production build
npx serve out
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main deck page
│   └── globals.css         # Design tokens & global styles
├── components/
│   ├── layout/             # Navigation, section wrappers
│   ├── sections/           # 8 deck sections (Hero → CTA)
│   ├── ui/                 # Reusable UI components
│   └── modules/            # Phase 2 expandable sub-modules
├── hooks/                  # Custom React hooks
├── lib/                    # Constants, utilities
└── types/                  # TypeScript interfaces
```

## Deck Sections

1. **Hero** — Cinematic opening with full-viewport imagery and staggered text animation
2. **Why Mall of America** — Key stats (5.6M sq ft, 520+ stores, 32M visitors), location advantages, demographics
3. **Retail** — Category breakdown, tenant logos, growth trajectory
4. **Luxury** — Premium positioning, connected hotels, elevated aesthetic
5. **Dining & Lifestyle** — 50+ dining concepts, category showcase
6. **Attractions & Entertainment** — Nickelodeon Universe, SEA LIFE, FlyOver America, and more
7. **Events & Platform** — 400+ annual events, venue specs, expandable venue details
8. **CTA** — Three business action paths: Lease, Partner, Host

## Phase 2: Expandable Modules

Built and ready for deeper engagement:

- **Events Module** — Detailed venue specs, event type breakdown, booking inquiry form
- **Leasing Module** — Segmented paths (Luxury, Retail, F&B, Pop-Up) with tailored pitches

## Design Decisions

- **Dark luxury palette** with gold accents (#c8a96e) for premium feel
- **Non-linear navigation** — side dot nav + sticky top bar for DigiDeck-style exploration
- **Scroll-triggered animations** via Framer Motion `whileInView` for cinematic reveals
- **Glassmorphism cards** for elevated, modern UI surfaces
- **Static export** for maximum performance and easy deployment
- **Modular architecture** — each section is a self-contained component that can expand into sub-modules without refactoring

## AI Tools Used

- **Claude (Anthropic)** — Architecture planning, component design, content strategy, code generation
- **Stock imagery** from Unsplash for visual placeholders

## Performance

- Static HTML export (no server required)
- Lazy-loaded images via `next/image`
- Minimal dependencies (Framer Motion + Tailwind + Lucide)
- Optimized fonts via `next/font/google`
- Target: 90+ Lighthouse performance score

## What I'd Improve With More Time

- Real video assets (hero video loop, section background videos)
- Interactive floor plan / map component
- Real-time availability calendar for event booking
- Analytics integration for tracking viewer engagement
- AI-generated renderings for hypothetical venue configurations
- Personalization engine (prospect name, tailored content)
- PDF export capability for offline sharing
