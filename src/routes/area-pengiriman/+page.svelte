<script lang="ts">
	import { MapPin, Clock, Truck, Phone, Send, CheckCircle } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import { createWhatsAppLink, buildPageMessage, type BaseFormData } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

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
		const data: BaseFormData = { nama, noWa, alamat, pesan }
		const message = buildPageMessage('Cek Area Pengiriman', data)
		const link = createWhatsAppLink(message)
		trackFormSubmit('area_pengiriman')
		trackWhatsAppClick('area_pengiriman_form')
		window.open(link, '_blank')
		submitted = true
	}

	const zones = [
		{
			zone: 'Zone 1',
			area: 'Pesawaran (Way Khilau, Gedong Tataan, Padang Cermin)',
			ongkir: 'Gratis',
			estimasi: 'Same day',
			color: 'bg-primary-surface text-primary'
		},
		{
			zone: 'Zone 2',
			area: 'Bandar Lampung Kota (Tanjung Karang, Teluk Betung, Sukarame)',
			ongkir: 'Rp 10.000',
			estimasi: 'Same day',
			color: 'bg-green-50 text-green-700'
		},
		{
			zone: 'Zone 3',
			area: 'Bandar Lampung Pinggiran (Kemiling, Rajabasa, Way Halim)',
			ongkir: 'Rp 15.000',
			estimasi: 'Same day / Next day',
			color: 'bg-amber-50 text-amber-700'
		},
		{
			zone: 'Zone 4',
			area: 'Luar area (Pringsewu, Metro, Lampung Selatan, dll)',
			ongkir: 'Hubungi kami',
			estimasi: 'Disesuaikan',
			color: 'bg-neutral-100 text-neutral-600'
		}
	]
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
			Kami Mengantar Sayuran Segar ke Area Anda
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Dari greenhouse di Gunung Sari, kami mengirim sayuran segar ke Pesawaran, Bandar Lampung,
			dan sekitarnya setiap hari.
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
			{#each zones as zone}
				<div class="rounded-xl border border-neutral-200 bg-white p-5">
					<div class="flex items-center justify-between">
						<span class="rounded-full px-3 py-1 text-xs font-bold {zone.color}">
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
					{#each zones as zone}
						<tr>
							<td class="px-5 py-4">
								<span class="rounded-full px-3 py-1 text-xs font-bold {zone.color}">
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
			<div class="flex items-start gap-3 rounded-xl bg-white p-5">
				<Clock class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Jadwal Pengiriman</p>
					<p class="text-sm text-neutral-600">
						Senin–Sabtu, pukul 14:00–17:00 WIB. Minggu & hari libur nasional tutup.
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3 rounded-xl bg-white p-5">
				<Truck class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Cutoff Order</p>
					<p class="text-sm text-neutral-600">
						Order sebelum pukul 10:00 WIB akan dikirim di hari yang sama. Setelahnya, masuk
						pengiriman hari berikutnya.
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3 rounded-xl bg-white p-5">
				<MapPin class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Minimal Order</p>
					<p class="text-sm text-neutral-600">
						Minimal pembelian Rp 50.000. Pelanggan langganan mendapat gratis ongkir untuk
						area tertentu.
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3 rounded-xl bg-white p-5">
				<Phone class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Luar Area?</p>
					<p class="text-sm text-neutral-600">
						Untuk pengiriman ke area di luar zona di atas, silakan hubungi kami. Kami akan
						bantu carikan solusi terbaik.
					</p>
				</div>
			</div>
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
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1!2d104.9711622!3d-5.4573083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e472b1da9737d2d%3A0xc8035f5e16d3ca9e!2sMABRUK%20FARM!5e0!3m2!1sid!2sid"
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
