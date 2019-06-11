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

	const SALE = 0.9;
	const SMALLSALE = 0.95;

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

	//mobile menu
	function togglePopupBuy() {
		var button = $('.price-content-button'); // button selector
		var popup = $('.popupBuy'); // menu selector
		var bg = $('.popupBuy-bg'); // menu selector
		var close = $('.popupBuy__block-close'); // button close selector
		function hideMenu() {
			(() => {
				scrollLock.show();
			})();
			bg.removeClass('popupBuy-bg-active');
			popup.removeClass('popupBuy-active'); // remove active class
		}
		button.on('click', (e) => {
			e.preventDefault();
			scrollLock.hide();
			bg.toggleClass('popupBuy-bg-active');
			popup.toggleClass('popupBuy-active'); // toggle active class
		});
		close.on('click', (e) => {
			e.preventDefault();
			hideMenu();
			scrollLock.show();
		});
	}
	togglePopupBuy();

	function getPopupContent() {
		let button = $('.price-content-button');
		let setTitle = $('#popupTitle');
		let getTitle = $('.popupBuy__form-form');
		let popupPrice = $('#popupPrice');
		for ( let i = 0; i < button.length; i++ ) {
			$(button[i]).on('click', () => {
				$(popupPrice).val($(button[i]).parent().children()[4].innerText);
				$(getTitle).children()[0].value = $(button[i]).parent().children()[0].innerText;
				setTitle[0].innerText = $(button[i]).parent().children()[0].innerText;
			});

		}
	}
	getPopupContent();

	//close popup by "esc" button
	function hideByClickEscButton() {
		var menu = $('.mobMenu'); // menu selector
		var menu2 = $('.popup'); // menu selector
		var bg1 = $('.popup-bg'); // menu selector
		var popupBuy = $('.popupBuy'); // menu selector
		var bg2 = $('.popupBuy-bg'); // menu selector
		$(window).on('keydown', (e) => {
			if ( e.keyCode == 27 ) {
				menu.removeClass('mobMenu-active'); // remove active class
				menu2.removeClass('popup-active'); // remove active class
				bg1.removeClass('popup-bg-active'); // remove active class
				bg2.removeClass('popupBuy-bg-active'); // remove active class
				popupBuy.removeClass('popupBuy-active'); // remove active class
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
	var sendMailPrice = function sendMail(selector) {
		return fetch('/sendprice.php', {
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
		let popup = $('.popup');
		let popupBg = $('.popup-bg');
		if (form) {
			form.submit((e) => {
				popup.removeClass('popup-active');
				popupBg.removeClass('popup-bg-active');
				scrollLock.show();
				scrollLock.show();
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
	function sendFormPrice() {
		var form = $('.popupBuy__form-form');
		let popup = $('.popupBuy');
		let popupBg = $('.popupBuy-bg');
		if (form) {
			form.submit((e) => {
				popup.removeClass('popupBuy-active');
				popupBg.removeClass('popupBuy-bg-active');
				scrollLock.show();
				scrollLock.show();
				e.preventDefault();
				sendMailPrice(form).then(() => {
					return successMessage() /*,
					yaCounter********.reachGoal('****', () => {})*/,
					form.get(0).reset();
				});
			});
		}
	}
	sendFormPrice();

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
		let targetPopup = $('#target');
		let kcalPopup = $('#kcal');
		let countPopup = $('#count');
		let typePopup = $('#type');
		let popupPrice = $('#popupPrice');

		function clearTarget() {
			$(type).removeClass('diet__type-active');
			$(type).removeClass('diet__type-hovered');
			$(target).removeClass('diet__input-active');
			$(kcalPopup).val('Не выбрано');
			$(countPopup).val('Не выбрано');
			$(typePopup).val('Не выбрано');
			$(popupPrice).val('Не выбрано');
		}
		$(target[0]).on('click', () => {
			clearTarget();
			$(target[0]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-active');
			$(targetPopup).val($(target[0]).children().val());
		});
		$(target[1]).on('click', () => {
			clearTarget();
			$(target[1]).addClass('diet__input-active');
			$(type[1]).addClass('diet__type-active');
			$(targetPopup).val($(target[1]).children().val());
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
			$(targetPopup).val($(target[2]).children().val());
		});
	}
	selectTarget();

	function selectDiet() {
		let target = $('.diet__input');
		let type = $('.diet__type');
		let kcal = $('.diet__blocks-block__type');
		let typePopup = $('#type');
		let targetPopup = $('#target');
		let kcalPopup = $('#kcal');
		let countPopup = $('#count');
		let popupPrice = $('#popupPrice');
		function clearDiet() {
			$(type).removeClass('diet__type-active');
			$(type).removeClass('diet__type-hovered');
			$(kcal).removeClass('diet__blocks-block__type-active');
			$(target).removeClass('diet__input-active');
			$(kcalPopup).val('Не выбрано');
			$(countPopup).val('Не выбрано');
			$(popupPrice).val('Не выбрано');
		}
		$(type[0]).on('click', () => {
			clearDiet();
			$(target[0]).addClass('diet__input-active');
			$(target[0]).children().prop('checked', true);
			$(type[0]).addClass('diet__type-active');
			$(type[0]).addClass('diet__type-hovered');
			$(type[2]).addClass('diet__type-active');
			$(kcal[0]).addClass('diet__blocks-block__type-active');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(kcal[2]).addClass('diet__blocks-block__type-active');
			$(typePopup).val($(type[0]).children().val());
			$(targetPopup).val($(target[0]).children().val());
		});
		$(type[1]).on('click', () => {
			clearDiet();
			$(target[1]).addClass('diet__input-active');
			$(target[1]).children().prop('checked', true);
			$(type[1]).addClass('diet__type-active');
			$(type[1]).addClass('diet__type-hovered');
			$(kcal[3]).addClass('diet__blocks-block__type-active');
			$(kcal[4]).addClass('diet__blocks-block__type-active');
			$(typePopup).val($(type[1]).children().val());
			$(targetPopup).val($(target[1]).children().val());
		});
		$(type[2]).on('click', () => {
			clearDiet();
			$(target[0]).children().prop('checked', true);
			$(target[0]).addClass('diet__input-active');
			$(type[0]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-active');
			$(type[2]).addClass('diet__type-hovered');
			$(kcal[1]).addClass('diet__blocks-block__type-active');
			$(typePopup).val($(type[2]).children().val());
			$(targetPopup).val($(target[0]).children().val());
		});
		$(type[3]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(target[2]).children().prop('checked', true);
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
			$(typePopup).val($(type[3]).children().val());
			$(targetPopup).val($(target[2]).children().val());
		});
		$(type[4]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(target[2]).children().prop('checked', true);
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
			$(typePopup).val($(type[4]).children().val());
			$(targetPopup).val($(target[2]).children().val());
		});
		$(type[5]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(target[2]).children().prop('checked', true);
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
			$(typePopup).val($(type[5]).children().val());
			$(targetPopup).val($(target[2]).children().val());
		});
		$(type[6]).on('click', () => {
			clearDiet();
			$(target[2]).addClass('diet__input-active');
			$(target[2]).children().prop('checked', true);
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
			$(typePopup).val($(type[6]).children().val());
			$(targetPopup).val($(target[2]).children().val());
		});
	}
	selectDiet();

	function selectKcal() {
		let target = $('.diet__input');
		let type = $('.diet__type');
		let kcal = $('.diet__blocks-block__type');
		let kcalPopup = $('#kcal');
		function clearDiet() {
			$(kcal).removeClass('diet__blocks-block__type-hovered');
		}
		$(type).on('click', () => {
			clearDiet();
		});
		$(target).on('click', () => {
			clearDiet();
		});
		$(kcal[0]).on('click', () => {
			clearDiet();
			$(kcal[0]).addClass('diet__blocks-block__type-hovered');
			$(kcalPopup).val($(kcal[0]).children().val());
		});

		$(kcal[1]).on('click', () => {
			clearDiet();
			$(kcal[1]).addClass('diet__blocks-block__type-hovered');
			$(kcalPopup).val($(kcal[1]).children().val());
		});

		$(kcal[2]).on('click', () => {
			clearDiet();
			$(kcal[2]).addClass('diet__blocks-block__type-hovered');
			$(kcalPopup).val($(kcal[2]).children().val());
		});

		$(kcal[3]).on('click', () => {
			clearDiet();
			$(kcal[3]).addClass('diet__blocks-block__type-hovered');
			$(kcalPopup).val($(kcal[3]).children().val());
		});

		$(kcal[4]).on('click', () => {
			clearDiet();
			$(kcal[4]).addClass('diet__blocks-block__type-hovered');
			$(kcalPopup).val($(kcal[4]).children().val());
		});
	}
	selectKcal();

	function getData0() {
		let type = $('.diet__type');
		let text = $('#text');
		let images = $('.diet__blocks-block-img img');
		let fat = $('#fat');
		let carbohydrates = $('#carbohydrates');
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'decline';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'balance';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'detox';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'nofish';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
					return e.diet == 'nomeat';
				})[0].img3;
				let src4 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].img4;
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'nomeat';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'nomilk';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
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
				let src5 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].img5;
				$(images[0]).attr('src', src0);
				$(images[1]).attr('src', src1);
				$(images[2]).attr('src', src2);
				$(images[3]).attr('src', src3);
				$(images[4]).attr('src', src4);
				$(images[5]).attr('src', src5);

				//title
				let title0 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title0;
				let title1 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title1;
				let title2 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title2;
				let title3 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title3;
				let title4 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title4;
				let title5 = _.filter(data.diets, function(e) {
					return e.diet == 'vegan';
				})[0].title5;
				$(title[0]).text(title0);
				$(title[1]).text(title1);
				$(title[2]).text(title2);
				$(title[3]).text(title3);
				$(title[4]).text(title4);
				$(title[5]).text(title5);

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
				})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let carbohydrates = $('#carbohydrates');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1000;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1000;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'decline' && e.kcal == 1500;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'decline' && e.kcal == 1500;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 1800;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 1800;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'balance' && e.kcal == 2100;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'balance' && e.kcal == 2100;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'detox' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'detox' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1000;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1000;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1500;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1500;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 1800;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].price * SALE * 28 + ' руб');

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 1800;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nofish' && e.kcal == 2100;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nofish' && e.kcal == 2100;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1000;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1000;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1500;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1500;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 1800;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].price * SALE * 28 + ' руб');

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 1800;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomeat' && e.kcal == 2100;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomeat' && e.kcal == 2100;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1000;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1000;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1500;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1500;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 1800;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].price * SALE * 28 + ' руб');

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 1800;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'nomilk' && e.kcal == 2100;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'nomilk' && e.kcal == 2100;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

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
		let title = $('.diet__blocks-block-desc');
		let protein = $('#protein');
		let price = $('#price');
		let ratePrice = $('.price-content-price');
		let rateTotal = $('.price-content-total');
		let sale = $('.salePrice');
		$(kcal[0]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1000;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1000;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[1]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1200;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1200;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[2]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1500;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1500;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[3]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 1800;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].price * SALE * 28 + ' руб');

					$(kcal[3]).children().prop('checked', true);
					//text
					text.text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].text);

					//images
					let src0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 1800;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
		$(kcal[4]).on('click', (e) => {
			if (input.prop('checked') == true) {
				e.preventDefault();
				$.getJSON('js/kcals.json', function(data) {

					$(sale[0]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price * SALE) + ' руб')
					);

					$(sale[1]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price * 14 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price * SALE * 14) + ' руб')
					);

					$(sale[2]).text(
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price * 28 -
						(_.filter(data.kcals, function(e) {
							return e.diet == 'vegan' && e.kcal == 2100;
						})[0].price * SALE * 28) + ' руб')
					);

					$(ratePrice[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price + ' руб');

					$(ratePrice[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price + ' руб');

					$(rateTotal[0]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price * SALE + ' руб');

					$(rateTotal[1]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price * 7 + ' руб');

					$(rateTotal[2]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price * SMALLSALE * 14 + ' руб');

					$(rateTotal[3]).text(_.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].price * SALE * 28 + ' руб');

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
					let src5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].img5;
					$(images[0]).attr('src', src0);
					$(images[1]).attr('src', src1);
					$(images[2]).attr('src', src2);
					$(images[3]).attr('src', src3);
					$(images[4]).attr('src', src4);
					$(images[5]).attr('src', src5);

					//title
					let title0 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title0;
					let title1 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title1;
					let title2 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title2;
					let title3 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title3;
					let title4 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title4;
					let title5 = _.filter(data.kcals, function(e) {
						return e.diet == 'vegan' && e.kcal == 2100;
					})[0].title5;
					$(title[0]).text(title0);
					$(title[1]).text(title1);
					$(title[2]).text(title2);
					$(title[3]).text(title3);
					$(title[4]).text(title4);
					$(title[5]).text(title5);

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
					})[0].price * SALE);

				});
			}
		});
	}
	getKcal6();

});
