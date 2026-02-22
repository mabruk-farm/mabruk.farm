<script lang="ts">
	import { Phone, Instagram, Mail, MapPin, Clock } from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Accordion from '$lib/components/ui/Accordion.svelte'
	import ContactForm from '$lib/components/kontak/ContactForm.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createLocalBusinessJsonLd, createBreadcrumbJsonLd } from '$lib/utils/seo'

	let { data } = $props()

	const localBusinessJsonLd = JSON.stringify(createLocalBusinessJsonLd())
	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Kontak', url: 'https://mabruk.farm/kontak' }
		])
	)

	const waLink = createWhatsAppLink('Halo Mabruk Farm, saya mau bertanya.')

	const contactInfo = [
		{
			icon: Phone,
			label: 'WhatsApp',
			value: '0852-6945-8526',
			href: waLink
		},
		{
			icon: Instagram,
			label: 'Instagram',
			value: '@mabruk.farm',
			href: 'https://instagram.com/mabruk.farm'
		},
		{
			icon: Mail,
			label: 'Email',
			value: 'halo@mabruk.farm',
			href: 'mailto:halo@mabruk.farm'
		},
		{
			icon: MapPin,
			label: 'Alamat',
			value: 'Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung',
			href: 'https://maps.app.goo.gl/8oMoLdrvvqcCtsR96'
		},
		{
			icon: Clock,
			label: 'Jam Operasional',
			value: 'Senin – Sabtu, 07:00 – 17:00 WIB',
			href: undefined
		}
	]
</script>

<svelte:head>
	<title>Hubungi Mabruk Farm — Order & Kerjasama Sayuran Hidroponik</title>
	<meta
		name="description"
		content="Hubungi Mabruk Farm via WhatsApp 0852-6945-8526 atau kunjungi greenhouse kami di Gunung Sari, Pesawaran, Lampung."
	/>
	<meta property="og:title" content="Hubungi Mabruk Farm — Order & Kerjasama Sayuran Hidroponik" />
	<meta
		property="og:description"
		content="Hubungi Mabruk Farm via WhatsApp 0852-6945-8526 atau kunjungi greenhouse kami di Gunung Sari, Pesawaran, Lampung."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/kontak" />
	<link rel="canonical" href="https://mabruk.farm/kontak" />
	{@html `<script type="application/ld+json">${localBusinessJsonLd}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- Header -->
<section class="bg-primary-surface py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-2xl font-bold text-primary md:text-3xl">Hubungi Kami</h1>
		<p class="mx-auto mt-3 max-w-xl text-base text-neutral-600">
			Ada pertanyaan, mau pesan, atau tertarik kerjasama? Jangan ragu untuk menghubungi kami.
		</p>
	</div>
</section>

<!-- Content -->
<section class="py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
			<!-- Contact info -->
			<div class="lg:col-span-2">
				<h2 class="text-lg font-bold text-neutral-900">Info Kontak</h2>
				<div class="mt-6 space-y-5">
					{#each contactInfo as info}
						<div class="flex items-start gap-4">
							<div
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-surface"
							>
								<info.icon class="h-5 w-5 text-primary" />
							</div>
							<div>
								<p class="text-xs font-medium uppercase tracking-wide text-neutral-500">
									{info.label}
								</p>
								{#if info.href}
									<a
										href={info.href}
										target={info.href.startsWith('http') ? '_blank' : undefined}
										rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
										class="text-sm font-medium text-neutral-900 hover:text-primary"
									>
										{info.value}
									</a>
								{:else}
									<p class="text-sm font-medium text-neutral-900">{info.value}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Contact form -->
			<div class="lg:col-span-3">
				<div class="rounded-2xl bg-neutral-50 p-6 sm:p-8">
					<h2 class="mb-6 text-lg font-bold text-neutral-900">Kirim Pesan</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Pertanyaan Umum" />
		<Accordion
			items={data.faqs.map((f: { question: string; answer: string }) => ({
				question: f.question,
				answer: f.answer
			}))}
		/>
	</div>
</section>

<!-- Maps -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Lokasi Kami" />
		<div class="overflow-hidden rounded-2xl">
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
