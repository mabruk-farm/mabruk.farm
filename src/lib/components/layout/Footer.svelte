<script lang="ts">
	import { MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'

	const waLink = createWhatsAppLink('Halo Mabruk Farm!')
	const currentYear = new Date().getFullYear()

	const menuLinks = [
		{ href: '/produk', label: 'Produk' },
		{ href: '/langganan', label: 'Langganan' },
		{ href: '/tentang', label: 'Tentang Kami' },
		{ href: '/kerjasama', label: 'Kerjasama' },
		{ href: '/eduwisata', label: 'Eduwisata' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/kontak', label: 'Kontak' }
	]

	const bantuanLinks = [
		{ href: '/cara-pesan', label: 'Cara Pesan' },
		{ href: '/area-pengiriman', label: 'Area Pengiriman' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/galeri', label: 'Galeri' }
	]
</script>

<footer class="bg-neutral-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
			<div class="sm:col-span-2 lg:col-span-1">
				<a href="/" class="mb-4 inline-block">
					<span class="text-xl font-extrabold text-white"
						>mabruk<span class="text-primary-light">.farm</span></span
					>
				</a>
				<p class="text-sm leading-relaxed text-neutral-300">
					Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari
				</p>
				<div class="mt-4 flex items-start gap-2 text-sm text-neutral-400">
					<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" />
					<span>Desa Gunung Sari, Kec. Way Khilau,<br />Kab. Pesawaran, Lampung</span>
				</div>
			</div>

			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Menu</h3>
				<nav class="flex flex-col gap-2">
					{#each menuLinks as link (link.href)}
						<a
							href={link.href}
							class="text-sm text-neutral-400 transition-colors hover:text-primary-light"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>

			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Bantuan</h3>
				<nav class="flex flex-col gap-2">
					{#each bantuanLinks as link (link.href)}
						<a
							href={link.href}
							class="text-sm text-neutral-400 transition-colors hover:text-primary-light"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>

			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
					Hubungi Kami
				</h3>
				<div class="flex flex-col gap-3">
					<a
						href={waLink}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-whatsapp"
					>
						<MessageCircle class="h-4 w-4" />
						<span>0852-6945-8526</span>
					</a>
					<a
						href="https://instagram.com/mabruk.farm"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary-light"
					>
						<Instagram class="h-4 w-4" />
						<span>@mabruk.farm</span>
					</a>
					<a
						href="mailto:halo@mabruk.farm"
						class="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary-light"
					>
						<Mail class="h-4 w-4" />
						<span>halo@mabruk.farm</span>
					</a>
					<div class="flex items-center gap-2 text-sm text-neutral-400">
						<Clock class="h-4 w-4" />
						<span>Sen–Sab, 07:00–17:00 WIB</span>
					</div>
				</div>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col items-center gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-500"
		>
			<div class="flex flex-wrap justify-center gap-x-4 gap-y-1">
				<a href="/privasi" class="transition-colors hover:text-neutral-300"
					>Kebijakan Privasi</a
				>
				<span class="hidden sm:inline">&bull;</span>
				<a href="/syarat-ketentuan" class="transition-colors hover:text-neutral-300"
					>Syarat & Ketentuan</a
				>
			</div>
			<p>&copy; {currentYear} PT Mabruk Agro Lestari. Hak cipta dilindungi.</p>
		</div>
	</div>
</footer>
