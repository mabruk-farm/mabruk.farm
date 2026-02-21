<script lang="ts">
	import type { ChatMessage } from '$lib/stores/chat.svelte'

	let { message, isStreaming = false }: { message: ChatMessage; isStreaming?: boolean } = $props()

	const isUser = $derived(message.role === 'user')
</script>

<div class="flex {isUser ? 'justify-end' : 'justify-start'}">
	<div
		class="max-w-[80%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap {isUser
			? 'bg-primary text-white rounded-2xl rounded-br-md'
			: 'bg-neutral-100 text-neutral-900 rounded-2xl rounded-bl-md'}"
	>
		{#if !isUser && isStreaming && !message.content}
			<div class="flex items-center gap-1.5 py-1">
				<span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400"></span>
				<span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400 [animation-delay:150ms]"
				></span>
				<span class="h-2 w-2 animate-pulse rounded-full bg-neutral-400 [animation-delay:300ms]"
				></span>
			</div>
		{:else}
			{message.content}
		{/if}
	</div>
</div>
