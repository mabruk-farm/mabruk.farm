export interface StaticCaraPesanPage {
	heroTitle: string
	heroSubtitle: string
	steps: { title: string; description: string; icon: string }[]
	infoCards: { title: string; description: string; highlight: string; icon: string }[]
	tips: { text: string; icon: string }[]
}

export const caraPesanPage: StaticCaraPesanPage = {
	heroTitle: 'Pesan Sayuran Segar Semudah 1-2-3',
	heroSubtitle:
		'Tidak perlu aplikasi atau registrasi. Cukup WhatsApp, bayar, dan sayuran segar tiba di rumah Anda.',
	steps: [
		{
			icon: 'ShoppingBag',
			title: 'Pilih Produk',
			description:
				'Browse katalog produk kami atau pilih paket langganan mingguan. Lihat harga, deskripsi, dan ketersediaan.'
		},
		{
			icon: 'MessageCircle',
			title: 'Hubungi via WhatsApp',
			description:
				'Klik tombol "Pesan via WhatsApp" di produk yang Anda inginkan. Pesan otomatis terisi — tinggal kirim.'
		},
		{
			icon: 'CreditCard',
			title: 'Konfirmasi & Bayar',
			description:
				'Admin kami akan konfirmasi ketersediaan dan total harga. Bayar via transfer BCA atau e-wallet (Dana, OVO, GoPay).'
		},
		{
			icon: 'Truck',
			title: 'Sayuran Diantar',
			description:
				'Sayuran dipanen segar dan dikirim ke alamat Anda. Order sebelum jam 10 pagi untuk pengiriman di hari yang sama.'
		}
	],
	infoCards: [
		{
			icon: 'Clock',
			title: 'Jam Order',
			description:
				'Sebelum pukul 10:00 WIB untuk pengiriman hari yang sama. Setelahnya, dikirim besok.',
			highlight: 'Cutoff: 10:00 WIB'
		},
		{
			icon: 'Banknote',
			title: 'Minimal Order',
			description:
				'Minimal pembelian Rp 50.000 per transaksi. Gratis ongkir untuk area tertentu.',
			highlight: 'Min. Rp 50.000'
		},
		{
			icon: 'CreditCard',
			title: 'Pembayaran',
			description:
				'Transfer BCA, Dana, OVO, GoPay, atau ShopeePay. Bayar setelah konfirmasi admin.',
			highlight: 'BCA, Dana, OVO, GoPay'
		},
		{
			icon: 'Calendar',
			title: 'Jadwal Pengiriman',
			description: 'Pengiriman setiap Senin sampai Sabtu, pukul 14:00–17:00 WIB.',
			highlight: 'Sen–Sab, 14:00–17:00'
		}
	],
	tips: [
		{
			icon: 'Package',
			text: '<strong>Order pagi, terima sore.</strong> Pesan sebelum jam 10:00 WIB agar sayuran dikirim di hari yang sama.'
		},
		{
			icon: 'MessageCircle',
			text: '<strong>Cantumkan alamat lengkap.</strong> Sertakan patokan atau link Google Maps agar pengiriman lebih cepat.'
		},
		{
			icon: 'Calendar',
			text: '<strong>Mau rutin setiap minggu?</strong> Coba <a href="/langganan" class="font-semibold text-primary underline">Paket Langganan</a> — lebih hemat dan praktis.'
		}
	]
}
