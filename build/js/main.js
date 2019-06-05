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

	//mobile menu
	function togglePopup() {
		var button = $('.mobMenu__menu-button, .container__block span'); // button selector
		var menu2 = $('.mobMenu'); // menu selector
		var menu = $('.popup'); // menu selector
		var bg = $('.popup-bg'); // menu selector
		var close = $('.popup__block-close'); // button close selector
		function hideMenu() {
			(() => {
				scrollLock.show();
			})();
			bg.removeClass('popup-bg-active');
			menu.removeClass('popup-active'); // remove active class
			menu2.removeClass('mobMenu-active'); // remove active class
		}
		button.on('click', (e) => {
			e.preventDefault();
			scrollLock.hide();
			bg.toggleClass('popup-bg-active');
			menu.toggleClass('popup-active'); // toggle active class
			menu2.removeClass('mobMenu-active'); // remove active class
		});
		close.on('click', (e) => {
			e.preventDefault();
			hideMenu();
			scrollLock.show();
		});
	}
	togglePopup();

	//close popup by "esc" button
	function hideByClickEscButton() {
		var menu = $('.mobMenu'); // menu selector
		var menu2 = $('.popup'); // menu selector
		$(window).on('keydown', (e) => {
			if ( e.keyCode == 27 ) {
				menu.removeClass('mobMenu-active'); // remove active class
				menu2.removeClass('popup-active'); // remove active class
				scrollLock.show();
			}
		});
	}
	hideByClickEscButton();

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

	//send mail handler
	var sendMailDiet = function sendMail(selector) {
		return fetch('/senddiet.php', {
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

	// form for sendmail method with yandex counter
	function sendFormPopup() {
		var form = $('.popup__form-form');
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
	sendFormPopup();

	// form for sendmail method with yandex counter
	function sendFormDiet() {
		var form = $('.diet__container-form');
		if (form) {
			form.submit((e) => {
				e.preventDefault();
				sendMailDiet(form).then(() => {
					return successMessage() /*,
					yaCounter********.reachGoal('****', () => {})*/,
					form.get(0).reset();
				});
			});
		}
	}
	sendFormDiet();

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

	function selectTarget() {
		let target = $('.diet__input');
		let type = $('.diet__type');
		function clearTarget() {
			$(type).removeClass('diet__type-active');
			$(target).removeClass('diet__input-active');
		}
		$(target[0]).on('click', () => {
			clearTarget();
			$(target[0]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-active');
		});
		$(target[1]).on('click', () => {
			clearTarget();
			$(target[1]).addClass('diet__input-active');
			$(type[1]).addClass('diet__type-active');
		});
		$(target[2]).on('click', () => {
			clearTarget();
			$(target[2]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-active');
			$(type[4]).addClass('diet__type-active');
			$(type[5]).addClass('diet__type-active');
			$(type[6]).addClass('diet__type-active');
		});
	}
	selectTarget();

	function selectDiet() {
		let target = $('.diet__input');
		let type = $('.diet__type');
		let kcal = $('.diet__blocks-block__type');
		function clearDiet() {
			$(type).removeClass('diet__type-active');
			$(type).removeClass('diet__type-hovered');
			$(kcal).removeClass('diet__blocks-block__type-active');
			$(target).removeClass('diet__input-active');
		}
		$(type[0]).on('click', () => {
			clearDiet();
			$(target[0]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[0]).addClass('diet__type-hovered');
			$(type[2]).addClass('diet__type-active');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
		});
		$(type[1]).on('click', () => {
			clearDiet();
			$(target[1]).addClass('diet__input-active');
			$(type[1]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-hovered');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
		});
		$(type[2]).on('click', () => {
			clearDiet();
			$(target[0]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-hovered');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
		});
		$(type[3]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-hovered');
			$(type[4]).addClass('diet__type-active');
			$(type[5]).addClass('diet__type-active');
			$(type[6]).addClass('diet__type-active');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
		});
		$(type[4]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-active');
			$(type[4]).addClass('diet__type-active');
			$(type[4]).addClass('diet__type-hovered');
			$(type[5]).addClass('diet__type-active');
			$(type[6]).addClass('diet__type-active');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
		});
		$(type[5]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-active');
			$(type[4]).addClass('diet__type-active');
			$(type[5]).addClass('diet__type-active');
			$(type[5]).addClass('diet__type-hovered');
			$(type[6]).addClass('diet__type-active');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
		});
		$(type[6]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-active');
			$(type[3]).addClass('diet__type-active');
			$(type[4]).addClass('diet__type-active');
			$(type[5]).addClass('diet__type-active');
			$(type[6]).addClass('diet__type-active');
			$(type[6]).addClass('diet__type-hovered');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
		});
	}
	selectDiet();

	function selectKcal() {
		let target = $('.diet__input');
		let type = $('.diet__type');
		let kcal = $('.diet__blocks-block__type');
		function clearDiet() {
			$(kcal).removeClass('diet__blocks-block__type-hovered');
		}
		$(type).on('click', () => {
			$(kcal).removeClass('diet__blocks-block__type-hovered');
		});
		$(target).on('click', () => {
			$(kcal).removeClass('diet__blocks-block__type-hovered');
		});
		$(kcal[0]).on('click', () => {
			clearDiet();
			$(kcal[0]).addClass('diet__blocks-block__type-hovered');
		});

		$(kcal[1]).on('click', () => {
			clearDiet();
			$(kcal[1]).addClass('diet__blocks-block__type-hovered');
		});

		$(kcal[2]).on('click', () => {
			clearDiet();
			$(kcal[2]).addClass('diet__blocks-block__type-hovered');
		});

		$(kcal[3]).on('click', () => {
			clearDiet();
			$(kcal[3]).addClass('diet__blocks-block__type-hovered');
		});

		$(kcal[4]).on('click', () => {
			clearDiet();
			$(kcal[4]).addClass('diet__blocks-block__type-hovered');
		});
	}
	selectKcal();

	function getData0() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[0]).on('click', (e) => {
			e.preventDefault();
			$(type[0]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].price);

			});
		});
	}
	getData0();

	function getData1() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[1]).on('click', (e) => {
			e.preventDefault();
			$(type[1]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].price);

			});
		});
	}
	getData1();

	function getData2() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[2]).on('click', (e) => {
			e.preventDefault();
			$(type[2]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].price);

			});
		});
	}
	getData2();

	function getData3() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[3]).on('click', (e) => {
			e.preventDefault();
			$(type[3]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].price);

			});
		});
	}
	getData3();

	function getData4() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[4]).on('click', (e) => {
			e.preventDefault();
			$(type[4]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].price);

			});
		});
	}
	getData4();

	function getData5() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[5]).on('click', (e) => {
			e.preventDefault();
			$(type[5]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].price);

			});
		});
	}
	getData5();

	function getData6() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(type[6]).on('click', (e) => {
			e.preventDefault();
			$(type[6]).children().prop('checked', true);
			$.getJSON('js/diets.json', function(data) {
				//text
				text.text(_.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].text);

				//images
				let src0 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img0;
				let src1 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img1;
				let src2 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img2;
				let src3 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img4;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);

				//props
				fat.text(_.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].fat);
				protein.text(_.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].protein);
				carbohydrates.text(_.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].carbohydrates);

				//price
				price.text(_.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].price);

			});
		});
	}
	getData6();

	function getKcal0() {
		let input = $('#diet1');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[0]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[2]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price);

				});
			}
		});
	}
	getKcal0();

	function getKcal1() {
		let input = $('#diet2');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[4]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price);

				});
			}
		});
	}
	getKcal1();

	function getKcal2() {
		let input = $('#diet3');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
	}
	getKcal2();

	function getKcal3() {
		let input = $('#diet4');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[0]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[2]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[4]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price);

				});
			}
		});
	}
	getKcal3();

	function getKcal4() {
		let input = $('#diet5');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[0]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[2]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[4]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price);

				});
			}
		});
	}
	getKcal4();

	function getKcal5() {
		let input = $('#diet6');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[0]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[2]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[4]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price);

				});
			}
		});
	}
	getKcal5();

	function getKcal6() {
		let input = $('#diet7');
		let kcal = $('.diet__container-form .diet__blocks-block__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[0]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[1]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[2]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(kcal[4]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img0;
					let src1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img1;
					let src2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img2;
					let src3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img3;
					let src4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img4;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);

					//props
					fat.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].fat);
					protein.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].protein);
					carbohydrates.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].carbohydrates);

					//price
					price.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price);

				});
			}
		});
	}
	getKcal6();

});
