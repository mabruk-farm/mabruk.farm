<script lang="ts">
	import { page } from '$app/state'
	import Button from '$lib/components/ui/Button.svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import { Home, MessageCircle } from 'lucide-svelte'

	const waLink = createWhatsAppLink('Halo Mabruk Farm, saya butuh bantuan.')

	const is404 = $derived(page.status === 404)
	const title = $derived(is404 ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan')
	const description = $derived(
		is404
			? 'Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.'
			: 'Maaf, terjadi kesalahan pada server kami. Silakan coba lagi nanti.'
	)
</script>

<svelte:head>
	<title>{page.status} — {title} | Mabruk Farm</title>
</svelte:head>

<main class="flex min-h-[60vh] items-center justify-center px-4 py-16">
	<div class="text-center">
		<p class="text-7xl font-extrabold text-primary sm:text-8xl">{page.status}</p>
		<h1 class="mt-4 text-2xl font-bold text-neutral-900 md:text-3xl">{title}</h1>
		<p class="mx-auto mt-3 max-w-md text-base text-neutral-600">{description}</p>
		<div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<Button href="/" variant="primary">
				<Home class="h-4 w-4" />
				Kembali ke Beranda
			</Button>
			<Button href={waLink} variant="whatsapp">
				<MessageCircle class="h-4 w-4" />
				Hubungi via WhatsApp
			</Button>
		</div>
	</div>
</main>
