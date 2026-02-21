export function fadeInOnScroll(
	node: HTMLElement,
	options: { delay?: number; threshold?: number } = {}
) {
	const { delay = 0, threshold = 0.15 } = options

	node.style.opacity = '0'
	node.style.transform = 'translateY(20px)'
	node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1'
					node.style.transform = 'translateY(0)'
					observer.unobserve(node)
				}
			}
		},
		{ threshold }
	)

	observer.observe(node)

	return {
		destroy() {
			observer.disconnect()
		}
	}
}
