export interface StaticLanggananPage {
	heroTitle: string
	heroSubtitle: string
	steps: { title: string; description: string; icon: string }[]
	packages: {
		name: string
		price: string
		period: string
		weight: string
		target: string
		includes: string[]
		highlighted: boolean
	}[]
	benefits: { title: string; description: string; icon: string }[]
}

export const langgananPage: StaticLanggananPage = {
	heroTitle: 'Sayuran Segar Setiap Minggu, Tanpa Ribet',
	heroSubtitle:
		'Pilih paket, kami antar ke pintu rumah Anda setiap minggu. Segar dari greenhouse, langsung ke meja makan. Tanpa komitmen panjang.',
	steps: [
		{
			icon: 'Package',
			title: 'Pilih Paket',
			description: 'Pilih paket langganan sesuai kebutuhan keluarga Anda.'
		},
		{
			icon: 'CalendarCheck',
			title: 'Atur Jadwal',
			description: 'Tentukan hari pengiriman yang paling cocok untuk Anda.'
		},
		{
			icon: 'Truck',
			title: 'Terima di Rumah',
			description: 'Sayuran segar diantar ke pintu rumah Anda setiap minggu.'
		}
	],
	packages: [
		{
			name: 'Paket Hemat',
			price: 'Rp 50.000',
			period: '/minggu',
			weight: '2 kg',
			target: 'Cocok untuk 1–2 orang',
			includes: [
				'Sayuran daun campuran (2 jenis)',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir area Pesawaran',
				'Bisa ganti jenis sayuran'
			],
			highlighted: false
		},
		{
			name: 'Paket Keluarga',
			price: 'Rp 100.000',
			period: '/minggu',
			weight: '4 kg',
			target: 'Cocok untuk 3–4 orang',
			includes: [
				'Sayuran daun campuran (3–4 jenis)',
				'Termasuk 1 jenis sayuran premium',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir Pesawaran & BDL Kota',
				'Variasi berbeda tiap minggu',
				'Bisa request jenis sayuran'
			],
			highlighted: true
		},
		{
			name: 'Paket Premium',
			price: 'Rp 150.000',
			period: '/minggu',
			weight: '5 kg',
			target: 'Cocok untuk 4–6 orang',
			includes: [
				'Sayuran daun + premium (4–5 jenis)',
				'Termasuk herbs segar (basil/mint)',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir semua area layanan',
				'Variasi berbeda tiap minggu',
				'Prioritas pengiriman pagi',
				'Bisa request & custom isi paket'
			],
			highlighted: false
		}
	],
	benefits: [
		{
			icon: 'Percent',
			title: 'Hemat 10–15%',
			description: 'Harga langganan lebih murah dibanding beli satuan.'
		},
		{
			icon: 'Truck',
			title: 'Prioritas Pengiriman',
			description: 'Pelanggan langganan selalu diprioritaskan pengirimannya.'
		},
		{
			icon: 'RefreshCw',
			title: 'Variasi Tiap Minggu',
			description: 'Isi paket berbeda setiap minggu agar tidak bosan.'
		},
		{
			icon: 'CalendarCheck',
			title: 'Bisa Pause Kapan Saja',
			description: 'Sedang pergi? Pause langganan dan lanjutkan saat kembali.'
		},
		{
			icon: 'Leaf',
			title: 'Selalu Segar',
			description: 'Sayuran dipanen di hari pengiriman, bukan stok gudang.'
		},
		{
			icon: 'Heart',
			title: 'Tanpa Komitmen Panjang',
			description: 'Tidak ada kontrak. Bisa berhenti kapan saja tanpa penalti.'
		}
	]
}
