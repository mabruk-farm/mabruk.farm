import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private'
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

const LLM_BASE_URL = env.LLM_BASE_URL || 'https://api.moonshot.ai/v1'
const LLM_MODEL = env.LLM_MODEL || 'kimi-k2.5'

export const POST: RequestHandler = async ({ request }) => {
	const apiKey = env.LLM_API_KEY

	if (!apiKey) {
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

		const response = await fetch(`${LLM_BASE_URL}/chat/completions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: LLM_MODEL,
				max_tokens: 1024,
				stream: true,
				messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...sanitizedMessages]
			})
		})

		if (!response.ok) {
			const errorText = await response.text()
			console.error('[Chat API] LLM error:', response.status, errorText)
			return json(
				{
					error:
						'Terjadi kesalahan pada layanan AI. Silakan hubungi kami via WhatsApp di 0852-6945-8526.'
				},
				{ status: 502 }
			)
		}

		const readableStream = new ReadableStream({
			async start(controller) {
				const encoder = new TextEncoder()
				const decoder = new TextDecoder()
				const reader = response.body?.getReader()

				if (!reader) {
					controller.close()
					return
				}

				let buffer = ''

				try {
					while (true) {
						const { done, value } = await reader.read()
						if (done) break

						buffer += decoder.decode(value, { stream: true })
						const lines = buffer.split('\n')
						buffer = lines.pop() || ''

						for (const line of lines) {
							const trimmed = line.trim()
							if (!trimmed || !trimmed.startsWith('data: ')) continue

							const data = trimmed.slice(6)
							if (data === '[DONE]') break

							try {
								const parsed = JSON.parse(data)
								const content = parsed.choices?.[0]?.delta?.content
								if (content) {
									controller.enqueue(encoder.encode(content))
								}
							} catch {
								// skip malformed JSON chunks
							}
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
