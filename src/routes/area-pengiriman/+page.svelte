<script lang="ts">
	import { Send, CheckCircle } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import { createWhatsAppLink, buildPageMessage, type BaseFormData } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'
	import { getIcon } from '$lib/utils/icons'

	let { data } = $props()
	const pageData = $derived(data.pageData)

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Area Pengiriman', url: 'https://mabruk.farm/area-pengiriman' }
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
		const message = buildPageMessage('Cek Area Pengiriman', formData)
		const link = createWhatsAppLink(message)
		trackFormSubmit('area_pengiriman')
		trackWhatsAppClick('area_pengiriman_form')
		window.open(link, '_blank')
		submitted = true
	}

	const colorThemeMap: Record<string, string> = {
		primary: 'bg-primary-surface text-primary',
		green: 'bg-green-50 text-green-700',
		amber: 'bg-amber-50 text-amber-700',
		neutral: 'bg-neutral-100 text-neutral-600'
	}
</script>

<svelte:head>
	<title>Area Pengiriman Sayuran Segar Lampung | Mabruk Farm</title>
	<meta
		name="description"
		content="Cek area pengiriman sayuran hidroponik Mabruk Farm di Lampung. Melayani Pesawaran, Bandar Lampung, dan sekitarnya. Gratis ongkir area tertentu."
	/>
	<meta
		property="og:title"
		content="Area Pengiriman Sayuran Segar Lampung | Mabruk Farm"
	/>
	<meta
		property="og:description"
		content="Cek area pengiriman sayuran hidroponik Mabruk Farm di Lampung."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/area-pengiriman" />
	<link rel="canonical" href="https://mabruk.farm/area-pengiriman" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span
			class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary-light"
		>
			Pengiriman
		</span>
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			{pageData.heroTitle}
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			{pageData.heroSubtitle}
		</p>
	</div>
</section>

<!-- 2. Delivery Zones -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Zona Pengiriman"
			subtitle="Ongkos kirim berdasarkan jarak dari greenhouse kami."
		/>

		<!-- Mobile cards -->
		<div class="space-y-4 lg:hidden">
			{#each pageData.zones as zone}
				<div class="rounded-xl border border-neutral-200 bg-white p-5">
					<div class="flex items-center justify-between">
						<span class="rounded-full px-3 py-1 text-xs font-bold {colorThemeMap[zone.colorTheme] ?? ''}">
							{zone.zone}
						</span>
						<span class="text-lg font-bold text-primary">{zone.ongkir}</span>
					</div>
					<p class="mt-3 text-sm text-neutral-700">{zone.area}</p>
					<p class="mt-1 text-xs text-neutral-500">Estimasi: {zone.estimasi}</p>
				</div>
			{/each}
		</div>

		<!-- Desktop table -->
		<div class="hidden overflow-hidden rounded-xl border border-neutral-200 lg:block">
			<table class="w-full text-left text-sm">
				<thead>
					<tr class="bg-neutral-50 text-neutral-600">
						<th class="px-5 py-3 font-semibold">Zone</th>
						<th class="px-5 py-3 font-semibold">Area</th>
						<th class="px-5 py-3 font-semibold">Ongkir</th>
						<th class="px-5 py-3 font-semibold">Estimasi</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-neutral-100">
					{#each pageData.zones as zone}
						<tr>
							<td class="px-5 py-4">
								<span class="rounded-full px-3 py-1 text-xs font-bold {colorThemeMap[zone.colorTheme] ?? ''}">
									{zone.zone}
								</span>
							</td>
							<td class="px-5 py-4 text-neutral-700">{zone.area}</td>
							<td class="px-5 py-4 font-bold text-primary">{zone.ongkir}</td>
							<td class="px-5 py-4 text-neutral-600">{zone.estimasi}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- 3. Jadwal Pengiriman -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Jadwal & Ketentuan Pengiriman" />
		<div class="space-y-4">
			{#each pageData.deliveryInfo as info}
				{@const InfoIcon = getIcon(info.icon)}
				<div class="flex items-start gap-3 rounded-xl bg-white p-5">
					<InfoIcon class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
					<div>
						<p class="text-sm font-semibold text-neutral-900">{info.title}</p>
						<p class="text-sm text-neutral-600">{info.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 4. Google Maps -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Lokasi Greenhouse Kami"
			subtitle="Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung"
		/>
		<div class="overflow-hidden rounded-xl">
			<iframe
				src={pageData.mapsEmbedUrl}
				width="100%"
				height="350"
				style="border:0;"
				allowfullscreen={false}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Lokasi Mabruk Farm"
				class="w-full"
			></iframe>
		</div>
	</div>
</section>

<!-- 5. Form Cek Area -->
<section class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Tidak Yakin Area Anda Tercover?"
			subtitle="Kirim alamat Anda dan kami bantu cek apakah bisa diantar."
		/>
		{#if submitted}
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<CheckCircle class="mx-auto h-12 w-12 text-primary" />
				<h3 class="mt-4 text-lg font-bold text-neutral-900">Terkirim!</h3>
				<p class="mt-2 text-sm text-neutral-600">
					WhatsApp sudah terbuka. Tinggal kirim dan tim kami akan cek area pengiriman Anda.
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
				<FormInput
					id="alamat"
					label="Alamat Lengkap"
					bind:value={alamat}
					placeholder="Alamat yang ingin dicek (kecamatan, kota)"
					required
				/>
				<FormTextarea
					id="pesan"
					label="Catatan Tambahan"
					bind:value={pesan}
					placeholder="Misal: link Google Maps, patokan, dll."
					rows={3}
				/>
				<button
					type="submit"
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
				>
					<Send class="h-4 w-4" />
					Cek Area via WhatsApp
				</button>
			</form>
		{/if}
	</div>
</section>
