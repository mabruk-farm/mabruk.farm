import type { PageServerLoad } from './$types'
import { fetchFaqsByCategory } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const faqs = await fetchFaqsByCategory('kontak')
	return { faqs }
}
