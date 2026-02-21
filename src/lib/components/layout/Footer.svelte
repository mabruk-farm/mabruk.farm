<script lang="ts">
	import { MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'

	const waLink = createWhatsAppLink('Halo Mabruk Farm!')
	const currentYear = new Date().getFullYear()

	const menuLinks = [
		{ href: '/produk', label: 'Produk' },
		{ href: '/tentang', label: 'Tentang Kami' },
		{ href: '/kerjasama', label: 'Kerjasama' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/kontak', label: 'Kontak' }
	]
</script>

<footer class="bg-neutral-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
			<div>
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

		<div class="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
			&copy; {currentYear} PT Mabruk Agro Lestari. Hak cipta dilindungi.
		</div>
	</div>
</footer>
