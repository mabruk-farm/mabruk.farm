import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public'

export const cld = new Cloudinary({
	cloud: {
		cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME
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
