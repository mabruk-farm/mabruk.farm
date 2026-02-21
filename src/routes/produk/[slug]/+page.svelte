<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import ProductCard from '$lib/components/ui/ProductCard.svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import { Leaf, Clock, Apple, Refrigerator } from 'lucide-svelte'
	import { formatPriceWithUnit } from '$lib/utils/format'
	import { createOrderLink } from '$lib/utils/whatsapp'
	import { createProductJsonLd, createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const product = $derived(data.product)
	const otherProducts = $derived(data.otherProducts)

	const pageTitle = $derived(
		product
			? `${product.name} — Sayuran Hidroponik | Mabruk Farm`
			: 'Produk Tidak Ditemukan — Mabruk Farm'
	)

	const pageDescription = $derived(product?.description ?? '')

	const productJsonLd = $derived(
		product
			? JSON.stringify(
					createProductJsonLd({
						name: product.name,
						description: product.description,
						price: product.price,
						availability: product.available,
						url: `https://mabruk.farm/produk/${product.slug}`
					})
				)
			: ''
	)

	const breadcrumbJsonLd = $derived(
		product
			? JSON.stringify(
					createBreadcrumbJsonLd([
						{ name: 'Beranda', url: 'https://mabruk.farm' },
						{ name: 'Produk', url: 'https://mabruk.farm/produk' },
						{ name: product.name, url: `https://mabruk.farm/produk/${product.slug}` }
					])
				)
			: ''
	)

	type BadgeVariant = 'bestSeller' | 'premium' | 'favorit' | 'category'

	function getBadgeVariant(badge: string): BadgeVariant {
		const map: Record<string, BadgeVariant> = {
			'Best Seller': 'bestSeller',
			Premium: 'premium',
			Favorit: 'favorit'
		}
		return map[badge] ?? 'category'
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if product}
		<meta name="description" content={pageDescription} />
		<link rel="canonical" href="https://mabruk.farm/produk/{product.slug}" />
		<meta property="og:title" content="{product.name} — Mabruk Farm" />
		<meta property="og:description" content={pageDescription} />
		<meta property="og:type" content="product" />
		<meta property="og:url" content="https://mabruk.farm/produk/{product.slug}" />
		{@html `<script type="application/ld+json">${productJsonLd}</script>`}
		{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
	{/if}
</svelte:head>

{#if product}
	<section class="py-10 sm:py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
				<!-- Product image -->
				<div class="relative aspect-square overflow-hidden rounded-2xl bg-primary-surface">
					{#if product.imageUrl}
						<img
							src={product.imageUrl}
							alt={product.name}
							class="h-full w-full object-cover"
						/>
					{:else}
						<div class="absolute inset-0 flex items-center justify-center">
							<Leaf class="h-20 w-20 text-primary-light opacity-30" />
						</div>
					{/if}
					{#if product.badges.length > 0}
						<div class="absolute right-4 top-4">
							<Badge variant={getBadgeVariant(product.badges[0])}>{product.badges[0]}</Badge>
						</div>
					{/if}
				</div>

				<!-- Product info -->
				<div>
					<div class="flex flex-wrap gap-2">
						<Badge variant="category">{product.category}</Badge>
						{#each product.badges as badge}
							<Badge variant={getBadgeVariant(badge)}>{badge}</Badge>
						{/each}
					</div>

					<h1 class="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl">{product.name}</h1>

					<p class="mt-2 text-2xl font-bold text-secondary">
						{formatPriceWithUnit(product.price, product.unit)}
					</p>

					<p class="mt-4 text-base leading-relaxed text-neutral-600">
						{product.description}
					</p>

					<div class="mt-6 space-y-4">
						<div class="flex items-start gap-3">
							<Clock class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<div>
								<p class="text-sm font-semibold text-neutral-900">Masa Panen</p>
								<p class="text-sm text-neutral-600">{product.harvestDays}</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Apple class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<div>
								<p class="text-sm font-semibold text-neutral-900">Kandungan Nutrisi</p>
								<p class="text-sm text-neutral-600">{product.nutrition}</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Refrigerator class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<div>
								<p class="text-sm font-semibold text-neutral-900">Tips Penyimpanan</p>
								<p class="text-sm text-neutral-600">{product.storageTips}</p>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<Button variant="whatsapp" href={createOrderLink(product.name)} class="px-8 py-3">
							Pesan via WhatsApp
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	{#if otherProducts.length > 0}
		<section class="bg-neutral-50 py-14 sm:py-16">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title="Produk Lainnya" />
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each otherProducts as p (p._id)}
						<ProductCard
							name={p.name}
							price={p.price}
							unit={p.unit}
							shortDescription={p.shortDescription}
							badges={p.badges}
							available={p.available}
							slug={p.slug}
							imageUrl={p.imageUrl}
						/>
					{/each}
				</div>
			</div>
		</section>
	{/if}
{:else}
	<section class="py-20 text-center">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<Leaf class="mx-auto h-16 w-16 text-neutral-300" />
			<h1 class="mt-4 text-2xl font-bold text-neutral-900">Produk Tidak Ditemukan</h1>
			<p class="mt-2 text-neutral-600">Maaf, produk yang Anda cari tidak tersedia.</p>
			<div class="mt-6">
				<Button href="/produk">Lihat Semua Produk</Button>
			</div>
		</div>
	</section>
{/if}
