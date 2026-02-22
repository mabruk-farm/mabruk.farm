import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'caraPesanPage',
	title: 'Halaman Cara Pesan',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Pesan Sayuran Segar Semudah 1-2-3'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'steps',
			title: 'Langkah Pemesanan',
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
			name: 'infoCards',
			title: 'Info Penting',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'title', title: 'Judul', type: 'string' }),
						defineField({ name: 'description', title: 'Deskripsi', type: 'string' }),
						defineField({ name: 'highlight', title: 'Highlight', type: 'string' }),
						defineField({ name: 'icon', title: 'Ikon (Lucide)', type: 'string' })
					],
					preview: {
						select: { title: 'title', subtitle: 'highlight' }
					}
				}
			]
		}),
		defineField({
			name: 'tips',
			title: 'Tips',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'text', title: 'Teks (HTML)', type: 'text', rows: 2 }),
						defineField({ name: 'icon', title: 'Ikon (Lucide)', type: 'string' })
					],
					preview: {
						select: { title: 'text' }
					}
				}
			]
		})
	],
	preview: {
		prepare() {
			return { title: 'Halaman Cara Pesan' }
		}
	}
})
