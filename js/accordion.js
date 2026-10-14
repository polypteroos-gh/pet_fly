document.querySelectorAll('.faq-trigger').forEach(item => {
	item.addEventListener('click', e => {
		const isOpen = item.classList.contains('open')
		if (isOpen) {
			item.classList.remove('open')
			item.setAttribute('aria-expanded', 'false')
		} else {
			item.classList.add('open')
			item.setAttribute('aria-expanded', 'true')
		}
	})
})
