import { PUBLIC_WHATSAPP_NUMBER } from '$env/static/public'

export function createWhatsAppLink(message: string): string {
	const encoded = encodeURIComponent(message)
	return `https://wa.me/${PUBLIC_WHATSAPP_NUMBER}?text=${encoded}`
}

export function createOrderLink(productName: string): string {
	return createWhatsAppLink(
		`Halo Mabruk Farm! Saya mau pesan ${productName}. Bisa info ketersediaan dan harganya?`
	)
}
