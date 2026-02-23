import { env } from '$env/dynamic/public'

const PUBLIC_SITE_URL = env.PUBLIC_SITE_URL ?? 'https://mabruk.farm'

export interface MetaTags {
	title: string
	description: string
	image?: string
	url?: string
	type?: string
}

export function createMetaTags(meta: MetaTags) {
	return {
		title: meta.title,
		description: meta.description,
		ogTitle: meta.title,
		ogDescription: meta.description,
		ogImage:
			meta.image ||
			'https://res.cloudinary.com/dkmovhvou/image/upload/c_fill,w_1200,h_630,b_rgb:1B5E20,co_white,l_text:Arial_48_bold:Mabruk%20Farm%20%E2%80%94%20Sayuran%20Berkah/fl_layer_apply/v1/og-placeholder',
		ogUrl: meta.url || PUBLIC_SITE_URL,
		ogType: meta.type || 'website'
	}
}

export function createLocalBusinessJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Mabruk Farm',
		description: 'Sayuran hidroponik segar tanpa pestisida dari Gunung Sari, Pesawaran, Lampung',
		url: PUBLIC_SITE_URL,
		telephone: '+6285269458526',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Desa Gunung Sari',
			addressLocality: 'Kec. Way Khilau',
			addressRegion: 'Pesawaran, Lampung',
			addressCountry: 'ID'
		}
	}
}

export function createArticleJsonLd(params: {
	headline: string
	datePublished: string
	description: string
	url: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: params.headline,
		datePublished: params.datePublished,
		description: params.description,
		url: params.url,
		author: {
			'@type': 'Organization',
			name: 'Mabruk Farm'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Mabruk Farm',
			url: PUBLIC_SITE_URL
		}
	}
}

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	}
}

export function createProductJsonLd(params: {
	name: string
	description: string
	price: number
	currency?: string
	availability: boolean
	url: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: params.name,
		description: params.description,
		url: params.url,
		offers: {
			'@type': 'Offer',
			price: params.price,
			priceCurrency: params.currency || 'IDR',
			availability: params.availability
				? 'https://schema.org/InStock'
				: 'https://schema.org/OutOfStock'
		}
	}
}
