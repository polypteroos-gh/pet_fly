document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	const fadeIn = '.fade-in',
		zoomInFadeIn = '.zoom-in-fade-in',
		welcome = '.welcome',
		rightFadeIn = '.right-fade-in',
		leftFadeIn = '.left-fade-in',
		welcomePlane = '.welcome__plane',
		mission = '.mission',
		lf = '.lf-sec',
		lfPlane = '.lf-sec__pic',
		loyaltyHead = '.loyalty-sec__hgroup',
		loyaltyPlane = '.loyalty-sec__pic',
		loyaltyMain = '.loyalty-sec__main',
		costsHead = '.costs-sec__hgroup',
		costsPlane = '.costs-sec__pic',
		costsLeft = '.costs-sec__main',
		costsRight = '.costs-sec__right',
		applyTop = '.apply-sec-card--1',
		applyLeft = '.apply-sec-card--2',
		applyRight = '.apply-sec-card--3',
		faq = '.faq-sec'

	/* GLOBAL */
	ScrollSmoother.create({
		smooth: 1.2, // сколько времени (в секундах) требуется, чтобы «догнать» позицию нативной прокрутки
		effects: false, // ищет атрибуты data-speed и data-lag у элементов
		smoothTouch: 0.1 // значительно меньшее время сглаживания на сенсорных устройствах (по умолчанию сглаживание на сенсорных устройствах отключено)
	})

	// Чтобы браузер учитывал загруженные картинки
	document.querySelectorAll('img').forEach(img => {
		img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
	})

	gsap.set(
		[
			fadeIn,
			zoomInFadeIn,
			leftFadeIn,
			rightFadeIn,
			welcome,
			mission,
			lf,
			lfPlane,
			loyaltyHead,
			loyaltyPlane,
			loyaltyMain,
			costsHead,
			costsPlane,
			costsLeft,
			costsRight,
			applyTop,
			applyLeft,
			applyRight,
			faq
		],
		{
			force3D: true, //включаем 3D-ускорение для лучшей производительности
			transformPerspective: 1000, //устанавливаем перспективу для элементов, которые будут анимироваться
			backfaceVisibility: 'hidden' //скрываем заднюю сторону элементов, которые будут анимироваться
		}
	)

	/* WELCOME SECTION*/
	// HEADER Fade-in with load
	gsap.from(fadeIn, {
		y: 60, //сдвиг по координате y
		opacity: 0, //стартовая прозрачность
		duration: 2, //продолжительность анимации
		stagger: 0.1, //задержка между запуском анимации у разных элементов, которые подходят под селектор
		ease: 'power2.out' //изинг https://gsap.com/docs/v3/Eases
	})

	// WELCOME Fade-in with load
	gsap.from(zoomInFadeIn, {
		scale: 0.8, //стартовый масштаб
		opacity: 0, //стартовая прозрачность
		duration: 2, //продолжительность анимации
		stagger: 0.1, //задержка между запуском анимации у разных элементов, которые подходят под селектор
		ease: 'power2.out', //изинг https://gsap.com/docs/v3/Eases
		immediateRender: false //отключаем немедленное рендеринг анимации, чтобы избежать проблем с начальной позицией элементов
	})

	// LEFTCLOUD Fade-in with load
	gsap.from(leftFadeIn, {
		x: -100, //сдвиг по координате x
		opacity: 0, //стартовая прозрачность
		duration: 2, //продолжительность анимации
		stagger: 0.1, //задержка между запуском анимации у разных элементов, которые подходят под селектор
		ease: 'power2.out' //изинг https://gsap.com/docs/v3/Eases
	})

	// RIGHTCLOUD Fade-in with load
	gsap.from(rightFadeIn, {
		x: 100, //сдвиг по координате x
		opacity: 0, //стартовая прозрачность
		duration: 2, //продолжительность анимации
		stagger: 0.1, //задержка между запуском анимации у разных элементов, которые подходят под селектор
		ease: 'power2.out' //изинг https://gsap.com/docs/v3/Eases
	})

	// WELCOME Trigger
	const welcomeTL = gsap.timeline({
		scrollTrigger: {
			trigger: welcome, //элемент, относительно которого будет запускаться анимация
			start: 'top top', //позиция триггера относительно окна браузера, при которой начнется анимация
			end: '+=120%', //позиция триггера относительно окна браузера, при которой закончится анимация
			scrub: 1, //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			markers: false //отображение маркеров для отладки (true - включить, false - выключить)
		}
	})

	// WELCOME Fade-out with scroll
	gsap.from(welcomePlane, {
		x: -100,
		y: 50,
		duration: 1.5,
		ease: 'power2.ease',
		immediateRender: false
	})

	// WELCOME Fade-out with scroll
	welcomeTL
		.to(
			zoomInFadeIn,
			{
				scale: 0.8, //стартовый масштаб
				opacity: 0 //стартовая прозрачность
			},
			0
		)
		.to(
			welcomePlane,
			{
				x: 140,
				y: -50
			},
			0
		)

	/* MISSION */
	gsap.utils.toArray(`${mission} > *`).forEach((item, index) => {
		gsap.fromTo(
			item,
			{
				y: 25, //сдвиг по координате y
				scale: 0.7, //стартовый масштаб
				opacity: 0 //стартовая прозрачность
			},
			{
				y: 0, //конечный сдвиг по координате y
				scale: 1, //конечный масштаб
				opacity: 1, //конечная прозрачность
				duration: 1.5, //продолжительность анимации
				ease: 'power2.out', //изинг https://gsap.com/docs/v3/Eases
				scrollTrigger: {
					trigger: item, //элемент, относительно которого будет запускаться анимация
					start: 'top 95%', //позиция триггера относительно окна браузера, при которой начнется анимация
					end: 'top 50%', //позиция триггера относительно окна браузера, при которой закончится анимация
					scrub: 1
				}
			}
		)
	})

	/* LF */
	gsap.fromTo(
		`${lf} > .container`,
		{
			scale: 0.9, //стартовый масштаб
			opacity: 0, //стартовая прозрачность
			x: -100
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			x: 0,
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: lf, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=80%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	gsap.to(lfPlane, {
		x: -80,
		scale: 1.2, //конечный масштаб
		ease: 'none', //изинг https://gsap.com/docs/v3/Eases
		scrollTrigger: {
			trigger: lfPlane, //элемент, относительно которого будет запускаться анимация
			start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
			end: '+=120%', //позиция триггера относительно окна браузера, при которой закончится анимация
			scrub: 1, //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			immediateRender: false //отключаем немедленное рендеринг анимации, чтобы избежать проблем с начальной позицией элементов
		}
	})

	/* Loyalty */

	gsap.fromTo(
		loyaltyHead,
		{
			scale: 0.9, //стартовый масштаб
			opacity: 0, //стартовая прозрачность
			x: 100
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			x: 0,
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: loyaltyHead, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=80%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	gsap.fromTo(
		loyaltyMain,
		{
			scale: 0.9, //стартовый масштаб
			opacity: 0, //стартовая прозрачность
			x: -100
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			x: 0,
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: loyaltyMain, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=50%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	gsap.to(loyaltyPlane, {
		x: 200,
		scale: 1.2, //конечный масштаб
		ease: 'none', //изинг https://gsap.com/docs/v3/Eases
		scrollTrigger: {
			trigger: loyaltyPlane, //элемент, относительно которого будет запускаться анимация
			start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
			end: '+=200%', //позиция триггера относительно окна браузера, при которой закончится анимация
			scrub: 1, //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			immediateRender: false //отключаем немедленное рендеринг анимации, чтобы избежать проблем с начальной позицией элементов
		}
	})

	/* costs */

	gsap.fromTo(
		costsHead,
		{
			scale: 0.8, //стартовый масштаб
			opacity: 0 //стартовая прозрачность
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: costsHead, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=80%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	gsap.to(costsPlane, {
		x: 300,
		y: -50,
		scale: 1.2, //конечный масштаб
		ease: 'none', //изинг https://gsap.com/docs/v3/Eases
		scrollTrigger: {
			trigger: costsPlane, //элемент, относительно которого будет запускаться анимация
			start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
			end: '+=200%', //позиция триггера относительно окна браузера, при которой закончится анимация
			scrub: 1, //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			immediateRender: false //отключаем немедленное рендеринг анимации, чтобы избежать проблем с начальной позицией элементов
		}
	})

	gsap.fromTo(
		costsLeft,
		{
			scale: 0.9, //стартовый масштаб
			opacity: 0, //стартовая прозрачность
			x: -100
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			x: 0,
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: costsLeft, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=40%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	gsap.fromTo(
		costsRight,
		{
			scale: 0.9, //стартовый масштаб
			opacity: 0, //стартовая прозрачность
			x: 100
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			x: 0,
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: costsRight, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=40%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	/* APPLY */

	gsap.utils
		.toArray(`${applyTop}, ${applyLeft}, ${applyRight}`)
		.forEach((item, index) => {
			gsap.fromTo(
				item,
				{
					y: 100, //сдвиг по координате y
					scale: 0.9, //стартовый масштаб
					opacity: 0 //стартовая прозрачность
				},
				{
					y: 0, //конечный сдвиг по координате y
					scale: 1, //конечный масштаб
					opacity: 1, //конечная прозрачность
					//duration: 1.5, //продолжительность анимации
					ease: 'power2.out', //изинг https://gsap.com/docs/v3/Eases
					scrollTrigger: {
						trigger: item, //элемент, относительно которого будет запускаться анимация
						start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
						end: '+=80%', //позиция триггера относительно окна браузера, при которой закончится анимация
						scrub: 1
					}
				}
			)
		})

	/* FAQ */
	gsap.fromTo(
		faq,
		{
			scale: 0.8, //стартовый масштаб
			opacity: 0 //стартовая прозрачность
		},
		{
			scale: 1, //конечный масштаб
			opacity: 1, //конечная прозрачность
			ease: 'none', //изинг https://gsap.com/docs/v3/Eases
			scrollTrigger: {
				trigger: faq, //элемент, относительно которого будет запускаться анимация
				start: 'top 100%', //позиция триггера относительно окна браузера, при которой начнется анимация
				end: '+=80%', //позиция триггера относительно окна браузера, при которой закончится анимация
				scrub: 1 //связывает анимацию с прокруткой страницы (0 - мгновенно, 1 - плавно)
			}
		}
	)

	/* GLOBAL */
	window.addEventListener('load', () => {
		ScrollTrigger.refresh() //обновляем ScrollTrigger после полной загрузки страницы, чтобы корректно определить позиции элементов
	})

	/*  header */
	const $header = document.getElementById('js-header')
	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			$header.classList.add('fixed')
		} else {
			$header.classList.remove('fixed')
		}
	})

	/* anchors */
	document.querySelectorAll('#js-menu a').forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			const targetId = link.getAttribute('href').replace('#', ''),
				target = document.getElementById(targetId)

			if (target) {
				const smoother = ScrollSmoother.get()
				smoother.scrollTo(target, true, 'top 200px')
			}
		})
	})
})
