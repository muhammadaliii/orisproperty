(function($){
	if ($('#modal-filter').length > 0) {
		$('#modal-filter').on('hidden.bs.modal', function () {
			$(this).find('#form-filter')[0].reset();
		});
	}

	if ($('#modal-search').length > 0) {
		$('#modal-search').on('hidden.bs.modal', function () {
			$(this).find('#form-search-property')[0].reset();
		});
	}

	var formFranchise = $( "#form-franchise" ).validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			phone: {
				required: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'div',
		errorClass: 'invalid-feedback',
		errorPlacement: function(error, element) {
			if(element.parent('.form-group').length) {
				error.insertAfter(element);
			}
			else {
				error.insertAfter(element);
			}
		},
	});

})(jQuery);