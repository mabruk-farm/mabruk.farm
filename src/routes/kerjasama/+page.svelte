<script lang="ts">
	import {
		ClipboardList,
		Coins,
		CheckCircle,
		Truck,
		FileText,
		Headphones
	} from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import InquiryForm from '$lib/components/kerjasama/InquiryForm.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Kerjasama', url: 'https://mabruk.farm/kerjasama' }
		])
	)

	const waLink = createWhatsAppLink(
		'Halo Mabruk Farm, saya tertarik untuk kerjasama supply sayuran. Bisa info lebih lanjut?'
	)

	const benefits = [
		{
			icon: ClipboardList,
			title: 'Supply Contract',
			description: 'Kontrak suplai mingguan/bulanan dengan volume dan jadwal disepakati'
		},
		{
			icon: Coins,
			title: 'Harga Kompetitif',
			description: 'Harga khusus partner dengan sistem tiering berdasarkan volume'
		},
		{
			icon: CheckCircle,
			title: 'Kualitas Konsisten',
			description: 'Standar mutu terjaga — hidroponik tidak terpengaruh musim'
		},
		{
			icon: Truck,
			title: 'Pengiriman Terjadwal',
			description: 'Dikirim sesuai jadwal, langsung dari greenhouse ke lokasi Anda'
		},
		{
			icon: FileText,
			title: 'Invoice Bulanan',
			description: 'Sistem pembayaran profesional dengan invoice dan laporan'
		},
		{
			icon: Headphones,
			title: 'Dedicated Support',
			description: 'Account manager khusus untuk koordinasi order'
		}
	]

	const tiers = [
		{
			name: 'Starter',
			volume: '5–20 kg/minggu',
			discount: 'Harga retail',
			target: 'Kafe kecil, warung makan',
			highlighted: false
		},
		{
			name: 'Business',
			volume: '20–50 kg/minggu',
			discount: 'Diskon 10%',
			target: 'Restoran, hotel kecil',
			highlighted: false
		},
		{
			name: 'Enterprise',
			volume: '50–200 kg/minggu',
			discount: 'Diskon 15–20%',
			target: 'Hotel besar, supermarket, MBG',
			highlighted: true
		},
		{
			name: 'Custom',
			volume: '> 200 kg/minggu',
			discount: 'Negosiasi',
			target: 'Jaringan, multi-outlet',
			highlighted: false
		}
	]

	const extras = [
		'Paket sayuran campuran sesuai kebutuhan menu',
		'Custom packaging dengan label bisnis Anda (MOQ berlaku)',
		'Permintaan tanaman khusus bisa diakomodasi dengan pre-order 30 hari'
	]
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
			Partner Suplai Sayuran Segar untuk Bisnis Anda
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Mabruk Farm menyediakan sayuran hidroponik segar dengan kualitas konsisten untuk hotel,
			restoran, katering, supermarket, dan program Makan Bergizi Gratis di Lampung.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href="#form" class="px-6 py-3">Ajukan Kerjasama</Button>
			<Button
				variant="secondary"
				href={waLink}
				class="border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10"
			>
				Hubungi Langsung
			</Button>
		</div>
	</div>
</section>

<!-- 2. Keunggulan -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Keunggulan Kerjasama" />
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each benefits as benefit}
				<div class="rounded-xl bg-neutral-50 p-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-surface">
						<benefit.icon class="h-5 w-5 text-primary" />
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
			{#each tiers as tier}
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

<!-- 4. B2B Extras -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Layanan Tambahan" />
		<ul class="space-y-4">
			{#each extras as extra}
				<li class="flex items-start gap-3">
					<CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
					<span class="text-base text-neutral-600">{extra}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- 5. Inquiry Form -->
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
