import { fetchProductBySlug, fetchProducts } from '$lib/sanity/fetch'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const product = await fetchProductBySlug(params.slug)

	if (!product) {
		return { product: null, otherProducts: [] }
	}

	const allProducts = await fetchProducts()
	const otherProducts = allProducts.filter((p) => p._id !== product._id).slice(0, 3)

	return { product, otherProducts }
}
