<script lang="ts">
	import { CheckCircle } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import InquiryForm from '$lib/components/kerjasama/InquiryForm.svelte'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'
	import { getIcon } from '$lib/utils/icons'

	let { data } = $props()
	const pageData = $derived(data.pageData)

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Kerjasama', url: 'https://mabruk.farm/kerjasama' }
		])
	)

	function formatPrice(value: number): string {
		return `Rp ${value.toLocaleString('id-ID')}`
	}
</script>

<svelte:head>
	<title>Kerjasama Supply Sayuran Segar — Hotel, Restoran, MBG | Mabruk Farm</title>
	<meta
		name="description"
		content="Partner suplai sayuran hidroponik untuk bisnis Anda. Supply contract, harga kompetitif, kualitas konsisten. Hubungi Mabruk Farm."
	/>
	<meta
		property="og:title"
		content="Kerjasama Supply Sayuran Segar — Hotel, Restoran, MBG | Mabruk Farm"
	/>
	<meta
		property="og:description"
		content="Partner suplai sayuran hidroponik untuk bisnis Anda. Supply contract, harga kompetitif, kualitas konsisten."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/kerjasama" />
	<link rel="canonical" href="https://mabruk.farm/kerjasama" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			{pageData.heroTitle}
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			{pageData.heroSubtitle}
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href="#form" class="px-6 py-3">Ajukan Kerjasama</Button>
			<Button variant="outline-light" href="#form" class="px-6 py-3">
				Isi Form Inquiry
			</Button>
		</div>
	</div>
</section>

<!-- 2. Keunggulan -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Keunggulan Kerjasama" />
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each pageData.benefits as benefit}
				{@const BenefitIcon = getIcon(benefit.icon)}
				<div class="rounded-xl bg-neutral-50 p-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-surface">
						<BenefitIcon class="h-5 w-5 text-primary" />
					</div>
					<h3 class="mt-4 text-base font-bold text-neutral-900">{benefit.title}</h3>
					<p class="mt-2 text-sm text-neutral-600">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. Pricing Tiers -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Paket Kerjasama"
			subtitle="Pilih paket sesuai kebutuhan bisnis Anda."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each pageData.tiers as tier}
				<div
					class="relative rounded-xl p-6 {tier.highlighted
						? 'scale-[1.02] bg-primary text-white ring-2 ring-primary'
						: 'border border-neutral-200 bg-white'}"
				>
					{#if tier.highlighted}
						<span
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-white"
						>
							Direkomendasikan
						</span>
					{/if}
					<h3 class="text-lg font-bold {tier.highlighted ? 'text-white' : 'text-neutral-900'}">
						{tier.name}
					</h3>
					<p
						class="mt-2 text-2xl font-bold {tier.highlighted ? 'text-secondary-light' : 'text-secondary'}"
					>
						{tier.discount}
					</p>
					<p class="mt-2 text-sm {tier.highlighted ? 'text-white/80' : 'text-neutral-600'}">
						{tier.volume}
					</p>
					<p class="mt-1 text-xs {tier.highlighted ? 'text-white/60' : 'text-neutral-500'}">
						{tier.target}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 4. Pricing Table -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Estimasi Harga per Produk"
			subtitle="Harga per kg berdasarkan tier kerjasama Anda."
		/>

		<!-- Desktop Table (hidden below lg) -->
		<div class="hidden lg:block">
			<div class="overflow-hidden rounded-xl border border-neutral-200">
				<table class="w-full text-sm">
					<thead>
						<tr class="bg-primary text-white">
							<th class="px-6 py-3.5 text-left font-semibold">Produk</th>
							<th class="px-6 py-3.5 text-center font-semibold">Retail</th>
							<th class="px-6 py-3.5 text-center font-semibold">Starter</th>
							<th class="px-6 py-3.5 text-center font-semibold">Business
								<span class="block text-xs font-normal text-white/70">Diskon 10%</span>
							</th>
							<th class="px-6 py-3.5 text-center font-semibold">Enterprise
								<span class="block text-xs font-normal text-white/70">Diskon 15–20%</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each pageData.pricingProducts as product, i}
							<tr class="{i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} border-t border-neutral-100">
								<td class="px-6 py-3.5 font-medium text-neutral-900">{product.name}</td>
								<td class="px-6 py-3.5 text-center text-neutral-600">{formatPrice(product.retail)}</td>
								<td class="px-6 py-3.5 text-center text-neutral-600">{formatPrice(product.starter)}</td>
								<td class="px-6 py-3.5 text-center font-medium text-primary">{formatPrice(product.business)}</td>
								<td class="px-6 py-3.5 text-center font-bold text-primary">{formatPrice(product.enterprise)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<!-- Mobile Cards (hidden on lg+) -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
			{#each pageData.pricingProducts as product}
				<div class="rounded-xl border border-neutral-200 bg-white p-4">
					<h4 class="text-base font-bold text-neutral-900">{product.name}</h4>
					<div class="mt-3 space-y-2">
						<div class="flex items-center justify-between text-sm">
							<span class="text-neutral-500">Retail</span>
							<span class="text-neutral-600">{formatPrice(product.retail)}</span>
						</div>
						<div class="flex items-center justify-between text-sm">
							<span class="text-neutral-500">Starter</span>
							<span class="text-neutral-600">{formatPrice(product.starter)}</span>
						</div>
						<div class="flex items-center justify-between text-sm">
							<span class="text-neutral-500">Business <span class="text-xs text-neutral-400">(10%)</span></span>
							<span class="font-medium text-primary">{formatPrice(product.business)}</span>
						</div>
						<div class="flex items-center justify-between text-sm">
							<span class="text-neutral-500">Enterprise <span class="text-xs text-neutral-400">(15–20%)</span></span>
							<span class="font-bold text-primary">{formatPrice(product.enterprise)}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<p class="mt-6 text-center text-xs text-neutral-500 italic">
			*Harga bersifat estimasi dan dapat berubah. Hubungi kami untuk penawaran terbaru.
		</p>
	</div>
</section>

<!-- 5. B2B Extras -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Layanan Tambahan" />
		<ul class="space-y-4">
			{#each pageData.extras as extra}
				<li class="flex items-start gap-3">
					<CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
					<span class="text-base text-neutral-600">{extra}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- 6. Inquiry Form -->
<section id="form" class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Ajukan Kerjasama"
			subtitle="Isi form berikut dan tim kami akan menghubungi Anda via WhatsApp."
		/>
		<div class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
			<InquiryForm />
		</div>
	</div>
</section>
