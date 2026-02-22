import type { PageServerLoad } from './$types'
import { fetchLanggananPage, fetchFaqsByCategory } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const [pageData, faqs] = await Promise.all([
		fetchLanggananPage(),
		fetchFaqsByCategory('langganan')
	])
	return { pageData, faqs }
}
