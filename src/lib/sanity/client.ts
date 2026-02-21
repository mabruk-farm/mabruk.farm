import { createClient } from '@sanity/client'
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET
} from '$env/static/public'

export const isSanityConfigured = Boolean(PUBLIC_SANITY_PROJECT_ID)

export const sanityClient = isSanityConfigured
	? createClient({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: PUBLIC_SANITY_DATASET || 'production',
			apiVersion: '2026-02-22',
			useCdn: true
		})
	: null
