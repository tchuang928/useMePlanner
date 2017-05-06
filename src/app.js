// add checklist task when clicking empty area of weekly to-do section 
$(document).on('click', '.borderText', function(section){
	let checkboxID = $(this).children().closest('div');
	// only add checklist task when clicking on the same section
	if (section.target === this) {
	$(checkboxID).append(
			"<div class='checkbox'>" +
				"<label>" +
					"<div class='input-group'>" +
						"<input type='checkbox' value=''>" +
						"<textarea class='checkboxText' ></textarea>" +
							"<button class='btn checkboxBtn' type='button'>" +
								"<i class='fa fa-times'></i>" +
							"</button>" +
					"</div>" +
				"</label>" +
			"</div>"
		);	
	}
});

// delete task when clicking button
// in the entire document, when a checkboxBtn is clicked, run function on the corresponding text box
$(document).on('click', '.checkboxBtn', function(section) {
/*	let checkboxDiv = $(this).parent().closest('div').parent().closest('div');
	// confirm dialog before deleting task
	// sweetalert
	var result = confirm('Are you sure? This action cannot be undone.');
	if (result) {
		$(checkboxDiv).remove();
	}*/
	sweetalert('hello world');
});

// when hovering over button, hightlight the delete icon
$(document).on({
	mouseenter: function() {
		let faIcon = $(this).children().closest('i');
		$(faIcon).css('color', '#F53240');
	},
	mouseleave: function() {
		let faIcon = $(this).children().closest('i');
		$(faIcon).css('color', '#EEE');
	}
}, '.checkboxBtn');
