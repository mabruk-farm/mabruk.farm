import { getContext, setContext } from 'svelte'

const ORDER_KEY = Symbol('order')

export function createOrderState() {
	let isOpen = $state(false)

	const state = {
		get isOpen() {
			return isOpen
		},

		toggle() {
			isOpen = !isOpen
		},

		open() {
			isOpen = true
		},

		close() {
			isOpen = false
		}
	}

	return state
}

export type OrderState = ReturnType<typeof createOrderState>

export function setOrderState() {
	const state = createOrderState()
	setContext(ORDER_KEY, state)
	return state
}

export function getOrderState(): OrderState {
	return getContext<OrderState>(ORDER_KEY)
}
