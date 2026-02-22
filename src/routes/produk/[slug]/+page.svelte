<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import ProductCard from '$lib/components/ui/ProductCard.svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import { Leaf, Clock, Apple, Refrigerator, Minus, Plus, Send } from 'lucide-svelte'
	import { formatPrice, formatPriceWithUnit } from '$lib/utils/format'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
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

	let qty = $state(1)
	let catatan = $state('')

	const subtotal = $derived(product ? product.price * qty : 0)

	function decreaseQty() {
		if (qty > 1) qty--
	}

	function increaseQty() {
		if (qty < 50) qty++
	}

	function buildOrderLink() {
		if (!product) return '#'
		let msg = `Halo Mabruk Farm! Saya mau pesan:\n\n`
		msg += `${product.name}\n`
		msg += `Jumlah: ${qty} ${product.unit}\n`
		msg += `Estimasi: ${formatPrice(subtotal)}\n`
		if (catatan.trim()) {
			msg += `\nCatatan: ${catatan.trim()}\n`
		}
		msg += `\nTerima kasih!`
		return createWhatsAppLink(msg)
	}

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

					<!-- Pre-order form -->
					<div class="mt-8 rounded-xl border border-neutral-200 p-5">
						<p class="text-sm font-semibold text-neutral-900">Pesan Produk Ini</p>

						<!-- Quantity -->
						<div class="mt-4 flex items-center gap-3">
							<span class="text-sm text-neutral-600">Jumlah ({product.unit}):</span>
							<div class="flex items-center rounded-lg border border-neutral-200">
								<button
									onclick={decreaseQty}
									disabled={qty <= 1}
									class="flex h-9 w-9 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-50 disabled:opacity-30"
									aria-label="Kurangi"
								>
									<Minus class="h-4 w-4" />
								</button>
								<span
									class="flex h-9 w-10 items-center justify-center border-x border-neutral-200 text-sm font-semibold text-neutral-900"
								>
									{qty}
								</span>
								<button
									onclick={increaseQty}
									disabled={qty >= 50}
									class="flex h-9 w-9 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-50 disabled:opacity-30"
									aria-label="Tambah"
								>
									<Plus class="h-4 w-4" />
								</button>
							</div>
						</div>

						<!-- Subtotal -->
						<div class="mt-3 flex items-center justify-between">
							<span class="text-sm text-neutral-600">Estimasi total:</span>
							<span class="text-lg font-bold text-secondary">{formatPrice(subtotal)}</span>
						</div>

						<!-- Catatan -->
						<div class="mt-4">
							<textarea
								bind:value={catatan}
								rows={2}
								placeholder="Catatan (opsional): waktu kirim, alamat, dll..."
								class="w-full resize-none rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
							></textarea>
						</div>

						<!-- Submit -->
						<a
							href={buildOrderLink()}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
						>
							<Send class="h-4 w-4" />
							Pesan via WhatsApp
						</a>
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
