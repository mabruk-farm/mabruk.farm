<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import FormSelect from '$lib/components/ui/FormSelect.svelte'
	import { createWhatsAppLink, buildKerjasamaMessage } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'

	let nama = $state('')
	let company = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let jabatan = $state('')
	let jenisBisnis = $state('')
	let estimasiKebutuhan = $state('')
	let pesan = $state('')

	let submitStatus = $state<'idle' | 'success'>('idle')

	const jenisBisnisOptions = [
		'Restoran',
		'Hotel',
		'Katering',
		'Supermarket / Toko',
		'Program MBG',
		'Lainnya'
	]

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		if (!nama.trim() || !noWa.trim() || !pesan.trim()) return

		const message = buildKerjasamaMessage({
			nama,
			noWa,
			alamat,
			company,
			jabatan,
			jenisBisnis,
			estimasiKebutuhan,
			pesan
		})
		const waLink = createWhatsAppLink(message)

		trackFormSubmit('kerjasama')
		trackWhatsAppClick('kerjasama_form')
		window.open(waLink, '_blank', 'noopener,noreferrer')

		submitStatus = 'success'
		nama = ''
		company = ''
		noWa = ''
		alamat = ''
		jabatan = ''
		jenisBisnis = ''
		estimasiKebutuhan = ''
		pesan = ''
	}
</script>

{#if submitStatus === 'success'}
	<div class="rounded-xl bg-primary-surface p-8 text-center">
		<p class="text-lg font-bold text-primary">Terima kasih!</p>
		<p class="mt-2 text-sm text-neutral-600">
			WhatsApp sudah terbuka. Silakan kirim pesan untuk melanjutkan diskusi kerjasama dengan tim
			kami.
		</p>
		<button
			onclick={() => (submitStatus = 'idle')}
			class="mt-4 text-sm font-medium text-primary underline underline-offset-2 hover:text-primary-light"
		>
			Ajukan lagi
		</button>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-5">
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<FormInput
				id="inquiry-nama"
				label="Nama Lengkap"
				bind:value={nama}
				required
				placeholder="Nama Anda"
			/>
			<FormInput
				id="inquiry-company"
				label="Nama Perusahaan"
				bind:value={company}
				placeholder="PT / CV / Nama Usaha"
			/>
		</div>

		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<FormInput
				id="inquiry-wa"
				label="No. WhatsApp"
				bind:value={noWa}
				type="tel"
				required
				placeholder="08xx-xxxx-xxxx"
			/>
			<FormInput
				id="inquiry-alamat"
				label="Alamat"
				bind:value={alamat}
				placeholder="Kota atau alamat lengkap"
			/>
		</div>

		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<FormInput
				id="inquiry-jabatan"
				label="Jabatan"
				bind:value={jabatan}
				placeholder="Purchasing Manager, Owner, dll"
			/>
			<FormSelect
				id="inquiry-bisnis"
				label="Jenis Bisnis"
				bind:value={jenisBisnis}
				options={jenisBisnisOptions}
				placeholder="Pilih jenis bisnis"
			/>
		</div>

		<FormInput
			id="inquiry-estimasi"
			label="Estimasi Kebutuhan / Minggu (kg)"
			bind:value={estimasiKebutuhan}
			placeholder="Contoh: 50 kg"
		/>

		<FormTextarea
			id="inquiry-pesan"
			label="Pesan / Kebutuhan Khusus"
			bind:value={pesan}
			required
			placeholder="Ceritakan kebutuhan sayuran untuk bisnis Anda..."
		/>

		<Button type="submit" variant="whatsapp" class="w-full py-3">Ajukan via WhatsApp</Button>
	</form>
{/if}
