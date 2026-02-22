import type { PageServerLoad } from './$types'
import { fetchGalleryPhotos } from '$lib/sanity/fetch'

export const load: PageServerLoad = async () => {
	const photos = await fetchGalleryPhotos()
	return { photos }
}
