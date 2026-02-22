export interface StaticEduwisataPage {
	heroTitle: string
	heroSubtitle: string
	activities: { title: string; description: string; icon: string }[]
	photos: { imageUrl: string; alt: string }[]
	packages: {
		name: string
		duration: string
		target: string
		capacity: string
		includes: string[]
		highlighted: boolean
	}[]
	practicalInfo: { title: string; description: string; icon: string }[]
}

export const eduwisataPage: StaticEduwisataPage = {
	heroTitle: 'Eduwisata Hidroponik Mabruk Farm',
	heroSubtitle:
		'Ajak keluarga, pelajar, atau komunitas Anda berkunjung ke greenhouse kami. Belajar langsung tentang pertanian hidroponik modern sambil menikmati suasana hijau Gunung Sari.',
	activities: [
		{
			icon: 'GraduationCap',
			title: 'Belajar Hidroponik',
			description:
				'Pengenalan sistem NFT & DFT, cara kerja nutrisi AB Mix, dan mengapa hidroponik lebih ramah lingkungan.'
		},
		{
			icon: 'Sprout',
			title: 'Praktik Semai & Tanam',
			description:
				'Peserta langsung praktik menyemai benih di rockwool dan memindahkan bibit ke sistem hidroponik.'
		},
		{
			icon: 'Camera',
			title: 'Tur Greenhouse',
			description:
				'Jelajahi greenhouse kami, lihat langsung tanaman tumbuh, dan pahami proses dari semai hingga panen.'
		},
		{
			icon: 'Users',
			title: 'Diskusi & Tanya Jawab',
			description:
				'Sesi interaktif dengan tim Mabruk Farm. Cocok untuk pelajar, mahasiswa, atau calon petani hidroponik.'
		}
	],
	photos: [
		{
			imageUrl:
				'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
			alt: 'Greenhouse hidroponik Mabruk Farm'
		},
		{
			imageUrl:
				'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
			alt: 'Tanaman hidroponik tumbuh subur'
		},
		{
			imageUrl:
				'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
			alt: 'Proses perawatan tanaman hidroponik'
		}
	],
	packages: [
		{
			name: 'Paket Pelajar',
			duration: '1.5–2 jam',
			target: 'SD, SMP, SMA',
			capacity: '15–40 orang',
			includes: [
				'Tur greenhouse',
				'Pengenalan hidroponik dasar',
				'Praktik semai benih',
				'Snack & minuman',
				'Sertifikat peserta'
			],
			highlighted: false
		},
		{
			name: 'Paket Komunitas',
			duration: '2–3 jam',
			target: 'Mahasiswa, komunitas, kelompok tani',
			capacity: '10–30 orang',
			includes: [
				'Tur greenhouse lengkap',
				'Workshop hidroponik detail',
				'Praktik semai & tanam',
				'Diskusi bisnis hidroponik',
				'Snack & minuman',
				'Sertifikat peserta'
			],
			highlighted: true
		},
		{
			name: 'Paket Keluarga',
			duration: '1–1.5 jam',
			target: 'Keluarga, group kecil',
			capacity: '2–10 orang',
			includes: [
				'Tur greenhouse',
				'Pengenalan hidroponik',
				'Panen sayuran sendiri (bawa pulang)',
				'Foto di area greenhouse'
			],
			highlighted: false
		}
	],
	practicalInfo: [
		{
			icon: 'MapPin',
			title: 'Lokasi',
			description:
				'Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung (±30–45 menit dari Bandar Lampung)'
		},
		{
			icon: 'Clock',
			title: 'Jam Kunjungan',
			description: 'Senin–Sabtu, 08:00–15:00 WIB'
		},
		{
			icon: 'Users',
			title: 'Reservasi',
			description:
				'Wajib reservasi minimal 3 hari sebelum kunjungan via WhatsApp.'
		}
	]
}
