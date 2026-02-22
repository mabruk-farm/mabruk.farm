<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		variant?: 'primary' | 'whatsapp' | 'secondary' | 'ghost' | 'amber' | 'outline-light'
		href?: string
		type?: 'button' | 'submit' | 'reset'
		disabled?: boolean
		class?: string
		onclick?: (e: MouseEvent) => void
		children: Snippet
	}

	let {
		variant = 'primary',
		href,
		type = 'button',
		disabled = false,
		class: className = '',
		onclick,
		children
	}: Props = $props()

	const variantMap: Record<string, string> = {
		primary: 'bg-primary text-white hover:opacity-90',
		whatsapp: 'bg-whatsapp text-white hover:opacity-90',
		secondary: 'bg-white text-primary border border-primary hover:bg-primary-surface',
		ghost: 'bg-transparent text-primary hover:bg-primary-surface',
		amber: 'bg-secondary text-white hover:opacity-90',
		'outline-light': 'bg-transparent text-white border border-white/30 hover:bg-white/10'
	}

	const classes = $derived(
		`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantMap[variant] ?? variantMap.primary} ${className}`
	)
</script>

{#if href && !disabled}
	<a {href} class={classes} {onclick} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} class={classes} {onclick}>
		{@render children()}
	</button>
{/if}
