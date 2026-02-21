<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { fadeInOnScroll } from '$lib/utils/animate'
</script>

<section class="bg-white py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
			<div>
				<SectionHeading
					title="Cerita di Balik Mabruk Farm"
					align="left"
					class="mb-6"
				/>
				<div class="space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
					<p>
						<strong class="text-neutral-900">"Mabruk"</strong> berarti berkah dalam bahasa
						Arab. Kami percaya bahwa makanan yang baik dimulai dari cara menanam yang baik.
					</p>
					<p>
						Mabruk Farm lahir dari keinginan sederhana: menyediakan sayuran yang benar-benar
						bersih, segar, dan bernutrisi untuk keluarga di Lampung. Berawal dari greenhouse
						kecil di Desa Gunung Sari, Pesawaran — kami memilih hidroponik karena yakin ini
						adalah cara bertani masa depan: hemat air, tanpa pestisida, dan hasilnya konsisten
						sepanjang tahun.
					</p>
					<p>
						Didirikan oleh Andri dan Aan, dua bersaudara yang percaya bahwa pertanian modern
						bisa memberdayakan desa dan memberi berkah untuk banyak orang.
					</p>
				</div>
				<div class="mt-6">
					<Button variant="ghost" href="/tentang">
						Kenali Kami Lebih Dekat &rarr;
					</Button>
				</div>
			</div>

			<div class="hidden lg:block">
				<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-surface">
					<img
						src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_800/https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200"
						alt="Tim Mabruk Farm di greenhouse hidroponik"
						class="h-full w-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
