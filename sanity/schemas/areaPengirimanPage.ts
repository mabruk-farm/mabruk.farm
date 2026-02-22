import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'areaPengirimanPage',
	title: 'Halaman Area Pengiriman',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Kami Mengantar Sayuran Segar ke Area Anda'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'zones',
			title: 'Zona Pengiriman',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'zone', title: 'Nama Zone', type: 'string' }),
						defineField({ name: 'area', title: 'Area', type: 'string' }),
						defineField({ name: 'ongkir', title: 'Ongkir', type: 'string' }),
						defineField({ name: 'estimasi', title: 'Estimasi', type: 'string' }),
						defineField({
							name: 'colorTheme',
							title: 'Tema Warna',
							type: 'string',
							options: {
								list: [
									{ title: 'Primary', value: 'primary' },
									{ title: 'Green', value: 'green' },
									{ title: 'Amber', value: 'amber' },
									{ title: 'Neutral', value: 'neutral' }
								]
							}
						})
					],
					preview: {
						select: { title: 'zone', subtitle: 'area' }
					}
				}
			]
		}),
		defineField({
			name: 'deliveryInfo',
			title: 'Info Pengiriman',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'title', title: 'Judul', type: 'string' }),
						defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 3 }),
						defineField({ name: 'icon', title: 'Ikon (Lucide)', type: 'string' })
					],
					preview: {
						select: { title: 'title', subtitle: 'icon' }
					}
				}
			]
		}),
		defineField({
			name: 'mapsEmbedUrl',
			title: 'Google Maps Embed URL',
			type: 'url'
		})
	],
	preview: {
		prepare() {
			return { title: 'Halaman Area Pengiriman' }
		}
	}
})
