import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'siteSettings',
	title: 'Pengaturan Situs',
	type: 'document',
	fields: [
		defineField({
			name: 'siteName',
			title: 'Nama Situs',
			type: 'string',
			initialValue: 'Mabruk Farm'
		}),
		defineField({
			name: 'tagline',
			title: 'Tagline',
			type: 'string',
			initialValue: 'Sayuran Berkah, Segar Tanpa Pestisida dari Gunung Sari'
		}),
		defineField({
			name: 'whatsapp',
			title: 'Nomor WhatsApp',
			type: 'string',
			initialValue: '6285269458526'
		}),
		defineField({
			name: 'instagram',
			title: 'Instagram',
			type: 'string',
			initialValue: '@mabruk.farm'
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			initialValue: 'halo@mabruk.farm'
		}),
		defineField({
			name: 'address',
			title: 'Alamat',
			type: 'text',
			rows: 2,
			initialValue: 'Desa Gunung Sari, Kec. Way Khilau, Kab. Pesawaran, Lampung'
		}),
		defineField({
			name: 'operatingHours',
			title: 'Jam Operasional',
			type: 'string',
			initialValue: 'Senin – Sabtu, 07:00 – 17:00 WIB'
		})
	],
	preview: {
		prepare() {
			return { title: 'Pengaturan Situs' }
		}
	}
})
