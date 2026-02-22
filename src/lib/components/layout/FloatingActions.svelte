<script lang="ts">
	import { Bot, MessageCircle } from 'lucide-svelte'
	import { getChatState } from '$lib/stores/chat.svelte'
	import { getOrderState } from '$lib/stores/order.svelte'
	import ChatWidget from '$lib/components/chat/ChatWidget.svelte'
	import OrderWidget from '$lib/components/order/OrderWidget.svelte'
	import { trackOrderWidgetOpen } from '$lib/utils/analytics'

	let { enableAiChat = false }: { enableAiChat?: boolean } = $props()

	const chat = getChatState()
	const order = getOrderState()

	const isWidgetOpen = $derived(enableAiChat ? chat.isOpen : order.isOpen)

	function handleOpen() {
		if (enableAiChat) {
			chat.open()
		} else {
			trackOrderWidgetOpen()
			order.open()
		}
	}
</script>

{#if enableAiChat}
	<ChatWidget />
{:else if order.isOpen}
	<OrderWidget onclose={() => order.close()} />
{/if}

{#if !isWidgetOpen}
	<div class="fixed bottom-6 right-6 z-50">
		<button
			onclick={handleOpen}
			aria-label={enableAiChat ? 'Buka chat AI' : 'Chat dengan kami'}
			class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg animate-pulse-glow transition-transform hover:scale-110"
		>
			{#if enableAiChat}
				<Bot class="h-6 w-6" />
			{:else}
				<MessageCircle class="h-6 w-6" />
			{/if}
		</button>
	</div>
{/if}
