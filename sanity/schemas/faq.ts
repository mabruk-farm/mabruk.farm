import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Pertanyaan',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'answer',
			title: 'Jawaban',
			type: 'text',
			rows: 4,
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			type: 'string',
			options: {
				list: [
					{ title: 'Pemesanan & Pembayaran', value: 'pemesanan' },
					{ title: 'Pengiriman', value: 'pengiriman' },
					{ title: 'Produk & Kualitas', value: 'produk' },
					{ title: 'Langganan', value: 'langganan' },
					{ title: 'Kerjasama B2B', value: 'kerjasama' },
					{ title: 'Eduwisata', value: 'eduwisata' },
					{ title: 'Kontak', value: 'kontak' }
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
	orderings: [
		{
			title: 'Kategori, lalu Urutan',
			name: 'categorySort',
			by: [
				{ field: 'category', direction: 'asc' },
				{ field: 'sortOrder', direction: 'asc' }
			]
		}
	],
	preview: {
		select: {
			title: 'question',
			subtitle: 'category'
		}
	}
})
