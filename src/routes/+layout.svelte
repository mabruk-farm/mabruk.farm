<script lang="ts">
	import '../app.css'
	import { env } from '$env/dynamic/public'
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
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
<FloatingActions {enableAiChat} />
<CookieConsent gtmId="GTM-K769SGMN" />
