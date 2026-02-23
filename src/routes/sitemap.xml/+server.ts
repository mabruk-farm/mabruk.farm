import type { RequestHandler } from './$types'
import { allProducts } from '$lib/data/products'
import { allBlogPostsWithBody } from '$lib/data/blogPosts'

export const prerender = true

const SITE_URL = 'https://mabruk.farm'

interface SitemapEntry {
	loc: string
	lastmod: string
	changefreq: string
	priority: string
}

export const GET: RequestHandler = async () => {
	const latestBlogDate =
		allBlogPostsWithBody.length > 0
			? allBlogPostsWithBody
					.map((p) => p.publishedAt)
					.sort()
					.reverse()[0]
			: '2026-02-22'

	const DEPLOY_DATE = '2026-02-22'

	const staticPages: SitemapEntry[] = [
		{ loc: '', lastmod: latestBlogDate, changefreq: 'weekly', priority: '1.0' },
		{ loc: '/produk', lastmod: DEPLOY_DATE, changefreq: 'weekly', priority: '0.8' },
		{ loc: '/kerjasama', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.8' },
		{ loc: '/tentang', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.7' },
		{ loc: '/kontak', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.7' },
		{ loc: '/blog', lastmod: latestBlogDate, changefreq: 'weekly', priority: '0.7' },
		{ loc: '/langganan', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.8' },
		{ loc: '/cara-pesan', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.6' },
		{ loc: '/area-pengiriman', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.6' },
		{ loc: '/faq', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.6' },
		{ loc: '/galeri', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.5' },
		{ loc: '/eduwisata', lastmod: DEPLOY_DATE, changefreq: 'monthly', priority: '0.5' },
		{ loc: '/privasi', lastmod: DEPLOY_DATE, changefreq: 'yearly', priority: '0.3' },
		{ loc: '/syarat-ketentuan', lastmod: DEPLOY_DATE, changefreq: 'yearly', priority: '0.3' }
	]

	const productPages: SitemapEntry[] = allProducts.map((p) => ({
		loc: `/produk/${p.slug.current}`,
		lastmod: DEPLOY_DATE,
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
