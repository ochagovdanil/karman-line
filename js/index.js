// ------------------------NUMBER SCROLL ANIMATION--------------------------
var section = document.querySelector('.statistics')
var hasEntered = false

window.addEventListener('scroll', e => {
	var shouldAnimate = window.scrollY + window.innerHeight >= section.offsetTop

	if (shouldAnimate && !hasEntered) {
		hasEntered = true

		$('.statistics__text--big').each(function (i, el) {
			var data = parseInt(this.dataset.n, 10)
			var props = {
				from: {
					count: 0,
				},
				to: {
					count: data,
				},
			}
			$(props.from).animate(props.to, {
				duration: 2500 * 1,
				step: function (now, fx) {
					$(el).text(Math.ceil(now))
				},
				complete: function () {
					if (el.dataset.sym !== undefined) {
						el.textContent = el.textContent.concat(el.dataset.sym)
					}
				},
			})
		})
	}
})

// ------------------------TO THE TOP BUTTON--------------------------
$(document).ready(function () {
	$(window).scroll(function () {
		var showAfter = 300
		if ($(this).scrollTop() > showAfter) {
			$('.button-top').fadeIn()
		} else {
			$('.button-top').fadeOut()
		}
	})

	$('.button-top').click(function () {
		$('a.navbar__item').removeClass('navbar__item--active')
		$('.navbar__menu').removeClass('navbar__menu--active')

		$('html, body').animate({ scrollTop: 0 }, 100)
		return false
	})
})

// ------------------------FIXED NAVIGATION BAR MENU--------------------------
$(function () {
	var headerHeight = $('.header').innerHeight(),
		navbar = $('.header__navbar'),
		scrollOffSet = $(window).scrollTop()

	checkScroll(scrollOffSet)

	$(window).on('scroll', function () {
		headerHeight = $('.header').innerHeight()
		scrollOffSet = $(this).scrollTop()

		checkScroll(scrollOffSet)
	})

	function checkScroll(scrollOffSet) {
		if (scrollOffSet > headerHeight)
			navbar.addClass('header__navbar--fixed')
		else navbar.removeClass('header__navbar--fixed')
	}
})

// --------------------SMOOTH NAVIGATION BAR MENU SCROLLING-----------------------
$(function () {
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault()

		var block = $(this).data('scroll'),
			blockOffSet = $(block).offset().top

		$('a.navbar__item').removeClass('navbar__item--active')
		$('.navbar__menu').removeClass('navbar__menu--active')
		$(this).addClass('navbar__item--active')

		$('html, body').animate({ scrollTop: blockOffSet - 100 }, 100)
	})
})

// ----------------------------BURGER MENU TOGGLE-----------------------------------
$(function () {
	$('.navbar__burger-menu').on('click', function (event) {
		event.preventDefault()

		$('.navbar__menu').toggleClass('navbar__menu--active')
	})
})

// --------------------------------ACCORDION-------------------------------------
$(function () {
	$('[data-collapse]').on('click', function (event) {
		event.preventDefault()

		var block = $(this).data('collapse')

		$(block).slideToggle()
	})
})
