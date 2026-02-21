# 🌿 mabruk.farm

**Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari**

Website resmi PT Mabruk Agro Lestari — pertanian hidroponik modern di Desa Gunung Sari, Pesawaran, Lampung.

![SvelteKit](https://img.shields.io/badge/SvelteKit_5-FF3E00?style=flat&logo=svelte&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity_CMS-F03E2F?style=flat&logo=sanity&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

---

## 📋 Overview

| Aspek | Detail |
|-------|--------|
| **URL** | [mabruk.farm](https://mabruk.farm) |
| **Framework** | SvelteKit 5 (Svelte 5 + Runes) |
| **Styling** | Tailwind CSS 4 (custom components) |
| **CMS** | Sanity.io v3 |
| **Hosting** | Vercel (Hobby tier) |
| **AI Chatbot** | Anthropic Claude API |
| **Image CDN** | Cloudinary |
| **Region** | sin1 (Singapore) |

## 🏗 Tech Stack

```
Frontend:    SvelteKit 5 + TypeScript 5.x
Styling:     Tailwind CSS 4 (custom components)
Icons:       Lucide Icons (lucide-svelte)
CMS:         Sanity.io v3 (GROQ queries, visual editor)
AI Chat:     Anthropic Claude API (streaming)
Images:      Cloudinary (free 25GB)
Analytics:   Google Analytics 4 + Search Console
Forms:       Resend / Formspree
Hosting:     Vercel (auto-deploy dari GitHub)
```

## 📁 Project Structure

```
mabruk-farm/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/              # Custom base components (Button, Card, Badge)
│   │   │   ├── layout/          # Navbar, Footer, FloatingButtons
│   │   │   ├── home/            # Hero, TrustBadges, ProductShowcase, etc.
│   │   │   ├── product/         # ProductCard, ProductGrid, ProductDetail
│   │   │   ├── blog/            # BlogCard, BlogGrid, BlogContent
│   │   │   ├── chat/            # ChatWidget, ChatBubble, ChatInput
│   │   │   └── shared/          # WhatsAppButton, Badge, SEOHead
│   │   ├── sanity/
│   │   │   ├── client.ts        # Sanity client config
│   │   │   ├── queries.ts       # GROQ queries
│   │   │   └── image.ts         # Image URL builder
│   │   ├── utils/
│   │   │   ├── seo.ts           # Meta tag helpers
│   │   │   ├── whatsapp.ts      # WA link generator
│   │   │   └── format.ts        # Price, date formatting (IDR)
│   │   └── stores/
│   │       └── chat.ts          # Chat state management
│   ├── routes/
│   │   ├── +layout.svelte       # Global layout (navbar + footer)
│   │   ├── +page.svelte         # Homepage (/)
│   │   ├── produk/
│   │   │   ├── +page.svelte     # Product listing (/produk)
│   │   │   └── [slug]/+page.svelte  # Product detail (/produk/pakcoy)
│   │   ├── tentang/+page.svelte # About page (/tentang)
│   │   ├── kerjasama/+page.svelte   # B2B page (/kerjasama)
│   │   ├── blog/
│   │   │   ├── +page.svelte     # Blog listing (/blog)
│   │   │   └── [slug]/+page.svelte  # Blog post (/blog/kenalan-mabruk)
│   │   ├── kontak/+page.svelte  # Contact page (/kontak)
│   │   ├── eduwisata/+page.svelte  # Agrotourism (Phase 2)
│   │   ├── dashboard/+page.svelte  # IoT dashboard (Phase 1+)
│   │   └── api/
│   │       ├── chat/+server.ts  # AI chatbot endpoint
│   │       ├── contact/+server.ts   # Contact form handler
│   │       └── revalidate/+server.ts # Sanity webhook → ISR
│   └── app.css                  # Global styles + Tailwind
├── sanity/
│   └── schemas/                 # product, blogPost, testimonial, partner, siteSettings
├── static/
│   ├── favicon.ico
│   ├── og-image.png
│   └── robots.txt
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm
- Akun Sanity.io (gratis)
- Akun Vercel (gratis)
- API key Anthropic Claude

### 1. Clone & Install

```bash
git clone https://github.com/mabruk-farm/mabruk.farm.git
cd mabruk-farm
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` ke `.env`:

```bash
cp .env.example .env
```

Isi variabel berikut:

```env
# Sanity CMS
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Anthropic (AI Chatbot)
ANTHROPIC_API_KEY=sk-ant-...

# WhatsApp
PUBLIC_WHATSAPP_NUMBER=6285269458526

# Site
PUBLIC_SITE_URL=https://mabruk.farm

# Resend (Contact Form)
RESEND_API_KEY=re_...

# Cloudinary
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 3. Setup Sanity CMS

```bash
cd sanity
npx sanity init
npx sanity deploy
```

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

### 5. Build for Production

```bash
npm run build
npm run preview  # test production build locally
```

## 📝 Sanity CMS Schemas

| Schema | Deskripsi | Fields Utama |
|--------|-----------|--------------|
| `product` | Produk sayuran | name, slug, image, price, unit, category, badges, description, nutrition, storageTips |
| `blogPost` | Artikel blog | title, slug, coverImage, body (block), category, tags, publishedAt |
| `testimonial` | Review customer | quote, name, role, company, rating |
| `partner` | Logo partner B2B | name, logo, url |
| `siteSettings` | Setting global | siteName, tagline, whatsapp, instagram, address, operatingHours |

## 🤖 AI Chatbot

Chatbot menggunakan Anthropic Claude API dengan konteks:

- Data produk real-time dari Sanity CMS
- Knowledge base tentang hidroponik & Mabruk Farm
- Auto-redirect ke WhatsApp untuk order
- Rate limiting: 20 messages/session
- Bahasa Indonesia santai & ramah

Endpoint: `POST /api/chat`

```typescript
// Request
{ "message": "Harga selada berapa?", "history": [] }

// Response (streaming)
{ "response": "Selada hijau Rp 35.000/kg, selada merah Rp 40.000/kg..." }
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary** | `#1B5E20` (Green 900) |
| **Primary Light** | `#4CAF50` (Green 500) |
| **Secondary** | `#F9A825` (Amber 800) |
| **Font** | Plus Jakarta Sans |
| **Border Radius** | Cards: 12px, Buttons: 8px, Badges: full |

Lihat `docs/BRAND.md` untuk panduan lengkap.

## 🌐 Deployment

### Auto-deploy via Vercel

1. Connect repo ke Vercel
2. Set environment variables di Vercel dashboard
3. Push ke `main` → auto-deploy production
4. Push ke branch lain → preview URL

### Sanity Webhook (ISR)

Content update di Sanity → webhook POST ke `/api/revalidate` → halaman terkait di-rebuild tanpa full redeploy.

## 📊 SEO

- SSG untuk semua halaman (fast TTFB)
- Unique meta tags per halaman
- JSON-LD structured data (LocalBusiness, Product, Article)
- Auto-generated sitemap.xml
- robots.txt configured
- Core Web Vitals target: LCP <2.5s, FID <100ms, CLS <0.1
- Google Business Profile integration

## 🗺 Sitemap

```
/                  → Homepage (SSG)
/produk            → Product listing (SSG + ISR)
/produk/[slug]     → Product detail (SSG + ISR)
/tentang           → About page (SSG)
/kerjasama         → B2B page (SSG)
/blog              → Blog listing (SSG + ISR)
/blog/[slug]       → Blog post (SSG + ISR)
/kontak            → Contact page (SSG)
/eduwisata         → Agrotourism (SSG, Phase 2)
/dashboard         → IoT dashboard (SSR, Phase 1+)
/api/chat          → Chatbot API (Serverless)
/api/contact       → Contact form (Serverless)
/api/revalidate    → Sanity webhook (Serverless)
```

## 💰 Monthly Costs

| Service | Cost |
|---------|------|
| Vercel Hosting | Gratis (Hobby) |
| Sanity CMS | Gratis (Free tier) |
| Cloudinary | Gratis (25GB) |
| Google Analytics | Gratis |
| Domain (mabruk.farm) | ~Rp 30-40k/bulan |
| Claude API | ~Rp 75-300k/bulan |
| **Total** | **~Rp 105-340k/bulan** |

## 📱 Contact

- **WhatsApp**: [0852-6945-8526](https://wa.me/6285269458526)
- **Instagram**: [@mabruk.farm](https://instagram.com/mabruk.farm)
- **Email**: halo@mabruk.farm
- **Location**: Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung

## 📄 License

© 2026 PT Mabruk Agro Lestari. All rights reserved.
