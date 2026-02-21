<script lang="ts">
	import ProductCard from '$lib/components/ui/ProductCard.svelte'
	import CategoryFilter from '$lib/components/produk/CategoryFilter.svelte'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Produk', url: 'https://mabruk.farm/produk' }
		])
	)

	const categories = ['Semua', 'Sayuran Daun', 'Sayuran Premium', 'Herbs', 'Paket Hemat']

	let activeCategory = $state('Semua')

	const filteredProducts = $derived(
		activeCategory === 'Semua'
			? data.products
			: data.products.filter((p) => p.category === activeCategory)
	)
</script>

<svelte:head>
	<title>Produk Sayuran Hidroponik Segar | Mabruk Farm Lampung</title>
	<meta
		name="description"
		content="Selada, pakcoy, kangkung, bayam, dan herbs segar dari hidroponik Mabruk Farm. Tanpa pestisida, nutrisi terkontrol. Pesan sekarang."
	/>
	<meta property="og:title" content="Produk Sayuran Hidroponik Segar | Mabruk Farm Lampung" />
	<meta
		property="og:description"
		content="Selada, pakcoy, kangkung, bayam, dan herbs segar dari hidroponik Mabruk Farm. Tanpa pestisida, nutrisi terkontrol."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/produk" />
	<link rel="canonical" href="https://mabruk.farm/produk" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="bg-primary-surface py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h1 class="text-2xl font-bold text-primary md:text-3xl">Produk Segar Mabruk Farm</h1>
		<p class="mt-3 max-w-2xl text-base text-neutral-600">
			Semua sayuran kami ditanam dengan sistem hidroponik di greenhouse tertutup, tanpa pestisida,
			dengan nutrisi yang dikontrol setiap hari. Dipanen segar dan dikirim langsung ke Anda.
		</p>
	</div>
</section>

<section class="py-10 sm:py-14">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<CategoryFilter
			{categories}
			active={activeCategory}
			onselect={(cat) => (activeCategory = cat)}
			disabledCategories={['Paket Hemat']}
		/>

		{#if filteredProducts.length > 0}
			<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredProducts as product (product._id)}
					<ProductCard
						name={product.name}
						price={product.price}
						unit={product.unit}
						shortDescription={product.shortDescription}
						badges={product.badges}
						available={product.available}
						slug={product.slug}
						imageUrl={product.imageUrl}
					/>
				{/each}
			</div>
		{:else}
			<div class="mt-16 text-center">
				<p class="text-neutral-500">Produk tidak ditemukan di kategori ini.</p>
			</div>
		{/if}
	</div>
</section>
