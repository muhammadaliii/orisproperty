(function($){

	$('[data-vbg]').youtube_background();

	$(".vid-thumb").each(function () {
		$(this).find(".video-background-controls .play-toggle").click()
	});

	// $(".vid-thumb").find(".video-background-controls .play-toggle").click();

	$(".vid-thumb").hover(function(){
		$(this).find(".video-background-controls .play-toggle").click();
	},function(){
		$(this).find(".video-background-controls .play-toggle").click();
	});

	var media = $('.thumb');
	var tolerancePixel = 40;
	function checkMedia(){
		var scrollTop = $(window).scrollTop() + tolerancePixel;
		var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
		media.each(function(index, el) {
			var yTopMedia = $(this).offset().top;
			var yBottomMedia = $(this).height() + yTopMedia;
			if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
				$(this).addClass('tes');
				// console.log('play');
				$(this).find(".video-background-controls .play-toggle").click();
			} else {
				$(this).removeClass('tes');
				// console.log('stop');
				$(this).find(".video-background-controls .play-toggle").click();
			}
		});
	}
	$(window).on('scroll', checkMedia);


	// $(window).scroll(function() {
 //        $("iframe").each( function() {
 //            if( $(window).scrollTop() > $(this).offset().top - 200 ) {
 //                $(this).css('opacity',1);
 //                player.playVideo();
 //            } else {
 //                $(this).css('opacity',0);
 //                player.stopVideo();
 //            }
 //        }); 
 //    });

})(jQuery);