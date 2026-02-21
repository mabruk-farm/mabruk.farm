import type { PortableTextBlock } from '@portabletext/types'

// Unified application-level types
// Both Sanity responses and static data map into these

export interface Product {
	_id: string
	name: string
	slug: string
	imageUrl?: string
	price: number
	unit: string
	category: string
	badges: string[]
	shortDescription: string
	available: boolean
}

export interface ProductDetail extends Product {
	galleryUrls: string[]
	description: string
	nutrition: string
	storageTips: string
	harvestDays: string
}

export interface BlogPost {
	_id: string
	title: string
	slug: string
	coverImageUrl?: string
	excerpt: string
	category: string
	publishedAt: string
	readingTimeMinutes: number
}

export interface BlogPostDetail extends BlogPost {
	body: PortableTextBlock[] | null
	bodyPlaintext: string[] | null
	tags: string[]
}

export interface Testimonial {
	_id: string
	quote: string
	name: string
	role: string
	company: string
	rating: number
	imageUrl?: string
}

export interface Partner {
	_id: string
	name: string
	logoUrl?: string
	description: string
}
