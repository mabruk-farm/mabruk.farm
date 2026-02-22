// GROQ queries for Sanity CMS

export const allProductsQuery = `*[_type == "product"] | order(sortOrder asc) {
	_id,
	name,
	"slug": slug.current,
	image,
	price,
	unit,
	category,
	badges,
	shortDescription,
	"available": isAvailable
}`

export const featuredProductsQuery = `*[_type == "product" && isAvailable == true] | order(sortOrder asc) [0...6] {
	_id,
	name,
	"slug": slug.current,
	image,
	price,
	unit,
	category,
	badges,
	shortDescription,
	"available": isAvailable
}`

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
	_id,
	name,
	"slug": slug.current,
	image,
	gallery,
	price,
	unit,
	category,
	badges,
	shortDescription,
	description,
	nutrition,
	storageTips,
	harvestDays,
	"available": isAvailable
}`

export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
	_id,
	title,
	"slug": slug.current,
	coverImage,
	excerpt,
	category,
	publishedAt,
	"readingTimeMinutes": round(length(pt::text(body)) / 1000) + 1
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
	_id,
	title,
	"slug": slug.current,
	coverImage,
	excerpt,
	body,
	category,
	tags,
	publishedAt,
	"readingTimeMinutes": round(length(pt::text(body)) / 1000) + 1
}`

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
	_id,
	quote,
	name,
	role,
	company,
	rating,
	image
}`

export const allPartnersQuery = `*[_type == "partner"] | order(sortOrder asc) {
	_id,
	name,
	logo,
	description
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
	siteName,
	tagline,
	whatsapp,
	instagram,
	email,
	address,
	operatingHours
}`

// --- FAQ ---

export const allFaqsQuery = `*[_type == "faq"] | order(category asc, sortOrder asc) {
	_id,
	question,
	answer,
	category
}`

export const faqsByCategoryQuery = `*[_type == "faq" && category == $category] | order(sortOrder asc) {
	_id,
	question,
	answer,
	category
}`

// --- Gallery ---

export const allGalleryPhotosQuery = `*[_type == "galleryPhoto"] | order(sortOrder asc) {
	_id,
	image,
	alt,
	category
}`

// --- About Page ---

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
	heroTitle,
	heroSubtitle,
	namaMeaning,
	nameMeaningSubtext,
	storyParagraphs,
	storyImage,
	team[] {
		name,
		description,
		image
	},
	processSteps[] {
		title,
		description,
		icon
	},
	values[] {
		title,
		description,
		icon
	}
}`

// --- Langganan Page ---

export const langgananPageQuery = `*[_type == "langgananPage"][0] {
	heroTitle,
	heroSubtitle,
	steps[] {
		title,
		description,
		icon
	},
	packages[] {
		name,
		price,
		period,
		weight,
		target,
		includes,
		highlighted
	},
	benefits[] {
		title,
		description,
		icon
	}
}`

// --- Eduwisata Page ---

export const eduwisataPageQuery = `*[_type == "eduwisataPage"][0] {
	heroTitle,
	heroSubtitle,
	activities[] {
		title,
		description,
		icon
	},
	photos[] {
		"imageUrl": image.asset->url,
		alt
	},
	packages[] {
		name,
		duration,
		target,
		capacity,
		includes,
		highlighted
	},
	practicalInfo[] {
		title,
		description,
		icon
	}
}`

// --- Kerjasama Page ---

export const kerjasamaPageQuery = `*[_type == "kerjasamaPage"][0] {
	heroTitle,
	heroSubtitle,
	benefits[] {
		title,
		description,
		icon
	},
	tiers[] {
		name,
		volume,
		discount,
		target,
		highlighted
	},
	pricingProducts[] {
		name,
		retail,
		starter,
		business,
		enterprise
	},
	extras
}`

// --- Cara Pesan Page ---

export const caraPesanPageQuery = `*[_type == "caraPesanPage"][0] {
	heroTitle,
	heroSubtitle,
	steps[] {
		title,
		description,
		icon
	},
	infoCards[] {
		title,
		description,
		highlight,
		icon
	},
	tips[] {
		text,
		icon
	}
}`

// --- Area Pengiriman Page ---

export const areaPengirimanPageQuery = `*[_type == "areaPengirimanPage"][0] {
	heroTitle,
	heroSubtitle,
	zones[] {
		zone,
		area,
		ongkir,
		estimasi,
		colorTheme
	},
	deliveryInfo[] {
		title,
		description,
		icon
	},
	mapsEmbedUrl
}`
