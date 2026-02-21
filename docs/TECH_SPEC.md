# Technical Specification — mabruk.farm

> Versi 1.0 • Februari 2026
> PT Mabruk Agro Lestari

---

## 1. Executive Summary

Website mabruk.farm — platform digital untuk PT Mabruk Agro Lestari, usaha pertanian hidroponik di Desa Gunung Sari, Pesawaran, Lampung.

### Tujuan Website

- **Konversi**: Mengubah pengunjung menjadi pembeli melalui WhatsApp ordering
- **Kredibilitas**: Membangun trust untuk partnership B2B (MBG, hotel, restoran, supermarket)
- **SEO**: Muncul di halaman 1 Google untuk keyword "sayur hidroponik Lampung"
- **Showcase**: Prototype chatbot AI untuk bisnis UMKM di masa depan

### Target Pengguna

| Segmen | Persona | Kebutuhan |
|--------|---------|-----------|
| B2C (Consumer) | Ibu rumah tangga, keluarga sehat di Bandar Lampung | Order sayur segar via WhatsApp, info produk & harga |
| B2B (Business) | Purchasing manager hotel, restoran, supermarket, Satgas MBG | Info supply contract, pricing tiers, reliability, company profile |
| Visitor/Curious | Pelajar, petani, orang tertarik hidroponik | Edukasi tentang hidroponik, agrowisata, blog |

### Key Metrics

| Metric | Target (3 Bulan) | Target (6 Bulan) |
|--------|-------------------|-------------------|
| Website Visitors | 500–1,000/bulan | 2,000–5,000/bulan |
| WhatsApp Inquiries | 20–50/bulan | 100–200/bulan |
| Conversion Rate | 20–30% | 25–35% |
| Google Ranking | Page 2–3 | Page 1 ("hidroponik Lampung") |

---

## 2. Tech Stack & Architecture

### Core Stack

| Layer | Teknologi | Versi | Alasan |
|-------|-----------|-------|--------|
| Framework | SvelteKit | 5 (Svelte 5, Runes) | Performa terbaik, bundle kecil, SSR/SSG bawaan |
| Styling | Tailwind CSS | 4 | Utility-first, tree-shaking, dark mode ready |
| UI Components | Custom (pure Tailwind) | — | Full control design, bundle kecil |
| CMS | Sanity.io | v3 (Studio) | Visual editor, real-time, GROQ query, free tier generous |
| Hosting | Vercel | Free (Hobby) | Edge network, auto-deploy dari Git |
| Language | TypeScript | 5.x | Type safety, better DX |

### Integrasi & Services

| Service | Provider | Biaya | Fungsi |
|---------|----------|-------|--------|
| AI Chatbot | Anthropic Claude API | ~$5–20/bulan | Customer service AI, product FAQ, order redirect |
| Image CDN | Cloudinary | Gratis (25GB) | Image optimization, responsive, lazy load |
| Analytics | Google Analytics 4 | Gratis | Traffic tracking, conversion, user behavior |
| Search Console | Google Search Console | Gratis | SEO monitoring, indexing, keyword tracking |
| Form Handling | Resend | Gratis | Contact form, B2B inquiry email |
| Maps | Google Maps Embed | Gratis | Lokasi farm di halaman kontak |
| Icons | Lucide Icons | Gratis | Clean line icons |
| Carousel | embla-carousel-svelte | Gratis | Product images, testimonials |
| Domain | mabruk.farm | ~Rp 300–500k/tahun | Custom TLD .farm |

### Architecture Diagram

```
┌─────────────────────────────────────────────┐
│              BROWSER (User)                 │
│  mabruk.farm → Vercel Edge Network          │
└─────────────────────┬───────────────────────┘
                      │
        ┌─────────────┼──────────────┐
        │             │              │
  ┌─────┴──────┐ ┌───┴──────┐ ┌────┴──────┐
  │  SvelteKit │ │ Sanity.io│ │ Claude API│
  │  SSR/SSG   │ │ CMS + CDN│ │ Chatbot   │
  └────────────┘ └──────────┘ └───────────┘
        │             │              │
        └─────────────┬──────────────┘
                      │
              ┌───────┴────────┐
              │   Cloudinary   │
              │   Image CDN    │
              └────────────────┘
```

---

## 3. Project Structure

```
mabruk-farm/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/              # Custom base components (Button, Card, Badge)
│   │   │   ├── layout/          # Navbar, Footer, MobileNav
│   │   │   ├── home/            # Hero, ProductShowcase, TrustBadges
│   │   │   ├── product/         # ProductCard, ProductGrid, Filter
│   │   │   ├── blog/            # BlogCard, BlogList, TOC
│   │   │   ├── chat/            # ChatWidget, ChatBubble, ChatInput
│   │   │   └── shared/          # WhatsAppButton, SEOHead, ImageOpt
│   │   ├── sanity/
│   │   │   ├── client.ts        # Sanity client config
│   │   │   ├── queries.ts       # GROQ queries
│   │   │   └── image.ts         # Image URL builder
│   │   ├── iot/                 # IoT (Phase 1+ placeholder)
│   │   │   ├── client.ts
│   │   │   ├── types.ts
│   │   │   ├── queries.ts
│   │   │   ├── realtime.ts
│   │   │   └── thresholds.ts
│   │   ├── utils/
│   │   │   ├── seo.ts           # Meta tags generator
│   │   │   ├── whatsapp.ts      # WA link generator
│   │   │   └── format.ts        # Price, date formatters
│   │   └── stores/
│   │       └── chat.svelte.ts   # Chat state management
│   ├── routes/
│   │   ├── +layout.svelte       # Root layout (Navbar + Footer)
│   │   ├── +layout.server.ts    # Global data loading
│   │   ├── +page.svelte         # Homepage
│   │   ├── +page.server.ts      # Homepage data
│   │   ├── produk/
│   │   │   ├── +page.svelte     # Product catalog
│   │   │   └── [slug]/
│   │   │       └── +page.svelte # Product detail
│   │   ├── tentang/
│   │   │   └── +page.svelte     # About page
│   │   ├── kerjasama/
│   │   │   └── +page.svelte     # B2B partnership page
│   │   ├── blog/
│   │   │   ├── +page.svelte     # Blog listing
│   │   │   └── [slug]/
│   │   │       └── +page.svelte # Blog post
│   │   ├── eduwisata/
│   │   │   └── +page.svelte     # Agrotourism (Phase 2 — Coming Soon)
│   │   ├── kontak/
│   │   │   └── +page.svelte     # Contact page
│   │   ├── dashboard/
│   │   │   ├── +page.svelte     # IoT dashboard (Phase 1+ — Coming Soon)
│   │   │   └── admin/
│   │   │       └── +page.svelte # Protected admin panel
│   │   └── api/
│   │       ├── chat/
│   │       │   └── +server.ts   # AI chatbot endpoint
│   │       ├── contact/
│   │       │   └── +server.ts   # Contact form handler
│   │       └── revalidate/
│   │           └── +server.ts   # Sanity webhook for ISR
│   └── app.css                  # Global styles + Tailwind
├── sanity/
│   ├── schemas/
│   │   ├── product.ts
│   │   ├── blogPost.ts
│   │   ├── testimonial.ts
│   │   ├── partner.ts
│   │   └── siteSettings.ts
│   └── sanity.config.ts
├── static/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── robots.txt
├── docs/                        # Project documentation
├── svelte.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 4. Halaman & Routing

| Route | Halaman | Rendering | Prioritas |
|-------|---------|-----------|-----------|
| `/` | Homepage | SSG + ISR | P0 (Launch) |
| `/produk` | Katalog Produk | SSG + ISR | P0 |
| `/produk/[slug]` | Detail Produk | SSG + ISR | P0 |
| `/tentang` | Tentang Kami | SSG | P0 |
| `/kerjasama` | B2B Partnership | SSG | P0 |
| `/kontak` | Kontak | SSG | P0 |
| `/blog` | Blog Listing | SSG + ISR | P1 (Month 2) |
| `/blog/[slug]` | Blog Post | SSG + ISR | P1 |
| `/eduwisata` | Agrowisata | SSG | P2 (Month 4+) |
| `/dashboard` | IoT Dashboard | SSR | Phase 1+ |
| `/api/chat` | Chatbot API | Serverless | P1 |
| `/api/contact` | Form Handler | Serverless | P0 |
| `/api/revalidate` | Sanity Webhook | Serverless | P0 |

### Homepage Sections

1. **Hero Section** — Full-width visual, headline, CTA "Pesan via WhatsApp"
2. **Trust Badges** — 4 icons: Tanpa Pestisida, Dipanen Segar, Nutrisi Terkontrol, Suplai Konsisten
3. **Product Showcase** — 6–8 produk unggulan dalam grid
4. **Tentang Singkat** — 2–3 paragraf + foto greenhouse
5. **Social Proof** — Logo partner + testimonial cards
6. **B2B CTA** — "Butuh suplai untuk bisnis Anda?" + link
7. **Blog Preview** — 3 artikel terbaru
8. **Footer** — Kontak, sosmed, jam operasional

---

## 5. Design System

### Color Palette

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `--primary` | `#1B5E20` (Green 900) | Header, CTA utama, heading |
| `--primary-light` | `#4CAF50` (Green 500) | Hover states, badge, accent |
| `--primary-surface` | `#E8F5E9` (Green 50) | Background section, card highlight |
| `--secondary` | `#F9A825` (Amber 800) | Accent emas, badge premium, price tag |
| `--neutral-900` | `#1A1A1A` | Body text |
| `--neutral-600` | `#666666` | Secondary text |
| `--neutral-200` | `#E5E5E5` | Border, divider |
| `--neutral-50` | `#FAFAFA` | Background |
| `--white` | `#FFFFFF` | Card background |
| `--whatsapp` | `#25D366` | WhatsApp buttons |
| `--error` | `#D32F2F` | Error states |
| `--success` | `#2E7D32` | Success, available badges |
| `--warning` | `#F57F17` | Warning messages |

### Typography

| Element | Size (Desktop) | Size (Mobile) | Weight |
|---------|---------------|---------------|--------|
| Display / Hero | 56–64px | 36–40px | 800 ExtraBold |
| H1 | 36–40px | 28–32px | 700 Bold |
| H2 | 28–32px | 24–26px | 700 Bold |
| H3 | 22–24px | 20–22px | 600 SemiBold |
| Body | 16–18px | 15–16px | 400 Regular |
| Small / Caption | 13–14px | 12–13px | 400 Regular |
| Button | 14–16px | 14px | 600 SemiBold |
| Badge / Tag | 12–13px | 11–12px | 600 SemiBold |

### Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px (sm) | Single column, hamburger menu |
| Tablet | 640–1024px (md–lg) | 2 columns grid, sidebar nav |
| Desktop | > 1024px (lg+) | Full layout, 3–4 column grid |

### Border Radius

| Element | Radius | Tailwind |
|---------|--------|----------|
| Buttons | 8px | `rounded-lg` |
| Cards | 12px | `rounded-xl` |
| Badges | full | `rounded-full` |
| Input fields | 8px | `rounded-lg` |
| Images | 12px | `rounded-xl` |

---

## 6. CMS Schema (Sanity.io)

### Product Schema

```typescript
{
  name: 'product',
  title: 'Produk',
  type: 'document',
  fields: [
    { name: 'name',        type: 'string',   title: 'Nama Produk' },
    { name: 'slug',        type: 'slug',     options: { source: 'name' } },
    { name: 'image',       type: 'image',    title: 'Foto Produk' },
    { name: 'gallery',     type: 'array',    of: [{ type: 'image' }] },
    { name: 'description', type: 'text',     title: 'Deskripsi' },
    { name: 'price',       type: 'number',   title: 'Harga (Rp/kg)' },
    { name: 'unit',        type: 'string',   initialValue: 'kg' },
    { name: 'category',    type: 'string',
      options: { list: ['sayuran-daun','sayuran-premium','herbs','paket'] } },
    { name: 'badges',      type: 'array',    of: [{ type: 'string' }],
      options: { list: ['Tanpa Pestisida','Best Seller','Premium','Baru','Stok Terbatas'] } },
    { name: 'harvestDays',  type: 'number',  title: 'Masa Panen (hari)' },
    { name: 'nutrition',    type: 'text',    title: 'Info Nutrisi' },
    { name: 'storageTips',  type: 'text',    title: 'Tips Penyimpanan' },
    { name: 'isAvailable',  type: 'boolean', initialValue: true },
    { name: 'sortOrder',    type: 'number',  title: 'Urutan Tampil' },
  ]
}
```

### Blog Post Schema

```typescript
{
  name: 'blogPost',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title',       type: 'string' },
    { name: 'slug',        type: 'slug',     options: { source: 'title' } },
    { name: 'coverImage',  type: 'image' },
    { name: 'excerpt',     type: 'text',     title: 'Ringkasan (SEO)' },
    { name: 'body',        type: 'blockContent' },
    { name: 'category',    type: 'string',
      options: { list: ['edukasi','behind-the-scenes','resep','tips','lokal'] } },
    { name: 'tags',        type: 'array',    of: [{ type: 'string' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'author',      type: 'string' },
  ]
}
```

### Additional Schemas

- **testimonial** — name, role, company, quote, image, rating
- **partner** — name, logo, type (hotel/restaurant/supermarket/MBG), description
- **siteSettings** — siteName, tagline, phone, email, address, socialLinks, operatingHours

---

## 7. AI Chatbot Specification

### System Prompt

```
Kamu adalah asisten virtual Mabruk Farm, kebun hidroponik
di Gunung Sari, Pesawaran, Lampung.

Tugas kamu:
1. Jawab pertanyaan tentang produk & harga berdasarkan data katalog
2. Bantu customer memesan via WhatsApp (generate WA link)
3. Jelaskan keunggulan sayuran hidroponik Mabruk Farm
4. Arahkan pertanyaan B2B ke halaman /kerjasama atau WA admin
5. Jawab FAQ tentang pengiriman, pembayaran, jam operasional

Gaya bahasa: ramah, hangat, pakai Bahasa Indonesia santai.
Jika tidak tahu jawabannya, arahkan ke WhatsApp admin.
Jangan jawab pertanyaan di luar topik Mabruk Farm.
```

### Fitur

- **Real-time product data** dari Sanity CMS
- **WhatsApp redirect** dengan pre-filled message
- **Streaming response** (kata per kata)
- **Chat history** di localStorage per session
- **Rate limiting** max 20 pesan/session
- **Fallback** jika API error → redirect WhatsApp

---

## 8. SEO Strategy

### Target Keywords

| Keyword | Volume | Target Page |
|---------|--------|-------------|
| sayur hidroponik Lampung | Tinggi | Homepage + /produk |
| sayuran segar Bandar Lampung | Tinggi | Homepage |
| supplier sayur restoran Lampung | Medium | /kerjasama |
| hidroponik Pesawaran | Low–Med | /tentang |
| sayur tanpa pestisida Lampung | Medium | /produk |
| jual selada hidroponik Lampung | Medium | /produk/selada-* |
| supplier sayur MBG Lampung | Low | /kerjasama |

### Technical SEO

- **SSG/SSR**: Semua halaman server-rendered
- **Meta tags**: Unique title, description, og:image per halaman
- **Sitemap**: Auto-generated XML di /sitemap.xml
- **robots.txt**: Allow all, disallow /api/
- **Structured Data**: JSON-LD — LocalBusiness, Product, Article, BreadcrumbList
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image optimization**: WebP/AVIF via Cloudinary, lazy loading, responsive srcset

---

## 9. Deployment & DevOps

### Vercel Configuration

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-vercel'

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x',
      regions: ['sin1'],
    })
  }
}
```

### Environment Variables

```env
# Sanity
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Anthropic
ANTHROPIC_API_KEY=

# WhatsApp
PUBLIC_WHATSAPP_NUMBER=6285269458526

# Site
PUBLIC_SITE_URL=https://mabruk.farm

# Resend
RESEND_API_KEY=

# Cloudinary
PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### CI/CD

- Push ke `main` → Vercel auto-deploy production
- Push ke branch lain → preview URL
- Sanity publish → webhook `/api/revalidate` → ISR rebuild

---

## 10. Biaya Operasional Bulanan

| Item | Provider | Biaya/Bulan |
|------|----------|-------------|
| Hosting | Vercel (Hobby) | Gratis |
| CMS | Sanity.io (Free) | Gratis |
| Domain | mabruk.farm | ~Rp 30–40k |
| AI Chatbot | Anthropic Claude API | Rp 75–300k |
| Image CDN | Cloudinary (Free) | Gratis |
| Email | Resend (Free) | Gratis |
| Analytics | GA4 + GSC | Gratis |
| **TOTAL** | | **Rp 105–340k/bulan** |

---

## 11. Development Checklist

### Pre-Development
- [ ] Domain mabruk.farm dibeli dan DNS siap
- [ ] Akun Vercel connected ke GitHub repo
- [ ] Akun Sanity.io dibuat (free tier)
- [ ] Anthropic API key didapat
- [ ] Cloudinary akun dibuat
- [ ] Google Analytics property dibuat
- [ ] Logo Mabruk Farm (SVG) ✅
- [ ] Konten homepage ditulis ✅

### Development
- [ ] SvelteKit 5 project initialized
- [ ] Tailwind CSS 4 configured
- [ ] Layout component (Navbar + Footer)
- [ ] Homepage (all 8 sections)
- [ ] Product catalog + detail pages
- [ ] About page
- [ ] B2B partnership page
- [ ] Contact page with form
- [ ] Blog listing & detail pages
- [ ] Sanity CMS schemas & studio
- [ ] AI chatbot widget & API
- [ ] WhatsApp floating button
- [ ] Responsive on all breakpoints

### Pre-Launch
- [ ] SEO meta tags on all pages
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] JSON-LD structured data
- [ ] Open Graph images
- [ ] Google Analytics verified
- [ ] Lighthouse ≥ 90
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] 404 page
