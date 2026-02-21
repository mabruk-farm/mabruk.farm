<script lang="ts">
	import { Sprout } from 'lucide-svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { fadeInOnScroll } from '$lib/utils/animate'

	let jenisSayur = $state('')
	let nama = $state('')
	let estimasi = $state('')
	let whatsapp = $state('')

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		const parts = [`Halo Mabruk Farm, saya ingin request tanam sayuran.`]
		parts.push(`Jenis sayur: ${jenisSayur}`)
		parts.push(`Nama: ${nama}`)
		if (estimasi) parts.push(`Estimasi kebutuhan/minggu: ${estimasi}`)
		if (whatsapp) parts.push(`No. WA saya: ${whatsapp}`)
		const link = createWhatsAppLink(parts.join('\n'))
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
					<div>
						<label for="rt-jenis" class="mb-1 block text-sm font-medium text-neutral-900">
							Jenis Sayur yang Diinginkan <span class="text-error">*</span>
						</label>
						<input
							id="rt-jenis"
							type="text"
							bind:value={jenisSayur}
							required
							placeholder="Contoh: Kangkung, Bayam Merah, Rocket..."
							class="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
						/>
					</div>

					<div>
						<label for="rt-nama" class="mb-1 block text-sm font-medium text-neutral-900">
							Nama Anda <span class="text-error">*</span>
						</label>
						<input
							id="rt-nama"
							type="text"
							bind:value={nama}
							required
							placeholder="Nama lengkap"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
						/>
					</div>

					<div>
						<label for="rt-estimasi" class="mb-1 block text-sm font-medium text-neutral-900">
							Estimasi Kebutuhan / Minggu
						</label>
						<input
							id="rt-estimasi"
							type="text"
							bind:value={estimasi}
							placeholder="Contoh: 5 kg/minggu"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
						/>
					</div>

					<div>
						<label for="rt-wa" class="mb-1 block text-sm font-medium text-neutral-900">
							No. WhatsApp
						</label>
						<input
							id="rt-wa"
							type="tel"
							bind:value={whatsapp}
							placeholder="08xx-xxxx-xxxx"
							class="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
						/>
					</div>

					<Button
						type="submit"
						variant="whatsapp"
						class="w-full justify-center py-3 text-sm"
					>
						Kirim Request via WhatsApp
					</Button>
				</form>
			</div>
		</div>
	</div>
</section>
