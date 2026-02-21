<script lang="ts">
	import { ChevronDown } from 'lucide-svelte'

	interface AccordionItem {
		question: string
		answer: string
	}

	interface Props {
		items: AccordionItem[]
	}

	let { items }: Props = $props()

	let openIndex: number | null = $state(null)

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index
	}
</script>

<div class="space-y-3">
	{#each items as item, index (index)}
		<div class="overflow-hidden rounded-xl border border-neutral-200 bg-white">
			<button
				type="button"
				onclick={() => toggle(index)}
				class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 sm:text-base"
			>
				<span>{item.question}</span>
				<ChevronDown
					class="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
				/>
			</button>
			{#if openIndex === index}
				<div class="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
					{item.answer}
				</div>
			{/if}
		</div>
	{/each}
</div>
