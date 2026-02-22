import type { PageServerLoad } from './$types'
import { fetchKerjasamaPage } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const pageData = await fetchKerjasamaPage()
	return { pageData }
}
