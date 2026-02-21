# Mabruk Farm — mabruk.farm

Smart hydroponics farm website for PT Mabruk Agro Lestari. Built with SvelteKit 5, Tailwind CSS 4, Sanity CMS, and deployed on Vercel.

## Project Overview

- **Domain**: mabruk.farm
- **Purpose**: Convert visitors to WhatsApp buyers, establish B2B credibility, showcase IoT-ready smart farm
- **Language**: Indonesian (Bahasa Indonesia) — all UI text, content, and copy in Indonesian
- **Audience**: B2C (families in Bandar Lampung), B2B (restaurants, hotels, MBG program)

## Tech Stack

- **Framework**: SvelteKit 5 (Svelte 5 with Runes — use `$state`, `$derived`, `$effect`)
- **Language**: TypeScript 5.x — strict mode
- **Styling**: Tailwind CSS 4 (custom components, no shadcn)
- **Icons**: Lucide Icons (lucide-svelte)
- **Carousel**: embla-carousel-svelte
- **CMS**: Sanity.io v3 (GROQ queries)
- **AI Chatbot**: Anthropic Claude API (streaming)
- **IoT (future)**: Supabase (PostgreSQL + Realtime) for sensor data
- **Image CDN**: Cloudinary
- **Hosting**: Vercel (adapter-vercel, sin1 region)

## Commands

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Svelte check + TypeScript
npm run lint         # ESLint + Prettier
npm run format       # Prettier format
npx sanity dev       # Start Sanity Studio (in /sanity dir)
```

## Project Structure

```
src/lib/components/     → UI components (organized by page/feature)
src/lib/components/ui/  → Custom base components (Button, Card, Badge, Input)
src/lib/sanity/         → Sanity client, queries, image helpers
src/lib/iot/            → IoT client, types, queries (Supabase) — Phase 1+
src/lib/utils/          → Helpers: seo.ts, whatsapp.ts, format.ts
src/lib/stores/         → Svelte stores: chat.ts
src/routes/             → SvelteKit routes (file-based routing)
src/routes/api/         → Server endpoints: chat, contact, iot, revalidate
src/routes/eduwisata/   → Agrotourism page (Phase 2 — Coming Soon)
src/routes/dashboard/   → IoT dashboard (Phase 1+ — Coming Soon)
sanity/schemas/         → CMS schemas: product, blogPost, testimonial, partner
static/                 → Favicon, OG image, robots.txt
docs/                   → Project docs (brand guidelines, specs, etc.)
```

## Code Style

- IMPORTANT: Use Svelte 5 Runes syntax (`$state`, `$derived`, `$effect`), NOT legacy `$:` reactive
- Use TypeScript for all `.ts` and `.svelte` files
- Use ES modules, never CommonJS
- Prefer `const` over `let`. Never use `var`
- Component naming: PascalCase (e.g., `ProductCard.svelte`)
- File naming in routes: SvelteKit conventions (`+page.svelte`, `+server.ts`)
- CSS: Tailwind utility classes. Avoid custom CSS unless absolutely necessary
- Formatting: Prettier with tabs, single quotes, no semicolons

## Design System

- **Primary**: `#1B5E20` (Green 900) — headers, CTA buttons
- **Primary Light**: `#4CAF50` (Green 500) — hover, accents
- **Secondary**: `#F9A825` (Amber 800) — premium badges, highlights
- **WhatsApp**: `#25D366` — WA buttons
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Border radius**: Cards 12px, Buttons 8px, Badges full
- **Approach**: "Organic luxury" — clean, professional, warm

## Key Conventions

- All WhatsApp links use: `https://wa.me/6285269458526?text={encoded_message}`
- Prices in Indonesian Rupiah format: `Rp 25.000/kg` (dot as thousands separator)
- All dates in Indonesian format: `22 Februari 2026`
- SEO: Every page MUST have unique meta title + description. Use JSON-LD structured data.
- Images: Always use Cloudinary URL builder with auto format/quality
- CMS: All dynamic content from Sanity. Hardcode nothing that could change.

## IoT Architecture (Future — Do NOT implement yet, only prepare structure)

Website is IoT-ready. Folder structure exists but implementation is Phase 1+:
- `/src/lib/iot/` — Supabase client, types, queries (placeholder)
- `/src/routes/dashboard/` — Public sensor dashboard (Coming Soon page)
- `/src/routes/api/iot/` — Endpoints for ESP32 data ingestion
- Database: Supabase PostgreSQL (sensor_readings, greenhouses, alerts, control_commands)

## Git Workflow

- Branch naming: `feature/[name]`, `fix/[name]`, `chore/[name]`
- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`)
- Always create a new branch for features. Never commit directly to `main`.
- PR required for merging to `main`

## Testing

- Run `npm run check` before every commit
- Run `npm run build` to verify production build succeeds
- Test all pages at mobile (375px), tablet (768px), and desktop (1280px)
- Verify WhatsApp links open correctly
- Check Lighthouse score: target 90+ on all metrics

## Reference Docs

See `docs/` directory for detailed specifications:
- @docs/TECH_SPEC.md — Full technical specification
- @docs/CONTENT.md — All page content and copy
- @docs/BRAND.md — Brand guidelines, colors, typography
- @docs/IOT_ROADMAP.md — IoT integration phases
