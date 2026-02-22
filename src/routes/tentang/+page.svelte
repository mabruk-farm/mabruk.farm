<script lang="ts">
	import ProcessTimeline from '$lib/components/tentang/ProcessTimeline.svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'
	import { getIcon } from '$lib/utils/icons'

	let { data } = $props()
	const { pageData } = data

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Tentang', url: 'https://mabruk.farm/tentang' }
		])
	)
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
		<h1 class="text-3xl font-bold text-white md:text-4xl">{pageData.heroTitle}</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			{pageData.heroSubtitle}
		</p>
	</div>
</section>

<!-- 2. Arti Nama -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<p class="text-4xl font-bold text-primary">مبروك</p>
		<h2 class="mt-4 text-2xl font-bold text-neutral-900">{pageData.namaMeaning}</h2>
		<p class="mt-4 text-base leading-relaxed text-neutral-600">
			{pageData.nameMeaningSubtext}
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
					{#each pageData.storyParagraphs as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
			<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-surface">
				<img
					src={pageData.storyImageUrl}
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
			{#each pageData.team as member}
				<div class="rounded-2xl bg-neutral-50 p-6 sm:p-8">
					{#if member.imageUrl}
						<img
							src={member.imageUrl}
							alt="{member.name} — Mabruk Farm"
							class="mb-4 h-16 w-16 rounded-full object-cover"
							loading="lazy"
						/>
					{/if}
					<h3 class="text-lg font-bold text-neutral-900">{member.name}</h3>
					<p class="mt-2 text-sm leading-relaxed text-neutral-600">
						{member.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 5. Proses Kami -->
<section class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Proses Kami" subtitle="Dari benih hingga sampai di meja Anda." />
		<ProcessTimeline steps={pageData.processSteps} />
	</div>
</section>

<!-- 6. Nilai-Nilai -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Nilai-Nilai Kami" />
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each pageData.values as val}
				{@const ValIcon = getIcon(val.icon)}
				<div class="rounded-xl bg-neutral-50 p-6 text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-surface"
					>
						<ValIcon class="h-6 w-6 text-primary" />
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
