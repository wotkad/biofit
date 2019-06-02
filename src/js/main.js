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

	// //mobile menu
	// function toggleMobileMenu() {
	// 	var button = $('.selector'); // button selector
	// 	var menu = $('.selector'); // menu selector
	// 	var close = $('.selector'); // button close selector
	// 	var items = $('.selector'); // items selector
	// 	function hideMenu() {
	// 		(() => {
	// 			scrollLock.show();
	// 		})();
	// 		selectorMenu.removeClass('active-class'); // remove active class
	// 	}
	// 	button.on('click', (e) => {
	// 		e.preventDefault();
	// 		scrollLock.hide();
	// 		menu.toggleClass('active-class'); // toggle active class
	// 	});
	// 	close.on('click', (e) => {
	// 		e.preventDefault();
	// 		hideMenu();
	// 	});
	// 	Array.from(items).forEach(element => {
	// 		$(element).on('click', (e) => {
	// 			e.preventDefault();
	// 			hideMenu();
	// 		});
	// 	});
	// }
	// toggleMobileMenu();

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
			spaceBetween: 20
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
			spaceBetween: 20
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

	// //only numbers in the fields
	// $('selector').on('keydown', (e) => { // input selector
	// 	if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
	// 		return false;
	// 	}
	// });

	// //close popup by "esc" button
	// function hideByClickEscButton() {
	// 	var selector = $('.selector'); // block selector
	// 	$(window).on('keydown', (e) => {
	// 		if ( e.keyCode == 27 ) {
	// 			selector.removeClass('selector'); // remove active class
	// 			scrollLock.show();
	// 		}
	// 	});
	// }
	// hideByClickEscButton();

	// //play video
	// const stopVideo = () => {
	// 	var stopButton = $('.selector'); // button selector
	// 	var video = $('.selector'); // block selector video
	// 	if (stopButton) {
	// 		stopButton.on('click', (e) => {
	// 			e.preventDefault();
	// 			if (video.paused) { // video selector
	// 				video.play(); // video selector
	// 			} else {
	// 				video.pause(); // video selector
	// 			}
	// 		});
	// 	}
	// };
	// stopVideo();

	// //stop video when scroll (work only if width > 767px)
	// function showToggledVideo() {
	// 	var video = $('.selector'); // block selector video
	// 	var scroll = $(this).scrollTop();
	// 	if (video) {
	// 		$(window).scroll(() => {
	// 			if($(window).width() > 767) {
	// 				if (scroll > 0) { // video selector
	// 					video.play(); // video selector
	// 				} else {
	// 					video.pause(); // video selector
	// 				}
	// 			}
	// 		});
	// 	}
	// }
	// showToggledVideo();

	// //yandex maps script
	// function yaMaps() {
	// 	// script for yandex maps
	// 	var spinner = $('.ymap-container').children('.loader'); // block selector and loader
	// 	var check_if_load = false;
	// 	function init() {
	// 		var myMapTemp = new ymaps.Map('map-yandex', {
	// 			center: [55.722882, 37.626717], // coordinates
	// 			zoom: 17, // zoom
	// 			controls: ['zoomControl', 'fullscreenControl']
	// 		});
	// 		var myPlacemarkTemp = new ymaps.GeoObject({
	// 			geometry: {
	// 				type: 'Point',
	// 				coordinates: [55.722882, 37.626717] // coordinates
	// 			}
	// 		});
	// 		myMapTemp.geoObjects.add(myPlacemarkTemp);
	// 		var layer = myMapTemp.layers.get(0).get(0);
	// 		waitForTilesLoad(layer).then(() => {
	// 			spinner.removeClass('is-active');
	// 		});
	// 	}
	// 	function waitForTilesLoad(layer) {
	// 		return new ymaps.vow.Promise((resolve) => {
	// 			var tc = getTileContainer(layer), readyAll = true;
	// 			// eslint-disable-next-line no-unused-vars
	// 			tc.tiles.each((tile, number) => {
	// 				if (!tile.isReady()) {
	// 					readyAll = false;
	// 				}
	// 			});
	// 			if (readyAll) {
	// 				resolve();
	// 			} else {
	// 				tc.events.once('ready', () => {
	// 					resolve();
	// 				});
	// 			}
	// 		});
	// 	}
	// 	function getTileContainer(layer) {
	// 		for (var k in layer) {
	// 			if (layer.hasOwnProperty(k)) {
	// 				if (
	// 					layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
	// 					|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer
	// 				) {
	// 					return layer[k];
	// 				}
	// 			}
	// 		}
	// 		return null;
	// 	}
	// 	function loadScript(url, callback){
	// 		var script = document.createElement('script');
	// 		if (script.readyState){
	// 			script.onreadystatechange = () => {
	// 				if (script.readyState == 'loaded' ||
	// 					script.readyState == 'complete'){
	// 					script.onreadystatechange = null;
	// 					callback();
	// 				}
	// 			};
	// 		} else {
	// 			script.onload = () => {
	// 				callback();
	// 			};
	// 		}
	// 		script.src = url;
	// 		document.getElementsByTagName('head')[0].appendChild(script);
	// 	}
	// 	var ymap = () => {
	// 		$('.ymap-container').mouseenter(() => {
	// 			if (!check_if_load) {
	// 				check_if_load = true;
	// 				spinner.addClass('is-active');
	// 				loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1', () => {
	// 					ymaps.load(init);
	// 				});
	// 			}
	// 		}
	// 		);
	// 	};
	// 	$(() => {
	// 		ymap();
	// 	});
	// }
	// yaMaps();

	// // init menu with toggle menu items
	// $(() => {
	// 	var sidebar = new Menu;
	// 	sidebar.init();

	// 	function Menu(){
	// 		var $body = $('body');
	// 		var $button = $('.selector'); // selector button
	// 		this.init = () => {
	// 			$('.selector').each(() =>{ // selector button
	// 				var theHeight = $('.selector').height(); // selector block
	// 				$(this).next().first().css('display', 'flex'); //open first item
	// 				$(this).next().first().css('height', 'auto');  //open first item
	// 				var h2 = $(this).next().height();
	// 				$(this).next().first().removeAttr('style');
	// 				if(h2 < theHeight) {
	// 					theHeight = h2;
	// 				}
	// 				$(this).next().attr('data-height', theHeight);
	// 			});
	// 			$body.removeClass('selector'); // remove active class
	// 			$button.click(() => {
	// 				if($(this).hasClass('selector')){ // check is active class
	// 					sidebar.hideDropDown(this);
	// 				}else{
	// 					sidebar.showDropDown(this);
	// 				}
	// 				$button.not(this).removeClass('selector'); // remove active class
	// 				$button.not(this).next().removeAttr('style');
	// 			});
	// 			$('.selector').first().click(); // selector button
	// 			// init custom scrollbar here if you got this menu
	// 			$('.selector').mCustomScrollbar({ // selector block
	// 				theme:'dark',
	// 				autoHideScrollbar: true,
	// 			});
	// 		};
	// 		this.showDropDown = (elem) => {
	// 			$(elem).next().removeAttr('style');
	// 			$(elem).removeClass('selector'); // remove active class
	// 			$(elem).next().css('height', $(elem).next().data('height'));
	// 			$(elem).addClass('selector'); // add active class
	// 		};
	// 		this.hideDropDown = (elem) => {
	// 			$(elem).next().removeAttr('style');
	// 			$(elem).removeClass('selector'); // remove active class
	// 		};
	// 	}
	// });

	// // close popup or smth when click out of popup
	// $('.selector').click((e) => { // selector button
	// 	var $search = $('.selector'); // selector block
	// 	if ($search.css('display') !== 'block') {
	// 		$search.addClass('active-class'); // add active class
	// 		var firstClick = true;
	// 		$(document).bind('click.customEvent', (e) => {
	// 			if (!firstClick && $(e.target).closest('.selector').length == 0) { // selector block
	// 				$search.removeClass('selector'); // remove active class
	// 				$(document).unbind('click.customEvent');
	// 			}
	// 			firstClick = false;
	// 		});
	// 	}
	// 	e.preventDefault();
	// });

	// //init counter when block in viewport
	// function counterInViewPort() {
	// 	var win = $(window);
	// 	var counter = $('.selector'); // selector block
	// 	var id = 0;
	// 	win.scroll(() => {
	// 		if(id == 0 && win.scrollTop() + win.height() > counter.offset().top) {
	// 			var ccc = 0;
	// 			id = setInterval(() => {
	// 				ccc += 10000;
	// 				counter.html(ccc + ' руб.');
	// 				if (ccc == 280000) {
	// 					clearInterval(id);
	// 				}
	// 			}, 50);
	// 		}
	// 	});
	// }
	// counterInViewPort();

	// //init event when it in viewport
	// function viewportInit() {
	// 	var win = $(window);
	// 	var block = $('.selector'); // selector block
	// 	win.scroll(() => {
	// 		if(win.scrollTop() + win.height() > block.offset().top) {
	// 			block.addClass('selector'); // toggle active class or add some other logic here
	// 		}
	// 	});
	// }
	// viewportInit();

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

	// // init select2
	// function selectInput() {
	// 	$('.selector').select2(); // selector block
	// }
	// selectInput();

	// // slider with gallery
	// function sliderInGallery() {
	// 	$('.selector').lightSlider({ // selector gallery
	// 		gallery:false,
	// 		item:5,
	// 		loop: false,
	// 		pager: false,
	// 		slideMargin:0,
	// 		enableDrag: true,
	// 		currentPagerPosition:'left',
	// 		onSliderLoad: (el) => {
	// 			el.lightGallery({
	// 				selector: '.selector .lslide' // selector gallery slide
	// 			});
	// 		},
	// 		responsive : [
	// 			{
	// 				breakpoint:991,
	// 				settings: {
	// 					item:3,
	// 				}
	// 			},
	// 			{
	// 				breakpoint:600,
	// 				settings: {
	// 					item:2,
	// 				}
	// 			}
	// 		]
	// 	});
	// }
	// sliderInGallery();

	// // resize handler for some actions only on specific width
	// function resizeHandler() {
	// 	$('.selector').click(() => { // for example this click will work only if width < 991px
	// 		if($(window).width() < 991) {
	// 			// some logic
	// 		}
	// 	});
	// }
	// resizeHandler();
	// $(window).resize(resizeHandler);

	// //progress bar for article
	// $(() => {
	// 	$(window).on('scroll resize', () => {
	// 		var progress = $('progress')[0];  // progress block (you need to set bgc of your "progress::-moz-progress-bar" property in styles)
	// 		if (progress !== undefined) {
	// 			var width = $(window).scrollTop() / ($(document).height() - $(window).height());
	// 			progress.value = width;
	// 		}
	// 	});
	// });

	// // skewing some blocks with underscore lib functions
	// function skewBlocks() {
	// 	var MAX = 50;
	// 	var checkScrollSpeed = ((settings) => {
	// 		settings = settings || {};

	// 		var lastPos, newPos, timer, delta,
	// 			delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

	// 		function clear() {
	// 			lastPos = null;
	// 			delta = 0;
	// 		}
	// 		clear();

	// 		return () => {
	// 			newPos = window.scrollY;
	// 			if ( lastPos !== null ){ // && newPos < maxScroll
	// 				delta = newPos -  lastPos;
	// 			}
	// 			lastPos = newPos;
	// 			clearTimeout(timer);
	// 			timer = setTimeout(clear, delay);
	// 			return delta;
	// 		};
	// 	})();

	// 	// underscore method throttle
	// 	var setSkew = _.throttle( (skew) => {
	// 		$('selector').css('transform','skewY('+ skew +'deg)'); // select your block to skew
	// 	}, 16);

	// 	// underscore method debounce
	// 	var setBack = _.debounce(() => {
	// 		$('selector').css('transform','skewY(0deg)'); // select your block to skew
	// 	}, 140);

	// 	$(window).on('scroll', () => {
	// 		var speed = checkScrollSpeed();
	// 		if(speed > MAX) speed = MAX;
	// 		if(speed <- MAX) speed = -MAX;
	// 		setSkew(speed/10);
	// 		setBack();
	// 	});
	// }
	// skewBlocks();

	// // charming text
	// function charminText() {
	// 	const element = $('selector'); // selector for text
	// 	charming(element, {
	// 		classPrefix: false
	// 	});
	// }
	// charminText();

	// // toggle tweenmax animation fot many items with delay for each 0.05
	// function toggleTweenAnimation() {
	// 	const tl = new TimelineLite()
	// 		.staggerTo('.selector', 0.5, {opacity: 1}, 0.05) // selector block
	// 		.reverse();
	// 	$('.selector').click(() => { // selector button
	// 		tl.reversed(!tl.reversed());
	// 	});
	// }
	// toggleTweenAnimation();

	// // paralax effect for block with rellax lib
	// function rellax() {
	// 	new Rellax('.selector'); // selector block
	// }
	// rellax();

	// //init barba (ajax paging) with fade effect on jquery
	// Barba.Pjax.start();
	// Barba.Dispatcher.on('transitionCompleted', () => {

	// 	// or use newPageReady if you want to see animation before end on transitions

	// 	// place here functions that should be reinitialize
	// 	// and don't forget to init them in main script if needed

	// 	// !!! IMPORTANT !!!

	// 	// use transitionCompleted method for ajax forms and send methods
	// 	// for others use newPageReady

	// });
	// var FadeTransition = Barba.BaseTransition.extend({

	// 	start: function() {
	// 		Promise
	// 			.all([this.newContainerLoading, this.fadeOut()])
	// 			.then(this.fadeIn.bind(this));
	// 	},

	// 	fadeOut: function() {
	// 		return $(this.oldContainer).animate({ opacity: 0 }).promise();
	// 	},

	// 	fadeIn: function() {
	// 		var _this = this;
	// 		var $el = $(this.newContainer);
	// 		$(this.oldContainer).hide();
	// 		$el.css({
	// 			visibility : 'visible',
	// 			opacity : 0
	// 		});
	// 		$el.animate({ opacity: 1 }, 400, () => {
	// 			_this.done();
	// 		});
	// 	}
	// });

	// Barba.Pjax.getTransition = () => {
	// 	return FadeTransition;
	// };

	// // typed text
	// function typeText() {
	// 	new Typed('.selector', {  // selector block
	// 		strings: ['text1', 'text2'],
	// 		typeSpeed: 30
	// 	});
	// }
	// typeText();

	// // current time
	// function currentTime() {
	// 	const time = $('.selector'); // selector block
	// 	setInterval(() => {
	// 		time.innerHTML = moment().format('hh:mm:ss');
	// 	}, 1000);
	// }
	// currentTime();

	// //function to change favicons
	// function setFav() {
	// 	let page1 = $('.selector'); // button to event change
	// 	if (page1) {
	// 		page1.on('click', (e) => {
	// 			e.preventDefault();
	// 			var favicon=new Favico();
	// 			var image=document.getElementById('selector');  // selector for favicon
	// 			favicon.image(image);
	// 		});
	// 	}
	// 	let page2 = $('.selector'); // button to event change
	// 	if (page2) {
	// 		page2.on('click', (e) => {
	// 			e.preventDefault();
	// 			var favicon=new Favico();
	// 			var image=document.getElementById('selector');  // selector for favicon
	// 			favicon.image(image);
	// 		});
	// 	}
	// }
	// setFav();

	// // dynamic bg that reaction on mousemove
	// function dynamicBg() {
	// 	const el = $('.selector'); // selector block with image
	// 	el.addEventListener('mousemove', (e) => {
	// 		el.style.backgroundPositionX = -e.offsetX + 'px';
	// 		el.style.backgroundPositionY = -e.offsetY + 'px';
	// 	});
	// }
	// dynamicBg();

	// // custom cursor
	// function mouse() {
	// 	$(window).mousemove((e) => {
	// 		$('.selector, .selector').css({'transform': 'translate(' + (e.pageX-12) + 'px, ' + (e.pageY-12-$(window).scrollTop()) + 'px)'}); // selector cursor and pulse block
	// 	});
	// }
	// mouse();

	// // load highlight.js script
	// function loadCode(){
	// 	$('pre code').forEach((block) => {
	// 		hljs.highlightBlock(block);
	// 	});
	// }
	// loadCode();

	// // load chart.js script
	// function drowChart() {
	// 	var ctx = document.getElementById('myChart');
	// 	new Chart(ctx, {
	// 		type: 'bar',
	// 		data: {
	// 			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	// 			datasets: [{
	// 				label: '# of Votes',
	// 				data: [12, 19, 3, 5, 2, 3],
	// 				backgroundColor: [
	// 					'rgba(255, 99, 132, 0.2)',
	// 					'rgba(54, 162, 235, 0.2)',
	// 					'rgba(255, 206, 86, 0.2)',
	// 					'rgba(75, 192, 192, 0.2)',
	// 					'rgba(153, 102, 255, 0.2)',
	// 					'rgba(255, 159, 64, 0.2)'
	// 				],
	// 				borderColor: [
	// 					'rgba(255,99,132,1)',
	// 					'rgba(54, 162, 235, 1)',
	// 					'rgba(255, 206, 86, 1)',
	// 					'rgba(75, 192, 192, 1)',
	// 					'rgba(153, 102, 255, 1)',
	// 					'rgba(255, 159, 64, 1)'
	// 				],
	// 				borderWidth: 1
	// 			}]
	// 		},
	// 		options: {
	// 			scales: {
	// 				yAxes: [{
	// 					ticks: {
	// 						beginAtZero:true
	// 					}
	// 				}]
	// 			}
	// 		}
	// 	});
	// }
	// drowChart();

	// // callback function when highPriorityFunction() must be executed before lowPriorityFunction()
	// function lowPriorityFunction(){
	// 	console.log('lowPriorityFunction');
	// }
	// function highPriorityFunction(callback) {
	// 	console.log('highPriorityFunction');
	// 	callback();
	// }
	// highPriorityFunction(lowPriorityFunction);

	// function moveBlockByMouse() {
	// 	var $layer_2 = $('selector'), // selector block

	// 		$container = $('selector'), // container block
	// 		container_w = $container.width(),
	// 		container_h = $container.height();

	// 	$(window).on('mousemove.parallax', (event) => {
	// 		var pos_x = event.pageX,
	// 			pos_y = event.pageY,
	// 			left  = 0,
	// 			top   = 0;

	// 		left = container_w / 2 - pos_x;
	// 		top  = container_h / 2 - pos_y;

	// 		TweenMax.to($layer_2, 1, {
	// 			css: {
	// 				transform: 'translateX(' + left / 32 + 'px) translateY(' + top / 32 + 'px)'
	// 			},
	// 			ease:Expo.easeOut,
	// 			overwrite: 'all'
	// 		});
	// 	});
	// }
	// moveBlockByMouse();

});
