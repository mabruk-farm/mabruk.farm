import { fetchBlogPosts } from '$lib/sanity/fetch'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await fetchBlogPosts()
	return { posts }
}
