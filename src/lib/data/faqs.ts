export interface StaticFaq {
	_id: string
	question: string
	answer: string
	category: string
}

export const faqs: StaticFaq[] = [
	// Pemesanan & Pembayaran
	{
		_id: 'faq-p1',
		question: 'Bagaimana cara memesan sayuran dari Mabruk Farm?',
		answer:
			'Sangat mudah! Pilih produk di halaman Produk, klik tombol "Pesan via WhatsApp", dan pesan Anda otomatis terisi. Anda juga bisa langsung chat kami di 0852-6945-8526.',
		category: 'pemesanan'
	},
	{
		_id: 'faq-p2',
		question: 'Metode pembayaran apa saja yang tersedia?',
		answer:
			'Kami menerima transfer bank (BCA), dan e-wallet (Dana, OVO, GoPay, ShopeePay). Pembayaran dilakukan setelah admin mengonfirmasi pesanan dan total harga.',
		category: 'pemesanan'
	},
	{
		_id: 'faq-p3',
		question: 'Apakah ada minimal order?',
		answer:
			'Ya, minimal pembelian adalah Rp 50.000 per transaksi. Untuk paket langganan, minimal order sudah termasuk dalam harga paket.',
		category: 'pemesanan'
	},
	{
		_id: 'faq-p4',
		question: 'Bisa bayar COD (bayar di tempat)?',
		answer:
			'Saat ini kami belum menyediakan COD. Pembayaran dilakukan terlebih dahulu via transfer atau e-wallet sebelum pengiriman.',
		category: 'pemesanan'
	},

	// Pengiriman
	{
		_id: 'faq-k1',
		question: 'Mabruk Farm kirim ke mana saja?',
		answer:
			'Kami melayani pengiriman ke area Pesawaran, Bandar Lampung, dan sekitarnya. Untuk detail zona dan ongkir, cek halaman Area Pengiriman kami.',
		category: 'pengiriman'
	},
	{
		_id: 'faq-k2',
		question: 'Berapa ongkos kirimnya?',
		answer:
			'Gratis ongkir untuk area Pesawaran. Area Bandar Lampung Kota mulai Rp 10.000, dan area pinggiran Rp 15.000. Pelanggan langganan mendapat benefit gratis ongkir.',
		category: 'pengiriman'
	},
	{
		_id: 'faq-k3',
		question: 'Kapan pesanan saya akan dikirim?',
		answer:
			'Order sebelum pukul 10:00 WIB akan dikirim di hari yang sama (pukul 14:00–17:00). Order setelah jam 10 masuk pengiriman hari berikutnya. Pengiriman Senin–Sabtu.',
		category: 'pengiriman'
	},
	{
		_id: 'faq-k4',
		question: 'Bagaimana jika sayuran rusak saat diterima?',
		answer:
			'Kami sangat menjaga kualitas. Jika ada sayuran yang rusak atau tidak sesuai, hubungi kami via WhatsApp dengan foto bukti dalam 24 jam dan kami akan ganti di pengiriman berikutnya.',
		category: 'pengiriman'
	},

	// Produk & Kualitas
	{
		_id: 'faq-q1',
		question: 'Apa itu sayuran hidroponik?',
		answer:
			'Hidroponik adalah metode menanam tanaman tanpa tanah, menggunakan air yang dicampur nutrisi khusus. Di Mabruk Farm, kami menggunakan sistem NFT dan DFT di dalam greenhouse tertutup sehingga sayuran lebih bersih, bebas pestisida, dan nutrisinya terkontrol.',
		category: 'produk'
	},
	{
		_id: 'faq-q2',
		question: 'Apakah benar 100% tanpa pestisida?',
		answer:
			'Ya! Greenhouse kami menggunakan insect net untuk mencegah hama masuk. Jika ada hama, kami gunakan pengendalian organik seperti neem oil. Tidak ada pestisida kimia sama sekali.',
		category: 'produk'
	},
	{
		_id: 'faq-q3',
		question: 'Berapa lama sayuran hidroponik tahan segar?',
		answer:
			'Tergantung jenis sayuran. Selada bisa tahan 7–10 hari di kulkas, pakcoy dan sawi 5–7 hari, kangkung dan bayam 3–5 hari. Tips penyimpanan lengkap ada di halaman detail setiap produk.',
		category: 'produk'
	},
	{
		_id: 'faq-q4',
		question: 'Apakah harga bisa berubah?',
		answer:
			'Harga relatif stabil karena tidak terpengaruh musim. Namun, bisa ada penyesuaian kecil mengikuti harga nutrisi dan biaya operasional. Harga terbaru selalu ter-update di katalog produk kami.',
		category: 'produk'
	},

	// Langganan
	{
		_id: 'faq-l1',
		question: 'Apa itu paket langganan?',
		answer:
			'Paket langganan adalah layanan pengiriman sayuran segar rutin setiap minggu ke rumah Anda. Ada 3 pilihan: Paket Hemat (Rp 50.000/minggu), Paket Keluarga (Rp 100.000/minggu), dan Paket Premium (Rp 150.000/minggu).',
		category: 'langganan'
	},
	{
		_id: 'faq-l2',
		question: 'Bisa berhenti berlangganan kapan saja?',
		answer:
			'Tentu! Tidak ada kontrak atau komitmen jangka panjang. Anda bisa pause, ganti paket, atau berhenti kapan saja. Cukup kabari kami via WhatsApp.',
		category: 'langganan'
	},
	{
		_id: 'faq-l3',
		question: 'Bisa pilih sendiri isi paketnya?',
		answer:
			'Bisa! Anda bisa request jenis sayuran tertentu setiap minggu. Kabari admin via WhatsApp sebelum hari pengiriman dan kami sesuaikan isinya.',
		category: 'langganan'
	},
	{
		_id: 'faq-l4',
		question: 'Bagaimana cara mendaftar langganan?',
		answer:
			'Cukup hubungi kami via WhatsApp, pilih paket yang diinginkan, dan tentukan hari pengiriman. Kami akan mengatur semuanya untuk Anda.',
		category: 'langganan'
	},
	{
		_id: 'faq-l5',
		question: 'Bisa ganti isi paket setiap minggu?',
		answer:
			'Tentu! Anda bisa request jenis sayuran tertentu. Cukup kabari kami via WhatsApp sebelum hari pengiriman.',
		category: 'langganan'
	},
	{
		_id: 'faq-l6',
		question: 'Bagaimana jika saya sedang pergi?',
		answer:
			'Anda bisa pause langganan kapan saja. Hubungi kami minimal 1 hari sebelum jadwal pengiriman untuk skip minggu tersebut.',
		category: 'langganan'
	},
	{
		_id: 'faq-l7',
		question: 'Bagaimana sistem pembayarannya?',
		answer:
			'Pembayaran dilakukan per minggu via transfer bank (BCA) atau e-wallet (Dana, OVO, GoPay). Bisa juga bayar bulanan untuk kemudahan.',
		category: 'langganan'
	},
	{
		_id: 'faq-l8',
		question: 'Apakah ada minimal durasi langganan?',
		answer:
			'Tidak ada. Anda bisa mulai dan berhenti kapan saja. Kami yakin Anda akan terus berlangganan karena kualitas sayuran kami!',
		category: 'langganan'
	},

	// Kerjasama B2B
	{
		_id: 'faq-b1',
		question: 'Bagaimana cara menjadi partner B2B Mabruk Farm?',
		answer:
			'Kunjungi halaman Kerjasama kami dan isi form inquiry, atau hubungi langsung via WhatsApp. Tim kami akan menghubungi Anda untuk diskusi kebutuhan dan harga.',
		category: 'kerjasama'
	},
	{
		_id: 'faq-b2',
		question: 'Berapa minimal order untuk B2B?',
		answer:
			'Untuk partnership B2B, minimal order mulai dari 5 kg per minggu (Tier Starter). Volume lebih besar mendapat diskon bertingkat hingga 20%.',
		category: 'kerjasama'
	},
	{
		_id: 'faq-b3',
		question: 'Apakah ada kontrak untuk supply B2B?',
		answer:
			'Kami menawarkan supply contract mingguan atau bulanan dengan volume dan jadwal yang disepakati bersama. Kontrak bisa disesuaikan dengan kebutuhan bisnis Anda.',
		category: 'kerjasama'
	},

	// Eduwisata
	{
		_id: 'faq-e1',
		question: 'Berapa biaya eduwisata?',
		answer:
			'Biaya bervariasi tergantung paket dan jumlah peserta. Hubungi kami via WhatsApp untuk penawaran terbaik.',
		category: 'eduwisata'
	},
	{
		_id: 'faq-e2',
		question: 'Kapan jadwal kunjungan?',
		answer:
			'Kunjungan tersedia Senin–Sabtu, pukul 08:00–15:00 WIB. Wajib reservasi minimal 3 hari sebelumnya.',
		category: 'eduwisata'
	},
	{
		_id: 'faq-e3',
		question: 'Apakah cocok untuk anak-anak?',
		answer:
			'Sangat cocok! Paket Pelajar dirancang untuk usia SD ke atas. Anak-anak bisa belajar sambil bermain di greenhouse.',
		category: 'eduwisata'
	},
	{
		_id: 'faq-e4',
		question: 'Di mana lokasi Mabruk Farm?',
		answer:
			'Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung. Sekitar 30–45 menit dari pusat kota Bandar Lampung.',
		category: 'eduwisata'
	},

	// Kontak
	{
		_id: 'faq-c1',
		question: 'Bagaimana cara memesan sayuran dari Mabruk Farm?',
		answer:
			'Anda bisa memesan langsung via WhatsApp di 0852-6945-8526. Kirim pesanan sebelum jam 10 pagi, dan sayuran akan dikirim di hari yang sama.',
		category: 'kontak'
	},
	{
		_id: 'faq-c2',
		question: 'Berapa minimal order?',
		answer:
			'Tidak ada minimal order untuk pembelian satuan. Untuk kerjasama B2B (restoran, hotel, dll), minimal order mulai dari 5 kg/minggu.',
		category: 'kontak'
	},
	{
		_id: 'faq-c3',
		question: 'Area pengiriman mencakup mana saja?',
		answer:
			'Saat ini kami melayani pengiriman ke seluruh area Bandar Lampung dan sekitarnya. Untuk area di luar Bandar Lampung, silakan hubungi kami untuk informasi lebih lanjut.',
		category: 'kontak'
	},
	{
		_id: 'faq-c4',
		question: 'Metode pembayaran apa saja yang diterima?',
		answer:
			'Kami menerima transfer bank (BCA, BRI, Mandiri), QRIS, dan pembayaran tunai saat pengiriman (COD) untuk area tertentu.',
		category: 'kontak'
	},
	{
		_id: 'faq-c5',
		question: 'Apakah sayuran Mabruk Farm benar-benar tanpa pestisida?',
		answer:
			'Ya, 100% tanpa pestisida kimia. Kami menggunakan greenhouse tertutup dengan insect net dan pengendalian hama organik (neem oil). Semua sayuran ditanam dengan sistem hidroponik di lingkungan terkontrol.',
		category: 'kontak'
	}
]
