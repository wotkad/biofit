/* eslint-disable no-console */
/* eslint-disable no-undef */
// function checkNavInit() {
// 	var e = $('.selector'); //menu selector
// 	var f = $('.selector'); //menu selector
// 	var mobMenu = $('.selector'); // mobmenu selector
// 	if (window.pageYOffset !== 0) {
// 		mobMenu.css('paddingTop', '98px');
// 		e.addClass('active-class'); // add active class when top offset more than 0
// 		f.addClass('active-class'); // add active class when top offset more than 0
// 		TweenMax.fromTo(f, 1, {opacity: 1, x: 0}, {opacity: 1, x: 0});
// 	} else {
// 		mobMenu.css('paddingTop', '78px');
// 		e.removeClass('active-class'); // remove active class when top offset more than 0
// 		f.removeClass('active-class'); // remove active class when top offset more than 0
// 	}
// }
// checkNavInit();

// // handler for add active class to menu if you enter with offset from top (onscroll)
// function scrollCheckNav() {
// 	$(window).on('scroll', () => {
// 		checkNavInit();
// 	});
// }
// scrollCheckNav();

// // handler for add active class to menu if you enter with offset from top
// function checkNav() {
// 	checkNavInit();
// }
// checkNav();

/* eslint-disable no-undef */
$(document).ready(() => {
	// rendering body
	(function render() {
		var render = $('.render'); // render class
		var tl = new TimelineLite();
		tl
			.fromTo(render, .5, {opacity: 1, zIndex: 99999}, {opacity: 0, zIndex: -1})
			.delay(.4)
			.call(hideRender);
		function hideRender(){
			$(render).remove(); // function that remove render div from DOM
		}
	})();

	//mobile menu
	function toggleMobileMenu() {
		var button = $('.headerMob__menu'); // button selector
		var menu = $('.mobMenu'); // menu selector
		var close = $('.mobMenu__block-close'); // button close selector
		var items = $('.mobMenu__menu-items-item'); // items selector
		function hideMenu() {
			(() => {
				scrollLock.show();
			})();
			menu.removeClass('mobMenu-active'); // remove active class
		}
		button.on('click', (e) => {
			e.preventDefault();
			scrollLock.hide();
			menu.toggleClass('mobMenu-active'); // toggle active class
		});
		close.on('click', (e) => {
			e.preventDefault();
			hideMenu();
		});
		Array.from(items).forEach(element => {
			$(element).on('click', (e) => {
				e.preventDefault();
				hideMenu();
			});
		});
	}
	toggleMobileMenu();

	// slider
	function dietSlider() {
		new Swiper('.swiper-container-diet', {
			slidesPerView: 1,
			grabCursor: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
	dietSlider();

	// slider
	function priceSlider() {
		new Swiper('.swiper-container-price', {
			slidesPerView: 4,
			grabCursor: true,
			spaceBetween: 20,
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				800: {
					slidesPerView: 2,
				},
				1120: {
					slidesPerView: 3,
				},
			}
		});
	}
	priceSlider();

	// slider
	function topSlider() {
		new Swiper('.swiper-container-top', {
			slidesPerView: 1,
			grabCursor: true,
			autoplay: true,
			loop: true,
			speed: 1500
		});
	}
	topSlider();

	// slider
	function reviewsSlider() {
		new Swiper('.swiper-container-reviews', {
			slidesPerView: 2,
			grabCursor: true,
			spaceBetween: 20,
			breakpoints: {
				875: {
					slidesPerView: 1,
				},
			}
		});
	}
	reviewsSlider();

	function toggleText() {
		let item = $('.faq__container-item-toggle-item');
		for (let i = 0; i < item.length; i++) {
			$(item[i]).on('click', () => {
				$(item[i]).toggleClass('faq__container-item-toggle-item-active');
			});
		}
	}
	toggleText();

	//send mail handler
	var sendMail = function sendMail(selector) {
		return fetch('/mail.php', {
			method: 'POST',
			body: new FormData($(selector).get(0))
		});
	};

	// form for sendmail method with yandex counter
	function sendForm() {
		var form = $('.form__container-form');
		if (form) {
			form.submit((e) => {
				e.preventDefault();
				sendMail(form).then(() => {
					return successMessage() /*,
					yaCounter********.reachGoal('****', () => {})*/,
					form.get(0).reset();
				});
			});
		}
	}
	sendForm();

	function successMessage() {
		let container = $('.success'); // block selector
		container.addClass('success-active'); // remove active class
		setTimeout(() => {
			container.removeClass('success-active'); // add active class
		}, 2000);
	}

	//smoothscroll
	function smoothScroll() {
		new SmoothScroll('a[href*="#"]', {
			speed: 1500,
			after: () => {
				$('body').css('overflow', '');
			}
		});
	}
	smoothScroll();

	// mask for "tel" input
	function inputMask() {
		var input =  $('input[type="tel"]');
		Array.from(input).forEach(element => {
			var mask = new Inputmask('+7 (999) 999-99-99');
			mask.mask(element);
		});
	}
	inputMask();

	//close popup by "esc" button
	function hideByClickEscButton() {
		var selector = $('.selector'); // block selector
		$(window).on('keydown', (e) => {
			if ( e.keyCode == 27 ) {
				selector.removeClass('selector'); // remove active class
				scrollLock.show();
			}
		});
	}
	hideByClickEscButton();

	// // dynamic data with cache
	// function dynamicData() {
	// 	const data = {
	// 		'title1': {
	// 			text: 'text1',
	// 		},
	// 		'title2': {
	// 			text: 'text2',
	// 		},
	// 	};

	// 	void function() {
	// 		const select = [...document.querySelectorAll('.selectors')]; // selectors blocks
	// 		const titleblock = document.querySelector('.selector'); // selector titleblock
	// 		select.forEach(option => option.on('click', (e) => {
	// 			titleblock.textContent = e.target.textContent;
	// 			select[i].dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}));
	// 		}));
	// 		if (select[i] !== null) {
	// 			select[i].addEventListener('change', (e) => {
	// 				titleblock.textContent = data[e.detail.value].titleblock;
	// 				localStorage.titleblock = titleblock.textContent;
	// 			});
	// 		}
	// 		if (localStorage.titleblock !== undefined) {
	// 			titleblock.textContent = localStorage.getItem('titleblock');
	// 		}
	// 	}();
	// }
	// dynamicData();

});
