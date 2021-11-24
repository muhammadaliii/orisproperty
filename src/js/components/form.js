(function($){

	$('#modal-filter').on('hidden.bs.modal', function () {
		$(this).find('#form-filter')[0].reset();
	});

	$('#modal-search').on('hidden.bs.modal', function () {
		$(this).find('#form-search-property')[0].reset();
	});

})(jQuery);