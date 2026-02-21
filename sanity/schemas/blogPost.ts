import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blogPost',
	title: 'Blog',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Judul',
			type: 'string',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'excerpt',
			title: 'Ringkasan (SEO)',
			type: 'text',
			rows: 3,
			validation: (rule) => rule.required().max(300)
		}),
		defineField({
			name: 'body',
			title: 'Konten',
			type: 'blockContent'
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			type: 'string',
			options: {
				list: [
					{ title: 'Edukasi', value: 'Edukasi' },
					{ title: 'Behind the Scenes', value: 'Behind the Scenes' },
					{ title: 'Resep', value: 'Resep' },
					{ title: 'Tips', value: 'Tips' },
					{ title: 'Lokal', value: 'Lokal' }
				]
			},
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: { layout: 'tags' }
		}),
		defineField({
			name: 'publishedAt',
			title: 'Tanggal Publish',
			type: 'datetime',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'author',
			title: 'Penulis',
			type: 'string',
			initialValue: 'Mabruk Farm'
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'category',
			media: 'coverImage'
		}
	},
	orderings: [
		{
			title: 'Tanggal Publish (Terbaru)',
			name: 'publishedAtDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }]
		}
	]
})
