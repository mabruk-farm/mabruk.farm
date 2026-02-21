import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import Anthropic from '@anthropic-ai/sdk'
import { ANTHROPIC_API_KEY } from '$env/static/private'
import { allProducts } from '$lib/data/products'
import { formatPriceWithUnit } from '$lib/utils/format'

const MAX_MESSAGES = 40
const MAX_CONTENT_LENGTH = 2000

const productCatalog = allProducts
	.filter((p) => p.available)
	.map(
		(p) =>
			`- ${p.name}: ${formatPriceWithUnit(p.price, p.unit)} | ${p.category} | ${p.shortDescription}`
	)
	.join('\n')

const SYSTEM_PROMPT = `Kamu adalah asisten virtual Mabruk Farm, kebun hidroponik di Gunung Sari, Pesawaran, Lampung.

Tugas kamu:
1. Jawab pertanyaan tentang produk & harga berdasarkan data katalog di bawah
2. Arahkan customer untuk memesan via WhatsApp di nomor 0852-6945-8526
3. Jelaskan keunggulan sayuran hidroponik Mabruk Farm
4. Arahkan pertanyaan B2B/kerjasama ke halaman /kerjasama atau WA admin
5. Jawab FAQ tentang pengiriman, pembayaran, jam operasional

Katalog Produk:
${productCatalog}

Info Bisnis:
- Alamat: Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung
- WhatsApp: 0852-6945-8526
- Jam: Senin–Sabtu, 07:00–17:00 WIB
- Area pengiriman: Bandar Lampung dan sekitarnya
- Pembayaran: Transfer bank, COD
- Pengiriman: Order sebelum jam 10 pagi, sampai di hari yang sama

Gaya bahasa: ramah, hangat, pakai Bahasa Indonesia santai. Emoji boleh sesekali, jangan berlebihan.
Jika tidak tahu jawabannya, arahkan ke WhatsApp admin.
Jangan jawab pertanyaan di luar topik Mabruk Farm.
Jawab dengan ringkas dan jelas (maksimal 2–3 paragraf).`

export const POST: RequestHandler = async ({ request }) => {
	if (!ANTHROPIC_API_KEY) {
		return json(
			{
				error:
					'Layanan chat sedang tidak tersedia. Silakan hubungi kami via WhatsApp di 0852-6945-8526.'
			},
			{ status: 503 }
		)
	}

	try {
		const body = await request.json()
		const { messages } = body

		if (!Array.isArray(messages) || messages.length === 0) {
			return json({ error: 'Pesan tidak valid.' }, { status: 400 })
		}

		const sanitizedMessages = messages
			.slice(-MAX_MESSAGES)
			.map((msg: { role: string; content: string }) => ({
				role: msg.role === 'assistant' ? ('assistant' as const) : ('user' as const),
				content:
					typeof msg.content === 'string' ? msg.content.slice(0, MAX_CONTENT_LENGTH) : ''
			}))

		if (sanitizedMessages[0]?.role !== 'user') {
			return json({ error: 'Pesan pertama harus dari pengguna.' }, { status: 400 })
		}

		const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY })

		const stream = await client.messages.create({
			model: 'claude-3-5-haiku-20241022',
			max_tokens: 1024,
			system: SYSTEM_PROMPT,
			messages: sanitizedMessages,
			stream: true
		})

		const readableStream = new ReadableStream({
			async start(controller) {
				const encoder = new TextEncoder()
				try {
					for await (const event of stream) {
						if (
							event.type === 'content_block_delta' &&
							event.delta.type === 'text_delta'
						) {
							controller.enqueue(encoder.encode(event.delta.text))
						}
					}
					controller.close()
				} catch (error) {
					controller.error(error)
				}
			}
		})

		return new Response(readableStream, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'no-cache'
			}
		})
	} catch (error) {
		console.error('[Chat API] Error:', error)
		return json(
			{
				error:
					'Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp di 0852-6945-8526.'
			},
			{ status: 500 }
		)
	}
}
