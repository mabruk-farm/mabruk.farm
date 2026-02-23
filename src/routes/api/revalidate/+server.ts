import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private'

export const POST: RequestHandler = async ({ request }) => {
	try {
		const secret = env.SANITY_REVALIDATE_SECRET
		if (secret) {
			const url = new URL(request.url)
			const token = url.searchParams.get('secret')
			if (token !== secret) {
				return json({ revalidated: false, error: 'Invalid secret' }, { status: 401 })
			}
		}

		const body = await request.json()
		const type = body._type as string | undefined
		const slug = (body.slug?.current as string) ?? (body._id as string)

		console.info(`[Revalidate] Webhook received: type=${type} slug=${slug}`)

		return json({ revalidated: true, type, slug })
	} catch (e) {
		console.error('[Revalidate] Error:', e)
		return json({ revalidated: false, error: 'Invalid request' }, { status: 400 })
	}
}
