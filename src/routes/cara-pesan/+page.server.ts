import type { PageServerLoad } from './$types'
import { fetchCaraPesanPage } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const pageData = await fetchCaraPesanPage()
	return { pageData }
}
