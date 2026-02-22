<script lang="ts">
	import { CheckCircle } from 'lucide-svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { fadeInOnScroll } from '$lib/utils/animate'
	import { trackWhatsAppClick, trackCtaClick } from '$lib/utils/analytics'

	const waLink = createWhatsAppLink(
		'Halo Mabruk Farm, saya tertarik untuk kerjasama supply sayuran. Bisa info lebih lanjut?'
	)

	const trustPoints = [
		'Kualitas konsisten sepanjang tahun',
		'Pengiriman terjadwal & tepat waktu',
		'Harga kompetitif untuk volume besar',
		'Tanpa pestisida, aman untuk konsumen'
	]
</script>

<section class="bg-primary py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white md:text-3xl">
			Butuh Suplai Sayuran Segar untuk Bisnis Anda?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Kami melayani supply contract untuk hotel, restoran, katering, supermarket, dan program
			Makan Bergizi Gratis. Kualitas konsisten, pengiriman terjadwal, harga kompetitif.
		</p>

		<div class="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-3">
			{#each trustPoints as point}
				<span class="flex items-center gap-2 text-sm text-white/80">
					<CheckCircle class="h-4 w-4 flex-shrink-0 text-secondary-light" />
					{point}
				</span>
			{/each}
		</div>

		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href="/kerjasama" class="px-6 py-3" onclick={() => trackCtaClick('ajukan_kerjasama', 'homepage_b2b')}>
				Ajukan Kerjasama
			</Button>
			<Button variant="outline-light" href={waLink} class="px-6 py-3" onclick={() => trackWhatsAppClick('b2b_cta')}>
				Hubungi Langsung
			</Button>
		</div>
	</div>
</section>
