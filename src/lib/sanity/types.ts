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

// --- FAQ & Gallery ---

export interface FaqItem {
	_id: string
	question: string
	answer: string
	category: string
}

export interface GalleryPhoto {
	_id: string
	imageUrl?: string
	alt: string
	category: string
}

// --- Shared sub-types ---

export interface IconItem {
	title: string
	description: string
	icon: string
}

// --- About Page ---

export interface AboutTeamMember {
	name: string
	description: string
	imageUrl?: string
}

export interface AboutPageData {
	heroTitle: string
	heroSubtitle: string
	namaMeaning: string
	nameMeaningSubtext: string
	storyParagraphs: string[]
	storyImageUrl?: string
	team: AboutTeamMember[]
	processSteps: IconItem[]
	values: IconItem[]
}

// --- Langganan Page ---

export interface SubscriptionPackage {
	name: string
	price: string
	period: string
	weight: string
	target: string
	includes: string[]
	highlighted: boolean
}

export interface LanggananPageData {
	heroTitle: string
	heroSubtitle: string
	steps: IconItem[]
	packages: SubscriptionPackage[]
	benefits: IconItem[]
}

// --- Eduwisata Page ---

export interface EduwisataPackage {
	name: string
	duration: string
	target: string
	capacity: string
	includes: string[]
	highlighted: boolean
}

export interface EduwisataPhoto {
	imageUrl?: string
	alt: string
}

export interface EduwisataPageData {
	heroTitle: string
	heroSubtitle: string
	activities: IconItem[]
	photos: EduwisataPhoto[]
	packages: EduwisataPackage[]
	practicalInfo: IconItem[]
}

// --- Kerjasama Page ---

export interface B2BTier {
	name: string
	volume: string
	discount: string
	target: string
	highlighted: boolean
}

export interface B2BPricingProduct {
	name: string
	retail: number
	starter: number
	business: number
	enterprise: number
}

export interface KerjasamaPageData {
	heroTitle: string
	heroSubtitle: string
	benefits: IconItem[]
	tiers: B2BTier[]
	pricingProducts: B2BPricingProduct[]
	extras: string[]
}

// --- Cara Pesan Page ---

export interface InfoCard {
	title: string
	description: string
	highlight: string
	icon: string
}

export interface TipItem {
	text: string
	icon: string
}

export interface CaraPesanPageData {
	heroTitle: string
	heroSubtitle: string
	steps: IconItem[]
	infoCards: InfoCard[]
	tips: TipItem[]
}

// --- Area Pengiriman Page ---

export interface DeliveryZone {
	zone: string
	area: string
	ongkir: string
	estimasi: string
	colorTheme: string
}

export interface AreaPengirimanPageData {
	heroTitle: string
	heroSubtitle: string
	zones: DeliveryZone[]
	deliveryInfo: IconItem[]
	mapsEmbedUrl: string
}
