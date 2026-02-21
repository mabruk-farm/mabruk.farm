import { fetchProducts } from '$lib/sanity/fetch'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const products = await fetchProducts()
	return { products }
}
