import {
	fetchFeaturedProducts,
	fetchTestimonials,
	fetchPartners,
	fetchBlogPosts
} from '$lib/sanity/fetch'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const [products, testimonials, partners, posts] = await Promise.all([
		fetchFeaturedProducts(),
		fetchTestimonials(),
		fetchPartners(),
		fetchBlogPosts()
	])

	return {
		products,
		testimonials,
		partners,
		posts: posts.slice(0, 3)
	}
}
