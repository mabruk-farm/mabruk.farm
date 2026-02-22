export interface StaticAreaPengirimanPage {
	heroTitle: string
	heroSubtitle: string
	zones: {
		zone: string
		area: string
		ongkir: string
		estimasi: string
		colorTheme: string
	}[]
	deliveryInfo: { title: string; description: string; icon: string }[]
	mapsEmbedUrl: string
}

export const areaPengirimanPage: StaticAreaPengirimanPage = {
	heroTitle: 'Kami Mengantar Sayuran Segar ke Area Anda',
	heroSubtitle:
		'Dari greenhouse di Gunung Sari, kami mengirim sayuran segar ke Pesawaran, Bandar Lampung, dan sekitarnya setiap hari.',
	zones: [
		{
			zone: 'Zone 1',
			area: 'Pesawaran (Way Khilau, Gedong Tataan, Padang Cermin)',
			ongkir: 'Gratis',
			estimasi: 'Same day',
			colorTheme: 'primary'
		},
		{
			zone: 'Zone 2',
			area: 'Bandar Lampung Kota (Tanjung Karang, Teluk Betung, Sukarame)',
			ongkir: 'Rp 10.000',
			estimasi: 'Same day',
			colorTheme: 'green'
		},
		{
			zone: 'Zone 3',
			area: 'Bandar Lampung Pinggiran (Kemiling, Rajabasa, Way Halim)',
			ongkir: 'Rp 15.000',
			estimasi: 'Same day / Next day',
			colorTheme: 'amber'
		},
		{
			zone: 'Zone 4',
			area: 'Luar area (Pringsewu, Metro, Lampung Selatan, dll)',
			ongkir: 'Hubungi kami',
			estimasi: 'Disesuaikan',
			colorTheme: 'neutral'
		}
	],
	deliveryInfo: [
		{
			icon: 'Clock',
			title: 'Jadwal Pengiriman',
			description:
				'Senin–Sabtu, pukul 14:00–17:00 WIB. Minggu & hari libur nasional tutup.'
		},
		{
			icon: 'Truck',
			title: 'Cutoff Order',
			description:
				'Order sebelum pukul 10:00 WIB akan dikirim di hari yang sama. Setelahnya, masuk pengiriman hari berikutnya.'
		},
		{
			icon: 'MapPin',
			title: 'Minimal Order',
			description:
				'Minimal pembelian Rp 50.000. Pelanggan langganan mendapat gratis ongkir untuk area tertentu.'
		},
		{
			icon: 'Phone',
			title: 'Luar Area?',
			description:
				'Untuk pengiriman ke area di luar zona di atas, silakan hubungi kami. Kami akan bantu carikan solusi terbaik.'
		}
	],
	mapsEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1!2d104.9711622!3d-5.4573083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e472b1da9737d2d%3A0xc8035f5e16d3ca9e!2sMABRUK%20FARM!5e0!3m2!1sid!2sid'
}
