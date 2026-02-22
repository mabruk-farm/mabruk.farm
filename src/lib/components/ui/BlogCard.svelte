<script lang="ts">
	import { FileText } from 'lucide-svelte'
	import Badge from './Badge.svelte'
	import { formatDate } from '$lib/utils/format'

	interface Props {
		title: string
		excerpt: string
		category: string
		publishedAt: string
		slug: string
		coverImageUrl?: string
		readingTimeMinutes?: number
	}

	let {
		title,
		excerpt,
		category,
		publishedAt,
		slug,
		coverImageUrl,
		readingTimeMinutes
	}: Props = $props()
</script>

<article
	class="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
>
	<a href="/blog/{slug}" class="relative block aspect-video overflow-hidden bg-primary-surface">
		{#if coverImageUrl}
			<img
				src={coverImageUrl}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center">
				<FileText class="h-10 w-10 text-primary-light opacity-40" />
			</div>
		{/if}
		<div class="absolute left-3 top-3">
			<Badge variant="category">{category}</Badge>
		</div>
	</a>

	<div class="flex flex-1 flex-col p-5">
		<a href="/blog/{slug}">
			<h3
				class="line-clamp-2 text-base font-bold text-neutral-900 transition-colors group-hover:text-primary"
			>
				{title}
			</h3>
		</a>
		<p class="mt-2 flex-1 line-clamp-3 text-sm text-neutral-600">{excerpt}</p>
		<div class="mt-4 flex items-center gap-3 text-xs text-neutral-600">
			<span>{formatDate(publishedAt)}</span>
			{#if readingTimeMinutes}
				<span>·</span>
				<span>{readingTimeMinutes} menit baca</span>
			{/if}
		</div>
	</div>
</article>
