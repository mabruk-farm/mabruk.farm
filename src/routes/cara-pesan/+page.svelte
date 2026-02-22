<script lang="ts">
	import {
		ShoppingBag,
		MessageCircle,
		CreditCard,
		Truck,
		Clock,
		Banknote,
		Calendar,
		Package
	} from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Cara Pesan', url: 'https://mabruk.farm/cara-pesan' }
		])
	)

	const waLink = createWhatsAppLink('Halo Mabruk Farm, saya mau pesan sayuran')

	const steps = [
		{
			icon: ShoppingBag,
			number: '1',
			title: 'Pilih Produk',
			description:
				'Browse katalog produk kami atau pilih paket langganan mingguan. Lihat harga, deskripsi, dan ketersediaan.'
		},
		{
			icon: MessageCircle,
			number: '2',
			title: 'Hubungi via WhatsApp',
			description:
				'Klik tombol "Pesan via WhatsApp" di produk yang Anda inginkan. Pesan otomatis terisi — tinggal kirim.'
		},
		{
			icon: CreditCard,
			number: '3',
			title: 'Konfirmasi & Bayar',
			description:
				'Admin kami akan konfirmasi ketersediaan dan total harga. Bayar via transfer BCA atau e-wallet (Dana, OVO, GoPay).'
		},
		{
			icon: Truck,
			number: '4',
			title: 'Sayuran Diantar',
			description:
				'Sayuran dipanen segar dan dikirim ke alamat Anda. Order sebelum jam 10 pagi untuk pengiriman di hari yang sama.'
		}
	]

	const infoCards = [
		{
			icon: Clock,
			title: 'Jam Order',
			description: 'Sebelum pukul 10:00 WIB untuk pengiriman hari yang sama. Setelahnya, dikirim besok.',
			highlight: 'Cutoff: 10:00 WIB'
		},
		{
			icon: Banknote,
			title: 'Minimal Order',
			description: 'Minimal pembelian Rp 50.000 per transaksi. Gratis ongkir untuk area tertentu.',
			highlight: 'Min. Rp 50.000'
		},
		{
			icon: CreditCard,
			title: 'Pembayaran',
			description: 'Transfer BCA, Dana, OVO, GoPay, atau ShopeePay. Bayar setelah konfirmasi admin.',
			highlight: 'BCA, Dana, OVO, GoPay'
		},
		{
			icon: Calendar,
			title: 'Jadwal Pengiriman',
			description: 'Pengiriman setiap Senin sampai Sabtu, pukul 14:00–17:00 WIB.',
			highlight: 'Sen–Sab, 14:00–17:00'
		}
	]
</script>

<svelte:head>
	<title>Cara Pesan Sayuran Hidroponik | Mabruk Farm</title>
	<meta
		name="description"
		content="Panduan lengkap cara memesan sayuran hidroponik segar dari Mabruk Farm. Pilih produk, WhatsApp, bayar, dan terima di rumah. Mudah dan cepat."
	/>
	<meta property="og:title" content="Cara Pesan Sayuran Hidroponik | Mabruk Farm" />
	<meta
		property="og:description"
		content="Panduan lengkap cara memesan sayuran hidroponik segar dari Mabruk Farm."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/cara-pesan" />
	<link rel="canonical" href="https://mabruk.farm/cara-pesan" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span
			class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary-light"
		>
			Panduan
		</span>
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			Pesan Sayuran Segar Semudah 1-2-3
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Tidak perlu aplikasi atau registrasi. Cukup WhatsApp, bayar, dan sayuran segar tiba di
			rumah Anda.
		</p>
	</div>
</section>

<!-- 2. Steps -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Langkah-Langkah Pemesanan" />
		<div class="space-y-6">
			{#each steps as step}
				<div class="flex gap-5 rounded-xl bg-neutral-50 p-5 sm:p-6">
					<div class="flex-shrink-0">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white"
						>
							{step.number}
						</div>
					</div>
					<div>
						<div class="flex items-center gap-2">
							<step.icon class="h-5 w-5 text-primary" />
							<h3 class="text-base font-bold text-neutral-900">{step.title}</h3>
						</div>
						<p class="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. Info Cards -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Informasi Penting"
			subtitle="Hal-hal yang perlu Anda ketahui sebelum memesan."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{#each infoCards as card}
				<div class="rounded-xl border border-neutral-200 bg-white p-5">
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-surface"
						>
							<card.icon class="h-5 w-5 text-primary" />
						</div>
						<div>
							<h3 class="text-sm font-bold text-neutral-900">{card.title}</h3>
							<p class="text-xs font-semibold text-primary">{card.highlight}</p>
						</div>
					</div>
					<p class="mt-3 text-sm text-neutral-600">{card.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 4. Tips -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Tips Agar Pesanan Lancar" />
		<div class="space-y-3">
			<div class="flex items-start gap-3 rounded-xl bg-primary-surface p-4">
				<Package class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<p class="text-sm text-neutral-700">
					<strong>Order pagi, terima sore.</strong> Pesan sebelum jam 10:00 WIB agar sayuran dikirim di
					hari yang sama.
				</p>
			</div>
			<div class="flex items-start gap-3 rounded-xl bg-primary-surface p-4">
				<MessageCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<p class="text-sm text-neutral-700">
					<strong>Cantumkan alamat lengkap.</strong> Sertakan patokan atau link Google Maps agar pengiriman
					lebih cepat.
				</p>
			</div>
			<div class="flex items-start gap-3 rounded-xl bg-primary-surface p-4">
				<Calendar class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<p class="text-sm text-neutral-700">
					<strong>Mau rutin setiap minggu?</strong> Coba
					<a href="/langganan" class="font-semibold text-primary underline">Paket Langganan</a>
					— lebih hemat dan praktis.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- 5. CTA -->
<section class="bg-primary py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white md:text-3xl">Siap Pesan Sayuran Segar?</h2>
		<p class="mx-auto mt-4 max-w-xl text-base text-white/80">
			Klik tombol di bawah untuk langsung terhubung dengan admin kami via WhatsApp.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="whatsapp" href={waLink} class="px-8 py-3">
				Pesan Sekarang via WhatsApp
			</Button>
			<Button variant="outline-light" href="/produk" class="px-8 py-3">
				Lihat Katalog Produk
			</Button>
		</div>
	</div>
</section>
