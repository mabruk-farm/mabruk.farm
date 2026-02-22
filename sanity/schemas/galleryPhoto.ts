import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'galleryPhoto',
	title: 'Foto Galeri',
	type: 'document',
	fields: [
		defineField({
			name: 'image',
			title: 'Foto',
			type: 'image',
			options: { hotspot: true },
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'alt',
			title: 'Alt Text',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			type: 'string',
			options: {
				list: [
					{ title: 'Greenhouse', value: 'greenhouse' },
					{ title: 'Produk', value: 'produk' },
					{ title: 'Proses', value: 'proses' },
					{ title: 'Tim', value: 'tim' }
				]
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'sortOrder',
			title: 'Urutan',
			type: 'number',
			initialValue: 0
		})
	],
	preview: {
		select: {
			title: 'alt',
			subtitle: 'category',
			media: 'image'
		}
	}
})
