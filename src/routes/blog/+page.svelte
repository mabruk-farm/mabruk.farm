<script lang="ts">
	import BlogCard from '$lib/components/ui/BlogCard.svelte'
	import CategoryFilter from '$lib/components/produk/CategoryFilter.svelte'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Blog', url: 'https://mabruk.farm/blog' }
		])
	)

	const categories = ['Semua', 'Edukasi', 'Behind the Scenes', 'Resep', 'Tips']

	let activeCategory = $state('Semua')

	const filteredPosts = $derived(
		activeCategory === 'Semua'
			? data.posts
			: data.posts.filter((p) => p.category === activeCategory)
	)
</script>

<svelte:head>
	<title>Blog Mabruk Farm — Tips, Edukasi & Cerita Hidroponik</title>
	<meta
		name="description"
		content="Artikel tentang pertanian hidroponik, tips menyimpan sayuran, resep sehat, dan cerita di balik Mabruk Farm."
	/>
	<meta property="og:title" content="Blog Mabruk Farm — Tips, Edukasi & Cerita Hidroponik" />
	<meta
		property="og:description"
		content="Artikel tentang pertanian hidroponik, tips menyimpan sayuran, resep sehat, dan cerita di balik Mabruk Farm."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/blog" />
	<link rel="canonical" href="https://mabruk.farm/blog" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="bg-primary-surface py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-2xl font-bold text-primary md:text-3xl">Dari Greenhouse Kami</h1>
		<p class="mt-3 max-w-2xl text-base text-neutral-600">
			Cerita, tips, dan pengetahuan seputar sayuran segar dan pertanian hidroponik dari Mabruk Farm.
		</p>
	</div>
</section>

<section class="py-10 sm:py-14">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<CategoryFilter
			{categories}
			active={activeCategory}
			onselect={(cat) => (activeCategory = cat)}
		/>

		{#if filteredPosts.length > 0}
			<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredPosts as post (post._id)}
					<BlogCard
						title={post.title}
						excerpt={post.excerpt}
						category={post.category}
						publishedAt={post.publishedAt}
						slug={post.slug}
						readingTimeMinutes={post.readingTimeMinutes}
						coverImageUrl={post.coverImageUrl}
					/>
				{/each}
			</div>
		{:else}
			<div class="mt-16 text-center">
				<p class="text-neutral-500">Belum ada artikel di kategori ini.</p>
			</div>
		{/if}
	</div>
</section>
