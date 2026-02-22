<script lang="ts">
	import { Leaf, Droplets, Sun } from 'lucide-svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'

	const waLink = createWhatsAppLink('Halo Mabruk Farm, saya mau pesan sayuran')
</script>

<section class="relative overflow-hidden bg-primary">
	<div class="absolute inset-0">
		<div
			class="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-light opacity-10 blur-3xl"
		></div>
		<div
			class="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary-light opacity-10 blur-3xl"
		></div>
		<div
			class="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-secondary opacity-5 blur-3xl"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<h1
					class="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
				>
					Sayuran Segar Tanpa Pestisida, Langsung dari
					<span class="text-secondary-light">Gunung Sari</span>
				</h1>

				<p class="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
					Dipanen pagi ini di greenhouse kami di jantung Pesawaran, Lampung — sampai di meja
					Anda besok. Ditanam dengan sistem hidroponik modern, 100% tanpa pestisida, nutrisi
					terkontrol setiap hari.
				</p>

				<div class="mt-8 flex flex-wrap gap-4">
					<Button variant="whatsapp" href={waLink} class="px-6 py-3 text-sm">
						Pesan Sekarang via WhatsApp
					</Button>
					<Button variant="outline-light" href="/produk" class="px-6 py-3 text-sm">
						Lihat Produk Kami
					</Button>
				</div>

				<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
					<span class="flex items-center gap-1.5">
						<Leaf class="h-4 w-4 text-primary-light" />
						100% Tanpa Pestisida
					</span>
					<span class="hidden sm:inline text-white/30">|</span>
					<span class="flex items-center gap-1.5">
						<Sun class="h-4 w-4 text-secondary-light" />
						365 Hari Suplai
					</span>
					<span class="hidden sm:inline text-white/30">|</span>
					<span class="flex items-center gap-1.5">
						<Droplets class="h-4 w-4 text-primary-light" />
						Segar Tiap Pagi
					</span>
				</div>
			</div>

			<div class="hidden lg:block">
				<div
					class="relative aspect-square overflow-hidden rounded-2xl bg-primary-light/20 shadow-2xl"
				>
					<img
						src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200"
						alt="Greenhouse hidroponik Mabruk Farm di Gunung Sari, Pesawaran"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
