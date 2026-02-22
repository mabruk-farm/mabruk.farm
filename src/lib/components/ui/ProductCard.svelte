<script lang="ts">
	import { Leaf } from 'lucide-svelte'
	import Badge from './Badge.svelte'
	import Button from './Button.svelte'
	import { formatPriceWithUnit } from '$lib/utils/format'
	import { createOrderLink } from '$lib/utils/whatsapp'
	import { trackWhatsAppClick } from '$lib/utils/analytics'

	interface Props {
		name: string
		price: number
		unit: string
		shortDescription: string
		badges: string[]
		available: boolean
		slug: string
		imageUrl?: string
	}

	let { name, price, unit, shortDescription, badges, available, slug, imageUrl }: Props = $props()

	type BadgeVariant = 'bestSeller' | 'premium' | 'favorit' | 'category'

	function getBadgeVariant(badge: string): BadgeVariant {
		const map: Record<string, BadgeVariant> = {
			'Best Seller': 'bestSeller',
			Premium: 'premium',
			Favorit: 'favorit'
		}
		return map[badge] ?? 'category'
	}
</script>

<article
	class="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
>
	<a href="/produk/{slug}" class="relative block aspect-[4/3] overflow-hidden bg-primary-surface">
		{#if imageUrl}
			<img src={imageUrl} alt={name} class="h-full w-full object-cover" loading="lazy" />
		{:else}
			<div class="absolute inset-0 flex items-center justify-center">
				<Leaf class="h-12 w-12 text-primary-light opacity-40" />
			</div>
		{/if}

		{#if badges.length > 0}
			<div class="absolute right-3 top-3">
				<Badge variant={getBadgeVariant(badges[0])}>{badges[0]}</Badge>
			</div>
		{/if}

		{#if !available}
			<div class="absolute inset-0 flex items-center justify-center bg-neutral-900/50">
				<Badge variant="habis">Habis</Badge>
			</div>
		{/if}
	</a>

	<div class="p-4">
		<a href="/produk/{slug}">
			<h3 class="text-base font-bold text-neutral-900">{name}</h3>
		</a>
		<p class="mt-1 line-clamp-2 text-sm text-neutral-600">{shortDescription}</p>
		<div class="mt-3 flex items-center justify-between">
			<span class="text-lg font-bold text-secondary">{formatPriceWithUnit(price, unit)}</span>
			{#if available}
				<Button variant="whatsapp" href={createOrderLink(name)} class="px-3 py-1.5 text-xs" onclick={() => trackWhatsAppClick('product_card', name)}>
					Pesan
				</Button>
			{:else}
				<span class="text-sm text-neutral-400">Stok Habis</span>
			{/if}
		</div>
	</div>
</article>
