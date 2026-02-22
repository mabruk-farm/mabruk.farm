<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte'
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import BlogCard from '$lib/components/ui/BlogCard.svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import { FileText, Share2 } from 'lucide-svelte'
	import { formatDate } from '$lib/utils/format'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createArticleJsonLd, createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const post = $derived(data.post)
	const relatedPosts = $derived(data.relatedPosts)

	const pageTitle = $derived(
		post ? `${post.title} | Blog Mabruk Farm` : 'Artikel Tidak Ditemukan — Mabruk Farm'
	)

	const shareLink = $derived(
		post
			? createWhatsAppLink(
					`Baca artikel menarik: ${post.title} — https://mabruk.farm/blog/${post.slug}`
				)
			: ''
	)
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if post}
		<meta name="description" content={post.excerpt} />
		<link rel="canonical" href="https://mabruk.farm/blog/{post.slug}" />
		<meta property="og:title" content={post.title} />
		<meta property="og:description" content={post.excerpt} />
		<meta property="og:type" content="article" />
		<meta property="og:url" content="https://mabruk.farm/blog/{post.slug}" />
		<meta property="article:published_time" content={post.publishedAt} />
		{@html `<script type="application/ld+json">${JSON.stringify(createArticleJsonLd({ headline: post.title, datePublished: post.publishedAt, description: post.excerpt, url: `https://mabruk.farm/blog/${post.slug}` }))}</script>`}
		{@html `<script type="application/ld+json">${JSON.stringify(createBreadcrumbJsonLd([{ name: 'Beranda', url: 'https://mabruk.farm' }, { name: 'Blog', url: 'https://mabruk.farm/blog' }, { name: post.title, url: `https://mabruk.farm/blog/${post.slug}` }]))}</script>`}
	{/if}
</svelte:head>

{#if post}
	<article>
		<!-- Cover image -->
		<div class="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
			<Breadcrumb
				items={[
					{ label: 'Beranda', href: '/' },
					{ label: 'Blog', href: '/blog' },
					{ label: post.title }
				]}
			/>
			<div class="relative aspect-video overflow-hidden rounded-2xl bg-primary-surface">
				{#if post.coverImageUrl}
					<img
						src={post.coverImageUrl}
						alt={post.title}
						class="h-full w-full object-cover"
					/>
				{:else}
					<div class="absolute inset-0 flex items-center justify-center">
						<FileText class="h-16 w-16 text-primary-light opacity-30" />
					</div>
				{/if}
			</div>
		</div>

		<!-- Article content -->
		<div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
			<div class="flex items-center gap-3">
				<Badge variant="category">{post.category}</Badge>
			</div>

			<h1 class="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
				{post.title}
			</h1>

			<div class="mt-4 flex items-center gap-3 text-sm text-neutral-500">
				<span>{formatDate(post.publishedAt)}</span>
				<span>·</span>
				<span>{post.readingTimeMinutes} menit baca</span>
			</div>

			<div class="mt-8 space-y-5 text-base leading-relaxed text-neutral-700">
				{#if post.body}
					<!-- Portable Text from Sanity -->
					{#await import('@portabletext/svelte') then { PortableText }}
						<PortableText value={post.body} />
					{/await}
				{:else if post.bodyPlaintext}
					<!-- Static plaintext paragraphs -->
					{#each post.bodyPlaintext as para}
						<p>{para}</p>
					{/each}
				{/if}
			</div>

			<!-- Bottom bar -->
			<div
				class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6"
			>
				<Button variant="ghost" href={shareLink} class="gap-2 text-sm">
					<Share2 class="h-4 w-4" />
					Bagikan via WhatsApp
				</Button>
				<Button
					variant="whatsapp"
					href={createWhatsAppLink('Halo Mabruk Farm, saya mau pesan sayuran!')}
				>
					Pesan Sayuran Segar
				</Button>
			</div>
		</div>
	</article>

	{#if relatedPosts.length > 0}
		<section class="bg-neutral-50 py-14 sm:py-16">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title="Artikel Terkait" />
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each relatedPosts as p (p._id)}
						<BlogCard
							title={p.title}
							excerpt={p.excerpt}
							category={p.category}
							publishedAt={p.publishedAt}
							slug={p.slug}
							readingTimeMinutes={p.readingTimeMinutes}
							coverImageUrl={p.coverImageUrl}
						/>
					{/each}
				</div>
			</div>
		</section>
	{/if}
{:else}
	<section class="py-20 text-center">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<FileText class="mx-auto h-16 w-16 text-neutral-300" />
			<h1 class="mt-4 text-2xl font-bold text-neutral-900">Artikel Tidak Ditemukan</h1>
			<p class="mt-2 text-neutral-600">Maaf, artikel yang Anda cari tidak tersedia.</p>
			<div class="mt-6">
				<Button href="/blog">Lihat Semua Artikel</Button>
			</div>
		</div>
	</section>
{/if}
