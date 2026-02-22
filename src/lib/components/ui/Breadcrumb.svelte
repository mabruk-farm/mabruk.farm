<script lang="ts">
	import { ChevronRight } from 'lucide-svelte'

	interface BreadcrumbItem {
		label: string
		href?: string
	}

	let { items }: { items: BreadcrumbItem[] } = $props()
</script>

<nav aria-label="Breadcrumb" class="mb-6">
	<ol class="flex flex-wrap items-center gap-1 text-sm text-neutral-600">
		{#each items as item, i}
			{#if i > 0}
				<li aria-hidden="true">
					<ChevronRight class="h-3.5 w-3.5 text-neutral-400" />
				</li>
			{/if}
			<li>
				{#if item.href && i < items.length - 1}
					<a href={item.href} class="transition-colors hover:text-primary">{item.label}</a>
				{:else}
					<span class="font-medium text-neutral-900">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
