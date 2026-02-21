---
description: Create a new page with SvelteKit route, SEO, and layout
allowed-tools: Read, Write, Edit, Glob, Grep
---

Create a new SvelteKit page route for the Mabruk Farm website.

Requirements:
1. Create `src/routes/{page}/+page.svelte` and `src/routes/{page}/+page.ts` (for load function)
2. Include SEO meta tags (title, description, OG tags) using the SEOHead component
3. Follow the design system: Plus Jakarta Sans font, green primary (#1B5E20), organic luxury aesthetic
4. Use Tailwind CSS 4 utility classes, shadcn-svelte components where applicable
5. Make it fully responsive (mobile-first: 375px → 768px → 1280px)
6. All text content in Bahasa Indonesia
7. Include WhatsApp CTA button where appropriate
8. Load dynamic content from Sanity CMS via GROQ queries in the load function
9. Add JSON-LD structured data appropriate for the page type

Page to create: $ARGUMENTS
