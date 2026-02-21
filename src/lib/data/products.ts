export interface StaticProduct {
	_id: string
	name: string
	slug: { current: string }
	imageUrl: string
	price: number
	unit: string
	category: string
	badges: string[]
	shortDescription: string
	available: boolean
}

export interface StaticProductDetail extends StaticProduct {
	description: string
	nutrition: string
	storageTips: string
	harvestDays: string
}

export const allProducts: StaticProductDetail[] = [
	{
		_id: 'static-1',
		name: 'Pakcoy Hidroponik',
		slug: { current: 'pakcoy-hidroponik' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1625865797942-9db630f4a498?w=800',
		price: 25000,
		unit: 'kg',
		category: 'Sayuran Daun',
		badges: ['Best Seller'],
		shortDescription: 'Renyah, manis, cocok untuk tumis dan sup',
		available: true,
		description:
			'Pakcoy segar dari greenhouse Mabruk Farm. Batangnya renyah, daunnya lembut, dan rasanya sedikit manis. Cocok untuk tumis, sup, atau dimakan segar sebagai lalapan. Ditanam tanpa pestisida dengan nutrisi terkontrol.',
		nutrition:
			'Kaya vitamin A, vitamin C, kalsium, dan zat besi. Baik untuk kesehatan tulang dan daya tahan tubuh.',
		storageTips:
			'Bungkus dengan tisu lembap, masukkan plastik, simpan di kulkas. Tahan 5–7 hari.',
		harvestDays: '25–30 hari'
	},
	{
		_id: 'static-2',
		name: 'Selada Hijau',
		slug: { current: 'selada-hijau' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800',
		price: 35000,
		unit: 'kg',
		category: 'Sayuran Premium',
		badges: ['Premium'],
		shortDescription: 'Daun lembut, segar sempurna untuk salad',
		available: true,
		description:
			'Selada hijau hidroponik dengan daun lembut dan rasa yang segar. Pilihan sempurna untuk salad, sandwich, burger, atau wrap. Karena ditanam di greenhouse tertutup, daunnya bersih dan tidak perlu dicuci berulang kali.',
		nutrition:
			'Sumber vitamin K, vitamin A, dan folat. Rendah kalori, cocok untuk diet sehat.',
		storageTips:
			'Jangan dicuci sebelum disimpan. Bungkus tisu kering, masukkan wadah tertutup di kulkas. Tahan 7–10 hari.',
		harvestDays: '30–35 hari'
	},
	{
		_id: 'static-3',
		name: 'Selada Merah',
		slug: { current: 'selada-merah' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800',
		price: 40000,
		unit: 'kg',
		category: 'Sayuran Premium',
		badges: ['Premium'],
		shortDescription: 'Warna cantik, kaya antioksidan',
		available: true,
		description:
			'Selada merah dengan warna ungu kemerahan yang cantik di piring. Rasanya sedikit lebih pahit dari selada hijau, memberikan karakter unik pada salad. Kaya antioksidan berkat pigmen antosianin di daunnya.',
		nutrition:
			'Tinggi antioksidan (antosianin), vitamin A, vitamin K. Baik untuk kesehatan jantung dan anti-inflamasi.',
		storageTips: 'Sama seperti selada hijau. Simpan kering di kulkas, tahan 7–10 hari.',
		harvestDays: '30–35 hari'
	},
	{
		_id: 'static-4',
		name: 'Kangkung Hidroponik',
		slug: { current: 'kangkung-hidroponik' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1518977676601-b28f61110df6?w=800',
		price: 20000,
		unit: 'kg',
		category: 'Sayuran Daun',
		badges: ['Favorit'],
		shortDescription: 'Batang renyah, bebas tanah, siap masak',
		available: true,
		description:
			'Kangkung yang berbeda dari pasar — batangnya renyah, daunnya lebih bersih, dan bebas tanah. Ditanam di air bersih dengan nutrisi terkontrol. Cah kangkung dari Mabruk Farm terasa lebih segar dan tahan lama.',
		nutrition:
			'Sumber zat besi, vitamin A, dan vitamin C. Baik untuk kesehatan mata dan mencegah anemia.',
		storageTips:
			'Rendam ujung batang di air seperti bunga, atau bungkus tisu basah. Tahan 3–5 hari di kulkas.',
		harvestDays: '20–25 hari'
	},
	{
		_id: 'static-5',
		name: 'Bayam Hidroponik',
		slug: { current: 'bayam-hidroponik' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800',
		price: 22000,
		unit: 'kg',
		category: 'Sayuran Daun',
		badges: ['Favorit'],
		shortDescription: 'Daun tebal, nutrisi tinggi, tanpa pestisida',
		available: true,
		description:
			'Bayam hijau segar dengan daun tebal dan batang kokoh. Rasanya ringan dan manis, cocok untuk sup bayam, tumisan, atau jus hijau. Ditanam tanpa pestisida sehingga aman dikonsumsi setiap hari.',
		nutrition:
			'Kaya zat besi, kalsium, vitamin A, dan vitamin C. Superfood untuk energi dan daya tahan tubuh.',
		storageTips:
			'Bungkus tisu lembap di wadah tertutup. Tahan 3–5 hari di kulkas. Bisa juga diblansir dan dibekukan.',
		harvestDays: '20–25 hari'
	},
	{
		_id: 'static-6',
		name: 'Sawi / Samhong',
		slug: { current: 'sawi-samhong' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1594282486756-e1a3e6cb0c19?w=800',
		price: 23000,
		unit: 'kg',
		category: 'Sayuran Daun',
		badges: ['Best Seller'],
		shortDescription: 'Serbaguna — cocok untuk berbagai masakan',
		available: true,
		description:
			'Sawi samhong yang populer untuk berbagai masakan — dari mie ayam, bakso, hingga capcay. Batang tebal dan renyah, daun hijau segar. Versi hidroponik kami lebih bersih dan tahan lama dibanding sawi konvensional.',
		nutrition: 'Vitamin A, vitamin C, kalsium. Baik untuk pencernaan dan kesehatan tulang.',
		storageTips: 'Bungkus plastik longgar, simpan di kulkas bagian sayur. Tahan 5–7 hari.',
		harvestDays: '25–30 hari'
	},
	{
		_id: 'static-7',
		name: 'Kailan Hidroponik',
		slug: { current: 'kailan-hidroponik' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1508747703725-719e5f6d7fbe?w=800',
		price: 35000,
		unit: 'kg',
		category: 'Sayuran Premium',
		badges: ['Premium'],
		shortDescription: 'Chinese broccoli, tender dan tidak berserat',
		available: true,
		description:
			'Kailan atau Chinese broccoli dengan batang tebal dan daun hijau gelap. Favorit di restoran Chinese food — ditumis dengan bawang putih dan saus tiram, rasanya luar biasa. Versi hidroponik kami lebih tender dan tidak berserat.',
		nutrition:
			'Tinggi vitamin A, vitamin C, kalsium, dan serat. Baik untuk pencernaan dan kekebalan tubuh.',
		storageTips: 'Bungkus tisu kering, masukkan plastik. Tahan 5–7 hari di kulkas.',
		harvestDays: '35–40 hari'
	},
	{
		_id: 'static-8',
		name: 'Basil Segar',
		slug: { current: 'basil-segar' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=800',
		price: 50000,
		unit: 'kg',
		category: 'Herbs',
		badges: ['Premium'],
		shortDescription: 'Aroma khas, essential untuk masakan Italia',
		available: true,
		description:
			'Basil segar dengan aroma khas yang kuat — essential untuk pasta, pizza, caprese salad, dan masakan Italia. Juga bisa dipakai untuk teh herbal. Ditanam hidroponik menghasilkan daun yang lebih aromatik dan lembut.',
		nutrition:
			'Kaya antioksidan, vitamin K, dan minyak esensial. Memiliki sifat anti-inflamasi alami.',
		storageTips:
			'Jangan masukkan kulkas! Taruh di gelas air di suhu ruang seperti bunga. Tahan 5–7 hari.',
		harvestDays: '30–40 hari'
	},
	{
		_id: 'static-9',
		name: 'Mint Segar',
		slug: { current: 'mint-segar' },
		imageUrl:
			'https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800',
		price: 55000,
		unit: 'kg',
		category: 'Herbs',
		badges: ['Premium'],
		shortDescription: 'Menyegarkan, sempurna untuk minuman dan dessert',
		available: true,
		description:
			'Daun mint segar dengan aroma menyegarkan. Sempurna untuk mojito, infused water, teh mint, atau garnish dessert. Daun hidroponik kami lebih tebal dan aromanya lebih kuat dibanding mint biasa.',
		nutrition:
			'Mengandung menthol alami, vitamin A, dan antioksidan. Baik untuk pencernaan dan menyegarkan napas.',
		storageTips:
			'Bungkus tisu lembap, masukkan wadah tertutup di kulkas. Tahan 5–7 hari. Atau rendam di air.',
		harvestDays: '30–40 hari'
	}
]

export const featuredProducts: StaticProduct[] = allProducts.slice(0, 6)
