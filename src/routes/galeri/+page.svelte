<script lang="ts">
	import { Send, CheckCircle } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import { createWhatsAppLink, buildPageMessage, type BaseFormData } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Galeri', url: 'https://mabruk.farm/galeri' }
		])
	)

	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let pesan = $state('')
	let submitted = $state(false)

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		const formData: BaseFormData = { nama, noWa, alamat, pesan }
		const message = buildPageMessage('Chat dari Galeri', formData)
		const link = createWhatsAppLink(message)
		trackFormSubmit('galeri')
		trackWhatsAppClick('galeri_form')
		window.open(link, '_blank')
		submitted = true
	}

	type Category = 'semua' | 'greenhouse' | 'produk' | 'proses' | 'tim'

	let activeCategory: Category = $state('semua')

	const categories: { key: Category; label: string }[] = [
		{ key: 'semua', label: 'Semua' },
		{ key: 'greenhouse', label: 'Greenhouse' },
		{ key: 'produk', label: 'Produk' },
		{ key: 'proses', label: 'Proses' },
		{ key: 'tim', label: 'Tim' }
	]

	const filteredPhotos = $derived(
		activeCategory === 'semua'
			? data.photos
			: data.photos.filter((p: { category: string }) => p.category === activeCategory)
	)
</script>

<svelte:head>
	<title>Galeri Greenhouse Hidroponik | Mabruk Farm</title>
	<meta
		name="description"
		content="Lihat foto-foto greenhouse hidroponik Mabruk Farm di Gunung Sari, Pesawaran. Dari proses semai hingga pengiriman sayuran segar."
	/>
	<meta property="og:title" content="Galeri Greenhouse Hidroponik | Mabruk Farm" />
	<meta
		property="og:description"
		content="Lihat foto-foto greenhouse hidroponik Mabruk Farm di Gunung Sari, Pesawaran."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/galeri" />
	<link rel="canonical" href="https://mabruk.farm/galeri" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			Lihat Langsung Greenhouse Kami
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Dari semai hingga pengiriman — intip proses di balik sayuran segar Mabruk Farm.
		</p>
	</div>
</section>

<!-- 2. Gallery -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Category filter -->
		<div class="mb-10 flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					onclick={() => (activeCategory = cat.key)}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors {activeCategory ===
					cat.key
						? 'bg-primary text-white'
						: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<!-- Photo grid -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredPhotos as photo (photo.imageUrl)}
				<div class="group overflow-hidden rounded-xl bg-primary-surface">
					<div class="aspect-[4/3] overflow-hidden">
						<img
							src={photo.imageUrl}
							alt={photo.alt}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<p class="px-4 py-3 text-xs text-neutral-600">{photo.alt}</p>
				</div>
			{/each}
		</div>

		{#if filteredPhotos.length === 0}
			<div class="py-12 text-center">
				<p class="text-neutral-500">Belum ada foto untuk kategori ini.</p>
			</div>
		{/if}
	</div>
</section>

<!-- 3. Form Kontak -->
<section class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Tertarik dengan Sayuran Segar Kami?"
			subtitle="Hubungi kami untuk pesan atau kunjungi langsung greenhouse kami."
		/>
		{#if submitted}
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<CheckCircle class="mx-auto h-12 w-12 text-primary" />
				<h3 class="mt-4 text-lg font-bold text-neutral-900">Pesan Terkirim!</h3>
				<p class="mt-2 text-sm text-neutral-600">
					WhatsApp sudah terbuka. Tinggal kirim dan tim kami akan merespons.
				</p>
				<Button variant="primary" onclick={() => (submitted = false)} class="mt-6 px-6 py-2.5">
					Kirim Lagi
				</Button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-4 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
				<FormInput id="nama" label="Nama" bind:value={nama} placeholder="Nama Anda" required />
				<FormInput
					id="noWa"
					label="No. WhatsApp"
					bind:value={noWa}
					type="tel"
					placeholder="08xxxxxxxxxx"
					required
				/>
				<FormTextarea
					id="pesan"
					label="Pesan"
					bind:value={pesan}
					placeholder="Contoh: Saya tertarik pesan sayuran / ingin kunjungi greenhouse."
					required
				/>
				<button
					type="submit"
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
				>
					<Send class="h-4 w-4" />
					Hubungi via WhatsApp
				</button>
			</form>
		{/if}
	</div>
</section>
