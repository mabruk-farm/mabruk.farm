<script lang="ts">
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Kebijakan Privasi', url: 'https://mabruk.farm/privasi' }
		])
	)
</script>

<svelte:head>
	<title>Kebijakan Privasi | Mabruk Farm</title>
	<meta
		name="description"
		content="Kebijakan privasi Mabruk Farm. Informasi tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda."
	/>
	<link rel="canonical" href="https://mabruk.farm/privasi" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="bg-primary py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">Kebijakan Privasi</h1>
		<p class="mx-auto mt-3 max-w-xl text-sm text-white/70">
			Terakhir diperbarui: 22 Februari 2026
		</p>
	</div>
</section>

<section class="bg-white py-12 sm:py-16">
	<div class="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-xl font-bold text-primary">1. Informasi yang Kami Kumpulkan</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Mabruk Farm (PT Mabruk Agro Lestari) mengumpulkan informasi berikut saat Anda
			menggunakan website dan layanan kami:
		</p>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>
				<strong>Informasi kontak</strong> — nama, nomor WhatsApp, email yang Anda berikan
				melalui formulir di website.
			</li>
			<li>
				<strong>Informasi bisnis</strong> — nama perusahaan, jabatan, estimasi kebutuhan
				(untuk formulir kerjasama B2B).
			</li>
			<li>
				<strong>Data penggunaan</strong> — halaman yang dikunjungi, waktu kunjungan, perangkat,
				dan browser (melalui Google Analytics).
			</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">2. Penggunaan Informasi</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Informasi yang kami kumpulkan digunakan untuk:
		</p>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Memproses pesanan dan pertanyaan Anda via WhatsApp.</li>
			<li>Menghubungi Anda terkait kerjasama atau layanan yang diminta.</li>
			<li>Meningkatkan pengalaman pengguna di website kami.</li>
			<li>Menganalisis trafik website untuk pengembangan konten.</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">3. Penyimpanan & Keamanan Data</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Kami menjaga keamanan data Anda dengan langkah-langkah berikut:
		</p>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Website menggunakan koneksi HTTPS terenkripsi.</li>
			<li>Data formulir dikirim langsung ke WhatsApp dan tidak disimpan di server kami.</li>
			<li>Data analitik dikumpulkan secara anonim melalui Google Analytics.</li>
			<li>Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga.</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">4. Cookie & Teknologi Pelacakan</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Website kami menggunakan cookie untuk:
		</p>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Google Analytics — menganalisis penggunaan website secara anonim.</li>
			<li>Preferensi sesi — menyimpan preferensi tampilan Anda.</li>
		</ul>
		<p class="mt-3 text-sm text-neutral-600">
			Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">5. Hak Anda</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">Anda berhak untuk:</p>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Mengetahui data apa saja yang kami miliki tentang Anda.</li>
			<li>Meminta penghapusan data pribadi Anda.</li>
			<li>Menolak pengiriman komunikasi pemasaran.</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">6. Perubahan Kebijakan</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan diumumkan
			di halaman ini dengan tanggal pembaruan terbaru.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">7. Hubungi Kami</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, hubungi kami:
		</p>
		<ul class="mt-3 list-none space-y-1 pl-0 text-sm text-neutral-600">
			<li>WhatsApp: 0852-6945-8526</li>
			<li>Email: halo@mabruk.farm</li>
			<li>
				Alamat: Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung
			</li>
		</ul>
	</div>
</section>
