<script lang="ts">
	import { browser } from '$app/environment'
	import { Shield, X } from 'lucide-svelte'

	const STORAGE_KEY = 'mabruk-cookie-consent'

	interface Props {
		gtmId: string
	}

	const { gtmId }: Props = $props()

	let visible = $state(false)
	let gtmLoaded = $state(false)

	function getConsent(): string | null {
		if (!browser) return null
		return localStorage.getItem(STORAGE_KEY)
	}

	function loadGTM() {
		if (gtmLoaded || !browser) return
		gtmLoaded = true

		// Initialize dataLayer
		const w = window as Window & { dataLayer: Record<string, unknown>[] }
		w.dataLayer = w.dataLayer || []
		w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

		// Inject GTM script
		const script = document.createElement('script')
		script.async = true
		script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
		document.head.appendChild(script)

		// Inject noscript iframe
		const noscript = document.createElement('noscript')
		const iframe = document.createElement('iframe')
		iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`
		iframe.height = '0'
		iframe.width = '0'
		iframe.style.display = 'none'
		iframe.style.visibility = 'hidden'
		noscript.appendChild(iframe)
		document.body.insertBefore(noscript, document.body.firstChild)
	}

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'accepted')
		loadGTM()
		visible = false
	}

	function reject() {
		localStorage.setItem(STORAGE_KEY, 'rejected')
		visible = false
	}

	$effect(() => {
		if (!browser) return

		const consent = getConsent()

		if (consent === 'accepted') {
			loadGTM()
		} else if (consent === null) {
			// Small delay so banner doesn't flash on page load
			const timer = setTimeout(() => {
				visible = true
			}, 1000)
			return () => clearTimeout(timer)
		}
	})
</script>

{#if visible}
	<div
		class="fixed inset-x-0 bottom-0 z-[60] p-4"
		role="dialog"
		aria-label="Cookie consent"
	>
		<div
			class="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:p-5"
		>
			<div class="flex items-start gap-3 sm:gap-4">
				<div
					class="hidden shrink-0 rounded-full bg-[#E8F5E9] p-2 sm:block"
				>
					<Shield class="h-5 w-5 text-[#1B5E20]" />
				</div>

				<div class="min-w-0 flex-1">
					<p class="text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
						Kami menggunakan cookies untuk menganalisis traffic dan meningkatkan pengalaman Anda di website ini.
						Dengan menekan "Terima", Anda menyetujui penggunaan cookies.
						<a href="/privasi" class="font-medium text-[#1B5E20] underline underline-offset-2 hover:text-[#4CAF50]">
							Kebijakan Privasi
						</a>
					</p>

					<div class="mt-3 flex flex-wrap items-center gap-2">
						<button
							onclick={accept}
							class="rounded-lg bg-[#1B5E20] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2E7D32]"
						>
							Terima
						</button>
						<button
							onclick={reject}
							class="rounded-lg border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
						>
							Tolak
						</button>
					</div>
				</div>

				<button
					onclick={reject}
					class="shrink-0 rounded-lg p-1 text-neutral-400 transition-colors hover:text-neutral-600"
					aria-label="Tutup"
				>
					<X class="h-5 w-5" />
				</button>
			</div>
		</div>
	</div>
{/if}
