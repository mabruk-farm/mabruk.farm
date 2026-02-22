import type { PageServerLoad } from './$types'
import { fetchAreaPengirimanPage } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const pageData = await fetchAreaPengirimanPage()
	return { pageData }
}
