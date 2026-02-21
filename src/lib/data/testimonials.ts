export interface StaticTestimonial {
	_id: string
	quote: string
	name: string
	role: string
	company: string
	rating: number
}

export const testimonials: StaticTestimonial[] = [
	{
		_id: 'static-t1',
		quote: 'Sejak pakai sayuran dari Mabruk Farm, tamu hotel kami selalu memuji kesegaran saladnya. Suplainya konsisten dan kualitasnya tidak pernah mengecewakan.',
		name: 'Budi Santoso',
		role: 'Purchasing Manager',
		company: 'Hotel Grand Pesawaran',
		rating: 5
	},
	{
		_id: 'static-t2',
		quote: 'Untuk program Makan Bergizi Gratis, kami butuh sayuran yang bersih dan bergizi. Mabruk Farm jadi partner andalan kami di Lampung.',
		name: 'Siti Rahayu',
		role: 'Satgas MBG',
		company: 'Pesawaran',
		rating: 5
	},
	{
		_id: 'static-t3',
		quote: 'Saya langganan Mabruk Farm tiap minggu. Sayurnya tahan lama di kulkas, dan anak-anak suka karena rasanya manis dan segar. Beda banget sama yang di pasar!',
		name: 'Dewi Lestari',
		role: 'Ibu Rumah Tangga',
		company: 'Bandar Lampung',
		rating: 5
	}
]
