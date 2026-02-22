<script lang="ts">
	import {
		Package,
		CalendarCheck,
		Truck,
		Percent,
		RefreshCw,
		Leaf,
		Heart,
		CheckCircle,
		MessageCircle
	} from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import Accordion from '$lib/components/ui/Accordion.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Langganan', url: 'https://mabruk.farm/langganan' }
		])
	)

	function waLangganan(paket: string) {
		return createWhatsAppLink(
			`Halo Mabruk Farm! Saya tertarik dengan ${paket}. Bisa info lebih lanjut tentang paket langganan mingguan?`
		)
	}

	const waCustom = createWhatsAppLink(
		'Halo Mabruk Farm! Saya mau tanya tentang paket langganan custom. Bisa disesuaikan dengan kebutuhan saya?'
	)

	const steps = [
		{
			icon: Package,
			title: 'Pilih Paket',
			description: 'Pilih paket langganan sesuai kebutuhan keluarga Anda.'
		},
		{
			icon: CalendarCheck,
			title: 'Atur Jadwal',
			description: 'Tentukan hari pengiriman yang paling cocok untuk Anda.'
		},
		{
			icon: Truck,
			title: 'Terima di Rumah',
			description: 'Sayuran segar diantar ke pintu rumah Anda setiap minggu.'
		}
	]

	const packages = [
		{
			name: 'Paket Hemat',
			price: 'Rp 50.000',
			period: '/minggu',
			weight: '2 kg',
			target: 'Cocok untuk 1–2 orang',
			includes: [
				'Sayuran daun campuran (2 jenis)',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir area Pesawaran',
				'Bisa ganti jenis sayuran'
			],
			highlighted: false
		},
		{
			name: 'Paket Keluarga',
			price: 'Rp 100.000',
			period: '/minggu',
			weight: '4 kg',
			target: 'Cocok untuk 3–4 orang',
			includes: [
				'Sayuran daun campuran (3–4 jenis)',
				'Termasuk 1 jenis sayuran premium',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir Pesawaran & BDL Kota',
				'Variasi berbeda tiap minggu',
				'Bisa request jenis sayuran'
			],
			highlighted: true
		},
		{
			name: 'Paket Premium',
			price: 'Rp 150.000',
			period: '/minggu',
			weight: '5 kg',
			target: 'Cocok untuk 4–6 orang',
			includes: [
				'Sayuran daun + premium (4–5 jenis)',
				'Termasuk herbs segar (basil/mint)',
				'Dipanen segar di hari pengiriman',
				'Gratis ongkir semua area layanan',
				'Variasi berbeda tiap minggu',
				'Prioritas pengiriman pagi',
				'Bisa request & custom isi paket'
			],
			highlighted: false
		}
	]

	const benefits = [
		{
			icon: Percent,
			title: 'Hemat 10–15%',
			description: 'Harga langganan lebih murah dibanding beli satuan.'
		},
		{
			icon: Truck,
			title: 'Prioritas Pengiriman',
			description: 'Pelanggan langganan selalu diprioritaskan pengirimannya.'
		},
		{
			icon: RefreshCw,
			title: 'Variasi Tiap Minggu',
			description: 'Isi paket berbeda setiap minggu agar tidak bosan.'
		},
		{
			icon: CalendarCheck,
			title: 'Bisa Pause Kapan Saja',
			description: 'Sedang pergi? Pause langganan dan lanjutkan saat kembali.'
		},
		{
			icon: Leaf,
			title: 'Selalu Segar',
			description: 'Sayuran dipanen di hari pengiriman, bukan stok gudang.'
		},
		{
			icon: Heart,
			title: 'Tanpa Komitmen Panjang',
			description: 'Tidak ada kontrak. Bisa berhenti kapan saja tanpa penalti.'
		}
	]

	const faqs = [
		{
			question: 'Bagaimana cara mendaftar langganan?',
			answer:
				'Cukup hubungi kami via WhatsApp, pilih paket yang diinginkan, dan tentukan hari pengiriman. Kami akan mengatur semuanya untuk Anda.'
		},
		{
			question: 'Bisa ganti isi paket setiap minggu?',
			answer:
				'Tentu! Anda bisa request jenis sayuran tertentu. Cukup kabari kami via WhatsApp sebelum hari pengiriman.'
		},
		{
			question: 'Bagaimana jika saya sedang pergi?',
			answer:
				'Anda bisa pause langganan kapan saja. Hubungi kami minimal 1 hari sebelum jadwal pengiriman untuk skip minggu tersebut.'
		},
		{
			question: 'Bagaimana sistem pembayarannya?',
			answer:
				'Pembayaran dilakukan per minggu via transfer bank (BCA) atau e-wallet (Dana, OVO, GoPay). Bisa juga bayar bulanan untuk kemudahan.'
		},
		{
			question: 'Apakah ada minimal durasi langganan?',
			answer:
				'Tidak ada. Anda bisa mulai dan berhenti kapan saja. Kami yakin Anda akan terus berlangganan karena kualitas sayuran kami!'
		}
	]
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
			Sayuran Segar Setiap Minggu, Tanpa Ribet
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Pilih paket, kami antar ke pintu rumah Anda setiap minggu. Segar dari greenhouse, langsung
			ke meja makan. Tanpa komitmen panjang.
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
			{#each steps as step, i}
				<div class="text-center">
					<div
						class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-surface"
					>
						<step.icon class="h-6 w-6 text-primary" />
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
			{#each packages as pkg}
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
							<Button variant="amber" href={waLangganan(pkg.name)} class="w-full py-2.5">
								Mulai Langganan
							</Button>
						{:else}
							<Button variant="secondary" href={waLangganan(pkg.name)} class="w-full py-2.5">
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
				<Button variant="primary" href={waCustom} class="px-6 py-2.5">
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
			{#each benefits as benefit}
				<div class="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
					<div
						class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-surface"
					>
						<benefit.icon class="h-5 w-5 text-primary" />
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
		<Accordion items={faqs} />
	</div>
</section>

<!-- 6. CTA -->
<section class="bg-primary py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white md:text-3xl">
			Siap Menikmati Sayuran Segar Setiap Minggu?
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-base text-white/80">
			Mulai langganan hari ini. Tanpa kontrak, tanpa ribet — cukup pilih paket dan kami yang
			urus sisanya.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href={waLangganan('Paket Langganan')} class="px-8 py-3">
				Mulai Langganan via WhatsApp
			</Button>
		</div>
	</div>
</section>
