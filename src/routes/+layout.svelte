<script lang="ts">
	import '../app.css'
	import { env } from '$env/dynamic/public'
	import { navigating } from '$app/state'
	import Navbar from '$lib/components/layout/Navbar.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'
	import FloatingActions from '$lib/components/layout/FloatingActions.svelte'
	import { setChatState } from '$lib/stores/chat.svelte'
	import { setOrderState } from '$lib/stores/order.svelte'
	import CookieConsent from '$lib/components/shared/CookieConsent.svelte'

	let { children } = $props()

	const enableAiChat = env.PUBLIC_ENABLE_AI_CHAT === 'true'

	setChatState()
	setOrderState()
</script>

<svelte:head>
	<meta name="theme-color" content="#1B5E20" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
>
	Langsung ke konten
</a>
{#if navigating.to}
	<div class="fixed inset-x-0 top-0 z-50 h-1 animate-pulse bg-primary" aria-hidden="true"></div>
{/if}
<Navbar />
<main id="main-content">
	{@render children()}
</main>
<Footer />
<FloatingActions {enableAiChat} />
<CookieConsent gtmId="GTM-K769SGMN" />
