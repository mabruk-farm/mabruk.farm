<script lang="ts">
	import { Star } from 'lucide-svelte'

	interface Props {
		quote: string
		name: string
		role: string
		company: string
		rating: number
	}

	let { quote, name, role, company, rating }: Props = $props()

	const stars = $derived(Array.from({ length: rating }, (_, i) => i))
</script>

<div class="relative flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
	<div
		class="pointer-events-none absolute left-5 top-4 select-none font-serif text-5xl leading-none text-primary-light opacity-20"
	>
		"
	</div>

	<div class="mb-4 flex gap-0.5">
		{#each stars as i (i)}
			<Star class="h-4 w-4 fill-secondary text-secondary" />
		{/each}
	</div>

	<blockquote class="relative z-10 flex-1 text-sm italic leading-relaxed text-neutral-900">
		"{quote}"
	</blockquote>

	<div class="mt-4 border-t border-neutral-100 pt-4">
		<p class="text-sm font-semibold text-primary">{name}</p>
		<p class="mt-0.5 text-xs text-neutral-600">{role} · {company}</p>
	</div>
</div>
