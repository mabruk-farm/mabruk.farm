<script lang="ts">
	import {
		GraduationCap,
		Sprout,
		Camera,
		Users,
		Clock,
		MapPin,
		CheckCircle,
		Send
	} from 'lucide-svelte'
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import FormInput from '$lib/components/ui/FormInput.svelte'
	import FormTextarea from '$lib/components/ui/FormTextarea.svelte'
	import FormSelect from '$lib/components/ui/FormSelect.svelte'
	import {
		createWhatsAppLink,
		buildEduwisataMessage,
		type EduwisataFormData
	} from '$lib/utils/whatsapp'
	import { trackFormSubmit, trackWhatsAppClick } from '$lib/utils/analytics'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Eduwisata', url: 'https://mabruk.farm/eduwisata' }
		])
	)

	// Form state
	let paketEduwisata = $state('')
	let jumlahPeserta = $state('')
	let tanggalKunjungan = $state('')
	let nama = $state('')
	let noWa = $state('')
	let alamat = $state('')
	let pesan = $state('')
	let submitted = $state(false)

	const paketEduwisataOptions = ['Paket Pelajar', 'Paket Komunitas', 'Paket Keluarga']

	function selectPaketEduwisata(name: string) {
		paketEduwisata = name
		document.getElementById('form-eduwisata')?.scrollIntoView({ behavior: 'smooth' })
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		const data: EduwisataFormData = {
			paket: paketEduwisata,
			jumlahPeserta,
			tanggalKunjungan,
			nama,
			noWa,
			alamat,
			pesan
		}
		const message = buildEduwisataMessage(data)
		const link = createWhatsAppLink(message)
		trackFormSubmit('eduwisata')
		trackWhatsAppClick('eduwisata_form')
		window.open(link, '_blank')
		submitted = true
	}

	const activities = [
		{
			icon: GraduationCap,
			title: 'Belajar Hidroponik',
			description:
				'Pengenalan sistem NFT & DFT, cara kerja nutrisi AB Mix, dan mengapa hidroponik lebih ramah lingkungan.'
		},
		{
			icon: Sprout,
			title: 'Praktik Semai & Tanam',
			description:
				'Peserta langsung praktik menyemai benih di rockwool dan memindahkan bibit ke sistem hidroponik.'
		},
		{
			icon: Camera,
			title: 'Tur Greenhouse',
			description:
				'Jelajahi greenhouse kami, lihat langsung tanaman tumbuh, dan pahami proses dari semai hingga panen.'
		},
		{
			icon: Users,
			title: 'Diskusi & Tanya Jawab',
			description:
				'Sesi interaktif dengan tim Mabruk Farm. Cocok untuk pelajar, mahasiswa, atau calon petani hidroponik.'
		}
	]

	const packages = [
		{
			name: 'Paket Pelajar',
			duration: '1.5–2 jam',
			target: 'SD, SMP, SMA',
			capacity: '15–40 orang',
			includes: [
				'Tur greenhouse',
				'Pengenalan hidroponik dasar',
				'Praktik semai benih',
				'Snack & minuman',
				'Sertifikat peserta'
			],
			highlighted: false
		},
		{
			name: 'Paket Komunitas',
			duration: '2–3 jam',
			target: 'Mahasiswa, komunitas, kelompok tani',
			capacity: '10–30 orang',
			includes: [
				'Tur greenhouse lengkap',
				'Workshop hidroponik detail',
				'Praktik semai & tanam',
				'Diskusi bisnis hidroponik',
				'Snack & minuman',
				'Sertifikat peserta'
			],
			highlighted: true
		},
		{
			name: 'Paket Keluarga',
			duration: '1–1.5 jam',
			target: 'Keluarga, group kecil',
			capacity: '2–10 orang',
			includes: [
				'Tur greenhouse',
				'Pengenalan hidroponik',
				'Panen sayuran sendiri (bawa pulang)',
				'Foto di area greenhouse'
			],
			highlighted: false
		}
	]

	const faqs = [
		{
			q: 'Berapa biaya eduwisata?',
			a: 'Biaya bervariasi tergantung paket dan jumlah peserta. Hubungi kami via WhatsApp untuk penawaran terbaik.'
		},
		{
			q: 'Kapan jadwal kunjungan?',
			a: 'Kunjungan tersedia Senin–Sabtu, pukul 08:00–15:00 WIB. Wajib reservasi minimal 3 hari sebelumnya.'
		},
		{
			q: 'Apakah cocok untuk anak-anak?',
			a: 'Sangat cocok! Paket Pelajar dirancang untuk usia SD ke atas. Anak-anak bisa belajar sambil bermain di greenhouse.'
		},
		{
			q: 'Di mana lokasi Mabruk Farm?',
			a: 'Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung. Sekitar 30–45 menit dari pusat kota Bandar Lampung.'
		}
	]
</script>

<svelte:head>
	<title>Eduwisata Hidroponik — Kunjungan Edukatif | Mabruk Farm</title>
	<meta
		name="description"
		content="Program eduwisata dan kunjungan edukatif ke greenhouse hidroponik Mabruk Farm di Pesawaran, Lampung. Belajar menanam, tur greenhouse, cocok untuk pelajar dan keluarga."
	/>
	<meta
		property="og:title"
		content="Eduwisata Hidroponik — Kunjungan Edukatif | Mabruk Farm"
	/>
	<meta
		property="og:description"
		content="Program eduwisata dan kunjungan edukatif ke greenhouse hidroponik Mabruk Farm di Pesawaran, Lampung."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/eduwisata" />
	<link rel="canonical" href="https://mabruk.farm/eduwisata" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span
			class="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary-light"
		>
			Program Edukasi
		</span>
		<h1 class="text-3xl font-bold text-white md:text-4xl">
			Eduwisata Hidroponik Mabruk Farm
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Ajak keluarga, pelajar, atau komunitas Anda berkunjung ke greenhouse kami. Belajar
			langsung tentang pertanian hidroponik modern sambil menikmati suasana hijau Gunung Sari.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="amber" href="#form-eduwisata" class="px-6 py-3">
				Reservasi Kunjungan
			</Button>
			<Button variant="outline-light" href="#paket" class="px-6 py-3">
				Lihat Paket
			</Button>
		</div>
	</div>
</section>

<!-- 2. Kegiatan -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Apa yang Akan Anda Pelajari?"
			subtitle="Program eduwisata kami dirancang interaktif dan menyenangkan untuk semua usia."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each activities as activity}
				<div class="rounded-xl bg-neutral-50 p-6">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-surface"
					>
						<activity.icon class="h-5 w-5 text-primary" />
					</div>
					<h3 class="mt-4 text-base font-bold text-neutral-900">{activity.title}</h3>
					<p class="mt-2 text-sm text-neutral-600">{activity.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. Foto Greenhouse -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Suasana Greenhouse Kami" />
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<div class="aspect-[4/3] overflow-hidden rounded-xl bg-primary-surface">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800"
					alt="Greenhouse hidroponik Mabruk Farm"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
			<div class="aspect-[4/3] overflow-hidden rounded-xl bg-primary-surface">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800"
					alt="Tanaman hidroponik tumbuh subur"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
			<div class="aspect-[4/3] overflow-hidden rounded-xl bg-primary-surface sm:col-span-2 lg:col-span-1">
				<img
					src="https://res.cloudinary.com/dkmovhvou/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800"
					alt="Proses perawatan tanaman hidroponik"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- 4. Paket Kunjungan -->
<section id="paket" class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Paket Kunjungan"
			subtitle="Pilih paket yang sesuai dengan kebutuhan grup Anda."
		/>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each packages as pkg}
				<div
					class="relative flex flex-col rounded-xl p-6 {pkg.highlighted
						? 'bg-primary text-white ring-2 ring-primary'
						: 'border border-neutral-200 bg-white'}"
				>
					{#if pkg.highlighted}
						<span
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-white"
						>
							Populer
						</span>
					{/if}
					<h3
						class="text-lg font-bold {pkg.highlighted ? 'text-white' : 'text-neutral-900'}"
					>
						{pkg.name}
					</h3>
					<div class="mt-3 space-y-2">
						<div
							class="flex items-center gap-2 text-sm {pkg.highlighted
								? 'text-white/80'
								: 'text-neutral-600'}"
						>
							<Clock class="h-4 w-4 flex-shrink-0" />
							{pkg.duration}
						</div>
						<div
							class="flex items-center gap-2 text-sm {pkg.highlighted
								? 'text-white/80'
								: 'text-neutral-600'}"
						>
							<Users class="h-4 w-4 flex-shrink-0" />
							{pkg.capacity}
						</div>
						<p
							class="text-xs {pkg.highlighted ? 'text-white/60' : 'text-neutral-500'}"
						>
							{pkg.target}
						</p>
					</div>
					<ul class="mt-4 flex-1 space-y-2">
						{#each pkg.includes as item}
							<li
								class="flex items-start gap-2 text-sm {pkg.highlighted
									? 'text-white/90'
									: 'text-neutral-600'}"
							>
								<CheckCircle
									class="mt-0.5 h-4 w-4 flex-shrink-0 {pkg.highlighted
										? 'text-secondary-light'
										: 'text-primary'}"
								/>
								{item}
							</li>
						{/each}
					</ul>
					<div class="mt-6">
						{#if pkg.highlighted}
							<Button variant="amber" onclick={() => selectPaketEduwisata(pkg.name)} class="w-full py-2.5">
								Reservasi Sekarang
							</Button>
						{:else}
							<Button variant="secondary" onclick={() => selectPaketEduwisata(pkg.name)} class="w-full py-2.5">
								Hubungi Kami
							</Button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 5. Info Praktis -->
<section class="bg-neutral-50 py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Informasi Praktis" />
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<MapPin class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Lokasi</p>
					<p class="text-sm text-neutral-600">
						Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung (±30–45 menit
						dari Bandar Lampung)
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<Clock class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Jam Kunjungan</p>
					<p class="text-sm text-neutral-600">Senin–Sabtu, 08:00–15:00 WIB</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<Users class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<div>
					<p class="text-sm font-semibold text-neutral-900">Reservasi</p>
					<p class="text-sm text-neutral-600">
						Wajib reservasi minimal 3 hari sebelum kunjungan via WhatsApp.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 6. FAQ -->
<section class="bg-white py-14 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading title="Pertanyaan Umum" />
		<div class="space-y-4">
			{#each faqs as faq}
				<div class="rounded-xl bg-neutral-50 p-5">
					<h3 class="text-sm font-bold text-neutral-900">{faq.q}</h3>
					<p class="mt-2 text-sm text-neutral-600">{faq.a}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 7. Form Reservasi -->
<section id="form-eduwisata" class="bg-primary-surface py-14 sm:py-16">
	<div class="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Reservasi Kunjungan"
			subtitle="Isi data berikut dan tim kami akan menghubungi Anda via WhatsApp untuk konfirmasi."
		/>
		{#if submitted}
			<div class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<CheckCircle class="mx-auto h-12 w-12 text-primary" />
				<h3 class="mt-4 text-lg font-bold text-neutral-900">Reservasi Terkirim!</h3>
				<p class="mt-2 text-sm text-neutral-600">
					WhatsApp sudah terbuka dengan data reservasi Anda. Tinggal kirim pesan dan tim kami
					akan mengonfirmasi jadwal kunjungan.
				</p>
				<Button variant="primary" onclick={() => (submitted = false)} class="mt-6 px-6 py-2.5">
					Kirim Lagi
				</Button>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-4 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
				<FormSelect
					id="paketEduwisata"
					label="Paket Kunjungan"
					bind:value={paketEduwisata}
					options={paketEduwisataOptions}
					placeholder="Pilih paket"
					required
				/>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<FormInput
						id="jumlahPeserta"
						label="Jumlah Peserta"
						bind:value={jumlahPeserta}
						placeholder="Contoh: 25 orang"
						required
					/>
					<FormInput
						id="tanggalKunjungan"
						label="Tanggal Kunjungan"
						bind:value={tanggalKunjungan}
						placeholder="Contoh: 15 Maret 2026"
						required
					/>
				</div>
				<FormInput id="nama" label="Nama PIC" bind:value={nama} placeholder="Nama penanggung jawab" required />
				<FormInput
					id="noWa"
					label="No. WhatsApp"
					bind:value={noWa}
					type="tel"
					placeholder="08xxxxxxxxxx"
					required
				/>
				<FormInput id="alamat" label="Asal Instansi / Kota" bind:value={alamat} placeholder="Contoh: SMA Negeri 1 Bandar Lampung" />
				<FormTextarea
					id="pesan"
					label="Pesan / Catatan"
					bind:value={pesan}
					placeholder="Misal: kebutuhan khusus, pertanyaan, dll."
					rows={3}
				/>
				<button
					type="submit"
					class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
				>
					<Send class="h-4 w-4" />
					Reservasi via WhatsApp
				</button>
			</form>
		{/if}
	</div>
</section>
