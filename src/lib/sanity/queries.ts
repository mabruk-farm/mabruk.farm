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
