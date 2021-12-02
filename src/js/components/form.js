(function($){

	$('#modal-filter').on('hidden.bs.modal', function () {
		$(this).find('#form-filter')[0].reset();
	});

	$('#modal-search').on('hidden.bs.modal', function () {
		$(this).find('#form-search-property')[0].reset();
	});

	var formProject = $( "#form-project" ).validate({
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

	var formTeam = $( "#form-team" ).validate({
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
			cv_upload: {
				required: true,
				extension: "doc|docx|pdf"
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

	$('#join-tab a[data-toggle="tab"]').on('hidden.bs.tab', function () {
		formProject.resetForm();
		formFranchise.resetForm();
		formTeam.resetForm();
		$('#join-tabContent input, #join-tabContent input[type="file"]').val('');
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
		localStorage.setItem('lastTab', $(this).attr('href'));
	});

	var lastTab = localStorage.getItem('lastTab');
	if (lastTab) {
		$('[href="' + lastTab + '"]').tab('show');
	}

})(jQuery);