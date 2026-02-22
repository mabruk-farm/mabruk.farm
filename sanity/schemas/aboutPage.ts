import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'aboutPage',
	title: 'Halaman Tentang',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Berkah dari Gunung Sari'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'namaMeaning',
			title: 'Arti Nama — Paragraf Utama',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'nameMeaningSubtext',
			title: 'Arti Nama — Paragraf Kedua',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'storyParagraphs',
			title: 'Cerita Kami (Paragraf)',
			type: 'array',
			of: [{ type: 'text' }]
		}),
		defineField({
			name: 'storyImage',
			title: 'Foto Cerita',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'team',
			title: 'Tim Kami',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Nama & Jabatan', type: 'string' }),
						defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 3 }),
						defineField({
							name: 'image',
							title: 'Foto',
							type: 'image',
							options: { hotspot: true }
						})
					],
					preview: {
						select: { title: 'name', media: 'image' }
					}
				}
			]
		}),
		defineField({
			name: 'processSteps',
			title: 'Proses Kami',
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
			name: 'values',
			title: 'Nilai-Nilai',
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
			return { title: 'Halaman Tentang' }
		}
	}
})
