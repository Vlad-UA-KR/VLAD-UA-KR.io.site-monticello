// -----------------Slider-Header--------------
$(function () {
	$('.slider-header').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		fade: true,
		speed: 2000,
		dots: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		zIndex: 20,
		responsive: [
			{
				breakpoint: 1069.98,
				settings: {
					dots: false
				}
			}
		]
	})
});
// ------------------Header-burger-----------

$(function () {
	$('.navigation').click(function (e) {

		if ($(e.target.closest('div')).hasClass('navigation__burger')) {
			$('.navigation__burger, .navigation__menu').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};

		if ($(e.target.closest('a')).hasClass('menu__link')) {
			$('.navigation__burger, .navigation__menu').removeClass('active');
			$('body').removeClass('lock');
			return
		};
	})
})

// -----------------Slider-News--------------

$(function () {
	$('.slider-news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		variableWidth: true,
		autoplaySpeed: 4000,
		arrows: true,
		speed: 1000,
		dots: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		ressponsiveTo: 'window',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 1
				}
			},
		]
	})
});

// -----------------Gallary-Images--------------

$(function () {

	let defaultSrc = bigImg.src;
	let defaultAlt = bigImg.alt;

	$('.image-blok__image-pack').click(function (e) {

		let target = e.target.closest('a');

		if (!target) return;

		set(target.href, target.title);
		e.preventDefault();

		function set(href, title) {
			bigImg.src = href;
			bigImg.alt = title;
		}
	});

	$('.image-blok').mouseleave(function () {

		set(defaultSrc, defaultAlt);

		function set(href, title) {
			bigImg.src = href;
			bigImg.alt = title;
		}
	})
});


