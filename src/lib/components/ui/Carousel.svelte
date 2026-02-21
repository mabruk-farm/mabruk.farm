<script lang="ts">
	import type { Snippet } from 'svelte'
	import useEmblaCarousel from 'embla-carousel-svelte'
	import type { EmblaCarouselType } from 'embla-carousel'

	interface Props {
		gridClass?: string
		children: Snippet
	}

	let { gridClass = 'sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6', children }: Props = $props()

	let emblaApi: EmblaCarouselType | undefined = $state(undefined)
	let scrollSnaps: number[] = $state([])
	let selectedSnap = $state(0)
	let viewportEl: HTMLDivElement | undefined = $state(undefined)

	const options = {
		align: 'start' as const,
		containScroll: 'trimSnaps' as const,
		breakpoints: {
			'(min-width: 640px)': { active: false }
		}
	}

	function setupSnaps(api: EmblaCarouselType) {
		scrollSnaps = api.scrollSnapList()
	}

	function setActiveSnap(api: EmblaCarouselType) {
		selectedSnap = api.selectedScrollSnap()
	}

	function handleInit(event: Event) {
		emblaApi = (event as CustomEvent<EmblaCarouselType>).detail
		setupSnaps(emblaApi)
		setActiveSnap(emblaApi)
		emblaApi.on('reInit', setupSnaps)
		emblaApi.on('reInit', setActiveSnap)
		emblaApi.on('select', setActiveSnap)
	}

	$effect(() => {
		if (!viewportEl) return
		viewportEl.addEventListener('emblaInit', handleInit)
		return () => {
			viewportEl?.removeEventListener('emblaInit', handleInit)
		}
	})

	function goTo(index: number) {
		emblaApi?.scrollTo(index)
	}
</script>

<div>
	<div
		bind:this={viewportEl}
		class="overflow-hidden sm:overflow-visible"
		use:useEmblaCarousel={{ options, plugins: [] }}
	>
		<div class="-ml-3 flex sm:ml-0 {gridClass}">
			{@render children()}
		</div>
	</div>

	{#if scrollSnaps.length > 1}
		<div class="mt-4 flex justify-center gap-1.5 sm:hidden">
			{#each scrollSnaps as snap, index (index)}
				<button
					type="button"
					class="h-2 rounded-full transition-all {index === selectedSnap
						? 'w-6 bg-primary'
						: 'w-2 bg-neutral-300'}"
					onclick={() => goTo(index)}
					aria-label="Go to slide {index + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
