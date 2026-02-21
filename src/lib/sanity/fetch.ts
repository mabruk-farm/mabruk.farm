import { sanityClient, isSanityConfigured } from './client'
import { urlFor } from './image'
import {
	allProductsQuery,
	featuredProductsQuery,
	productBySlugQuery,
	allBlogPostsQuery,
	blogPostBySlugQuery,
	allTestimonialsQuery,
	allPartnersQuery
} from './queries'
import type {
	Product,
	ProductDetail,
	BlogPost,
	BlogPostDetail,
	Testimonial,
	Partner
} from './types'
import {
	allProducts as staticAllProducts,
	featuredProducts as staticFeaturedProducts,
	allBlogPostsWithBody as staticBlogPostsWithBody,
	blogPosts as staticBlogPosts,
	testimonials as staticTestimonials,
	partners as staticPartners,
	type StaticProduct,
	type StaticProductDetail,
	type StaticBlogPost,
	type StaticBlogPostDetail,
	type StaticTestimonial,
	type StaticPartner
} from '$lib/data'

// --- Static data mappers ---

function mapStaticProduct(p: StaticProduct): Product {
	return {
		_id: p._id,
		name: p.name,
		slug: p.slug.current,
		imageUrl: p.imageUrl,
		price: p.price,
		unit: p.unit,
		category: p.category,
		badges: p.badges,
		shortDescription: p.shortDescription,
		available: p.available
	}
}

function mapStaticProductDetail(p: StaticProductDetail): ProductDetail {
	return {
		...mapStaticProduct(p),
		galleryUrls: [],
		description: p.description,
		nutrition: p.nutrition,
		storageTips: p.storageTips,
		harvestDays: p.harvestDays
	}
}

function mapStaticBlogPost(p: StaticBlogPost): BlogPost {
	return {
		_id: p._id,
		title: p.title,
		slug: p.slug.current,
		coverImageUrl: p.coverImageUrl,
		excerpt: p.excerpt,
		category: p.category,
		publishedAt: p.publishedAt,
		readingTimeMinutes: p.readingTimeMinutes
	}
}

function mapStaticBlogPostDetail(p: StaticBlogPostDetail): BlogPostDetail {
	return {
		...mapStaticBlogPost(p),
		body: null,
		bodyPlaintext: p.body,
		tags: []
	}
}

function mapStaticTestimonial(t: StaticTestimonial): Testimonial {
	return {
		_id: t._id,
		quote: t.quote,
		name: t.name,
		role: t.role,
		company: t.company,
		rating: t.rating
	}
}

function mapStaticPartner(p: StaticPartner): Partner {
	return {
		_id: p._id,
		name: p.name,
		description: p.description
	}
}

// --- Sanity response mappers ---

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityProduct(p: any): Product {
	return {
		_id: p._id,
		name: p.name,
		slug: p.slug,
		imageUrl: urlFor(p.image),
		price: p.price,
		unit: p.unit,
		category: p.category,
		badges: p.badges ?? [],
		shortDescription: p.shortDescription ?? '',
		available: p.available ?? true
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityProductDetail(p: any): ProductDetail {
	return {
		...mapSanityProduct(p),
		galleryUrls: (p.gallery ?? [])
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.map((img: any) => urlFor(img))
			.filter(Boolean) as string[],
		description: p.description ?? '',
		nutrition: p.nutrition ?? '',
		storageTips: p.storageTips ?? '',
		harvestDays: p.harvestDays ?? ''
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityBlogPost(p: any): BlogPost {
	return {
		_id: p._id,
		title: p.title,
		slug: p.slug,
		coverImageUrl: urlFor(p.coverImage),
		excerpt: p.excerpt ?? '',
		category: p.category ?? '',
		publishedAt: p.publishedAt ?? '',
		readingTimeMinutes: p.readingTimeMinutes ?? 3
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityBlogPostDetail(p: any): BlogPostDetail {
	return {
		...mapSanityBlogPost(p),
		body: p.body ?? null,
		bodyPlaintext: null,
		tags: p.tags ?? []
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityTestimonial(t: any): Testimonial {
	return {
		_id: t._id,
		quote: t.quote,
		name: t.name,
		role: t.role ?? '',
		company: t.company ?? '',
		rating: t.rating ?? 5,
		imageUrl: urlFor(t.image)
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityPartner(p: any): Partner {
	return {
		_id: p._id,
		name: p.name,
		logoUrl: urlFor(p.logo),
		description: p.description ?? ''
	}
}

// --- Data fetchers ---

export async function fetchProducts(): Promise<Product[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticAllProducts.map(mapStaticProduct)
	}
	try {
		const data = await sanityClient.fetch(allProductsQuery)
		if (!data?.length) return staticAllProducts.map(mapStaticProduct)
		return data.map(mapSanityProduct)
	} catch (e) {
		console.error('Sanity fetchProducts error:', e)
		return staticAllProducts.map(mapStaticProduct)
	}
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticFeaturedProducts.map(mapStaticProduct)
	}
	try {
		const data = await sanityClient.fetch(featuredProductsQuery)
		if (!data?.length) return staticFeaturedProducts.map(mapStaticProduct)
		return data.map(mapSanityProduct)
	} catch (e) {
		console.error('Sanity fetchFeaturedProducts error:', e)
		return staticFeaturedProducts.map(mapStaticProduct)
	}
}

export async function fetchProductBySlug(slug: string): Promise<ProductDetail | null> {
	if (!isSanityConfigured || !sanityClient) {
		const found = staticAllProducts.find((p) => p.slug.current === slug)
		return found ? mapStaticProductDetail(found) : null
	}
	try {
		const data = await sanityClient.fetch(productBySlugQuery, { slug })
		if (!data) {
			const found = staticAllProducts.find((p) => p.slug.current === slug)
			return found ? mapStaticProductDetail(found) : null
		}
		return mapSanityProductDetail(data)
	} catch (e) {
		console.error('Sanity fetchProductBySlug error:', e)
		const found = staticAllProducts.find((p) => p.slug.current === slug)
		return found ? mapStaticProductDetail(found) : null
	}
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticBlogPosts.map(mapStaticBlogPost)
	}
	try {
		const data = await sanityClient.fetch(allBlogPostsQuery)
		if (!data?.length) return staticBlogPosts.map(mapStaticBlogPost)
		return data.map(mapSanityBlogPost)
	} catch (e) {
		console.error('Sanity fetchBlogPosts error:', e)
		return staticBlogPosts.map(mapStaticBlogPost)
	}
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
	if (!isSanityConfigured || !sanityClient) {
		const found = staticBlogPostsWithBody.find((p) => p.slug.current === slug)
		return found ? mapStaticBlogPostDetail(found) : null
	}
	try {
		const data = await sanityClient.fetch(blogPostBySlugQuery, { slug })
		if (!data) {
			const found = staticBlogPostsWithBody.find((p) => p.slug.current === slug)
			return found ? mapStaticBlogPostDetail(found) : null
		}
		return mapSanityBlogPostDetail(data)
	} catch (e) {
		console.error('Sanity fetchBlogPostBySlug error:', e)
		const found = staticBlogPostsWithBody.find((p) => p.slug.current === slug)
		return found ? mapStaticBlogPostDetail(found) : null
	}
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticTestimonials.map(mapStaticTestimonial)
	}
	try {
		const data = await sanityClient.fetch(allTestimonialsQuery)
		if (!data?.length) return staticTestimonials.map(mapStaticTestimonial)
		return data.map(mapSanityTestimonial)
	} catch (e) {
		console.error('Sanity fetchTestimonials error:', e)
		return staticTestimonials.map(mapStaticTestimonial)
	}
}

export async function fetchPartners(): Promise<Partner[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticPartners.map(mapStaticPartner)
	}
	try {
		const data = await sanityClient.fetch(allPartnersQuery)
		if (!data?.length) return staticPartners.map(mapStaticPartner)
		return data.map(mapSanityPartner)
	} catch (e) {
		console.error('Sanity fetchPartners error:', e)
		return staticPartners.map(mapStaticPartner)
	}
}
