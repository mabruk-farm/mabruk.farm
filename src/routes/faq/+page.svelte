<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
	import Button from '$lib/components/ui/Button.svelte'
	import Accordion from '$lib/components/ui/Accordion.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { createBreadcrumbJsonLd } from '$lib/utils/seo'

	const breadcrumbJsonLd = JSON.stringify(
		createBreadcrumbJsonLd([
			{ name: 'Beranda', url: 'https://mabruk.farm' },
			{ name: 'FAQ', url: 'https://mabruk.farm/faq' }
		])
	)

	const waLink = createWhatsAppLink(
		'Halo Mabruk Farm, saya ada pertanyaan yang belum terjawab di FAQ.'
	)

	const faqPemesanan = [
		{
			question: 'Bagaimana cara memesan sayuran dari Mabruk Farm?',
			answer:
				'Sangat mudah! Pilih produk di halaman Produk, klik tombol "Pesan via WhatsApp", dan pesan Anda otomatis terisi. Anda juga bisa langsung chat kami di 0852-6945-8526.'
		},
		{
			question: 'Metode pembayaran apa saja yang tersedia?',
			answer:
				'Kami menerima transfer bank (BCA), dan e-wallet (Dana, OVO, GoPay, ShopeePay). Pembayaran dilakukan setelah admin mengonfirmasi pesanan dan total harga.'
		},
		{
			question: 'Apakah ada minimal order?',
			answer:
				'Ya, minimal pembelian adalah Rp 50.000 per transaksi. Untuk paket langganan, minimal order sudah termasuk dalam harga paket.'
		},
		{
			question: 'Bisa bayar COD (bayar di tempat)?',
			answer:
				'Saat ini kami belum menyediakan COD. Pembayaran dilakukan terlebih dahulu via transfer atau e-wallet sebelum pengiriman.'
		}
	]

	const faqPengiriman = [
		{
			question: 'Mabruk Farm kirim ke mana saja?',
			answer:
				'Kami melayani pengiriman ke area Pesawaran, Bandar Lampung, dan sekitarnya. Untuk detail zona dan ongkir, cek halaman Area Pengiriman kami.'
		},
		{
			question: 'Berapa ongkos kirimnya?',
			answer:
				'Gratis ongkir untuk area Pesawaran. Area Bandar Lampung Kota mulai Rp 10.000, dan area pinggiran Rp 15.000. Pelanggan langganan mendapat benefit gratis ongkir.'
		},
		{
			question: 'Kapan pesanan saya akan dikirim?',
			answer:
				'Order sebelum pukul 10:00 WIB akan dikirim di hari yang sama (pukul 14:00–17:00). Order setelah jam 10 masuk pengiriman hari berikutnya. Pengiriman Senin–Sabtu.'
		},
		{
			question: 'Bagaimana jika sayuran rusak saat diterima?',
			answer:
				'Kami sangat menjaga kualitas. Jika ada sayuran yang rusak atau tidak sesuai, hubungi kami via WhatsApp dengan foto bukti dalam 24 jam dan kami akan ganti di pengiriman berikutnya.'
		}
	]

	const faqProduk = [
		{
			question: 'Apa itu sayuran hidroponik?',
			answer:
				'Hidroponik adalah metode menanam tanaman tanpa tanah, menggunakan air yang dicampur nutrisi khusus. Di Mabruk Farm, kami menggunakan sistem NFT dan DFT di dalam greenhouse tertutup sehingga sayuran lebih bersih, bebas pestisida, dan nutrisinya terkontrol.'
		},
		{
			question: 'Apakah benar 100% tanpa pestisida?',
			answer:
				'Ya! Greenhouse kami menggunakan insect net untuk mencegah hama masuk. Jika ada hama, kami gunakan pengendalian organik seperti neem oil. Tidak ada pestisida kimia sama sekali.'
		},
		{
			question: 'Berapa lama sayuran hidroponik tahan segar?',
			answer:
				'Tergantung jenis sayuran. Selada bisa tahan 7–10 hari di kulkas, pakcoy dan sawi 5–7 hari, kangkung dan bayam 3–5 hari. Tips penyimpanan lengkap ada di halaman detail setiap produk.'
		},
		{
			question: 'Apakah harga bisa berubah?',
			answer:
				'Harga relatif stabil karena tidak terpengaruh musim. Namun, bisa ada penyesuaian kecil mengikuti harga nutrisi dan biaya operasional. Harga terbaru selalu ter-update di katalog produk kami.'
		}
	]

	const faqLangganan = [
		{
			question: 'Apa itu paket langganan?',
			answer:
				'Paket langganan adalah layanan pengiriman sayuran segar rutin setiap minggu ke rumah Anda. Ada 3 pilihan: Paket Hemat (Rp 50.000/minggu), Paket Keluarga (Rp 100.000/minggu), dan Paket Premium (Rp 150.000/minggu).'
		},
		{
			question: 'Bisa berhenti berlangganan kapan saja?',
			answer:
				'Tentu! Tidak ada kontrak atau komitmen jangka panjang. Anda bisa pause, ganti paket, atau berhenti kapan saja. Cukup kabari kami via WhatsApp.'
		},
		{
			question: 'Bisa pilih sendiri isi paketnya?',
			answer:
				'Bisa! Anda bisa request jenis sayuran tertentu setiap minggu. Kabari admin via WhatsApp sebelum hari pengiriman dan kami sesuaikan isinya.'
		}
	]

	const faqKerjasama = [
		{
			question: 'Bagaimana cara menjadi partner B2B Mabruk Farm?',
			answer:
				'Kunjungi halaman Kerjasama kami dan isi form inquiry, atau hubungi langsung via WhatsApp. Tim kami akan menghubungi Anda untuk diskusi kebutuhan dan harga.'
		},
		{
			question: 'Berapa minimal order untuk B2B?',
			answer:
				'Untuk partnership B2B, minimal order mulai dari 5 kg per minggu (Tier Starter). Volume lebih besar mendapat diskon bertingkat hingga 20%.'
		},
		{
			question: 'Apakah ada kontrak untuk supply B2B?',
			answer:
				'Kami menawarkan supply contract mingguan atau bulanan dengan volume dan jadwal yang disepakati bersama. Kontrak bisa disesuaikan dengan kebutuhan bisnis Anda.'
		}
	]

	const sections = [
		{ title: 'Pemesanan & Pembayaran', items: faqPemesanan },
		{ title: 'Pengiriman', items: faqPengiriman },
		{ title: 'Produk & Kualitas', items: faqProduk },
		{ title: 'Langganan', items: faqLangganan },
		{ title: 'Kerjasama B2B', items: faqKerjasama }
	]
</script>

<svelte:head>
	<title>Pertanyaan Umum (FAQ) | Mabruk Farm</title>
	<meta
		name="description"
		content="Jawaban untuk pertanyaan yang sering ditanyakan tentang pemesanan, pengiriman, produk, langganan, dan kerjasama di Mabruk Farm."
	/>
	<meta property="og:title" content="Pertanyaan Umum (FAQ) | Mabruk Farm" />
	<meta
		property="og:description"
		content="Jawaban untuk pertanyaan yang sering ditanyakan tentang Mabruk Farm."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mabruk.farm/faq" />
	<link rel="canonical" href="https://mabruk.farm/faq" />
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section class="bg-primary py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-white md:text-4xl">Pertanyaan yang Sering Ditanyakan</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-white/80">
			Temukan jawaban untuk pertanyaan umum tentang produk, pemesanan, pengiriman, dan layanan
			Mabruk Farm.
		</p>
	</div>
</section>

<!-- 2. FAQ Sections -->
{#each sections as section, i}
	<section class="{i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} py-14 sm:py-16">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<SectionHeading title={section.title} />
			<Accordion items={section.items} />
		</div>
	</section>
{/each}

<!-- 3. CTA -->
<section class="bg-primary py-14 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white md:text-3xl">Masih Ada Pertanyaan?</h2>
		<p class="mx-auto mt-4 max-w-xl text-base text-white/80">
			Jangan ragu untuk menghubungi kami. Tim Mabruk Farm siap membantu Anda.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="whatsapp" href={waLink} class="px-8 py-3">
				Tanya via WhatsApp
			</Button>
			<Button variant="outline-light" href="/kontak" class="px-8 py-3">
				Halaman Kontak
			</Button>
		</div>
	</div>
</section>
