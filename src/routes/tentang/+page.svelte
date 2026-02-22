<script lang="ts">
	import { ShieldCheck, Recycle, Users, Leaf } from 'lucide-svelte'
	import ProcessTimeline from '$lib/components/tentang/ProcessTimeline.svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Tentang', url: 'https://mabruk.farm/tentang' }
		])
	)

	const values = [
		{
			icon: ShieldCheck,
			title: 'Kebersihan',
			description: 'Greenhouse tertutup, media tanam steril, proses panen higienis'
		},
		{
			icon: Leaf,
			title: 'Tanpa Pestisida',
			description:
				'Insect net dan pengendalian hama organik (neem oil). Nol pestisida kimia.'
		},
		{
			icon: Recycle,
			title: 'Keberlanjutan',
			description: 'Hidroponik menggunakan 90% lebih sedikit air dibanding konvensional'
		},
		{
			icon: Users,
			title: 'Pemberdayaan Desa',
			description: 'Mempekerjakan warga Gunung Sari, memajukan ekonomi desa'
		}
	]
</script>

<svelte:head>
	<title>Tentang Mabruk Farm — Pertanian Hidroponik Modern di Pesawaran</title>
	<meta
		name="description"
		content="Kenali Mabruk Farm: kebun hidroponik di Desa Gunung Sari, Pesawaran, Lampung. Didirikan oleh Andri & Aan dengan misi menyediakan sayuran berkah."
	/>
	<meta
		property="og:title"
		content="Tentang Mabruk Farm — Pertanian Hidroponik Modern di Pesawaran"
	/>
	<meta
		property="og:description"
		content="Kenali Mabruk Farm: kebun hidroponik di Desa Gunung Sari, Pesawaran, Lampung. Didirikan oleh Andri & Aan dengan misi menyediakan sayuran berkah."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/tentang" />
	<link rel="canonical" href="https://mabruk.farm/tentang" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">Berkah dari Gunung Sari</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Cerita dua bersaudara yang percaya bahwa pertanian modern bisa membawa berkah untuk banyak
			orang.
		</p>
	</div>
</section>

<!-- 2. Arti Nama -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<p class="text-4xl font-bold text-primary">مبروك</p>
		<h2 class="mt-4 text-2xl font-bold text-neutral-900">"Mabruk" — Diberkahi</h2>
		<p class="mt-4 text-base leading-relaxed text-neutral-600">
			"Mabruk" adalah kata dalam bahasa Arab yang berarti "diberkahi" atau "penuh berkah". Ini bukan
			sekadar nama — ini adalah doa dan komitmen kami.
		</p>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Kami percaya bahwa ketika makanan ditanam dengan cara yang baik, dengan niat yang baik, dan
			sampai ke orang-orang dengan cara yang baik — itu adalah berkah. Dari greenhouse kecil kami di
			Gunung Sari, kami ingin menyebarkan berkah itu ke setiap keluarga di Lampung.
		</p>
	</div>
</section>

<!-- 3. Cerita Kami -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
			<div>
				<h2 class="text-2xl font-bold text-primary md:text-3xl">Cerita Kami</h2>
				<div class="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
					<p>
						Mabruk Farm bermula dari percakapan sederhana antara dua bersaudara: Andri dan Aan.
					</p>
					<p>
						Andri, yang berkarier di bidang teknologi di Jakarta, dan Aan, yang sehari-hari hidup di
						Desa Gunung Sari, Pesawaran, Lampung — sama-sama melihat satu masalah: sayuran di pasar
						sering tidak segar, terpapar pestisida, dan kualitasnya tidak konsisten.
					</p>
					<p>
						"Bagaimana kalau kita tanam sendiri? Dengan cara yang lebih baik?" Dari pertanyaan itu
						lahirlah Mabruk Farm. Kami memilih hidroponik karena tiga alasan: bisa menanam tanpa
						pestisida, hasilnya konsisten sepanjang tahun, dan hemat air.
					</p>
					<p>
						Hari ini, greenhouse kami di Desa Gunung Sari menghasilkan sayuran segar setiap hari
						untuk keluarga, restoran, hotel, dan program Makan Bergizi Gratis di Lampung. Dan kami
						baru mulai.
					</p>
				</div>
			</div>
			<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-surface">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200"
					alt="Greenhouse hidroponik Mabruk Farm"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- 4. Tim Kami -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Tim Kami" />
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
			<!-- Andri -->
			<div class="rounded-2xl bg-neutral-50 p-6 sm:p-8">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_200,h_200,c_fill,g_face/https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
					alt="Andri — Co-Founder Mabruk Farm"
					class="mb-4 h-16 w-16 rounded-full object-cover"
					loading="lazy"
				/>
				<h3 class="text-lg font-bold text-neutral-900">Andri — Co-Founder</h3>
				<p class="mt-2 text-sm leading-relaxed text-neutral-600">
					Mengelola strategi, pemasaran, dan pengembangan bisnis Mabruk Farm.
				</p>
			</div>
			<!-- Aan -->
			<div class="rounded-2xl bg-neutral-50 p-6 sm:p-8">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_200,h_200,c_fill,g_face/https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
					alt="Aan — Co-Founder Mabruk Farm"
					class="mb-4 h-16 w-16 rounded-full object-cover"
					loading="lazy"
				/>
				<h3 class="text-lg font-bold text-neutral-900">Aan — Co-Founder</h3>
				<p class="mt-2 text-sm leading-relaxed text-neutral-600">
					Mengelola operasional harian di greenhouse Gunung Sari, dari semai hingga pengiriman.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- 5. Proses Kami -->
<section class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Proses Kami" subtitle="Dari benih hingga sampai di meja Anda." />
		<ProcessTimeline />
	</div>
</section>

<!-- 6. Nilai-Nilai -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Nilai-Nilai Kami" />
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as val}
				<div class="rounded-xl bg-neutral-50 p-6 text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-surface"
					>
						<val.icon class="h-6 w-6 text-primary" />
					</div>
					<h3 class="mt-4 text-base font-bold text-neutral-900">{val.title}</h3>
					<p class="mt-2 text-sm text-neutral-600">{val.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 7. Lokasi -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Lokasi Kami" />
		<div class="text-center">
			<p class="text-base text-neutral-600">
				Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung
			</p>
			<p class="mt-1 text-sm text-neutral-500">±30–45 menit dari pusat kota Bandar Lampung</p>
		</div>
		<div class="mt-8 overflow-hidden rounded-2xl">
			<iframe
				title="Lokasi Mabruk Farm"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1!2d104.9711622!3d-5.4573083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e472b1da9737d2d%3A0xc8035f5e16d3ca9e!2sMABRUK%20FARM!5e0!3m2!1sid!2sid"
				width="100%"
				height="400"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>
