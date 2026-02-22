import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'langgananPage',
	title: 'Halaman Langganan',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Sayuran Segar Setiap Minggu, Tanpa Ribet'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'steps',
			title: 'Cara Kerja',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'title', title: 'Judul', type: 'string' }),
						defineField({ name: 'description', title: 'Deskripsi', type: 'string' }),
						defineField({ name: 'icon', title: 'Ikon (Lucide)', type: 'string' })
					],
					preview: {
						select: { title: 'title', subtitle: 'icon' }
					}
				}
			]
		}),
		defineField({
			name: 'packages',
			title: 'Paket Langganan',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Nama Paket', type: 'string' }),
						defineField({ name: 'price', title: 'Harga', type: 'string' }),
						defineField({ name: 'period', title: 'Periode', type: 'string' }),
						defineField({ name: 'weight', title: 'Berat', type: 'string' }),
						defineField({ name: 'target', title: 'Target', type: 'string' }),
						defineField({
							name: 'includes',
							title: 'Termasuk',
							type: 'array',
							of: [{ type: 'string' }]
						}),
						defineField({
							name: 'highlighted',
							title: 'Disorot?',
							type: 'boolean',
							initialValue: false
						})
					],
					preview: {
						select: { title: 'name', subtitle: 'price' }
					}
				}
			]
		}),
		defineField({
			name: 'benefits',
			title: 'Keunggulan',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'title', title: 'Judul', type: 'string' }),
						defineField({ name: 'description', title: 'Deskripsi', type: 'string' }),
						defineField({ name: 'icon', title: 'Ikon (Lucide)', type: 'string' })
					],
					preview: {
						select: { title: 'title', subtitle: 'icon' }
					}
				}
			]
		})
	],
	preview: {
		prepare() {
			return { title: 'Halaman Langganan' }
		}
	}
})
