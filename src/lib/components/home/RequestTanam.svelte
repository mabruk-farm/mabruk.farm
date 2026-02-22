<script lang="ts">
	import { Sprout } from 'lucide-svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import { createWhatsAppLink, buildRequestTanamMessage } from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { fadeInOnScroll } from '$lib/utils/animate'

	let jenisSayur = $state('')
	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let estimasi = $state('')
	let pesan = $state('')

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		if (!jenisSayur.trim() || !nama.trim()) return

		const message = buildRequestTanamMessage({
			nama,
			noWa,
			alamat,
			pesan,
			jenisSayur,
			estimasi
		})
		const link = createWhatsAppLink(message)

		trackFormSubmit('request_tanam')
		trackWhatsAppClick('request_tanam_form')
		window.open(link, '_blank', 'noopener,noreferrer')
	}
</script>

<section class="bg-neutral-50 py-16 sm:py-20" use:fadeInOnScroll>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<div class="overflow-hidden rounded-2xl bg-white shadow-sm">
				<div class="bg-primary px-6 py-5 text-center text-white sm:px-8">
					<Sprout class="mx-auto mb-2 h-8 w-8 text-primary-light" />
					<h2 class="text-xl font-bold sm:text-2xl">
						Mau Sayuran Tertentu? Minta Kami Tanamkan!
					</h2>
					<p class="mt-1 text-sm text-white/80">
						Isi form di bawah, kami tanamkan di greenhouse untuk Anda.
					</p>
				</div>

				<form onsubmit={handleSubmit} class="space-y-4 px-6 py-6 sm:px-8">
					<FormInput
						id="rt-jenis"
						label="Jenis Sayur yang Diinginkan"
						bind:value={jenisSayur}
						required
						placeholder="Contoh: Kangkung, Bayam Merah, Rocket..."
					/>

					<FormInput
						id="rt-nama"
						label="Nama"
						bind:value={nama}
						required
						placeholder="Nama lengkap"
					/>

					<FormInput
						id="rt-wa"
						label="No. WhatsApp"
						bind:value={noWa}
						type="tel"
						placeholder="08xx-xxxx-xxxx"
					/>

					<FormInput
						id="rt-alamat"
						label="Alamat"
						bind:value={alamat}
						placeholder="Kota atau alamat lengkap"
					/>

					<FormInput
						id="rt-estimasi"
						label="Estimasi Kebutuhan / Minggu"
						bind:value={estimasi}
						placeholder="Contoh: 5 kg/minggu"
					/>

					<FormTextarea
						id="rt-pesan"
						label="Pesan"
						bind:value={pesan}
						rows={3}
						placeholder="Ada catatan tambahan?"
					/>

					<Button type="submit" variant="whatsapp" class="w-full justify-center py-3 text-sm">
						Kirim Request via WhatsApp
					</Button>
				</form>
			</div>
		</div>
	</div>
</section>
