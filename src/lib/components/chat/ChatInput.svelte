<script lang="ts">
	import { SendHorizontal } from 'lucide-svelte'

	let { onsubmit, disabled = false }: { onsubmit: (text: string) => void; disabled?: boolean } =
		$props()

	let value = $state('')

	function handleSubmit() {
		const trimmed = value.trim()
		if (!trimmed || disabled) return
		onsubmit(trimmed)
		value = ''
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}
</script>

<form onsubmit={(e) => { e.preventDefault(); handleSubmit() }} class="flex items-end gap-2">
	<textarea
		bind:value
		onkeydown={handleKeydown}
		{disabled}
		rows={1}
		placeholder="Ketik pesan..."
		class="flex-1 resize-none rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none disabled:opacity-50"
	></textarea>
	<button
		type="submit"
		disabled={disabled || !value.trim()}
		class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-opacity hover:opacity-90 disabled:opacity-40"
		aria-label="Kirim pesan"
	>
		<SendHorizontal size={18} />
	</button>
</form>
