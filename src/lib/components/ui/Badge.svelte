<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		variant:
			| 'bestSeller'
			| 'premium'
			| 'favorit'
			| 'tersedia'
			| 'habis'
			| 'baru'
			| 'category'
		class?: string
		children: Snippet
	}

	let { variant, class: className = '', children }: Props = $props()

	const variantMap: Record<string, string> = {
		bestSeller: 'bg-[#FFF8E1] text-warning',
		premium: 'bg-secondary text-white',
		favorit: 'bg-primary-surface text-primary',
		tersedia: 'bg-primary-surface text-success',
		habis: 'bg-[#FFEBEE] text-error',
		baru: 'bg-[#E3F2FD] text-[#1565C0]',
		category: 'bg-neutral-100 text-neutral-600'
	}

	const classes = $derived(
		`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variantMap[variant] ?? variantMap.category} ${className}`
	)
</script>

<span class={classes}>
	{@render children()}
</span>
