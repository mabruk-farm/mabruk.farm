import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlFor(source: SanityImageSource | null | undefined): string | undefined {
	if (!builder || !source) return undefined
	return builder.image(source).auto('format').quality(80).url()
}
