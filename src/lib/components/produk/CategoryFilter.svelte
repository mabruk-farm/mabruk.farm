<script lang="ts">
	interface Props {
		categories: string[]
		active: string
		onselect: (category: string) => void
		disabledCategories?: string[]
	}

	let { categories, active, onselect, disabledCategories = [] }: Props = $props()
</script>

<div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
	{#each categories as category}
		{@const isDisabled = disabledCategories.includes(category)}
		{@const isActive = active === category}
		<button
			type="button"
			class="flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors {isActive
				? 'bg-primary text-white'
				: isDisabled
					? 'cursor-not-allowed bg-neutral-100 text-neutral-400'
					: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}"
			disabled={isDisabled}
			onclick={() => !isDisabled && onselect(category)}
		>
			{category}
			{#if isDisabled}
				<span class="ml-1 text-xs">(Segera)</span>
			{/if}
		</button>
	{/each}
</div>
