<script lang="ts">
	import { Leaf, Sun, FlaskConical, Package } from 'lucide-svelte'

	const badges = [
		{
			icon: Leaf,
			title: 'Tanpa Pestisida 100%',
			description: 'Ditanam tanpa bahan kimia berbahaya, aman untuk keluarga'
		},
		{
			icon: Sun,
			title: 'Dipanen Segar Tiap Hari',
			description: 'Sayuran dipetik pagi hari, langsung dikemas dan dikirim'
		},
		{
			icon: FlaskConical,
			title: 'Nutrisi Terkontrol',
			description: 'Setiap tanaman mendapat nutrisi presisi dengan sistem hidroponik'
		},
		{
			icon: Package,
			title: 'Suplai Konsisten',
			description: 'Tersedia sepanjang tahun, tidak tergantung musim atau cuaca'
		}
	]
</script>

<section class="border-y border-neutral-100 bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
			{#each badges as badge (badge.title)}
				<div class="flex flex-col items-center text-center">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-surface"
					>
						<badge.icon class="h-6 w-6 text-primary" />
					</div>
					<h3 class="mt-3 text-sm font-bold text-neutral-900">{badge.title}</h3>
					<p class="mt-1 text-xs leading-relaxed text-neutral-600">{badge.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
