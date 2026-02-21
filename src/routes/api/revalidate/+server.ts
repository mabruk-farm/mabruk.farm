import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json()
		console.info('[Revalidate] Sanity webhook received:', body._type, body.slug?.current ?? body._id)

		return json({ revalidated: true })
	} catch (e) {
		console.error('[Revalidate] Error:', e)
		return json({ revalidated: false, error: 'Invalid request' }, { status: 400 })
	}
}
