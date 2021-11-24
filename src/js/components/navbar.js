/**
 * Navbar
 */

function stickyHeader() {
	var lastScroll = 300;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		
		if(st < 32) {
			$('body').removeClass('on-scroll');
		} else {
			$('body').addClass('on-scroll');
		}

		lastScroll = st;
	});
}

function stickyClass() {
	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		
		$('.sort-filter').toggleClass('fixed',
			scroll >= $('.sort-filter').offset().top - 54
		);
	});
}

$(function() {
	$(document).ready(function () {
		stickyHeader();

		if ($('.sort-filter').length > 0) {
			// stickyClass();
		}
	});

	$(".toggle-down").click(function(){
		$(this).toggleClass("toggleDrawer").siblings(".menu").toggleClass("show").parents(".header-fix").toggleClass("show-menu");
	});
})
