<script lang="ts">
	import { CheckCircle, MessageCircle, Send } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import Accordion from '$lib/components/ui/Accordion.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import FormSelect from '$lib/components/ui/FormSelect.svelte'
	import {
		createWhatsAppLink,
		buildLanggananMessage,
		type LanggananFormData
	} from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'
	import { getIcon } from '$lib/utils/icons'

	let { data } = $props()
	const { pageData } = data

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Langganan', url: 'https://mabruk.farm/langganan' }
		])
	)

	let paket = $state('')
	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let pesan = $state('')
	let submitted = $state(false)

	const paketOptions = ['Paket Hemat', 'Paket Keluarga', 'Paket Premium', 'Paket Custom']

	function selectPaket(name: string) {
		paket = name
		document.getElementById('form-langganan')?.scrollIntoView({ behavior: 'smooth' })
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		const formData: LanggananFormData = { paket, nama, noWa, alamat, pesan }
		const message = buildLanggananMessage(formData)
		const link = createWhatsAppLink(message)
		trackFormSubmit('langganan')
		trackWhatsAppClick('langganan_form')
		window.open(link, '_blank')
		submitted = true
	}
</script>

<svelte:head>
	<title>Paket Langganan Sayuran Segar Mingguan | Mabruk Farm</title>
	<meta
		name="description"
		content="Langganan sayuran hidroponik segar setiap minggu dari Mabruk Farm. Paket mulai Rp 50.000/minggu, diantar ke rumah Anda di Lampung. Tanpa komitmen panjang."
	/>
	<meta
		property="og:title"
		content="Paket Langganan Sayuran Segar Mingguan | Mabruk Farm"
	/>
	<meta
		property="og:description"
		content="Langganan sayuran hidroponik segar setiap minggu. Paket mulai Rp 50.000/minggu, diantar ke rumah Anda."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/langganan" />
	<link rel="canonical" href="https://mabruk.farm/langganan" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span
			class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary-light"
		>
			Hemat & Praktis
		</span>
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			{pageData.heroTitle}
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			{pageData.heroSubtitle}
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href="#paket" class="px-6 py-3">Pilih Paket Sekarang</Button>
			<Button variant="outline-light" href="/cara-pesan" class="px-6 py-3"
				>Cara Berlangganan</Button
			>
		</div>
	</div>
</section>

<!-- 2. Cara Kerja -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Cara Kerja Langganan"
			subtitle="Tiga langkah mudah untuk sayuran segar setiap minggu."
		/>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each pageData.steps as step, i}
				{@const StepIcon = getIcon(step.icon)}
				<div class="text-center">
					<div
						class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-surface"
					>
						<StepIcon class="h-6 w-6 text-primary" />
					</div>
					<div
						class="mx-auto mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
					>
						{i + 1}
					</div>
					<h3 class="mt-3 text-base font-bold text-neutral-900">{step.title}</h3>
					<p class="mt-2 text-sm text-neutral-600">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. Paket Cards -->
<section id="paket" class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Pilih Paket Langganan"
			subtitle="Sesuaikan dengan kebutuhan dan budget keluarga Anda."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each pageData.packages as pkg}
				<div
					class="relative flex flex-col rounded-xl p-6 {pkg.highlighted
						? 'bg-primary text-white ring-2 ring-primary'
						: 'border border-neutral-200 bg-white'}"
				>
					{#if pkg.highlighted}
						<span
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-white"
						>
							Paling Populer
						</span>
					{/if}
					<h3 class="text-lg font-bold {pkg.highlighted ? 'text-white' : 'text-neutral-900'}">
						{pkg.name}
					</h3>
					<div class="mt-2">
						<span class="text-2xl font-extrabold {pkg.highlighted ? 'text-white' : 'text-primary'}"
							>{pkg.price}</span
						>
						<span class="text-sm {pkg.highlighted ? 'text-white/70' : 'text-neutral-500'}"
							>{pkg.period}</span
						>
					</div>
					<p class="mt-1 text-sm {pkg.highlighted ? 'text-white/70' : 'text-neutral-500'}">
						{pkg.weight} sayuran &bull; {pkg.target}
					</p>
					<ul class="mt-4 flex-1 space-y-2">
						{#each pkg.includes as item}
							<li
								class="flex items-start gap-2 text-sm {pkg.highlighted
									? 'text-white/90'
									: 'text-neutral-600'}"
							>
								<CheckCircle
									class="mt-0.5 h-4 w-4 flex-shrink-0 {pkg.highlighted
										? 'text-secondary-light'
										: 'text-primary'}"
								/>
								{item}
							</li>
						{/each}
					</ul>
					<div class="mt-6">
						{#if pkg.highlighted}
							<Button variant="amber" onclick={() => selectPaket(pkg.name)} class="w-full py-2.5">
								Mulai Langganan
							</Button>
						{:else}
							<Button variant="secondary" onclick={() => selectPaket(pkg.name)} class="w-full py-2.5">
								Pilih Paket
							</Button>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Custom paket -->
		<div class="mt-8 rounded-xl border border-neutral-200 bg-white p-6 text-center">
			<MessageCircle class="mx-auto h-8 w-8 text-primary" />
			<h3 class="mt-3 text-base font-bold text-neutral-900">Paket Custom</h3>
			<p class="mt-2 text-sm text-neutral-600">
				Butuh paket khusus? Kami bisa menyesuaikan isi dan jumlah sesuai kebutuhan Anda.
			</p>
			<div class="mt-4">
				<Button variant="primary" onclick={() => selectPaket('Paket Custom')} class="px-6 py-2.5">
					Hubungi Kami
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- 4. Keunggulan -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Kenapa Berlangganan?"
			subtitle="Lebih hemat, lebih praktis, selalu segar."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each pageData.benefits as benefit}
				{@const BenefitIcon = getIcon(benefit.icon)}
				<div class="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
					<div
						class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-surface"
					>
						<BenefitIcon class="h-5 w-5 text-primary" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-neutral-900">{benefit.title}</h3>
						<p class="mt-1 text-sm text-neutral-600">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 5. FAQ -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Pertanyaan Tentang Langganan" />
		<Accordion
			items={data.faqs.map((f: { question: string; answer: string }) => ({
				question: f.question,
				answer: f.answer
			}))}
		/>
	</div>
</section>

<!-- 6. Form Langganan -->
<section id="form-langganan" class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Mulai Langganan"
			subtitle="Isi data Anda dan pilih paket. Tim kami akan menghubungi via WhatsApp."
		/>
		{#if submitted}
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<CheckCircle class="mx-auto h-12 w-12 text-primary" />
				<h3 class="mt-4 text-lg font-bold text-neutral-900">Formulir Terkirim!</h3>
				<p class="mt-2 text-sm text-neutral-600">
					WhatsApp sudah terbuka dengan data Anda. Tinggal kirim pesan dan tim kami akan
					memproses langganan Anda.
				</p>
				<Button variant="primary" onclick={() => (submitted = false)} class="mt-6 px-6 py-2.5">
					Kirim Lagi
				</Button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-4 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
				<FormSelect
					id="paket"
					label="Paket Langganan"
					bind:value={paket}
					options={paketOptions}
					placeholder="Pilih paket"
					required
				/>
				<FormInput id="nama" label="Nama" bind:value={nama} placeholder="Nama lengkap" required />
				<FormInput
					id="noWa"
					label="No. WhatsApp"
					bind:value={noWa}
					type="tel"
					placeholder="08xxxxxxxxxx"
					required
				/>
				<FormInput id="alamat" label="Alamat" bind:value={alamat} placeholder="Alamat pengiriman" />
				<FormTextarea
					id="pesan"
					label="Pesan / Catatan"
					bind:value={pesan}
					placeholder="Misal: hari pengiriman yang diinginkan, request jenis sayuran, dll."
					rows={3}
				/>
				<button
					type="submit"
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
				>
					<Send class="h-4 w-4" />
					Daftar Langganan via WhatsApp
				</button>
			</form>
		{/if}
	</div>
</section>
