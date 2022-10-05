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
		$('html, body').animate({ scrollTop: 0 }, 100)
		return false
	})
})
