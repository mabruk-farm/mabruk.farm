<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'

	let nama = $state('')
	let wa_email = $state('')
	let subjek = $state('')
	let pesan = $state('')

	let isSubmitting = $state(false)
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle')

	const subjekOptions = ['Pemesanan', 'Kerjasama B2B', 'Pertanyaan Umum', 'Lainnya']

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		if (!nama || !pesan) return

		isSubmitting = true
		submitStatus = 'idle'

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					type: 'kontak',
					nama,
					wa_email,
					subjek,
					pesan
				})
			})

			if (res.ok) {
				submitStatus = 'success'
				nama = ''
				wa_email = ''
				subjek = ''
				pesan = ''
			} else {
				submitStatus = 'error'
			}
		} catch {
			submitStatus = 'error'
		} finally {
			isSubmitting = false
		}
	}

	const inputClass =
		'w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
</script>

{#if submitStatus === 'success'}
	<div class="rounded-xl bg-primary-surface p-8 text-center">
		<p class="text-lg font-bold text-primary">Pesan Terkirim!</p>
		<p class="mt-2 text-sm text-neutral-600">
			Terima kasih sudah menghubungi kami. Tim kami akan membalas segera.
		</p>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-5">
		<div>
			<label for="contact-nama" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>Nama *</label
			>
			<input
				id="contact-nama"
				type="text"
				bind:value={nama}
				required
				class={inputClass}
				placeholder="Nama Anda"
			/>
		</div>

		<div>
			<label for="contact-wa" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>WhatsApp / Email</label
			>
			<input
				id="contact-wa"
				type="text"
				bind:value={wa_email}
				class={inputClass}
				placeholder="08xx-xxxx-xxxx atau email@anda.com"
			/>
		</div>

		<div>
			<label for="contact-subjek" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>Subjek</label
			>
			<select id="contact-subjek" bind:value={subjek} class={inputClass}>
				<option value="">Pilih subjek</option>
				{#each subjekOptions as opt}
					<option value={opt}>{opt}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="contact-pesan" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>Pesan *</label
			>
			<textarea
				id="contact-pesan"
				bind:value={pesan}
				required
				rows={4}
				class={inputClass}
				placeholder="Tulis pesan Anda di sini..."
			></textarea>
		</div>

		{#if submitStatus === 'error'}
			<p class="text-sm text-red-600">
				Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
			</p>
		{/if}

		<Button type="submit" variant="primary" disabled={isSubmitting} class="w-full py-3">
			{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
		</Button>
	</form>
{/if}
