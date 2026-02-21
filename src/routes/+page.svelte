<script lang="ts">
	import { createLocalBusinessJsonLd, createBreadcrumbJsonLd } from '$lib/utils/seo'
	import Hero from '$lib/components/home/Hero.svelte'
	import TrustBadges from '$lib/components/home/TrustBadges.svelte'
	import ProductShowcase from '$lib/components/home/ProductShowcase.svelte'
	import AboutTeaser from '$lib/components/home/AboutTeaser.svelte'
	import Testimonials from '$lib/components/home/Testimonials.svelte'
	import B2BCta from '$lib/components/home/B2BCta.svelte'
	import RequestTanam from '$lib/components/home/RequestTanam.svelte'
	import BlogPreview from '$lib/components/home/BlogPreview.svelte'

	let { data } = $props()

	const localBusinessJsonLd = JSON.stringify(createLocalBusinessJsonLd())
	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([{ name: 'Beranda', url: 'https://mabruk.farm' }])
	)
</script>

<svelte:head>
	<title>Mabruk Farm — Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari</title>
	<meta
		name="description"
		content="Mabruk Farm menyediakan sayuran hidroponik segar tanpa pestisida dari Gunung Sari, Pesawaran, Lampung. Pesan langsung via WhatsApp."
	/>
	<link rel="canonical" href="https://mabruk.farm" />
	<meta
		property="og:title"
		content="Mabruk Farm — Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari"
	/>
	<meta
		property="og:description"
		content="Sayuran hidroponik segar tanpa pestisida dari Gunung Sari, Pesawaran, Lampung. Dipanen pagi, sampai di meja Anda besok."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${localBusinessJsonLd}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<Hero />
<TrustBadges />
<ProductShowcase products={data.products} />
<AboutTeaser />
<Testimonials testimonialList={data.testimonials} partnerList={data.partners} />
<B2BCta />
<RequestTanam />
<BlogPreview posts={data.posts} />
