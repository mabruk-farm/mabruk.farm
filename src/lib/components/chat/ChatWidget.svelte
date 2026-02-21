<script lang="ts">
	import { untrack } from 'svelte'
	import { X, Bot, MessageCircle } from 'lucide-svelte'
	import { getChatState, MAX_MESSAGES } from '$lib/stores/chat.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import ChatBubble from './ChatBubble.svelte'
	import ChatInput from './ChatInput.svelte'

	const chat = getChatState()
	const STORAGE_KEY = 'mabruk-chat-session'
	const waLink = createWhatsAppLink(
		'Halo Mabruk Farm, saya tertarik dengan sayuran hidroponik Anda. Bisa info lebih lanjut?'
	)

	let messagesContainer: HTMLDivElement | undefined = $state()

	// Load from localStorage on mount
	$effect(() => {
		untrack(() => {
			try {
				const saved = localStorage.getItem(STORAGE_KEY)
				if (saved) {
					chat.loadFromJSON(JSON.parse(saved))
				}
			} catch {
				// ignore parse errors
			}
		})
	})

	// Save to localStorage on message change
	$effect(() => {
		if (chat.messages.length > 0) {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(chat.toJSON()))
			} catch {
				// ignore storage errors
			}
		}
	})

	// Auto-scroll to bottom
	$effect(() => {
		chat.messages.length
		if (messagesContainer) {
			requestAnimationFrame(() => {
				messagesContainer!.scrollTop = messagesContainer!.scrollHeight
			})
		}
	})

	async function sendMessage(text: string) {
		chat.addMessage({ role: 'user', content: text })
		chat.setLoading(true)

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					messages: chat.messages
				})
			})

			if (!response.ok) {
				const errorData = await response.json().catch(() => null)
				const errorMsg =
					errorData?.error ||
					`Maaf, terjadi kesalahan. Silakan hubungi kami via WhatsApp di 0852-6945-8526.`
				chat.addMessage({ role: 'assistant', content: errorMsg })
				chat.setLoading(false)
				return
			}

			chat.addMessage({ role: 'assistant', content: '' })

			const reader = response.body?.getReader()
			if (!reader) {
				chat.updateLastMessage(
					'Maaf, terjadi kesalahan. Silakan hubungi kami via WhatsApp.'
				)
				chat.setLoading(false)
				return
			}

			const decoder = new TextDecoder()
			let fullContent = ''

			while (true) {
				const { done, value } = await reader.read()
				if (done) break
				fullContent += decoder.decode(value, { stream: true })
				chat.updateLastMessage(fullContent)
			}
		} catch {
			chat.addMessage({
				role: 'assistant',
				content:
					'Maaf, terjadi kesalahan koneksi. Silakan coba lagi atau hubungi kami via WhatsApp di 0852-6945-8526.'
			})
		} finally {
			chat.setLoading(false)
		}
	}
</script>

{#if chat.isOpen}
	<div
		class="fixed right-0 bottom-0 z-50 flex h-[85vh] w-full flex-col overflow-hidden bg-white shadow-xl sm:right-6 sm:bottom-6 sm:h-[540px] sm:w-[380px] sm:rounded-2xl"
	>
		<!-- Header -->
		<div class="flex items-center gap-3 bg-primary px-4 py-3 text-white">
			<div class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
				<Bot size={20} />
			</div>
			<div class="flex-1">
				<p class="text-sm font-semibold">Asisten Mabruk Farm</p>
				<p class="text-xs text-white/80">Online</p>
			</div>
			<a
				href={waLink}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1 rounded-full bg-whatsapp/30 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-whatsapp/50"
			>
				<MessageCircle size={12} />
				WA
			</a>
			<button
				onclick={() => chat.close()}
				class="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/20"
				aria-label="Tutup chat"
			>
				<X size={18} />
			</button>
		</div>

		<!-- Messages -->
		<div bind:this={messagesContainer} class="flex-1 space-y-3 overflow-y-auto px-4 py-4">
			<!-- Welcome message -->
			{#if chat.messages.length === 0}
				<div class="flex justify-start">
					<div
						class="max-w-[80%] rounded-2xl rounded-bl-md bg-neutral-100 px-4 py-2.5 text-sm leading-relaxed text-neutral-900"
					>
						Halo! Saya asisten virtual Mabruk Farm. Mau tanya tentang produk, harga,
						atau cara order? Tanya aja!
					</div>
				</div>
			{/if}

			{#each chat.messages as message, i (i)}
				<ChatBubble
					{message}
					isStreaming={chat.isLoading && i === chat.messages.length - 1}
				/>
			{/each}
		</div>

		<!-- Footer -->
		<div class="border-t border-neutral-200 px-4 py-3">
			{#if chat.canSendMessage}
				<ChatInput onsubmit={sendMessage} disabled={chat.isLoading} />
			{:else}
				<div class="rounded-lg bg-neutral-50 px-3 py-2.5 text-center text-sm text-neutral-600">
					Batas pesan tercapai ({MAX_MESSAGES} pesan).
					<a
						href={waLink}
						target="_blank"
						rel="noopener noreferrer"
						class="font-medium text-primary underline"
					>
						Lanjutkan via WhatsApp
					</a>
				</div>
			{/if}
			<div class="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
				<span>Didukung oleh AI</span>
				<a
					href={waLink}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1 text-neutral-500 hover:text-neutral-700"
				>
					<MessageCircle size={12} />
					WhatsApp
				</a>
			</div>
		</div>
	</div>
{/if}
