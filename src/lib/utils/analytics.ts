import { browser } from '$app/environment'

type EventParams = Record<string, string | number | boolean | undefined>

/**
 * Push a custom event to GTM dataLayer.
 * Only fires in browser and when dataLayer exists (user accepted cookies).
 */
export function trackEvent(eventName: string, params?: EventParams): void {
	if (!browser) return
	const w = window as Window & { dataLayer?: Record<string, unknown>[] }
	if (!w.dataLayer) return
	w.dataLayer.push({ event: eventName, ...params })
}

// --- WhatsApp Events ---

export function trackWhatsAppClick(source: string, productName?: string): void {
	trackEvent('whatsapp_click', {
		click_source: source,
		product_name: productName
	})
}

// --- Product Events ---

export function trackProductView(productName: string, price: number, category?: string): void {
	trackEvent('product_view', {
		product_name: productName,
		product_price: price,
		product_category: category
	})
}

export function trackProductOrder(
	productName: string,
	quantity: number,
	totalPrice: number
): void {
	trackEvent('product_order', {
		product_name: productName,
		quantity,
		total_price: totalPrice
	})
}

// --- Order Widget Events ---

export function trackOrderWidgetOpen(): void {
	trackEvent('order_widget_open')
}

export function trackOrderWidgetSubmit(name: string): void {
	trackEvent('order_widget_submit', {
		customer_name: name
	})
}

// --- Form Events ---

export function trackFormSubmit(formName: string): void {
	trackEvent('form_submit', {
		form_name: formName
	})
}

// --- CTA Events ---

export function trackCtaClick(ctaName: string, ctaLocation: string): void {
	trackEvent('cta_click', {
		cta_name: ctaName,
		cta_location: ctaLocation
	})
}
