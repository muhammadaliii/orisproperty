/**
 * Main
 * Custom Scripts
 */

$(function() {
	// Document Ready

	jcf.setOptions('Select', {
		wrapNative: true
	});

	jcf.replaceAll();

	$('[data-toggle="tooltip"]').tooltip(); 

	$(document).ready(function(){
		$(this).scrollTop(0);
		
		$('.price-currency').inputmask({
			prefix: "Rp",
			groupSeparator: ".",
			alias: "numeric",
			digits: 0,
			removeMaskOnSubmit: true,
		});
	});

	// $("#darkmode").change(function() {
	// 	$("body").toggleClass("theme-dark", this.checked)
	// }).change();

	// <div id="loader-wrapper">
	// 	<div id="loader"></div>
	// 	<span class="logo-loader"></span>
	// </div>

	// $("body").prepend(
	// 	'<div id="loader-wrapper">'+
	// 		'<div id="loader"></div>'+
	// 		'<span class="logo-loader"></span>'+
	// 	'</div>'
	// );

	// $(document).ready(function() {
	// 	setTimeout(function(){
	// 		$("#loader-wrapper").remove();
	// 	}, 4000);
	// });


	var targetLoader = $("#loader-wrapper");

	$(window).on("load", function() {
		setTimeout( function(){
			targetLoader.fadeOut("slow", function(){
				targetLoader.remove();
			});
		},200);
	});

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

	$(window).on('resize', function(){
		AOS.refresh();
	});
});

// $(function() {
// 	$("#loader-wrapper").fadeOut("slow");;
// });

$(window).smartresize(function() {
	// Debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
});