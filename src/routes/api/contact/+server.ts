import { json } from '@sveltejs/kit'
import { Resend } from 'resend'
import { RESEND_API_KEY } from '$env/static/private'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
	if (!RESEND_API_KEY) {
		return json(
			{
				success: false,
				error:
					'Layanan email belum dikonfigurasi. Silakan hubungi kami via WhatsApp di 0852-6945-8526.'
			},
			{ status: 503 }
		)
	}

	const resend = new Resend(RESEND_API_KEY)

	try {
		const body = await request.json()
		const { type, nama, pesan } = body

		if (!nama || !pesan) {
			return json({ success: false, error: 'Nama dan pesan wajib diisi.' }, { status: 400 })
		}

		if (type !== 'kerjasama' && type !== 'kontak') {
			return json({ success: false, error: 'Tipe form tidak valid.' }, { status: 400 })
		}

		let subject: string
		let htmlBody: string

		if (type === 'kerjasama') {
			const { company, jabatan, whatsapp, email, jenisBisnis, estimasiKebutuhan } = body
			subject = `[Kerjasama B2B] Inquiry dari ${nama} — ${company || 'N/A'}`
			htmlBody = `
				<h2>Inquiry Kerjasama B2B</h2>
				<table style="border-collapse:collapse;width:100%">
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nama</td><td style="padding:8px;border:1px solid #ddd">${nama}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Perusahaan</td><td style="padding:8px;border:1px solid #ddd">${company || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Jabatan</td><td style="padding:8px;border:1px solid #ddd">${jabatan || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${whatsapp || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Jenis Bisnis</td><td style="padding:8px;border:1px solid #ddd">${jenisBisnis || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Estimasi Kebutuhan</td><td style="padding:8px;border:1px solid #ddd">${estimasiKebutuhan || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Pesan</td><td style="padding:8px;border:1px solid #ddd">${pesan}</td></tr>
				</table>
			`
		} else {
			const { wa_email, subjek } = body
			subject = `[Kontak] ${subjek || 'Pesan'} dari ${nama}`
			htmlBody = `
				<h2>Pesan dari Form Kontak</h2>
				<table style="border-collapse:collapse;width:100%">
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nama</td><td style="padding:8px;border:1px solid #ddd">${nama}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WhatsApp/Email</td><td style="padding:8px;border:1px solid #ddd">${wa_email || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Subjek</td><td style="padding:8px;border:1px solid #ddd">${subjek || '-'}</td></tr>
					<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Pesan</td><td style="padding:8px;border:1px solid #ddd">${pesan}</td></tr>
				</table>
			`
		}

		await resend.emails.send({
			from: 'Mabruk Farm <noreply@mabruk.farm>',
			to: 'halo@mabruk.farm',
			subject,
			html: htmlBody
		})

		return json({ success: true })
	} catch (err) {
		console.error('Contact API error:', err)
		return json(
			{ success: false, error: 'Terjadi kesalahan. Silakan coba lagi.' },
			{ status: 500 }
		)
	}
}
