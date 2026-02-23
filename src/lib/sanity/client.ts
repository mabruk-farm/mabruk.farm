import { createClient } from '@sanity/client'
import { env } from '$env/dynamic/public'

const projectId = env.PUBLIC_SANITY_PROJECT_ID ?? ''
const dataset = env.PUBLIC_SANITY_DATASET ?? 'production'

export const isSanityConfigured = Boolean(projectId)

export const sanityClient = isSanityConfigured
	? createClient({
			projectId,
			dataset,
			apiVersion: '2026-02-22',
			useCdn: true
		})
	: null
