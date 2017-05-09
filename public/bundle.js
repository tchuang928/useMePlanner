/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar date = new Date();\nvar dateHelper = new Date();\nvar months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nvar days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];\n\n// determine days in month. month is 1 based, NOT 0\nfunction daysInMonth(year, month) {\n\tvar test = new Date(year, month, 0).getDate();\n\treturn test;\n}\n\n// checking for leap year\nfunction isLeapYear(year) {\n\treturn year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n}\n// console.log(isLeapYear(thisYear + 3));\n\n// month(from array months), year(YYYY), day(0-6), day of week(from array days), date(1-31), milliseconds since 1/1/1970 \nvar thisMonthInt = date.getMonth();\nvar thisMonth = months[thisMonthInt];\nvar thisYear = date.getFullYear();\nvar thisDayInt = date.getDay();\nvar thisDay = days[thisDayInt];\nvar thisDate = date.getDate();\nvar thisTime = date.getTime();\n\n// vanilla javascript\n//document.getElementById('yearMonth').innerHTML = thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br>isdlkfj'; \n//document.getElementById('monthNum').innerHTML = date.getMonth() + 1;\n\n// jQuery and template string literals\n$('#yearMonth').html(thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br><i>\"Random Quote of the Day\"</i>');\n$('#monthNum').html(date.getMonth() + 1);\n\n// set date for 7 days of the week in weekly view\nfor (var i = 0; i < days.length; i++) {\n\t// set new date object starting Sunday and loop through the week\n\tvar loopDate = thisDate - thisDayInt + i;\n\tdateHelper.setDate(loopDate);\n\t// set date to string\t\t\n\tvar thatDateStr = '' + dateHelper.getDate();\n\t// test if date string is single or double digit. If single digit, add 0 in front \n\tif (/^\\d$/.test(thatDateStr)) {\n\t\t// write in html the date corresponding with day of week\n\t\t$('#' + days[dateHelper.getDay()]).html('0' + dateHelper.getDate());\n\t} else $('#' + days[dateHelper.getDay()]).html(dateHelper.getDate());\n\n\t// if date goes beyond the current month, delete entire row element\n\tvar daysInThisMonth = daysInMonth(thisYear, thisMonthInt + 1);\n\tif (loopDate <= 0 || loopDate > daysInThisMonth) {\n\t\t$('#' + days[dateHelper.getDay()] + '.monthDay').remove();\n\t\t$('#' + days[dateHelper.getDay()] + '.day').remove();\n\t\t$('#day' + i).removeClass('borderDay');\n\t\t$('#day0' + i).removeClass('borderText');\n\t\t$('#checkbox' + i).remove();\n\t}\n\n\t// reset dateHelper object for the next iteration\n\tdateHelper.setTime(thisTime);\n}\n\n// add checklist task when clicking empty area of weekly to-do section \n$(document).on('click', '.alignText', function (section) {\n\tvar checkboxID = $(this).children().closest('div');\n\t// only add checklist task when clicking on the same section\n\tif (section.target === this) {\n\t\t$(checkboxID).append(\"<div class='checkbox'>\" + \"<label>\" + \"<div class='input-group'>\" + \"<input type='checkbox' value=''>\" + \"<textarea class='checkboxText' ></textarea>\" + \"<button class='btn checkboxBtn' type='button'>\" + \"<i class='fa fa-times'></i>\" + \"</button>\" + \"</div>\" + \"</label>\" + \"</div>\");\n\t}\n});\n\n// delete task when clicking button\n// in the entire document, when a checkboxBtn is clicked, run function on the corresponding text box\n$(document).on('click', '.checkboxBtn', function (section) {\n\tvar checkboxDiv = $(this).parent().closest('div').parent().closest('div');\n\t// confirm dialog before deleting task\n\t// sweetalert\n\tswal({\n\t\ttitle: 'Are you sure?',\n\t\ttext: 'This action cannot be undone!',\n\t\ttype: 'warning',\n\t\tconfirmButtonColor: '#DD6B55',\n\t\tshowCancelButton: true,\n\t\tallowOutsideClick: true\n\t}, function () {\n\t\treturn $(checkboxDiv).remove();\n\t});\n});\n\n// when hovering over button, hightlight the delete icon\n$(document).on({\n\tmouseenter: function mouseenter() {\n\t\tvar faIcon = $(this).children().closest('i');\n\t\t$(faIcon).css('color', '#F53240');\n\t},\n\tmouseleave: function mouseleave() {\n\t\tvar faIcon = $(this).children().closest('i');\n\t\t$(faIcon).css('color', '#EEE');\n\t}\n}, '.checkboxBtn');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG52YXIgZGF0ZUhlbHBlciA9IG5ldyBEYXRlKCk7XHJcbnZhciBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxudmFyIGRheXMgPSBbJ3N1bicsICdtb24nLCAndHVlJywgJ3dlZCcsICd0aHUnLCAnZnJpJywgJ3NhdCddO1xyXG5cclxuLy8gZGV0ZXJtaW5lIGRheXMgaW4gbW9udGguIG1vbnRoIGlzIDEgYmFzZWQsIE5PVCAwXHJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XHJcblx0bGV0IHRlc3QgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xyXG5cdHJldHVybiB0ZXN0OyBcclxufVxyXG5cclxuLy8gY2hlY2tpbmcgZm9yIGxlYXAgeWVhclxyXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcclxuXHRyZXR1cm4gKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XHJcbn1cclxuLy8gY29uc29sZS5sb2coaXNMZWFwWWVhcih0aGlzWWVhciArIDMpKTtcclxuXHJcbi8vIG1vbnRoKGZyb20gYXJyYXkgbW9udGhzKSwgeWVhcihZWVlZKSwgZGF5KDAtNiksIGRheSBvZiB3ZWVrKGZyb20gYXJyYXkgZGF5cyksIGRhdGUoMS0zMSksIG1pbGxpc2Vjb25kcyBzaW5jZSAxLzEvMTk3MCBcclxudmFyIHRoaXNNb250aEludCA9IGRhdGUuZ2V0TW9udGgoKTtcclxudmFyIHRoaXNNb250aCA9IG1vbnRoc1t0aGlzTW9udGhJbnRdO1xyXG52YXIgdGhpc1llYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbnZhciB0aGlzRGF5SW50ID0gZGF0ZS5nZXREYXkoKTtcclxudmFyIHRoaXNEYXkgPSBkYXlzW3RoaXNEYXlJbnRdO1xyXG52YXIgdGhpc0RhdGUgPSBkYXRlLmdldERhdGUoKTtcclxudmFyIHRoaXNUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XHJcblxyXG4vLyB2YW5pbGxhIGphdmFzY3JpcHRcclxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhck1vbnRoJykuaW5uZXJIVE1MID0gdGhpc1llYXIgKyAnICAmIzk4MzAgICcgKyB0aGlzTW9udGggKyAnPGJyPi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPGJyPmlzZGxrZmonOyBcclxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGhOdW0nKS5pbm5lckhUTUwgPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuLy8galF1ZXJ5IGFuZCB0ZW1wbGF0ZSBzdHJpbmcgbGl0ZXJhbHNcclxuJCgnI3llYXJNb250aCcpLmh0bWwoXHJcblx0YCR7dGhpc1llYXJ9ICAmIzk4MzAgICR7dGhpc01vbnRofTxicj4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTxicj48aT5cIlJhbmRvbSBRdW90ZSBvZiB0aGUgRGF5XCI8L2k+YFxyXG4pO1xyXG4kKCcjbW9udGhOdW0nKS5odG1sKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuLy8gc2V0IGRhdGUgZm9yIDcgZGF5cyBvZiB0aGUgd2VlayBpbiB3ZWVrbHkgdmlld1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcclxuXHQvLyBzZXQgbmV3IGRhdGUgb2JqZWN0IHN0YXJ0aW5nIFN1bmRheSBhbmQgbG9vcCB0aHJvdWdoIHRoZSB3ZWVrXHJcblx0bGV0IGxvb3BEYXRlID0gdGhpc0RhdGUgLSB0aGlzRGF5SW50ICsgaTtcclxuXHRkYXRlSGVscGVyLnNldERhdGUobG9vcERhdGUpO1x0XHJcblx0Ly8gc2V0IGRhdGUgdG8gc3RyaW5nXHRcdFxyXG5cdHZhciB0aGF0RGF0ZVN0ciA9ICcnICsgZGF0ZUhlbHBlci5nZXREYXRlKCk7XHJcblx0Ly8gdGVzdCBpZiBkYXRlIHN0cmluZyBpcyBzaW5nbGUgb3IgZG91YmxlIGRpZ2l0LiBJZiBzaW5nbGUgZGlnaXQsIGFkZCAwIGluIGZyb250IFxyXG5cdGlmICgvXlxcZCQvLnRlc3QodGhhdERhdGVTdHIpKSB7XHJcblx0XHQvLyB3cml0ZSBpbiBodG1sIHRoZSBkYXRlIGNvcnJlc3BvbmRpbmcgd2l0aCBkYXkgb2Ygd2Vla1xyXG5cdFx0JChgIyR7ZGF5c1tkYXRlSGVscGVyLmdldERheSgpXX1gKS5odG1sKGAwJHtkYXRlSGVscGVyLmdldERhdGUoKX1gKTtcclxuXHR9IGVsc2UgJChgIyR7ZGF5c1tkYXRlSGVscGVyLmdldERheSgpXX1gKS5odG1sKGRhdGVIZWxwZXIuZ2V0RGF0ZSgpKTtcclxuXHJcblx0Ly8gaWYgZGF0ZSBnb2VzIGJleW9uZCB0aGUgY3VycmVudCBtb250aCwgZGVsZXRlIGVudGlyZSByb3cgZWxlbWVudFxyXG5cdHZhciBkYXlzSW5UaGlzTW9udGggPSBkYXlzSW5Nb250aCh0aGlzWWVhciwgdGhpc01vbnRoSW50KzEpO1xyXG5cdGlmIChsb29wRGF0ZSA8PSAwIHx8IGxvb3BEYXRlID4gZGF5c0luVGhpc01vbnRoKSB7XHJcblx0XHQkKGAjJHtkYXlzW2RhdGVIZWxwZXIuZ2V0RGF5KCldfS5tb250aERheWApLnJlbW92ZSgpO1xyXG5cdFx0JChgIyR7ZGF5c1tkYXRlSGVscGVyLmdldERheSgpXX0uZGF5YCkucmVtb3ZlKCk7XHJcblx0XHQkKGAjZGF5JHtpfWApLnJlbW92ZUNsYXNzKCdib3JkZXJEYXknKTtcclxuXHRcdCQoYCNkYXkwJHtpfWApLnJlbW92ZUNsYXNzKCdib3JkZXJUZXh0Jyk7XHJcblx0XHQkKGAjY2hlY2tib3gke2l9YCkucmVtb3ZlKCk7XHJcblx0fVxyXG5cdFxyXG5cdC8vIHJlc2V0IGRhdGVIZWxwZXIgb2JqZWN0IGZvciB0aGUgbmV4dCBpdGVyYXRpb25cclxuXHRkYXRlSGVscGVyLnNldFRpbWUodGhpc1RpbWUpO1xyXG59XHJcblxyXG4vLyBhZGQgY2hlY2tsaXN0IHRhc2sgd2hlbiBjbGlja2luZyBlbXB0eSBhcmVhIG9mIHdlZWtseSB0by1kbyBzZWN0aW9uIFxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFsaWduVGV4dCcsIGZ1bmN0aW9uKHNlY3Rpb24pe1xyXG5cdGxldCBjaGVja2JveElEID0gJCh0aGlzKS5jaGlsZHJlbigpLmNsb3Nlc3QoJ2RpdicpO1xyXG5cdC8vIG9ubHkgYWRkIGNoZWNrbGlzdCB0YXNrIHdoZW4gY2xpY2tpbmcgb24gdGhlIHNhbWUgc2VjdGlvblxyXG5cdGlmIChzZWN0aW9uLnRhcmdldCA9PT0gdGhpcykge1xyXG5cdCQoY2hlY2tib3hJRCkuYXBwZW5kKFxyXG5cdFx0XHRcIjxkaXYgY2xhc3M9J2NoZWNrYm94Jz5cIiArXHJcblx0XHRcdFx0XCI8bGFiZWw+XCIgK1xyXG5cdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdpbnB1dC1ncm91cCc+XCIgK1xyXG5cdFx0XHRcdFx0XHRcIjxpbnB1dCB0eXBlPSdjaGVja2JveCcgdmFsdWU9Jyc+XCIgK1xyXG5cdFx0XHRcdFx0XHRcIjx0ZXh0YXJlYSBjbGFzcz0nY2hlY2tib3hUZXh0JyA+PC90ZXh0YXJlYT5cIiArXHJcblx0XHRcdFx0XHRcdFx0XCI8YnV0dG9uIGNsYXNzPSdidG4gY2hlY2tib3hCdG4nIHR5cGU9J2J1dHRvbic+XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT5cIiArXHJcblx0XHRcdFx0XHRcdFx0XCI8L2J1dHRvbj5cIiArXHJcblx0XHRcdFx0XHRcIjwvZGl2PlwiICtcclxuXHRcdFx0XHRcIjwvbGFiZWw+XCIgK1xyXG5cdFx0XHRcIjwvZGl2PlwiXHJcblx0XHQpO1x0XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBkZWxldGUgdGFzayB3aGVuIGNsaWNraW5nIGJ1dHRvblxyXG4vLyBpbiB0aGUgZW50aXJlIGRvY3VtZW50LCB3aGVuIGEgY2hlY2tib3hCdG4gaXMgY2xpY2tlZCwgcnVuIGZ1bmN0aW9uIG9uIHRoZSBjb3JyZXNwb25kaW5nIHRleHQgYm94XHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hlY2tib3hCdG4nLCBmdW5jdGlvbihzZWN0aW9uKSB7XHJcblx0bGV0IGNoZWNrYm94RGl2ID0gJCh0aGlzKS5wYXJlbnQoKS5jbG9zZXN0KCdkaXYnKS5wYXJlbnQoKS5jbG9zZXN0KCdkaXYnKTtcclxuXHQvLyBjb25maXJtIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgdGFza1xyXG5cdC8vIHN3ZWV0YWxlcnRcclxuXHRzd2FsKHtcclxuXHRcdHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcblx0XHR0ZXh0OiAnVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZSEnLFxyXG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnI0RENkI1NScsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0YWxsb3dPdXRzaWRlQ2xpY2s6IHRydWVcclxuXHR9LCAoKSA9PiAkKGNoZWNrYm94RGl2KS5yZW1vdmUoKSk7XHJcbn0pO1xyXG5cclxuLy8gd2hlbiBob3ZlcmluZyBvdmVyIGJ1dHRvbiwgaGlnaHRsaWdodCB0aGUgZGVsZXRlIGljb25cclxuJChkb2N1bWVudCkub24oe1xyXG5cdG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGZhSWNvbiA9ICQodGhpcykuY2hpbGRyZW4oKS5jbG9zZXN0KCdpJyk7XHJcblx0XHQkKGZhSWNvbikuY3NzKCdjb2xvcicsICcjRjUzMjQwJyk7XHJcblx0fSxcclxuXHRtb3VzZWxlYXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBmYUljb24gPSAkKHRoaXMpLmNoaWxkcmVuKCkuY2xvc2VzdCgnaScpO1xyXG5cdFx0JChmYUljb24pLmNzcygnY29sb3InLCAnI0VFRScpO1xyXG5cdH1cclxufSwgJy5jaGVja2JveEJ0bicpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);