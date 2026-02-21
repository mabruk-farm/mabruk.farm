# Brand Guidelines — mabruk.farm

> Versi 1.0 • Februari 2026

---

## 1. Brand Overview

### Identity

| Elemen | Detail |
|--------|--------|
| Brand Name | Mabruk Farm |
| Legal Entity | PT Mabruk Agro Lestari |
| Domain | mabruk.farm |
| Tagline | Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari |
| Tagline (Short) | Sayuran Berkah dari Gunung Sari |
| Arti Nama | "Mabruk" (مبروك) = diberkahi / penuh berkah (bahasa Arab) |

### Personality

| Sifat | Deskripsi |
|-------|-----------|
| Hangat & Personal | Seperti teman yang peduli dengan makanan keluargamu |
| Terpercaya | Profesional, konsisten, bisa diandalkan |
| Modern & Bersih | Pertanian masa depan, teknologi, kebersihan |
| Berkah & Bermakna | Ada misi spiritual dan sosial di balik bisnis |

### Voice

| Konteks | Tone | Contoh |
|---------|------|--------|
| B2C | Hangat, ramah, personal | "Kangkung kami beda — renyah, bersih, tinggal masak!" |
| B2B | Profesional, data-driven | "Supply contract dengan volume fleksibel dan harga kompetitif" |
| Social Media | Santai, storytelling | "Pagi-pagi udah panen! 🌱 Pakcoy hari ini seger banget" |
| Blog | Informatif, friendly expert | "Hidroponik itu sebenarnya simpel. Yuk kita bahas bareng" |

---

## 2. Logo

### Elemen Logo

| Elemen | Deskripsi | Makna |
|--------|-----------|-------|
| Tetesan Air / Daun | Bentuk water drop menyerupai daun | Hidroponik (air) + pertanian (daun) |
| Urat Daun | Garis-garis di dalam drop | Kehidupan, pertumbuhan, nutrisi |
| Sparkle Emas | Titik kuning/emas kecil | Berkah (Mabruk), kualitas premium |
| Tipografi | "mabruk" bold hijau tua + ".farm" hijau medium | Domain = brand, modern |

### Logo Files

- `project-brief/mabruk-farm-logo.svg` — Logo horizontal utama
- `project-brief/mabruk-farm-icon.svg` — Ikon / favicon

### Aturan Penggunaan

**Do's:**
- Gunakan pada background putih atau terang
- Jaga clear space minimal 1x tinggi ikon
- Gunakan versi ikon untuk avatar, favicon, profile picture

**Don'ts:**
- Jangan ubah warna sembarangan
- Jangan stretch atau distorsi
- Jangan taruh di background ramai tanpa overlay
- Jangan tambahkan efek (shadow, glow, 3D)

---

## 3. Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary (Green 900) | `#1B5E20` | Logo, headers, CTA buttons, heading text |
| Primary Light (Green 500) | `#4CAF50` | Hover states, badges, accents, links |
| Primary Surface (Green 50) | `#E8F5E9` | Background sections, card highlights |

### Secondary / Accent

| Name | Hex | Usage |
|------|-----|-------|
| Amber 800 | `#F9A825` | Badge premium, price tags, berkah accent |
| Amber 400 | `#FDD835` | Highlight, sparkle inner, attention grabber |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| Neutral 900 | `#1A1A1A` | Body text, headings on white |
| Neutral 600 | `#666666` | Secondary text, captions |
| Neutral 300 | `#CCCCCC` | Borders, dividers |
| Neutral 100 | `#F5F5F5` | Table alternating rows |
| Neutral 50 | `#FAFAFA` | Page background |
| White | `#FFFFFF` | Cards, content areas |

### Functional Colors

| Name | Hex | Usage |
|------|-----|-------|
| WhatsApp Green | `#25D366` | WhatsApp buttons |
| Success | `#2E7D32` | Success messages, "Tersedia" badge |
| Error | `#D32F2F` | Error messages, "Habis" badge |
| Warning | `#F57F17` | Warning, "Stok Terbatas" badge |

### CSS Variables

```css
:root {
  --color-primary: #1B5E20;
  --color-primary-light: #4CAF50;
  --color-primary-surface: #E8F5E9;
  --color-secondary: #F9A825;
  --color-secondary-light: #FDD835;
  --color-neutral-900: #1A1A1A;
  --color-neutral-600: #666666;
  --color-neutral-300: #CCCCCC;
  --color-neutral-100: #F5F5F5;
  --color-neutral-50: #FAFAFA;
  --color-white: #FFFFFF;
  --color-whatsapp: #25D366;
  --color-success: #2E7D32;
  --color-error: #D32F2F;
  --color-warning: #F57F17;
}
```

---

## 4. Typography

### Font Family

| Role | Font | Source |
|------|------|--------|
| Primary (All) | Plus Jakarta Sans | Google Fonts |
| Monospace (Code) | JetBrains Mono | Google Fonts |

Plus Jakarta Sans dipilih karena: dirancang oleh desainer Indonesia (Gumpita Rahayu), modern, clean, readable, mendukung karakter Indonesia.

### Type Scale

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| Display / Hero | 56–64px | 36–40px | 800 ExtraBold |
| H1 | 36–40px | 28–32px | 700 Bold |
| H2 | 28–32px | 24–26px | 700 Bold |
| H3 | 22–24px | 20–22px | 600 SemiBold |
| Body (Large) | 18px | 16px | 400 Regular |
| Body (Default) | 16px | 15px | 400 Regular |
| Small / Caption | 13–14px | 12–13px | 400 Regular |
| Button | 14–16px | 14px | 600 SemiBold |
| Badge / Tag | 12–13px | 11–12px | 600 SemiBold |
| Nav Link | 15–16px | 16px | 500 Medium |

### Heading Colors

- H1: `#1B5E20` (Primary)
- H2: `#2E7D32` (Green 800)
- H3: `#388E3C` (Green 700)
- Body: `#1A1A1A` (Neutral 900)
- Secondary: `#666666` (Neutral 600)

---

## 5. Spacing & Layout

### Container & Grid

- Max width: 1280px (`max-w-7xl`)
- Content width: 1024px (`max-w-5xl`) untuk text-heavy pages
- Padding: `px-4` (mobile) / `px-6` (tablet) / `px-8` (desktop)
- Product grid: 1 col (mobile) / 2 col (tablet) / 3 col (desktop)

### Border Radius

| Element | Radius | Tailwind |
|---------|--------|----------|
| Buttons | 8px | `rounded-lg` |
| Cards | 12px | `rounded-xl` |
| Badges | full | `rounded-full` |
| Input fields | 8px | `rounded-lg` |
| Images | 12px | `rounded-xl` |
| Avatar / Icon | full | `rounded-full` |

### Shadow

| Element | Tailwind |
|---------|----------|
| Card default | `shadow-sm` |
| Card hover | `shadow-md` + `translate-y -1px` |
| Floating button | `shadow-lg` |
| Modal/Dialog | `shadow-xl` |

---

## 6. Component Styling

### Buttons

| Variant | Background | Text | Usage |
|---------|-----------|------|-------|
| Primary | `#1B5E20` | White | Main CTA |
| WhatsApp | `#25D366` | White | "Pesan via WhatsApp" |
| Secondary | White | `#1B5E20` | Secondary actions (border 1px) |
| Ghost | Transparent | `#1B5E20` | Tertiary: nav links |
| Amber | `#F9A825` | White | Special: "Premium", promo |

All buttons: font-weight 600, rounded-lg, py-2.5 px-5, hover opacity 90% + slight scale.

### Cards

| Type | Styling |
|------|---------|
| Product Card | White bg, rounded-xl, shadow-sm, hover shadow-md + translateY(-2px). Image top, content bottom. Badge overlay top-right. |
| Blog Card | White bg, rounded-xl, shadow-sm. Cover 16:9, title + excerpt + date. |
| Testimonial Card | Primary-surface bg, rounded-xl. Quote marks decorative green. |

### Badges

| Badge | Background | Text Color |
|-------|-----------|------------|
| Tanpa Pestisida | `#E8F5E9` | `#1B5E20` |
| Best Seller | `#FFF8E1` | `#F57F17` |
| Premium | `#F9A825` | `#FFFFFF` |
| Tersedia | `#E8F5E9` | `#2E7D32` |
| Habis | `#FFEBEE` | `#D32F2F` |
| Baru | `#E3F2FD` | `#1565C0` |

---

## 7. Imagery & Photography

### Style

- Pencahayaan: Natural light, pagi hari (golden hour)
- Warna: Dominan hijau natural + putih/cream
- Mood: Fresh, clean, inviting
- Subject: Tanaman close-up, greenhouse, tangan bekerja
- People: Candid, genuine
- Background: Clean — putih, kayu, daun pisang, linen

### Icons

- Library: **Lucide Icons** (open source, clean line style)
- Size: 24px (inline), 32–40px (feature), 48–64px (hero)
- Stroke: 2px
- Color: Primary `#1B5E20` atau neutral `#666666`

---

## 8. Social Media

### Profile Setup

| Platform | Username | Bio |
|----------|----------|-----|
| Instagram | @mabruk.farm | 🌱 Sayuran Hidroponik Segar \| Pesawaran, Lampung |
| WhatsApp Business | Mabruk Farm | Sayuran hidroponik segar tanpa pestisida |
| Google Business | Mabruk Farm | Full description + foto + hours |

### Content Pillars

| Pillar | Ratio |
|--------|-------|
| Product Showcase | 30% |
| Behind the Scenes | 30% |
| Edukasi | 20% |
| Testimonial | 10% |
| Personal / Fun | 10% |
