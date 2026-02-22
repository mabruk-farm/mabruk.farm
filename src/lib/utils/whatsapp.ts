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

// --- Form Data Types ---

export interface BaseFormData {
	nama: string
	noWa: string
	alamat: string
	pesan: string
}

export interface KontakFormData extends BaseFormData {
	subjek: string
}

export interface KerjasamaFormData extends BaseFormData {
	company: string
	jabatan: string
	jenisBisnis: string
	estimasiKebutuhan: string
}

export interface RequestTanamFormData extends BaseFormData {
	jenisSayur: string
	estimasi: string
}

// --- Message Builders ---

function addLine(lines: string[], label: string, value: string): void {
	if (value.trim()) {
		lines.push(`${label}: ${value.trim()}`)
	}
}

export function buildKontakMessage(data: KontakFormData): string {
	const lines: string[] = ['*Form Kontak — mabruk.farm*', '']
	addLine(lines, 'Nama', data.nama)
	addLine(lines, 'No. WA', data.noWa)
	addLine(lines, 'Alamat', data.alamat)
	addLine(lines, 'Subjek', data.subjek)
	if (data.pesan.trim()) {
		lines.push('')
		lines.push('Pesan:')
		lines.push(data.pesan.trim())
	}
	return lines.join('\n')
}

export function buildKerjasamaMessage(data: KerjasamaFormData): string {
	const lines: string[] = ['*Form Kerjasama B2B — mabruk.farm*', '']
	addLine(lines, 'Nama', data.nama)
	addLine(lines, 'No. WA', data.noWa)
	addLine(lines, 'Alamat', data.alamat)
	addLine(lines, 'Perusahaan', data.company)
	addLine(lines, 'Jabatan', data.jabatan)
	addLine(lines, 'Jenis Bisnis', data.jenisBisnis)
	addLine(lines, 'Estimasi', data.estimasiKebutuhan)
	if (data.pesan.trim()) {
		lines.push('')
		lines.push('Pesan:')
		lines.push(data.pesan.trim())
	}
	return lines.join('\n')
}

export function buildRequestTanamMessage(data: RequestTanamFormData): string {
	const lines: string[] = ['*Request Tanam — mabruk.farm*', '']
	addLine(lines, 'Nama', data.nama)
	addLine(lines, 'No. WA', data.noWa)
	addLine(lines, 'Alamat', data.alamat)
	addLine(lines, 'Jenis Sayur', data.jenisSayur)
	addLine(lines, 'Estimasi', data.estimasi)
	if (data.pesan.trim()) {
		lines.push('')
		lines.push('Pesan:')
		lines.push(data.pesan.trim())
	}
	return lines.join('\n')
}

export function buildOrderMessage(data: BaseFormData): string {
	const lines: string[] = ['*Chat dari Website — mabruk.farm*', '']
	addLine(lines, 'Nama', data.nama)
	addLine(lines, 'No. WA', data.noWa)
	addLine(lines, 'Alamat', data.alamat)
	if (data.pesan.trim()) {
		lines.push('')
		lines.push('Pesan:')
		lines.push(data.pesan.trim())
	}
	return lines.join('\n')
}
