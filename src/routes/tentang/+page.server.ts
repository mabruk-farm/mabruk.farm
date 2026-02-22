import type { PageServerLoad } from './$types'
import { fetchAboutPage } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const pageData = await fetchAboutPage()
	return { pageData }
}
