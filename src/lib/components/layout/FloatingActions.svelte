<script lang="ts">
	import { Bot } from 'lucide-svelte'
	import { getChatState } from '$lib/stores/chat.svelte'
	import ChatWidget from '$lib/components/chat/ChatWidget.svelte'

	const chat = getChatState()
</script>

<ChatWidget />

{#if !chat.isOpen}
	<div class="fixed bottom-6 right-6 z-50">
		<button
			onclick={() => chat.open()}
			aria-label="Buka chat AI"
			class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg animate-pulse-glow transition-transform hover:scale-110"
		>
			<Bot class="h-6 w-6" />
		</button>
	</div>
{/if}
