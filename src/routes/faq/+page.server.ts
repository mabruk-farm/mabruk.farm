import type { PageServerLoad } from './$types'
import { fetchFaqs } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const faqs = await fetchFaqs()

	// Group FAQs by category
	const categoryLabels: Record<string, string> = {
		pemesanan: 'Pemesanan & Pembayaran',
		pengiriman: 'Pengiriman',
		produk: 'Produk & Kualitas',
		langganan: 'Langganan',
		kerjasama: 'Kerjasama B2B',
		eduwisata: 'Eduwisata',
		kontak: 'Kontak'
	}

	const categoryOrder = ['pemesanan', 'pengiriman', 'produk', 'langganan', 'kerjasama']

	const sections = categoryOrder
		.map((cat) => ({
			title: categoryLabels[cat] ?? cat,
			items: faqs
				.filter((f) => f.category === cat)
				.map((f) => ({ question: f.question, answer: f.answer }))
		}))
		.filter((s) => s.items.length > 0)

	return { sections }
}
