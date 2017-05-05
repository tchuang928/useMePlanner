var date = new Date();
var dateHelper = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// month(from array months), year(YYYY), day(0-6), day of week(from array days), date(1-31), milliseconds since 1/1/1970 
var thisMonth = months[date.getMonth()];
var thisYear = date.getFullYear();
var thisDay = date.getDay();
var thisDayOfWeek = days[thisDay];
var thisDate = date.getDate();
var thisTime = date.getTime();

// checking for leap year
function isLeapYear(year) {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
// console.log(isLeapYear(thisYear + 3));

document.getElementById('yearmonth').innerHTML = thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br>isdlkfj'; 
document.getElementById('monthNum').innerHTML = date.getMonth() + 1;

// set date for 7 days of the week in weekly view
for (let i = 0; i < days.length; i++) {
	// set new date object starting Sunday and loop through the week
	dateHelper.setDate(thisDate - thisDay + i);	
	// set date to string		
	var thatDateStr = '' + dateHelper.getDate();
	// test if date string is single or double digit. If single digit, add 0 in front 
	if (/^\d$/.test(thatDateStr)) {
		// write in html the date corresponding with day of week
		document.getElementById(days[dateHelper.getDay()]).innerHTML = '0' + dateHelper.getDate();
	} else document.getElementById(days[dateHelper.getDay()]).innerHTML = dateHelper.getDate();
	// reset dateHelper object for the next iteration
	dateHelper.setTime(thisTime);
}
