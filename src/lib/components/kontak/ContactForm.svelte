<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import FormSelect from '$lib/components/ui/FormSelect.svelte'
	import { createWhatsAppLink, buildKontakMessage } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'

	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let subjek = $state('')
	let pesan = $state('')

	let submitStatus = $state<'idle' | 'success'>('idle')

	const subjekOptions = ['Pemesanan', 'Kerjasama B2B', 'Pertanyaan Umum', 'Lainnya']

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		if (!nama.trim() || !noWa.trim() || !pesan.trim()) return

		const message = buildKontakMessage({ nama, noWa, alamat, subjek, pesan })
		const waLink = createWhatsAppLink(message)

		trackFormSubmit('kontak')
		trackWhatsAppClick('kontak_form')
		window.open(waLink, '_blank', 'noopener,noreferrer')

		submitStatus = 'success'
		nama = ''
		noWa = ''
		alamat = ''
		subjek = ''
		pesan = ''
	}
</script>

{#if submitStatus === 'success'}
	<div class="rounded-xl bg-primary-surface p-8 text-center">
		<p class="text-lg font-bold text-primary">Pesan Terkirim!</p>
		<p class="mt-2 text-sm text-neutral-600">
			WhatsApp sudah terbuka. Silakan kirim pesan untuk melanjutkan chat dengan tim kami.
		</p>
		<button
			onclick={() => (submitStatus = 'idle')}
			class="mt-4 text-sm font-medium text-primary underline underline-offset-2 hover:text-primary-light"
		>
			Kirim pesan lagi
		</button>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-5">
		<FormInput id="contact-nama" label="Nama" bind:value={nama} required placeholder="Nama Anda" />

		<FormInput
			id="contact-wa"
			label="No. WhatsApp"
			bind:value={noWa}
			type="tel"
			required
			placeholder="08xx-xxxx-xxxx"
		/>

		<FormInput
			id="contact-alamat"
			label="Alamat"
			bind:value={alamat}
			placeholder="Kota atau alamat lengkap"
		/>

		<FormSelect
			id="contact-subjek"
			label="Subjek"
			bind:value={subjek}
			options={subjekOptions}
			placeholder="Pilih subjek"
		/>

		<FormTextarea
			id="contact-pesan"
			label="Pesan"
			bind:value={pesan}
			required
			placeholder="Tulis pesan Anda di sini..."
		/>

		<Button type="submit" variant="whatsapp" class="w-full py-3">Kirim via WhatsApp</Button>
	</form>
{/if}
