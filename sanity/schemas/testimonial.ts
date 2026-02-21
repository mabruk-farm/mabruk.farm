import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'testimonial',
	title: 'Testimonial',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nama',
			type: 'string',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'role',
			title: 'Jabatan',
			type: 'string'
		}),
		defineField({
			name: 'company',
			title: 'Perusahaan / Kota',
			type: 'string'
		}),
		defineField({
			name: 'quote',
			title: 'Testimonial',
			type: 'text',
			rows: 4,
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'image',
			title: 'Foto',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'rating',
			title: 'Rating (1-5)',
			type: 'number',
			initialValue: 5,
			validation: (rule) => rule.required().min(1).max(5)
		})
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'company',
			media: 'image'
		}
	}
})
