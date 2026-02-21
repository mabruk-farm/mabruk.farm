export interface StaticPartner {
	_id: string
	name: string
	description: string
}

export const partners: StaticPartner[] = [
	{ _id: 'static-p1', name: 'Dapur MBG Lampung', description: 'Program Makan Bergizi Gratis' },
	{ _id: 'static-p2', name: 'Hotel Pesawaran', description: 'Hotel Bintang 3' },
	{ _id: 'static-p3', name: 'Restoran Sari Rasa', description: 'Restoran Lokal' },
	{ _id: 'static-p4', name: 'Katering Berkah', description: 'Katering Acara' }
]
