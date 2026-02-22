import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'eduwisataPage',
	title: 'Halaman Eduwisata',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Eduwisata Hidroponik Mabruk Farm'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'activities',
			title: 'Kegiatan',
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
			name: 'photos',
			title: 'Foto Greenhouse',
			type: 'array',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
					fields: [
						defineField({
							name: 'alt',
							title: 'Alt Text',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'packages',
			title: 'Paket Kunjungan',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Nama Paket', type: 'string' }),
						defineField({ name: 'duration', title: 'Durasi', type: 'string' }),
						defineField({ name: 'target', title: 'Target Peserta', type: 'string' }),
						defineField({ name: 'capacity', title: 'Kapasitas', type: 'string' }),
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
						select: { title: 'name', subtitle: 'duration' }
					}
				}
			]
		}),
		defineField({
			name: 'practicalInfo',
			title: 'Informasi Praktis',
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
			return { title: 'Halaman Eduwisata' }
		}
	}
})
