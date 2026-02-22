import type { PageServerLoad } from './$types'
import { fetchEduwisataPage, fetchFaqsByCategory } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const [pageData, faqs] = await Promise.all([
		fetchEduwisataPage(),
		fetchFaqsByCategory('eduwisata')
	])
	return { pageData, faqs }
}
