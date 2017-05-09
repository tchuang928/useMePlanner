var date = new Date();
var dateHelper = date; 
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// determine days in month. month is 1 based, NOT 0
function daysInMonth(year, month) {
	let test = new Date(year, month, 0).getDate();
	return test; 
}

// checking for leap year
function isLeapYear(year) {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
// console.log(isLeapYear(thisYear + 3));

// month(from array months), year(YYYY), day(0-6), day of week(from array days), date(1-31), milliseconds since 1/1/1970 
var thisMonthInt = date.getMonth();
var thisMonth = months[thisMonthInt];
var thisYear = date.getFullYear();
var thisDayInt = date.getDay();
var thisDay = days[thisDayInt];
var thisDate = date.getDate();
var thisTime = date.getTime();

// vanilla javascript
//document.getElementById('yearMonth').innerHTML = thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br>isdlkfj'; 
//document.getElementById('monthNum').innerHTML = date.getMonth() + 1;

// jQuery and template string literals
$('#yearMonth').html(
	`${thisYear}  &#9830  ${thisMonth}<br>--------------------------------------------<br><i>"Random Quote of the Day"</i>`
);
$('#monthNum').html(date.getMonth() + 1);

// set date for 7 days of the week in weekly view
for (let i = 0; i < days.length; i++) {
	// set new date object starting Sunday and loop through the week
	let loopDate = thisDate - thisDayInt + i;
	dateHelper.setDate(loopDate);	
	// set date to string		
	var thatDateStr = '' + dateHelper.getDate();
	// test if date string is single or double digit. If single digit, add 0 in front 
	if (/^\d$/.test(thatDateStr)) {
		// write in html the date corresponding with day of week
		$(`#${days[dateHelper.getDay()]}`).html(`0${dateHelper.getDate()}`);
	} else $(`#${days[dateHelper.getDay()]}`).html(dateHelper.getDate());

	// if date goes beyond the current month, delete entire row element
	var daysInThisMonth = daysInMonth(thisYear, thisMonthInt+1);
	if (loopDate <= 0 || loopDate > daysInThisMonth) {
		$(`#${days[dateHelper.getDay()]}.monthDay`).remove();
		$(`#${days[dateHelper.getDay()]}.day`).remove();
		$(`#day${i}`).removeClass('borderDay');
		$(`#day0${i}`).removeClass('borderText');
		$(`#checkbox${i}`).remove();
	}
	
	// reset dateHelper object for the next iteration
	dateHelper.setTime(thisTime);
}




// add checklist task when clicking empty area of weekly to-do section 
$('.borderText').on('click', function(section) {
	let checkboxID = $(this).children().closest('div');
	// only add checklist task when clicking on the same section
	if (section.target === this) {
		let checkboxHtml = 
			"<div class='checkbox'>" +
				"<label>" +
					"<div class='input-group'>" +
						"<input type='checkbox' value=''>" +
						`<textarea class='checkboxText' placeholder='New Task' ></textarea>` +
							"<button class='btn checkboxBtn' type='button'>" +
								"<i class='fa fa-times'></i>" +
							"</button>" +
					"</div>" +
				"</label>" +
			"</div>";
		// add the html 
		$(checkboxID).append(checkboxHtml);	
		// focus on task item when generated

	}
});

// delete task when clicking button
// in the entire document, when a checkboxBtn is clicked, run function on the corresponding text box
$(document).on('click', '.checkboxBtn', function(section) {
	let checkboxDiv = $(this).closest('div').parent().closest('div');
	let textAreaCheckbox = $(this).parent().children().closest('textarea');
	let localStorageCheckbox = $(textAreaCheckbox).attr('id');
	// confirm dialog before deleting task
	// sweetalert
	swal({
		title: 'Are you sure?',
		text: 'This action cannot be undone!',
		type: 'warning',
		confirmButtonColor: '#DD6B55',
		showCancelButton: true,
		allowOutsideClick: true
	}, () => {
		$(checkboxDiv).remove();
		localStorage.removeItem(localStorageCheckbox);
	});
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




// autosave and load journal text
var journalText = document.querySelector('.journalText');

try {
	// save journal entry
	setInterval(function() {
		localStorage.setItem('journal', journalText.value);
	}, 1000);
	// alert if no more memory available
} catch (e) {
	if (e == QUOTA_EXCEEDED_ERR) {
		swal({
			title: 'WARNING',
			text: 'Memory exceeded. Autosave feature is disabled until local storage is cleared.',
			type: 'warning',
			allowOutsideClick: true
		});
	}
}

// load if there is data available
if (localStorage.getItem('journal')) {
	journalText.value = localStorage.getItem('journal');
}

// autosave and load checkbox items
for (let i = 0; i < 7; i++) {
	try {
		// every 1 second
		setInterval(function() {
			var checkboxes = $(`#checkbox${i}`).html();

			// add entire checkbox div html into localstorage
			localStorage.setItem(`checkboxItem${i}`, checkboxes);

			var id = 0;
			$('.checkboxText').each(function() {
				// add ids to each textarea of checkbox
				$(this).attr('id', `checkboxText${id}`);
				var checkboxTexts = document.querySelector(`#checkboxText${id}`);
				// add user input into DOM using .html
				$(`#checkboxText${id}`).html(checkboxTexts.value);

				// if checkboxes are checked, then save it to DOM. 
				if ($(this).parent().children().closest('input').prop('checked')) {
					$(this).parent().children().closest('input').attr('checked', true);
				} else $(this).parent().children().closest('input').attr('checked', false);

				id++;
			})
		}, 1000);
		// alert if no more memory available
	} catch (e) {
		if (e == QUOTA_EXCEEDED_ERR) {
			swal({
				title: 'WARNING',
				text: 'Memory exceeded. Autosave feature is disabled until local storage is cleared.',
				type: 'warning',
				allowOutsideClick: true
			});
		}
	}

	// load if there is data available
	if (localStorage.getItem(`checkboxItem${i}`)) {
		$(`#checkbox${i}`).html(localStorage.getItem(`checkboxItem${i}`));
	}
}


