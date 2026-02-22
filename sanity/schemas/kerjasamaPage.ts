import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'kerjasamaPage',
	title: 'Halaman Kerjasama',
	type: 'document',
	fields: [
		defineField({
			name: 'heroTitle',
			title: 'Hero Title',
			type: 'string',
			initialValue: 'Partner Suplai Sayuran Segar untuk Bisnis Anda'
		}),
		defineField({
			name: 'heroSubtitle',
			title: 'Hero Subtitle',
			type: 'text',
			rows: 2
		}),
		defineField({
			name: 'benefits',
			title: 'Keunggulan Kerjasama',
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
			name: 'tiers',
			title: 'Tier Kerjasama',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Nama Tier', type: 'string' }),
						defineField({ name: 'volume', title: 'Volume', type: 'string' }),
						defineField({ name: 'discount', title: 'Diskon', type: 'string' }),
						defineField({ name: 'target', title: 'Target', type: 'string' }),
						defineField({
							name: 'highlighted',
							title: 'Disorot?',
							type: 'boolean',
							initialValue: false
						})
					],
					preview: {
						select: { title: 'name', subtitle: 'volume' }
					}
				}
			]
		}),
		defineField({
			name: 'pricingProducts',
			title: 'Produk Pricing',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'name', title: 'Nama Produk', type: 'string' }),
						defineField({ name: 'retail', title: 'Harga Retail', type: 'number' }),
						defineField({ name: 'starter', title: 'Harga Starter', type: 'number' }),
						defineField({ name: 'business', title: 'Harga Business', type: 'number' }),
						defineField({ name: 'enterprise', title: 'Harga Enterprise', type: 'number' })
					],
					preview: {
						select: { title: 'name' }
					}
				}
			]
		}),
		defineField({
			name: 'extras',
			title: 'Layanan Tambahan',
			type: 'array',
			of: [{ type: 'string' }]
		})
	],
	preview: {
		prepare() {
			return { title: 'Halaman Kerjasama' }
		}
	}
})
