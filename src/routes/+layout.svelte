<script lang="ts">
	import '../app.css'
	import { env } from '$env/dynamic/public'
	import Navbar from '$lib/components/layout/Navbar.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'
	import FloatingActions from '$lib/components/layout/FloatingActions.svelte'
	import { setChatState } from '$lib/stores/chat.svelte'
	import { setOrderState } from '$lib/stores/order.svelte'

	let { children } = $props()

	const gaId = env.PUBLIC_GA_MEASUREMENT_ID ?? ''
	const enableAiChat = env.PUBLIC_ENABLE_AI_CHAT === 'true'

	setChatState()
	setOrderState()
</script>

<svelte:head>
	<meta name="theme-color" content="#1B5E20" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	{#if gaId}
		{@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"><\/script>`}
		{@html `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');<\/script>`}
	{/if}
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
<FloatingActions {enableAiChat} />
