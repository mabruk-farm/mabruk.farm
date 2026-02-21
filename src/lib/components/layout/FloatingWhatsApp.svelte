<script lang="ts">
	import { MessageCircle } from 'lucide-svelte'
	import { createWhatsAppLink } from '$lib/utils/whatsapp'

	const waLink = createWhatsAppLink(
		'Halo Mabruk Farm, saya tertarik dengan sayuran hidroponik Anda. Bisa info lebih lanjut?'
	)
</script>

<a
	href={waLink}
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Chat via WhatsApp"
	class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110"
>
	<MessageCircle class="h-6 w-6" />
</a>
