export interface StaticKerjasamaPage {
	heroTitle: string
	heroSubtitle: string
	benefits: { title: string; description: string; icon: string }[]
	tiers: {
		name: string
		volume: string
		discount: string
		target: string
		highlighted: boolean
	}[]
	pricingProducts: {
		name: string
		retail: number
		starter: number
		business: number
		enterprise: number
	}[]
	extras: string[]
}

export const kerjasamaPage: StaticKerjasamaPage = {
	heroTitle: 'Partner Suplai Sayuran Segar untuk Bisnis Anda',
	heroSubtitle:
		'Mabruk Farm menyediakan sayuran hidroponik segar dengan kualitas konsisten untuk hotel, restoran, katering, supermarket, dan program Makan Bergizi Gratis di Lampung.',
	benefits: [
		{
			icon: 'ClipboardList',
			title: 'Supply Contract',
			description: 'Kontrak suplai mingguan/bulanan dengan volume dan jadwal disepakati'
		},
		{
			icon: 'Coins',
			title: 'Harga Kompetitif',
			description: 'Harga khusus partner dengan sistem tiering berdasarkan volume'
		},
		{
			icon: 'CheckCircle',
			title: 'Kualitas Konsisten',
			description: 'Standar mutu terjaga — hidroponik tidak terpengaruh musim'
		},
		{
			icon: 'Truck',
			title: 'Pengiriman Terjadwal',
			description: 'Dikirim sesuai jadwal, langsung dari greenhouse ke lokasi Anda'
		},
		{
			icon: 'FileText',
			title: 'Invoice Bulanan',
			description: 'Sistem pembayaran profesional dengan invoice dan laporan'
		},
		{
			icon: 'Headphones',
			title: 'Dedicated Support',
			description: 'Account manager khusus untuk koordinasi order'
		}
	],
	tiers: [
		{
			name: 'Starter',
			volume: '5–20 kg/minggu',
			discount: 'Harga retail',
			target: 'Kafe kecil, warung makan',
			highlighted: false
		},
		{
			name: 'Business',
			volume: '20–50 kg/minggu',
			discount: 'Diskon 10%',
			target: 'Restoran, hotel kecil',
			highlighted: false
		},
		{
			name: 'Enterprise',
			volume: '50–200 kg/minggu',
			discount: 'Diskon 15–20%',
			target: 'Hotel besar, supermarket, MBG',
			highlighted: true
		},
		{
			name: 'Custom',
			volume: '> 200 kg/minggu',
			discount: 'Negosiasi',
			target: 'Jaringan, multi-outlet',
			highlighted: false
		}
	],
	pricingProducts: [
		{ name: 'Pakcoy', retail: 25000, starter: 25000, business: 22500, enterprise: 20000 },
		{ name: 'Selada Hijau', retail: 35000, starter: 35000, business: 31500, enterprise: 28000 },
		{ name: 'Selada Merah', retail: 40000, starter: 40000, business: 36000, enterprise: 32000 },
		{ name: 'Kangkung', retail: 20000, starter: 20000, business: 18000, enterprise: 16000 },
		{ name: 'Bayam', retail: 22000, starter: 22000, business: 19800, enterprise: 17600 },
		{ name: 'Sawi', retail: 23000, starter: 23000, business: 20700, enterprise: 18400 },
		{ name: 'Kailan', retail: 35000, starter: 35000, business: 31500, enterprise: 28000 }
	],
	extras: [
		'Paket sayuran campuran sesuai kebutuhan menu',
		'Custom packaging dengan label bisnis Anda (MOQ berlaku)',
		'Permintaan tanaman khusus bisa diakomodasi dengan pre-order 30 hari'
	]
}
