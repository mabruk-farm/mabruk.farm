<script lang="ts">
	import { page } from '$app/state'
	import { Menu, X } from 'lucide-svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'
	import Button from '$lib/components/ui/Button.svelte'

	let isMenuOpen = $state(false)
	let isScrolled = $state(false)

	const waLink = createWhatsAppLink('Halo Mabruk Farm, saya mau pesan sayuran')

	const navLinks = [
		{ href: '/produk', label: 'Produk' },
		{ href: '/langganan', label: 'Langganan' },
		{ href: '/kerjasama', label: 'Kerjasama' },
		{ href: '/tentang', label: 'Tentang' },
		{ href: '/blog', label: 'Blog' }
	]

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 10
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	})

	$effect(() => {
		void page.url.pathname
		isMenuOpen = false
	})

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/')
	}
</script>

<header
	class="sticky top-0 z-40 bg-white transition-shadow duration-200 {isScrolled
		? 'shadow-md'
		: 'shadow-sm'}"
>
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex flex-shrink-0 items-center">
				<img src="/mabruk-farm-logo.svg" alt="Mabruk Farm" class="h-9 w-auto" />
			</a>

			<div class="hidden items-center gap-6 md:flex">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="text-sm font-medium transition-colors {isActive(link.href)
							? 'font-semibold text-primary'
							: 'text-neutral-600 hover:text-primary'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="hidden items-center md:flex">
				<Button variant="whatsapp" href={waLink} class="px-4 py-2 text-xs">
					Pesan via WA
				</Button>
			</div>

			<button
				class="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</nav>

	{#if isMenuOpen}
		<div class="border-t border-neutral-100 bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
			<nav class="flex flex-col gap-1">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors {isActive(
							link.href
						)
							? 'bg-primary-surface font-semibold text-primary'
							: 'text-neutral-600 hover:bg-neutral-50 hover:text-primary'}"
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-3 border-t border-neutral-100 pt-3">
					<Button variant="whatsapp" href={waLink} class="w-full justify-center">
						Pesan via WhatsApp
					</Button>
				</div>
			</nav>
		</div>
	{/if}
</header>
