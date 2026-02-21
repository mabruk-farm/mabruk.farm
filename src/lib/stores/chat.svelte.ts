import { getContext, setContext } from 'svelte'

export interface ChatMessage {
	role: 'user' | 'assistant'
	content: string
}

export const MAX_MESSAGES = 20

const CHAT_KEY = Symbol('chat')

export function createChatState() {
	let messages = $state<ChatMessage[]>([])
	let isOpen = $state(false)
	let isLoading = $state(false)

	const state = {
		get messages() { return messages },
		get isOpen() { return isOpen },
		get isLoading() { return isLoading },

		get userMessageCount() {
			return messages.filter((m) => m.role === 'user').length
		},

		get canSendMessage() {
			return messages.filter((m) => m.role === 'user').length < MAX_MESSAGES
		},

		toggle() {
			isOpen = !isOpen
		},

		open() {
			isOpen = true
		},

		close() {
			isOpen = false
		},

		addMessage(message: ChatMessage) {
			messages = [...messages, message]
		},

		updateLastMessage(content: string) {
			if (messages.length === 0) return
			const last = messages[messages.length - 1]
			if (last.role === 'assistant') {
				messages = [...messages.slice(0, -1), { ...last, content }]
			}
		},

		setLoading(loading: boolean) {
			isLoading = loading
		},

		reset() {
			messages = []
			isLoading = false
		},

		toJSON() {
			return {
				messages,
				createdAt: Date.now()
			}
		},

		loadFromJSON(data: { messages: ChatMessage[]; createdAt: number }) {
			const ONE_DAY = 24 * 60 * 60 * 1000
			if (Date.now() - data.createdAt < ONE_DAY && Array.isArray(data.messages)) {
				messages = data.messages
			}
		}
	}

	return state
}

export type ChatState = ReturnType<typeof createChatState>

export function setChatState() {
	const state = createChatState()
	setContext(CHAT_KEY, state)
	return state
}

export function getChatState(): ChatState {
	return getContext<ChatState>(CHAT_KEY)
}
