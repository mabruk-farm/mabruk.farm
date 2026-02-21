<script lang="ts">
	import { Sprout, Leaf, FlaskConical, Scissors, Package, Truck } from 'lucide-svelte'

	const steps = [
		{
			icon: Sprout,
			title: 'Semai',
			description: 'Benih disemai di rockwool steril dalam ruang terkontrol'
		},
		{
			icon: Leaf,
			title: 'Tanam',
			description: 'Bibit dipindahkan ke sistem NFT/DFT di greenhouse'
		},
		{
			icon: FlaskConical,
			title: 'Rawat',
			description: 'Nutrisi AB Mix dikontrol 2x sehari, pH & TDS dipantau'
		},
		{
			icon: Scissors,
			title: 'Panen',
			description: 'Sayuran dipanen di pagi hari saat nutrisi paling optimal'
		},
		{
			icon: Package,
			title: 'Kemas',
			description: 'Dicuci bersih, ditimbang, dikemas dengan label Mabruk Farm'
		},
		{
			icon: Truck,
			title: 'Kirim',
			description: 'Dikirim langsung ke customer di hari yang sama'
		}
	]
</script>

<!-- Desktop: horizontal -->
<div class="hidden md:block">
	<div class="grid grid-cols-6 gap-4">
		{#each steps as step, i}
			<div class="relative text-center">
				<!-- Connector line -->
				{#if i < steps.length - 1}
					<div
						class="absolute left-[calc(50%+24px)] top-6 h-0.5 bg-primary-light/30"
						style="width: calc(100% - 48px)"
					></div>
				{/if}

				<!-- Circle -->
				<div
					class="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white"
				>
					<step.icon class="h-5 w-5" />
				</div>

				<p class="mt-3 text-sm font-bold text-neutral-900">{i + 1}. {step.title}</p>
				<p class="mt-1 text-xs leading-relaxed text-neutral-600">{step.description}</p>
			</div>
		{/each}
	</div>
</div>

<!-- Mobile: vertical -->
<div class="md:hidden">
	<div class="space-y-6">
		{#each steps as step, i}
			<div class="flex gap-4">
				<div class="flex flex-col items-center">
					<div
						class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white"
					>
						<step.icon class="h-4 w-4" />
					</div>
					{#if i < steps.length - 1}
						<div class="mt-2 h-full w-0.5 bg-primary-light/30"></div>
					{/if}
				</div>
				<div class="pb-4">
					<p class="text-sm font-bold text-neutral-900">{i + 1}. {step.title}</p>
					<p class="mt-1 text-sm text-neutral-600">{step.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
