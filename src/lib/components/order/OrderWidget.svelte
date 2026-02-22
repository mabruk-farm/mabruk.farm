<script lang="ts">
	import { X, Send, Leaf, CheckCircle, MessageCircle } from 'lucide-svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { trackOrderWidgetSubmit, trackWhatsAppClick } from '$lib/utils/analytics'

	let { onclose }: { onclose: () => void } = $props()

	let nama = $state('')
	let noHp = $state('')
	let pesan = $state('')
	let isSubmitted = $state(false)

	const isValid = $derived(nama.trim() !== '' && noHp.trim() !== '')

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		if (!isValid) return

		let message = `Halo Mabruk Farm!\n\n`
		message += `Nama: ${nama.trim()}\n`
		message += `No. HP: ${noHp.trim()}\n`

		if (pesan.trim()) {
			message += `\nPesan: ${pesan.trim()}\n`
		}

		message += `\nTerima kasih!`

		const waLink = createWhatsAppLink(message)
		trackOrderWidgetSubmit(nama.trim())
		trackWhatsAppClick('order_widget')
		window.open(waLink, '_blank')
		isSubmitted = true
	}

	function resetForm() {
		nama = ''
		noHp = ''
		pesan = ''
		isSubmitted = false
	}
</script>

<div
	class="fixed right-0 bottom-0 z-50 flex h-[85vh] w-full flex-col overflow-hidden bg-white shadow-xl sm:right-6 sm:bottom-6 sm:h-[540px] sm:w-[380px] sm:rounded-2xl"
>
	<!-- Header -->
	<div class="flex items-center gap-3 bg-primary px-4 py-3 text-white">
		<div class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
			<MessageCircle size={20} />
		</div>
		<div class="flex-1">
			<p class="text-sm font-semibold">Chat Mabruk Farm</p>
			<p class="text-xs text-white/80">Balas via WhatsApp</p>
		</div>
		<button
			onclick={onclose}
			aria-label="Tutup chat"
			class="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/20"
		>
			<X size={18} />
		</button>
	</div>

	{#if isSubmitted}
		<!-- Success State -->
		<div class="flex flex-1 flex-col overflow-y-auto bg-neutral-50 px-4 py-4">
			<div class="flex justify-start">
				<div
					class="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-neutral-900 shadow-sm"
				>
					<div class="mb-2 flex items-center gap-2">
						<CheckCircle class="h-5 w-5 text-primary" />
						<span class="font-semibold text-primary">Pesan Terkirim!</span>
					</div>
					<p class="text-neutral-600">
						WhatsApp sudah terbuka. Silakan kirim pesan untuk melanjutkan chat dengan tim kami.
					</p>
				</div>
			</div>

			<div class="mt-3 flex justify-start">
				<div
					class="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-neutral-900 shadow-sm"
				>
					Mau chat lagi? Klik tombol di bawah ya!
				</div>
			</div>

			<div class="mt-3">
				<button
					onclick={resetForm}
					class="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
				>
					Chat Lagi
				</button>
			</div>
		</div>
	{:else}
		<!-- Chat Template -->
		<form onsubmit={handleSubmit} class="flex flex-1 flex-col overflow-hidden">
			<div class="flex-1 space-y-3 overflow-y-auto bg-neutral-50 px-4 py-4">
				<!-- Bot greeting -->
				<div class="flex justify-start">
					<div
						class="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-neutral-900 shadow-sm"
					>
						Halo! 👋 Sebelum lanjut ke WhatsApp, isi data berikut ya supaya tim kami bisa langsung bantu kamu.
					</div>
				</div>

				<!-- Nama field -->
				<div class="flex justify-start">
					<div
						class="max-w-[85%] space-y-2 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm"
					>
						<p class="text-xs font-medium text-neutral-500">
							Nama kamu <span class="text-red-400">*</span>
						</p>
						<input
							type="text"
							bind:value={nama}
							placeholder="Ketik nama lengkap..."
							required
							class="w-full border-b border-neutral-200 bg-transparent pb-1 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none"
						/>
					</div>
				</div>

				<!-- No HP field -->
				<div class="flex justify-start">
					<div
						class="max-w-[85%] space-y-2 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm"
					>
						<p class="text-xs font-medium text-neutral-500">
							No. WhatsApp <span class="text-red-400">*</span>
						</p>
						<input
							type="tel"
							bind:value={noHp}
							placeholder="08xxxxxxxxxx"
							required
							class="w-full border-b border-neutral-200 bg-transparent pb-1 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none"
						/>
					</div>
				</div>

				<!-- Pesan bot -->
				<div class="flex justify-start">
					<div
						class="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-neutral-900 shadow-sm"
					>
						Ada yang bisa kami bantu? Tulis pesan kamu di bawah ini 😊
					</div>
				</div>

				<!-- User message field (right-aligned like user bubble) -->
				<div class="flex justify-end">
					<div class="w-full max-w-[85%]">
						<textarea
							bind:value={pesan}
							rows={3}
							placeholder="Contoh: Mau tanya harga selada, cara order, dll..."
							class="w-full resize-none rounded-2xl rounded-br-md bg-primary/5 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary"
						></textarea>
					</div>
				</div>

				<!-- Preview bubble (appears when form is valid) -->
				{#if isValid}
					<div class="flex justify-start">
						<div
							class="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm leading-relaxed text-neutral-900 shadow-sm"
						>
							<p class="mb-1.5 text-xs font-medium text-neutral-500">Preview pesan kamu:</p>
							<div class="rounded-lg bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
								<p>Halo Mabruk Farm!</p>
								<p>Nama: {nama.trim()}</p>
								<p>No. HP: {noHp.trim()}</p>
								{#if pesan.trim()}
									<p class="mt-1">Pesan: {pesan.trim()}</p>
								{/if}
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Footer -->
			<div class="border-t border-neutral-200 px-4 py-3">
				<button
					type="submit"
					disabled={!isValid}
					class="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
				>
					<Send size={16} />
					Lanjutkan ke WhatsApp
				</button>
				<div class="mt-2 flex items-center justify-center gap-1 text-[11px] text-neutral-400">
					<Leaf size={10} />
					<span>Mabruk Farm &bull; Sayuran Berkah dari Gunung Sari</span>
				</div>
			</div>
		</form>
	{/if}
</div>
