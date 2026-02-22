<script lang="ts">
	import { Send, CheckCircle } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import Accordion from '$lib/components/ui/Accordion.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import { createWhatsAppLink, buildPageMessage, type BaseFormData } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'FAQ', url: 'https://mabruk.farm/faq' }
		])
	)

	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let pesan = $state('')
	let submitted = $state(false)

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		const data: BaseFormData = { nama, noWa, alamat, pesan }
		const message = buildPageMessage('Pertanyaan dari FAQ', data)
		const link = createWhatsAppLink(message)
		trackFormSubmit('faq')
		trackWhatsAppClick('faq_form')
		window.open(link, '_blank')
		submitted = true
	}
</script>

<svelte:head>
	<title>Pertanyaan Umum (FAQ) | Mabruk Farm</title>
	<meta
		name="description"
		content="Jawaban untuk pertanyaan yang sering ditanyakan tentang pemesanan, pengiriman, produk, langganan, dan kerjasama di Mabruk Farm."
	/>
	<meta property="og:title" content="Pertanyaan Umum (FAQ) | Mabruk Farm" />
	<meta
		property="og:description"
		content="Jawaban untuk pertanyaan yang sering ditanyakan tentang Mabruk Farm."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/faq" />
	<link rel="canonical" href="https://mabruk.farm/faq" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">Pertanyaan yang Sering Ditanyakan</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Temukan jawaban untuk pertanyaan umum tentang produk, pemesanan, pengiriman, dan layanan
			Mabruk Farm.
		</p>
	</div>
</section>

<!-- 2. FAQ Sections -->
{#each data.sections as section, i}
	<section class="{i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} py-14 sm:py-16">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<SectionHeading title={section.title} />
			<Accordion items={section.items} />
		</div>
	</section>
{/each}

<!-- 3. Form Tanya -->
<section class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Masih Ada Pertanyaan?"
			subtitle="Tanyakan langsung ke tim kami via WhatsApp."
		/>
		{#if submitted}
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<CheckCircle class="mx-auto h-12 w-12 text-primary" />
				<h3 class="mt-4 text-lg font-bold text-neutral-900">Pertanyaan Terkirim!</h3>
				<p class="mt-2 text-sm text-neutral-600">
					WhatsApp sudah terbuka. Tinggal kirim dan tim kami akan menjawab pertanyaan Anda.
				</p>
				<Button variant="primary" onclick={() => (submitted = false)} class="mt-6 px-6 py-2.5">
					Tanya Lagi
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
					label="Pertanyaan Anda"
					bind:value={pesan}
					placeholder="Tulis pertanyaan yang belum terjawab di FAQ..."
					required
				/>
				<button
					type="submit"
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
				>
					<Send class="h-4 w-4" />
					Tanya via WhatsApp
				</button>
			</form>
		{/if}
	</div>
</section>
