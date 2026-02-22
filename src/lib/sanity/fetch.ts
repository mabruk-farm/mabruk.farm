import { sanityClient, isSanityConfigured } from './client'
import { urlFor } from './image'
import {
	allProductsQuery,
	featuredProductsQuery,
	productBySlugQuery,
	allBlogPostsQuery,
	blogPostBySlugQuery,
	allTestimonialsQuery,
	allPartnersQuery,
	allFaqsQuery,
	faqsByCategoryQuery,
	allGalleryPhotosQuery,
	aboutPageQuery,
	langgananPageQuery,
	eduwisataPageQuery,
	kerjasamaPageQuery,
	caraPesanPageQuery,
	areaPengirimanPageQuery
} from './queries'
import type {
	Product,
	ProductDetail,
	BlogPost,
	BlogPostDetail,
	Testimonial,
	Partner,
	FaqItem,
	GalleryPhoto,
	AboutPageData,
	LanggananPageData,
	EduwisataPageData,
	KerjasamaPageData,
	CaraPesanPageData,
	AreaPengirimanPageData
} from './types'
import {
	allProducts as staticAllProducts,
	featuredProducts as staticFeaturedProducts,
	allBlogPostsWithBody as staticBlogPostsWithBody,
	blogPosts as staticBlogPosts,
	testimonials as staticTestimonials,
	partners as staticPartners,
	faqs as staticFaqs,
	galleryPhotos as staticGalleryPhotos,
	aboutPage as staticAboutPage,
	langgananPage as staticLanggananPage,
	eduwisataPage as staticEduwisataPage,
	kerjasamaPage as staticKerjasamaPage,
	caraPesanPage as staticCaraPesanPage,
	areaPengirimanPage as staticAreaPengirimanPage,
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

// --- FAQ fetchers ---

export async function fetchFaqs(): Promise<FaqItem[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticFaqs
	}
	try {
		const data = await sanityClient.fetch(allFaqsQuery)
		if (!data?.length) return staticFaqs
		return data
	} catch (e) {
		console.error('Sanity fetchFaqs error:', e)
		return staticFaqs
	}
}

export async function fetchFaqsByCategory(category: string): Promise<FaqItem[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticFaqs.filter((f) => f.category === category)
	}
	try {
		const data = await sanityClient.fetch(faqsByCategoryQuery, { category })
		if (!data?.length) return staticFaqs.filter((f) => f.category === category)
		return data
	} catch (e) {
		console.error('Sanity fetchFaqsByCategory error:', e)
		return staticFaqs.filter((f) => f.category === category)
	}
}

// --- Gallery fetcher ---

export async function fetchGalleryPhotos(): Promise<GalleryPhoto[]> {
	if (!isSanityConfigured || !sanityClient) {
		return staticGalleryPhotos
	}
	try {
		const data = await sanityClient.fetch(allGalleryPhotosQuery)
		if (!data?.length) return staticGalleryPhotos
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return data.map((p: any) => ({
			_id: p._id,
			imageUrl: urlFor(p.image),
			alt: p.alt ?? '',
			category: p.category ?? 'greenhouse'
		}))
	} catch (e) {
		console.error('Sanity fetchGalleryPhotos error:', e)
		return staticGalleryPhotos
	}
}

// --- Singleton page fetchers ---

export async function fetchAboutPage(): Promise<AboutPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticAboutPage
	}
	try {
		const data = await sanityClient.fetch(aboutPageQuery)
		if (!data) return staticAboutPage
		return {
			heroTitle: data.heroTitle ?? staticAboutPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticAboutPage.heroSubtitle,
			namaMeaning: data.namaMeaning ?? staticAboutPage.namaMeaning,
			nameMeaningSubtext: data.nameMeaningSubtext ?? staticAboutPage.nameMeaningSubtext,
			storyParagraphs: data.storyParagraphs ?? staticAboutPage.storyParagraphs,
			storyImageUrl: urlFor(data.storyImage) ?? staticAboutPage.storyImageUrl,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			team: (data.team ?? []).map((t: any) => ({
				name: t.name,
				description: t.description,
				imageUrl: urlFor(t.image)
			})),
			processSteps: data.processSteps ?? staticAboutPage.processSteps,
			values: data.values ?? staticAboutPage.values
		}
	} catch (e) {
		console.error('Sanity fetchAboutPage error:', e)
		return staticAboutPage
	}
}

export async function fetchLanggananPage(): Promise<LanggananPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticLanggananPage
	}
	try {
		const data = await sanityClient.fetch(langgananPageQuery)
		if (!data) return staticLanggananPage
		return {
			heroTitle: data.heroTitle ?? staticLanggananPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticLanggananPage.heroSubtitle,
			steps: data.steps ?? staticLanggananPage.steps,
			packages: data.packages ?? staticLanggananPage.packages,
			benefits: data.benefits ?? staticLanggananPage.benefits
		}
	} catch (e) {
		console.error('Sanity fetchLanggananPage error:', e)
		return staticLanggananPage
	}
}

export async function fetchEduwisataPage(): Promise<EduwisataPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticEduwisataPage
	}
	try {
		const data = await sanityClient.fetch(eduwisataPageQuery)
		if (!data) return staticEduwisataPage
		return {
			heroTitle: data.heroTitle ?? staticEduwisataPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticEduwisataPage.heroSubtitle,
			activities: data.activities ?? staticEduwisataPage.activities,
			photos: data.photos ?? staticEduwisataPage.photos,
			packages: data.packages ?? staticEduwisataPage.packages,
			practicalInfo: data.practicalInfo ?? staticEduwisataPage.practicalInfo
		}
	} catch (e) {
		console.error('Sanity fetchEduwisataPage error:', e)
		return staticEduwisataPage
	}
}

export async function fetchKerjasamaPage(): Promise<KerjasamaPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticKerjasamaPage
	}
	try {
		const data = await sanityClient.fetch(kerjasamaPageQuery)
		if (!data) return staticKerjasamaPage
		return {
			heroTitle: data.heroTitle ?? staticKerjasamaPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticKerjasamaPage.heroSubtitle,
			benefits: data.benefits ?? staticKerjasamaPage.benefits,
			tiers: data.tiers ?? staticKerjasamaPage.tiers,
			pricingProducts: data.pricingProducts ?? staticKerjasamaPage.pricingProducts,
			extras: data.extras ?? staticKerjasamaPage.extras
		}
	} catch (e) {
		console.error('Sanity fetchKerjasamaPage error:', e)
		return staticKerjasamaPage
	}
}

export async function fetchCaraPesanPage(): Promise<CaraPesanPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticCaraPesanPage
	}
	try {
		const data = await sanityClient.fetch(caraPesanPageQuery)
		if (!data) return staticCaraPesanPage
		return {
			heroTitle: data.heroTitle ?? staticCaraPesanPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticCaraPesanPage.heroSubtitle,
			steps: data.steps ?? staticCaraPesanPage.steps,
			infoCards: data.infoCards ?? staticCaraPesanPage.infoCards,
			tips: data.tips ?? staticCaraPesanPage.tips
		}
	} catch (e) {
		console.error('Sanity fetchCaraPesanPage error:', e)
		return staticCaraPesanPage
	}
}

export async function fetchAreaPengirimanPage(): Promise<AreaPengirimanPageData> {
	if (!isSanityConfigured || !sanityClient) {
		return staticAreaPengirimanPage
	}
	try {
		const data = await sanityClient.fetch(areaPengirimanPageQuery)
		if (!data) return staticAreaPengirimanPage
		return {
			heroTitle: data.heroTitle ?? staticAreaPengirimanPage.heroTitle,
			heroSubtitle: data.heroSubtitle ?? staticAreaPengirimanPage.heroSubtitle,
			zones: data.zones ?? staticAreaPengirimanPage.zones,
			deliveryInfo: data.deliveryInfo ?? staticAreaPengirimanPage.deliveryInfo,
			mapsEmbedUrl: data.mapsEmbedUrl ?? staticAreaPengirimanPage.mapsEmbedUrl
		}
	} catch (e) {
		console.error('Sanity fetchAreaPengirimanPage error:', e)
		return staticAreaPengirimanPage
	}
}
