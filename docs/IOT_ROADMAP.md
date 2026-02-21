# IoT Integration Roadmap — mabruk.farm

> Versi 1.0 • Februari 2026
> Smart Hydroponics: Dari Sensor ke Dashboard

---

## 1. Visi IoT

Mabruk Farm bukan sekadar kebun hidroponik — ini adalah smart farm yang transparan. Customer bisa melihat langsung bagaimana sayuran mereka ditanam, dipantau, dan dirawat secara real-time melalui website.

### 5 Pilar IoT

| # | Fitur | Deskripsi | Value untuk Customer |
|---|-------|-----------|---------------------|
| 1 | Monitoring Nutrisi | pH, TDS/EC, suhu air real-time | "Nutrisi sayuran saya dikontrol dengan presisi" |
| 2 | Monitoring Lingkungan | Suhu udara, kelembapan, cahaya | "Greenhouse benar-benar terkontrol" |
| 3 | Kontrol Otomatis | Pompa, dosing nutrisi otomatis | "Mereka pakai teknologi canggih" |
| 4 | CCTV / Live Camera | Streaming video greenhouse | "Bisa lihat greenhouse kapan saja" |
| 5 | Dashboard Publik | Semua data visible di website | "Transparansi total — farm yang bisa dipercaya" |

---

## 2. Arsitektur Sistem

### Overview (4 Layer)

| Layer | Komponen | Teknologi |
|-------|----------|-----------|
| Sensor | Sensor fisik di greenhouse | pH, TDS, DHT22, LDR, DS18B20 |
| Edge | Mikrokontroler | ESP32 (WiFi built-in) |
| Cloud | Database & API | Supabase (PostgreSQL + Realtime) |
| Presentation | Dashboard website | SvelteKit + Chart.js |

### Data Flow

```
Sensor (pH/TDS/DHT22)
    ↓ (analog/digital signal)
ESP32 (baca sensor tiap 5 menit)
    ↓ (HTTPS POST)
Supabase (simpan + realtime subscription)
    ↓ (API / WebSocket)
SvelteKit API Route (/api/iot/latest)
    ↓ (JSON)
Dashboard UI (mabruk.farm/dashboard)
```

### Website Routes (IoT)

| Route | Fungsi |
|-------|--------|
| `/dashboard` | Halaman publik data IoT real-time |
| `/dashboard/admin` | Protected: kontrol pompa, threshold, history |
| `/api/iot/ingest` | POST endpoint untuk ESP32 |
| `/api/iot/latest` | GET data terbaru |
| `/api/iot/history` | GET data historis (24h, 7d, 30d) |
| `/api/iot/control` | POST perintah ke ESP32 |

---

## 3. Hardware & Sensor

### ESP32

- Board: ESP32-WROOM-32
- WiFi built-in, dual core, banyak GPIO
- Harga: Rp 50–100k
- 1 ESP32 per greenhouse (handle 6–8 sensor)

### Phase 1: Monitoring Dasar

| Sensor | Fungsi | Model | Harga Est. |
|--------|--------|-------|------------|
| pH Sensor | Keasaman air (5.5–6.5) | PH-4502C module | Rp 150–250k |
| TDS/EC Sensor | Kepekatan nutrisi (800–1200 ppm) | TDS Meter V1.0 | Rp 50–100k |
| Suhu Air | Suhu air nutrisi (20–28°C) | DS18B20 Waterproof | Rp 15–25k |
| Suhu + Kelembapan | Suhu & RH greenhouse | DHT22 | Rp 25–40k |
| Cahaya | Intensitas cahaya | BH1750 | Rp 10–20k |

### Phase 2: Kontrol Otomatis

| Komponen | Fungsi | Harga Est. |
|----------|--------|------------|
| Relay Module 4-Ch | On/off pompa, dosing, lampu | Rp 25–40k |
| Peristaltic Pump ×2 | Dosing nutrisi A & B | Rp 80–150k × 2 |
| Float Sensor | Level air tandon | Rp 15–25k |

### Phase 3: CCTV

| Komponen | Opsi | Harga |
|----------|------|-------|
| ESP32-CAM | DIY, kualitas OK | Rp 80k |
| TP-Link Tapo C200 | Plug & play, night vision | Rp 250–350k |

### Total Budget

| Phase | Budget |
|-------|--------|
| Phase 1 (Monitoring) | Rp 400–700k |
| Phase 2 (Control) | Rp 250–450k |
| Phase 3 (CCTV) | Rp 80–350k |
| Tambahan (power, housing) | Rp 100–200k |
| **TOTAL** | **Rp 830k – 1.7 juta** |

---

## 4. Database Schema (Supabase PostgreSQL)

### sensor_readings

| Column | Type | Deskripsi |
|--------|------|-----------|
| id | BIGINT PK | Auto-increment |
| greenhouse_id | TEXT NOT NULL | 'gh-1', 'gh-2' |
| sensor_type | TEXT NOT NULL | 'ph', 'tds', 'water_temp', 'air_temp', 'humidity', 'light' |
| value | FLOAT NOT NULL | Nilai bacaan |
| unit | TEXT NOT NULL | 'pH', 'ppm', '°C', '%', 'lux' |
| created_at | TIMESTAMPTZ | DEFAULT now() |

Index: `(greenhouse_id, sensor_type, created_at DESC)`

### greenhouses

| Column | Type | Deskripsi |
|--------|------|-----------|
| id | TEXT PK | 'gh-1', 'gh-2' |
| name | TEXT | 'Greenhouse Utama' |
| location | TEXT | 'Gunung Sari Block A' |
| crops | TEXT[] | ['pakcoy', 'selada-hijau'] |
| status | TEXT | 'active', 'maintenance', 'inactive' |
| camera_url | TEXT | URL stream CCTV (nullable) |

### alerts

| Column | Type | Deskripsi |
|--------|------|-----------|
| id | BIGINT PK | |
| greenhouse_id | TEXT | FK |
| sensor_type | TEXT | Sensor trigger |
| alert_type | TEXT | 'warning', 'critical' |
| message | TEXT | 'pH di bawah threshold: 4.8' |
| value | FLOAT | Nilai saat alert |
| resolved | BOOLEAN | DEFAULT false |

### control_commands

| Column | Type | Deskripsi |
|--------|------|-----------|
| id | BIGINT PK | |
| greenhouse_id | TEXT | Target |
| device | TEXT | 'pump_main', 'pump_nutrient_a', etc. |
| action | TEXT | 'on', 'off', 'auto' |
| initiated_by | TEXT | 'manual', 'auto' |
| status | TEXT | 'pending', 'executed', 'failed' |

### thresholds

| Column | Type | Deskripsi |
|--------|------|-----------|
| greenhouse_id | TEXT | FK |
| sensor_type | TEXT | 'ph', 'tds', etc. |
| min_value | FLOAT | Batas bawah |
| max_value | FLOAT | Batas atas |
| auto_action | JSONB | {device, action, duration_sec} |

---

## 5. Dashboard UI Design

### Public Dashboard (/dashboard)

| Section | Konten |
|---------|--------|
| Header | "Live dari Greenhouse Mabruk Farm" + timestamp |
| Greenhouse Selector | Tab/dropdown pilih greenhouse |
| Live Camera | CCTV embed atau foto terkini |
| Sensor Overview | 6 kartu: pH, TDS, Suhu Air, Suhu Udara, Kelembapan, Cahaya |
| Status Badge | "Semua sensor optimal ✅" atau warning |
| Grafik 24 Jam | Line chart pH + TDS + Suhu |
| Info Box | "Apa arti angka-angka ini?" (edukasi) |

### Sensor Card

- Icon (Lucide sesuai sensor)
- Label ("pH Air", "Nutrisi (TDS)")
- Value besar + unit ("6.2 pH", "980 ppm")
- Status dot (hijau/kuning/merah)
- Range bar visual
- "2 menit yang lalu" (relative time)

### Admin Dashboard (/dashboard/admin)

- Control Panel: toggle pompa, mode auto/manual
- Threshold Settings: min/max per sensor
- Alert History: filter by greenhouse/sensor/severity
- Data Export: CSV
- Historical Charts: 7d, 30d, custom
- WhatsApp/Telegram notifications

---

## 6. Implementation Phases

### Phase 0: Website Launch (Sekarang)

- Buat folder `/lib/iot/` dan `/routes/dashboard/` (placeholder)
- Siapkan env vars Supabase (belum diisi)
- `/dashboard` → "Coming Soon" page
- Trust badge: "📡 IoT Monitoring (Coming Soon)"

### Phase 1: Monitoring Dasar (+2–3 bulan)

- Hardware: ESP32 + 5 sensor (~Rp 400–700k)
- Setup Supabase (gratis)
- Firmware: baca sensor → POST tiap 5 menit
- Dashboard: sensor cards + chart 24 jam
- Test 1 minggu → go live

### Phase 2: Kontrol Otomatis (+1–2 bulan setelah Phase 1)

- Hardware: relay + 2 peristaltic pump (~Rp 250–450k)
- Firmware update: cek control_commands, eksekusi relay
- Admin dashboard: toggle pompa, mode auto
- Threshold: pH < 5.5 → auto-dose nutrisi A
- Safety: local failsafe di ESP32

### Phase 3: CCTV (+1–2 bulan setelah Phase 2)

- ESP32-CAM atau IP Camera
- Stream via YouTube Live (gratis) atau Cloudflare Stream
- Embed di /dashboard
- Snapshot otomatis tiap jam → Cloudinary

### Phase 4: Advanced (+3–6 bulan, opsional)

- Multi-greenhouse support
- WhatsApp Alert (via Fonnte/Twilio)
- Historical analytics: korelasi data + yield
- **Customer Traceability**: QR code kemasan → scan → lihat data greenhouse
- Machine Learning: prediksi optimal harvest time

---

## 7. Total Timeline & Biaya

| Phase | Timeline | Hardware | Service/bulan |
|-------|----------|----------|---------------|
| 0: Website (IoT-ready) | Sekarang | Rp 0 | Rp 0 |
| 1: Monitoring | +2–3 bulan | Rp 400–700k | Rp 0 (Supabase free) |
| 2: Control | +1–2 bulan | Rp 250–450k | Rp 0 |
| 3: CCTV | +1–2 bulan | Rp 80–350k | Rp 0–80k |
| 4: Advanced | +3–6 bulan | Rp 0–200k | Rp 0–100k |
| **TOTAL (0–3)** | **6–9 bulan** | **Rp 730k–1.5 juta** | **Rp 0–80k/bulan** |

---

## 8. Internet di Gunung Sari

| Opsi | Speed | Biaya/bulan | Cocok? |
|------|-------|-------------|--------|
| 4G Modem (Telkomsel/XL) | 5–20 Mbps | Rp 100–300k | ✅ Paling realistis |
| IndiHome Fiber | 10–100 Mbps | Rp 300–500k | ✅ Ideal (cek coverage) |
| Starlink | 50–200 Mbps | Rp 750k/bulan + Rp 9 juta | ❌ Terlalu mahal |

Data sensor sangat kecil (~1 KB per 5 menit = ~300 KB/hari). 4G sudah cukup. CCTV butuh 1–5 Mbps.
