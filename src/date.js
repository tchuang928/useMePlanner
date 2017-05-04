var date = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// month, year, week#
var thisMonth = months[date.getMonth()];
var thisYear = date.getFullYear();

// checking for leap year
function isLeapYear(year) {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
console.log(isLeapYear(thisYear + 3));
document.getElementById("yearmonth").innerHTML = thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br>isdlkfj'; 
document.getElementById("monthNum").innerHTML = date.getMonth() + 1;
