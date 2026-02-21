<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import TestimonialCard from '$lib/components/ui/TestimonialCard.svelte'
	import Carousel from '$lib/components/ui/Carousel.svelte'
	import { fadeInOnScroll } from '$lib/utils/animate'
	import type { Testimonial, Partner } from '$lib/sanity/types'

	interface Props {
		testimonialList?: Testimonial[]
		partnerList?: Partner[]
	}

	let { testimonialList = [], partnerList = [] }: Props = $props()
</script>

<section class="bg-primary-surface py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Dipercaya oleh" />

		<div class="mb-10 flex flex-wrap justify-center gap-3">
			{#each partnerList as partner (partner._id)}
				<span
					class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm"
				>
					{partner.name}
				</span>
			{/each}
		</div>

		<Carousel gridClass="sm:grid md:grid-cols-3 sm:gap-6">
			{#each testimonialList as testimonial (testimonial._id)}
				<div class="min-w-0 flex-[0_0_85%] pl-3 sm:flex-auto sm:pl-0">
					<TestimonialCard
						quote={testimonial.quote}
						name={testimonial.name}
						role={testimonial.role}
						company={testimonial.company}
						rating={testimonial.rating}
					/>
				</div>
			{/each}
		</Carousel>
	</div>
</section>
