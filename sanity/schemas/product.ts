import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'product',
	title: 'Produk',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nama Produk',
			type: 'string',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name', maxLength: 96 },
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'image',
			title: 'Foto Produk',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'gallery',
			title: 'Galeri Foto',
			type: 'array',
			of: [{ type: 'image', options: { hotspot: true } }]
		}),
		defineField({
			name: 'shortDescription',
			title: 'Deskripsi Singkat',
			type: 'string',
			description: 'Satu kalimat untuk card produk'
		}),
		defineField({
			name: 'description',
			title: 'Deskripsi Lengkap',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'price',
			title: 'Harga (Rp)',
			type: 'number',
			validation: (rule) => rule.required().min(0)
		}),
		defineField({
			name: 'unit',
			title: 'Satuan',
			type: 'string',
			initialValue: 'kg',
			options: {
				list: ['kg', 'gram', 'ikat', 'pack']
			}
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			type: 'string',
			options: {
				list: [
					{ title: 'Sayuran Daun', value: 'Sayuran Daun' },
					{ title: 'Sayuran Premium', value: 'Sayuran Premium' },
					{ title: 'Herbs', value: 'Herbs' },
					{ title: 'Paket Hemat', value: 'Paket Hemat' }
				]
			},
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'badges',
			title: 'Badge',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Best Seller', value: 'Best Seller' },
					{ title: 'Premium', value: 'Premium' },
					{ title: 'Favorit', value: 'Favorit' },
					{ title: 'Baru', value: 'Baru' },
					{ title: 'Stok Terbatas', value: 'Stok Terbatas' }
				]
			}
		}),
		defineField({
			name: 'harvestDays',
			title: 'Masa Panen',
			type: 'string',
			description: 'Contoh: 25–30 hari'
		}),
		defineField({
			name: 'nutrition',
			title: 'Info Nutrisi',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'storageTips',
			title: 'Tips Penyimpanan',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'isAvailable',
			title: 'Tersedia',
			type: 'boolean',
			initialValue: true
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
			subtitle: 'category',
			media: 'image'
		}
	}
})
