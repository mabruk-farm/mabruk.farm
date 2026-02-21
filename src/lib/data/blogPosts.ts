export interface StaticBlogPost {
	_id: string
	title: string
	slug: { current: string }
	coverImageUrl: string
	excerpt: string
	category: string
	publishedAt: string
	readingTimeMinutes: number
}

export interface StaticBlogPostDetail extends StaticBlogPost {
	body: string[]
}

export const allBlogPostsWithBody: StaticBlogPostDetail[] = [
	{
		_id: 'static-b1',
		title: 'Kenalan dengan Mabruk Farm: Greenhouse di Jantung Pesawaran',
		slug: { current: 'kenalan-dengan-mabruk-farm' },
		coverImageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200',
		excerpt:
			'Bagaimana dua bersaudara membangun pertanian hidroponik modern di Desa Gunung Sari dan membawa berkah untuk keluarga di Lampung.',
		category: 'Behind the Scenes',
		publishedAt: '2026-02-01',
		readingTimeMinutes: 5,
		body: [
			'Di kaki Gunung Pesawaran, tersembunyi di antara pepohonan dan udara sejuk Desa Gunung Sari, berdiri sebuah greenhouse modern yang mungkin tidak Anda sangka ada di sana. Inilah Mabruk Farm — pertanian hidroponik yang didirikan oleh dua bersaudara, Andri dan Aan, dengan satu misi sederhana: menyediakan sayuran yang benar-benar bersih dan segar untuk keluarga di Lampung.',
			'Nama "Mabruk" sendiri berasal dari bahasa Arab yang berarti "diberkahi". Bagi Andri dan Aan, ini bukan sekadar nama bisnis — ini adalah doa. Doa agar setiap sayuran yang keluar dari greenhouse mereka membawa berkah bagi yang menanam, yang mengirim, dan yang memakannya.',
			'Perjalanan Mabruk Farm dimulai dari percakapan sederhana. Andri, yang berkarier di bidang teknologi di Jakarta, pulang ke kampung halaman dan melihat bahwa sayuran di pasar lokal sering layu, terpapar pestisida, dan kualitasnya tidak konsisten. Bersama Aan yang sehari-hari hidup di Gunung Sari, mereka memutuskan untuk membangun greenhouse hidroponik pertama mereka.',
			'Hari ini, greenhouse Mabruk Farm menghasilkan berbagai jenis sayuran segar setiap hari — dari pakcoy, selada, kangkung, hingga herbs seperti basil dan mint. Semuanya ditanam tanpa pestisida, dengan nutrisi yang dikontrol setiap hari, dan dipanen pagi hari untuk menjamin kesegaran maksimal. Dan ini baru permulaan.'
		]
	},
	{
		_id: 'static-b2',
		title: '5 Alasan Sayur Hidroponik Lebih Sehat dari Sayur Biasa',
		slug: { current: '5-alasan-sayur-hidroponik-lebih-sehat' },
		coverImageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
		excerpt:
			'Dari nutrisi terkontrol hingga bebas pestisida — inilah mengapa sayuran hidroponik menjadi pilihan cerdas untuk keluarga sehat.',
		category: 'Edukasi',
		publishedAt: '2026-02-10',
		readingTimeMinutes: 7,
		body: [
			'Sering dengar orang bilang "sayur hidroponik lebih sehat"? Tapi apa benar, dan kenapa? Di artikel ini, kami jelaskan 5 alasan utama mengapa sayuran hidroponik — khususnya dari Mabruk Farm — bisa jadi pilihan lebih cerdas untuk kesehatan keluarga Anda.',
			'Pertama, nutrisi yang terkontrol. Dalam sistem hidroponik, setiap tanaman mendapat campuran nutrisi (AB Mix) yang diukur presisi setiap hari. pH dan TDS (Total Dissolved Solids) dipantau untuk memastikan tanaman menyerap nutrisi optimal. Hasilnya? Sayuran yang lebih kaya vitamin dan mineral dibanding yang ditanam di tanah biasa.',
			'Kedua, 100% tanpa pestisida. Karena ditanam di dalam greenhouse tertutup dengan insect net, hama bisa dikendalikan tanpa pestisida kimia. Di Mabruk Farm, kami menggunakan pengendalian hama organik seperti neem oil. Artinya, sayuran Anda benar-benar bersih dari residu kimia berbahaya.',
			'Ketiga, lebih bersih dan higienis. Tanaman hidroponik tidak tumbuh di tanah, jadi tidak ada risiko kontaminasi dari tanah, cacing, atau bakteri tanah. Sayuran bisa langsung dimakan setelah dicuci ringan — bahkan beberapa jenis seperti selada bisa langsung dimakan tanpa cuci ulang. Keempat, lebih segar karena dipanen lebih dekat. Dan kelima, konsisten sepanjang tahun — tidak terpengaruh musim hujan atau kemarau.'
		]
	},
	{
		_id: 'static-b3',
		title: 'Perjalanan Sayuran Kami dari Greenhouse ke Meja Anda',
		slug: { current: 'perjalanan-sayuran-greenhouse-ke-meja' },
		coverImageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200',
		excerpt:
			'Dari semai di rockwool, tumbuh di sistem NFT, dipanen pagi hari — inilah proses 6 langkah yang menjamin kesegaran di setiap gigitan.',
		category: 'Behind the Scenes',
		publishedAt: '2026-02-15',
		readingTimeMinutes: 6,
		body: [
			'Pernahkah Anda bertanya-tanya, bagaimana sayuran hidroponik bisa sampai ke meja makan Anda dalam keadaan segar sempurna? Di Mabruk Farm, ada 6 langkah yang kami lalui untuk memastikan setiap helai daun yang Anda terima adalah yang terbaik.',
			'Langkah pertama adalah semai. Benih ditanam di media rockwool steril dalam ruang semai terkontrol. Setelah bibit cukup kuat (biasanya 7-10 hari), mereka dipindahkan ke sistem NFT (Nutrient Film Technique) di greenhouse utama. Di sinilah mereka tumbuh dengan aliran nutrisi yang mengalir tipis di akar tanaman.',
			'Selama masa pertumbuhan, tim kami memantau nutrisi AB Mix dua kali sehari, mengecek pH dan TDS untuk memastikan setiap tanaman mendapat asupan optimal. Proses ini berlangsung 20-40 hari tergantung jenis sayuran. Saat sayuran siap, mereka dipanen di pagi hari — waktu ketika kandungan air dan nutrisi tanaman paling tinggi.',
			'Setelah panen, sayuran langsung dicuci bersih, ditimbang, dan dikemas dengan label Mabruk Farm. Pengemasan dilakukan di area bersih untuk menjaga higienitas. Terakhir, sayuran dikirim langsung ke customer di hari yang sama. Dari greenhouse ke meja Anda, prosesnya tidak lebih dari 24 jam. Itulah rahasia kesegaran Mabruk Farm.'
		]
	}
]

export const blogPosts: StaticBlogPost[] = allBlogPostsWithBody.map(
	({ body: _, ...post }) => post
)
