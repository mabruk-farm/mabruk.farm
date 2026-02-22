export interface StaticAboutPage {
	heroTitle: string
	heroSubtitle: string
	namaMeaning: string
	nameMeaningSubtext: string
	storyParagraphs: string[]
	storyImageUrl: string
	team: { name: string; description: string; imageUrl: string }[]
	processSteps: { title: string; description: string; icon: string }[]
	values: { title: string; description: string; icon: string }[]
}

export const aboutPage: StaticAboutPage = {
	heroTitle: 'Berkah dari Gunung Sari',
	heroSubtitle:
		'Cerita dua bersaudara yang percaya bahwa pertanian modern bisa membawa berkah untuk banyak orang.',
	namaMeaning:
		'"Mabruk" adalah kata dalam bahasa Arab yang berarti "diberkahi" atau "penuh berkah". Ini bukan sekadar nama — ini adalah doa dan komitmen kami.',
	nameMeaningSubtext:
		'Kami percaya bahwa ketika makanan ditanam dengan cara yang baik, dengan niat yang baik, dan sampai ke orang-orang dengan cara yang baik — itu adalah berkah. Dari greenhouse kecil kami di Gunung Sari, kami ingin menyebarkan berkah itu ke setiap keluarga di Lampung.',
	storyParagraphs: [
		'Mabruk Farm bermula dari percakapan sederhana antara dua bersaudara: Andri dan Aan.',
		'Andri, yang berkarier di bidang teknologi di Jakarta, dan Aan, yang sehari-hari hidup di Desa Gunung Sari, Pesawaran, Lampung — sama-sama melihat satu masalah: sayuran di pasar sering tidak segar, terpapar pestisida, dan kualitasnya tidak konsisten.',
		'"Bagaimana kalau kita tanam sendiri? Dengan cara yang lebih baik?" Dari pertanyaan itu lahirlah Mabruk Farm. Kami memilih hidroponik karena tiga alasan: bisa menanam tanpa pestisida, hasilnya konsisten sepanjang tahun, dan hemat air.',
		'Hari ini, greenhouse kami di Desa Gunung Sari menghasilkan sayuran segar setiap hari untuk keluarga, restoran, hotel, dan program Makan Bergizi Gratis di Lampung. Dan kami baru mulai.'
	],
	storyImageUrl:
		'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200',
	team: [
		{
			name: 'Andri — Co-Founder',
			description: 'Mengelola strategi, pemasaran, dan pengembangan bisnis Mabruk Farm.',
			imageUrl:
				'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_200,h_200,c_fill,g_face/https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
		},
		{
			name: 'Aan — Co-Founder',
			description:
				'Mengelola operasional harian di greenhouse Gunung Sari, dari semai hingga pengiriman.',
			imageUrl:
				'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_200,h_200,c_fill,g_face/https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
		}
	],
	processSteps: [
		{
			title: 'Semai',
			description: 'Benih disemai di rockwool steril dalam ruang terkontrol',
			icon: 'Sprout'
		},
		{
			title: 'Tanam',
			description: 'Bibit dipindahkan ke sistem NFT/DFT di greenhouse',
			icon: 'Leaf'
		},
		{
			title: 'Rawat',
			description: 'Nutrisi AB Mix dikontrol 2x sehari, pH & TDS dipantau',
			icon: 'FlaskConical'
		},
		{
			title: 'Panen',
			description: 'Sayuran dipanen di pagi hari saat nutrisi paling optimal',
			icon: 'Scissors'
		},
		{
			title: 'Kemas',
			description: 'Dicuci bersih, ditimbang, dikemas dengan label Mabruk Farm',
			icon: 'Package'
		},
		{
			title: 'Kirim',
			description: 'Dikirim langsung ke customer di hari yang sama',
			icon: 'Truck'
		}
	],
	values: [
		{
			title: 'Kebersihan',
			description: 'Greenhouse tertutup, media tanam steril, proses panen higienis',
			icon: 'ShieldCheck'
		},
		{
			title: 'Tanpa Pestisida',
			description:
				'Insect net dan pengendalian hama organik (neem oil). Nol pestisida kimia.',
			icon: 'Leaf'
		},
		{
			title: 'Keberlanjutan',
			description: 'Hidroponik menggunakan 90% lebih sedikit air dibanding konvensional',
			icon: 'Recycle'
		},
		{
			title: 'Pemberdayaan Desa',
			description: 'Mempekerjakan warga Gunung Sari, memajukan ekonomi desa',
			icon: 'Users'
		}
	]
}
