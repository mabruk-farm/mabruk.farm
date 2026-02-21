<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'

	let nama = $state('')
	let company = $state('')
	let jabatan = $state('')
	let whatsapp = $state('')
	let email = $state('')
	let jenisBisnis = $state('')
	let estimasiKebutuhan = $state('')
	let pesan = $state('')

	let isSubmitting = $state(false)
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle')

	const jenisBisnisOptions = [
		'Restoran',
		'Hotel',
		'Katering',
		'Supermarket / Toko',
		'Program MBG',
		'Lainnya'
	]

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
					type: 'kerjasama',
					nama,
					company,
					jabatan,
					whatsapp,
					email,
					jenisBisnis,
					estimasiKebutuhan,
					pesan
				})
			})

			if (res.ok) {
				submitStatus = 'success'
				const waLink = createWhatsAppLink(
					`Halo Mabruk Farm, saya ${nama} dari ${company || '-'}. Saya baru saja mengisi form kerjasama di website. Bisa info lebih lanjut?`
				)
				window.open(waLink, '_blank')
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
		<p class="text-lg font-bold text-primary">Terima kasih!</p>
		<p class="mt-2 text-sm text-neutral-600">
			Form kerjasama Anda sudah terkirim. Tim kami akan menghubungi Anda segera via WhatsApp.
		</p>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-5">
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<div>
				<label for="nama" class="mb-1.5 block text-sm font-medium text-neutral-700"
					>Nama Lengkap *</label
				>
				<input
					id="nama"
					type="text"
					bind:value={nama}
					required
					class={inputClass}
					placeholder="Nama Anda"
				/>
			</div>
			<div>
				<label for="company" class="mb-1.5 block text-sm font-medium text-neutral-700"
					>Nama Perusahaan</label
				>
				<input
					id="company"
					type="text"
					bind:value={company}
					class={inputClass}
					placeholder="PT / CV / Nama Usaha"
				/>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<div>
				<label for="jabatan" class="mb-1.5 block text-sm font-medium text-neutral-700"
					>Jabatan</label
				>
				<input
					id="jabatan"
					type="text"
					bind:value={jabatan}
					class={inputClass}
					placeholder="Purchasing Manager, Owner, dll"
				/>
			</div>
			<div>
				<label for="jenisBisnis" class="mb-1.5 block text-sm font-medium text-neutral-700"
					>Jenis Bisnis</label
				>
				<select id="jenisBisnis" bind:value={jenisBisnis} class={inputClass}>
					<option value="">Pilih jenis bisnis</option>
					{#each jenisBisnisOptions as opt}
						<option value={opt}>{opt}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
			<div>
				<label for="whatsapp" class="mb-1.5 block text-sm font-medium text-neutral-700"
					>No. WhatsApp</label
				>
				<input
					id="whatsapp"
					type="tel"
					bind:value={whatsapp}
					class={inputClass}
					placeholder="08xx-xxxx-xxxx"
				/>
			</div>
			<div>
				<label for="email" class="mb-1.5 block text-sm font-medium text-neutral-700">Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					class={inputClass}
					placeholder="email@perusahaan.com"
				/>
			</div>
		</div>

		<div>
			<label for="estimasiKebutuhan" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>Estimasi Kebutuhan / Minggu (kg)</label
			>
			<input
				id="estimasiKebutuhan"
				type="text"
				bind:value={estimasiKebutuhan}
				class={inputClass}
				placeholder="Contoh: 50 kg"
			/>
		</div>

		<div>
			<label for="pesan" class="mb-1.5 block text-sm font-medium text-neutral-700"
				>Pesan / Kebutuhan Khusus *</label
			>
			<textarea
				id="pesan"
				bind:value={pesan}
				required
				rows={4}
				class={inputClass}
				placeholder="Ceritakan kebutuhan sayuran untuk bisnis Anda..."
			></textarea>
		</div>

		{#if submitStatus === 'error'}
			<p class="text-sm text-red-600">Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.</p>
		{/if}

		<Button type="submit" variant="primary" disabled={isSubmitting} class="w-full py-3">
			{isSubmitting ? 'Mengirim...' : 'Ajukan Kerjasama'}
		</Button>
	</form>
{/if}
