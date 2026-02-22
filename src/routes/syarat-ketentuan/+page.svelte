<script lang="ts">
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'Syarat & Ketentuan', url: 'https://mabruk.farm/syarat-ketentuan' }
		])
	)
</script>

<svelte:head>
	<title>Syarat & Ketentuan | Mabruk Farm</title>
	<meta
		name="description"
		content="Syarat dan ketentuan penggunaan website dan layanan Mabruk Farm, PT Mabruk Agro Lestari."
	/>
	<link rel="canonical" href="https://mabruk.farm/syarat-ketentuan" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="bg-primary py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">Syarat & Ketentuan</h1>
		<p class="mx-auto mt-3 max-w-xl text-sm text-white/70">
			Terakhir diperbarui: 22 Februari 2026
		</p>
	</div>
</section>

<section class="bg-white py-12 sm:py-16">
	<div class="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-xl font-bold text-primary">1. Ketentuan Umum</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Dengan mengakses dan menggunakan website mabruk.farm, Anda menyetujui syarat dan
			ketentuan berikut. Website ini dikelola oleh PT Mabruk Agro Lestari yang berkedudukan
			di Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">2. Produk & Harga</h2>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>
				Harga yang tercantum di website bersifat <strong>informatif</strong> dan dapat berubah
				sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
			</li>
			<li>Harga final dikonfirmasi saat pemesanan via WhatsApp.</li>
			<li>
				Ketersediaan produk tergantung pada kondisi panen dan stok di greenhouse kami.
			</li>
			<li>Foto produk bersifat ilustrasi. Tampilan aktual dapat sedikit berbeda.</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">3. Pemesanan & Pembayaran</h2>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Pemesanan dilakukan melalui WhatsApp ke nomor resmi kami: 0852-6945-8526.</li>
			<li>
				Pesanan dikonfirmasi setelah kesepakatan jumlah, harga, dan jadwal pengiriman.
			</li>
			<li>
				Metode pembayaran yang diterima: transfer bank dan COD (Cash on Delivery) untuk
				area tertentu.
			</li>
			<li>
				Untuk kerjasama B2B, sistem pembayaran diatur sesuai kontrak yang disepakati.
			</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">4. Pengiriman</h2>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>
				Area pengiriman utama: Bandar Lampung dan sekitarnya (Pesawaran, Pringsewu).
			</li>
			<li>Jadwal pengiriman: Senin–Sabtu, sesuai kesepakatan saat pemesanan.</li>
			<li>
				Kami tidak bertanggung jawab atas kerusakan produk setelah diterima oleh pembeli.
			</li>
			<li>
				Klaim kerusakan saat pengiriman harus dilaporkan dalam waktu 1x24 jam dengan bukti
				foto.
			</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">5. Kerjasama B2B</h2>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>
				Kerjasama supply diatur dalam kontrak terpisah antara Mabruk Farm dan mitra.
			</li>
			<li>
				Harga, volume, dan jadwal pengiriman sesuai kesepakatan dalam kontrak.
			</li>
			<li>Pembatalan kontrak harus diinformasikan minimal 7 hari kerja sebelumnya.</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">6. Eduwisata</h2>
		<ul class="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-600">
			<li>Reservasi kunjungan wajib dilakukan minimal 3 hari sebelumnya.</li>
			<li>Pembatalan kurang dari 24 jam sebelum jadwal dapat dikenakan biaya.</li>
			<li>
				Peserta wajib mengikuti aturan keselamatan dan kebersihan selama di area greenhouse.
			</li>
			<li>
				Mabruk Farm berhak membatalkan atau mengubah jadwal kunjungan karena kondisi force
				majeure.
			</li>
		</ul>

		<h2 class="mt-10 text-xl font-bold text-primary">7. Hak Kekayaan Intelektual</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Seluruh konten di website ini — termasuk teks, gambar, logo, dan desain — adalah milik
			PT Mabruk Agro Lestari dan dilindungi oleh hukum hak cipta Indonesia. Dilarang
			menyalin, mendistribusikan, atau menggunakan konten tanpa izin tertulis.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">8. Batasan Tanggung Jawab</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Mabruk Farm berupaya menyajikan informasi yang akurat di website ini. Namun, kami tidak
			menjamin bahwa semua informasi selalu terkini atau bebas dari kesalahan. Penggunaan
			informasi dari website ini sepenuhnya menjadi tanggung jawab pengguna.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">9. Perubahan Syarat & Ketentuan</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan berlaku efektif
			sejak dipublikasikan di halaman ini.
		</p>

		<h2 class="mt-10 text-xl font-bold text-primary">10. Hubungi Kami</h2>
		<p class="mt-3 text-base leading-relaxed text-neutral-600">
			Untuk pertanyaan terkait syarat dan ketentuan ini:
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
