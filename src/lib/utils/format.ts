const MONTHS_ID = [
	'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
	'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

export function formatPrice(amount: number): string {
	return `Rp ${amount.toLocaleString('id-ID')}`
}

export function formatPriceWithUnit(amount: number, unit: string): string {
	return `${formatPrice(amount)}/${unit}`
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString)
	const day = date.getDate()
	const month = MONTHS_ID[date.getMonth()]
	const year = date.getFullYear()
	return `${day} ${month} ${year}`
}
