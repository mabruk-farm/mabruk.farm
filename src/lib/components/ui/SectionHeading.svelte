<script lang="ts">
	interface Props {
		title: string
		subtitle?: string
		align?: 'center' | 'left'
		class?: string
	}

	let { title, subtitle, align = 'center', class: className = '' }: Props = $props()
</script>

<div class="mb-10 {align === 'center' ? 'text-center' : 'text-left'} {className}">
	<h2 class="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
	{#if subtitle}
		<p class="mt-3 max-w-2xl text-base text-neutral-600 {align === 'center' ? 'mx-auto' : ''}">
			{subtitle}
		</p>
	{/if}
</div>
