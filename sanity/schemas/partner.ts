import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'partner',
	title: 'Partner',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nama Partner',
			type: 'string',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'type',
			title: 'Jenis Partner',
			type: 'string',
			options: {
				list: [
					{ title: 'Hotel', value: 'hotel' },
					{ title: 'Restoran', value: 'restaurant' },
					{ title: 'Supermarket', value: 'supermarket' },
					{ title: 'MBG', value: 'mbg' },
					{ title: 'Katering', value: 'catering' },
					{ title: 'Lainnya', value: 'other' }
				]
			}
		}),
		defineField({
			name: 'description',
			title: 'Deskripsi',
			type: 'string'
		}),
		defineField({
			name: 'url',
			title: 'Website',
			type: 'url'
		}),
		defineField({
			name: 'sortOrder',
			title: 'Urutan Tampil',
			type: 'number',
			initialValue: 0
		})
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'type',
			media: 'logo'
		}
	}
})
