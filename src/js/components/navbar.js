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
		
		$('.share-contact').toggleClass('hiding',
			scroll >= $('.join-team').offset().top - 54
		);
		// $(this).siblings(".number").toggleClass("showing-number").slideToggle("slow");
	});
}

$(function() {
	$(document).ready(function () {
		stickyHeader();

		if ($('.share-contact').length > 0) {
			stickyClass();
		}
	});

	$(".toggle-down").click(function(){
		$(this).toggleClass("toggleDrawer").siblings(".menu").toggleClass("show").parents(".header-fix").toggleClass("show-menu");
	});
})
