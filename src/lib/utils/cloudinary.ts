import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { env } from '$env/dynamic/public'

export const cld = new Cloudinary({
	cloud: {
		cloudName: env.PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'dkmovhvou'
	}
})

export function getImageUrl(publicId: string, width?: number, height?: number): string {
	let image = cld.image(publicId).format('auto').quality('auto')

	if (width && height) {
		image = image.resize(scale().width(width).height(height))
	} else if (width) {
		image = image.resize(scale().width(width))
	} else if (height) {
		image = image.resize(scale().height(height))
	}

	return image.toURL()
}
