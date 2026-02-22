<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import BlogCard from '$lib/components/ui/BlogCard.svelte'
	import Carousel from '$lib/components/ui/Carousel.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { fadeInOnScroll } from '$lib/utils/animate'
	import type { BlogPost } from '$lib/sanity/types'

	interface Props {
		posts?: BlogPost[]
	}

	let { posts = [] }: Props = $props()
</script>

<section class="bg-white py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Dari Greenhouse Kami"
			subtitle="Cerita, tips, dan edukasi seputar sayuran segar dan pertanian hidroponik."
		/>

		<Carousel>
			{#each posts as post (post._id)}
				<div class="min-w-0 flex-[0_0_85%] pl-3 sm:flex-auto sm:pl-0 sm:h-full">
					<BlogCard
						title={post.title}
						excerpt={post.excerpt}
						category={post.category}
						publishedAt={post.publishedAt}
						slug={post.slug}
						readingTimeMinutes={post.readingTimeMinutes}
						coverImageUrl={post.coverImageUrl}
					/>
				</div>
			{/each}
		</Carousel>

		<div class="mt-10 text-center">
			<Button variant="ghost" href="/blog">
				Baca Semua Artikel &rarr;
			</Button>
		</div>
	</div>
</section>
