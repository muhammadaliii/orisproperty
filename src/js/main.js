/**
 * Main
 * Custom Scripts
 */


// function animateValue(id, start, end, duration) {
// 	var elem = document.getElementById("progress-bar");
// 	var range = end - start,
// 		current = start,
// 		increment = end > start ? 1 : -1,
// 		stepTime = Math.abs(Math.floor(duration / range)),
// 		obj = $(id);

// 	var timer = setInterval(function() {
// 		current += increment;
// 		$(obj).text(current + "%");
// 		// obj.innerHTML = current;

// 		if (current == end) {
// 			clearInterval(timer);
// 		}
// 	}, stepTime);
// }


// var progress = 0,
// 	perfData = window.performance.timing,
// 	EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
// 	time = parseInt((EstimatedTime / 1000) % 60) * 100;

// function moveBar() {
// 	if (progress == 0) {
// 		progress = 1;
// 		var elem = document.getElementById("progress-bar");
// 		var width = 10;
// 		var id = setInterval(frame, 10);
// 		function frame() {
// 			if (width >= 100) {
// 				clearInterval(id);
// 				progress = 0;
// 			} else {
// 				width++;
// 				elem.animate({
// 					width: width + "%"
// 				}, time);
// 				// elem.style.width = width + "%";
// 				elem.innerHTML = width + "%";
// 				console.log('time :', time);
// 			}
// 		}
// 	}
// }




$(function() {
	// Document Ready

	jcf.setOptions('Select', {
		wrapNative: true
	});

	jcf.replaceAll();

	$('[data-toggle="tooltip"]').tooltip(); 

	$(document).ready(function(){
		$(this).scrollTop(0);
		
		if ($('.price-currency').length > 0) {
			$('.price-currency').inputmask({
				prefix: "Rp",
				groupSeparator: ".",
				alias: "numeric",
				digits: 0,
				removeMaskOnSubmit: true,
			});
		}
	});

	if ($('.show-number').length > 0) {
		$(".show-number h6").click(function(){
			$(this).siblings(".number").toggleClass("showing-number").slideToggle("slow");
		});
	}

	setTimeout(function(){
		progressively.init({
			delay: 50,
			throttle: 300,
			smBreakpoint: 600,
			onLoad: function(elem) {
				// console.log(elem);
			},
			onLoadComplete: function() {
				// console.log('All images have finished loading!');
			}
		});
	}, 400);

	setTimeout(function(){
		AOS.init({
			offset: 60,
			duration: 600,
			easing: 'linear',
		});
	}, 800);

	var width = 100,
		perfData = window.performance.timing,
		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
		time = parseInt((EstimatedTime / 1000) % 60) * 100;

	$("#progress-bar").animate({
		width: width + "%"
	}, time);

	window.onload = function(){
		var targetLoader = $("#loader-wrapper");
			targetLoader.fadeOut("slow", function(){
				targetLoader.remove();
			});
	}

	// moveBar();
	// animateValue();

	// timeout_trigger();

	// console.log('moveBar', moveBar());

	$(window).on('resize', function(){
		AOS.refresh();
	});
});

$(window).smartresize(function() {
	// Debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
});