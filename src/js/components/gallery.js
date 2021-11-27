(function($){

	$('.gallery-image').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.detail-avatar .video-area').lightGallery({
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
		download: false,
	});

	$('.video-listing').lightGallery({
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
		download: false,
	});

	// $('main').lightGallery({
	// 	thumbnail: true,
	// 	animateThumb: false,
	// 	showThumbByDefault: false,
	// 	exThumbImage: 'data-exthumbimage',
	// 	selector: '.selector',
	// 	loadYoutubeThumbnail: true,
	// 	youtubeThumbSize: 'default',
	// 	loadVimeoThumbnail: true,
	// 	vimeoThumbSize: 'thumbnail_medium',
	// 	download: false,
	// 	autoplayVideoOnSlide: true,
	// });


	var swiper = new Swiper('.cover .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
	});

	var swiper = new Swiper('.thumbnails.slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1000: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	var swiper = new Swiper('.projects .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	var swiper = new Swiper('.gallery-image .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		// slidesPerView: 2,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoHeight: false,
		effect: 'coverflow',
		// loop: true,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 2,
			},
		},
	});



	function nFormatter(num, digits) {
		var si = [
			{ value: 1, symbol: "" },
			{ value: 1E3, symbol: "K" },
			{ value: 1E6, symbol: "Juta" },
			{ value: 1E9, symbol: "Milyar" },
			{ value: 1E12, symbol: "Triliyun" },
			{ value: 1E15, symbol: "P" },
			{ value: 1E18, symbol: "E" }
		];
		var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
		var i;
		for (i = si.length - 1; i > 0; i--) {
			if (num >= si[i].value) {
				break;
			}
		}
		return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
	}

	/*
	 * Tests
	 */
	var tests = [
		{ num: 3450000000, digits: 3 },
		// { num: 1234, digits: 1 },
		// { num: 100000000, digits: 1 },
		// { num: 3450000000, digits: 3 },
		// { num: 3612000000, digits: 4 },
		// { num: 75987800000000, digits: 2 },
		// { num: 123, digits: 1 },
		// { num: 123.456, digits: 1 },
		// { num: 123.456, digits: 2 },
		// { num: 123.456, digits: 4 }
	];
	var i;
	if ($('.test').length > 0) {
		
		for (i = 0; i < tests.length; i++) {
			$('.test').find(".digit").text(nFormatter(tests[i].num)).addClass("masuk");
			// console.log('this: ', $(this));
			console.log("nFormatter(" + tests[i].num + ", " + tests[i].digits + ") = " + nFormatter(tests[i].num, tests[i].digits));
		}

	}




})(jQuery);