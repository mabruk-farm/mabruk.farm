import type { RequestHandler } from './$types'
import { allProducts } from '$lib/data/products'
import { allBlogPostsWithBody } from '$lib/data/blogPosts'

const SITE_URL = 'https://mabruk.farm'

interface SitemapEntry {
	loc: string
	lastmod: string
	changefreq: string
	priority: string
}

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0]

	const staticPages: SitemapEntry[] = [
		{ loc: '', lastmod: today, changefreq: 'weekly', priority: '1.0' },
		{ loc: '/produk', lastmod: today, changefreq: 'weekly', priority: '0.8' },
		{ loc: '/kerjasama', lastmod: today, changefreq: 'monthly', priority: '0.8' },
		{ loc: '/tentang', lastmod: today, changefreq: 'monthly', priority: '0.7' },
		{ loc: '/kontak', lastmod: today, changefreq: 'monthly', priority: '0.7' },
		{ loc: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.7' },
		{ loc: '/eduwisata', lastmod: today, changefreq: 'monthly', priority: '0.5' }
	]

	const productPages: SitemapEntry[] = allProducts.map((p) => ({
		loc: `/produk/${p.slug.current}`,
		lastmod: today,
		changefreq: 'weekly',
		priority: '0.7'
	}))

	const blogPages: SitemapEntry[] = allBlogPostsWithBody.map((post) => ({
		loc: `/blog/${post.slug.current}`,
		lastmod: post.publishedAt,
		changefreq: 'monthly',
		priority: '0.5'
	}))

	const entries = [...staticPages, ...productPages, ...blogPages]

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		(e) => `  <url>
    <loc>${SITE_URL}${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	})
}
