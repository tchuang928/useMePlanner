var date = new Date();
var dateHelper = new Date();
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
$(document).on('click', '.alignText', function(section){
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
	let checkboxDiv = $(this).parent().closest('div').parent().closest('div');
	// confirm dialog before deleting task
	// sweetalert
	swal({
		title: 'Are you sure?',
		text: 'This action cannot be undone!',
		type: 'warning',
		confirmButtonColor: '#DD6B55',
		showCancelButton: true,
		allowOutsideClick: true
	}, () => $(checkboxDiv).remove());
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








