import { fetchBlogPostBySlug, fetchBlogPosts } from '$lib/sanity/fetch'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const post = await fetchBlogPostBySlug(params.slug)

	if (!post) {
		return { post: null, relatedPosts: [] }
	}

	const allPosts = await fetchBlogPosts()
	const relatedPosts = allPosts.filter((p) => p._id !== post._id).slice(0, 3)

	return { post, relatedPosts }
}
