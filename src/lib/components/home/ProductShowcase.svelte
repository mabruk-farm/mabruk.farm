<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import ProductCard from '$lib/components/ui/ProductCard.svelte'
	import Carousel from '$lib/components/ui/Carousel.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { fadeInOnScroll } from '$lib/utils/animate'
	import type { Product } from '$lib/sanity/types'

	interface Props {
		products?: Product[]
	}

	let { products = [] }: Props = $props()
</script>

<section class="bg-neutral-50 py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Produk Unggulan Kami"
			subtitle="Ditanam dengan cinta di greenhouse kami, dipanen segar untuk Anda."
		/>

		<Carousel>
			{#each products as product (product._id)}
				<div class="min-w-0 flex-[0_0_85%] pl-3 sm:flex-auto sm:pl-0">
					<ProductCard
						name={product.name}
						price={product.price}
						unit={product.unit}
						shortDescription={product.shortDescription}
						badges={product.badges}
						available={product.available}
						slug={product.slug}
						imageUrl={product.imageUrl}
					/>
				</div>
			{/each}
		</Carousel>

		<div class="mt-10 text-center">
			<Button variant="ghost" href="/produk">
				Lihat Semua Produk &rarr;
			</Button>
		</div>
	</div>
</section>
