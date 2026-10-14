let previouslyFocusedElement = null
const $modal = document.getElementById('booking-modal'),
	$firstFocusableEl = $modal.querySelector('input'),
	$backContainer = document.getElementById('smooth-wrapper'),
	$header = document.getElementById('js-header'),
	$modalForm = document.getElementById('js-booking-form')

const openModal = () => {
	$modal.removeAttribute('inert')
	$backContainer.setAttribute('inert', '')
	$header.setAttribute('inert', '')
	previouslyFocusedElement = document.activeElement
	$modal.classList.add('active')
	$firstFocusableEl.focus()	
}
const closeModal = () => {
	$backContainer.removeAttribute('inert')
	$header.removeAttribute('inert')
	$modal.setAttribute('inert', '')
	$modal.classList.remove('active')	
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus()
	}
}

const submitModal = e => {
	e.preventDefault()

	const name = $modalForm.querySelector('#name').value,
		email = $modalForm.querySelector('#email').value,
		date = {
			name,
			email,
			timestamp: new Date().toISOString()
		}

	console.log('Success', date)

	alert('Thank you for your booking!')

	setTimeout(() => {
		closeModal()
		$modalForm.reset()
	}, 1500)
}
document.querySelectorAll('.js-open-modal').forEach(item => {
	item.addEventListener('click', e => {
		openModal()
	})
})
document.querySelectorAll('.js-close-modal').forEach(item => {
	item.addEventListener('click', e => {
		closeModal()
	})
})
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && $modal.classList.contains('active')) {
		closeModal()
	}
})
$modalForm.addEventListener('submit', e => {
	submitModal(e)
})
