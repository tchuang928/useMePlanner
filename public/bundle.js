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
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar date = new Date();\nvar dateHelper = new Date();\nvar months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nvar days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];\n\n// determine days in month. month is 1 based, NOT 0\nfunction daysInMonth(year, month) {\n\tvar test = new Date(year, month, 0).getDate();\n\treturn test;\n}\n\n// checking for leap year\nfunction isLeapYear(year) {\n\treturn year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n}\n// console.log(isLeapYear(thisYear + 3));\n\n// month(from array months), year(YYYY), day(0-6), day of week(from array days), date(1-31), milliseconds since 1/1/1970 \nvar thisMonthInt = date.getMonth();\nvar thisMonth = months[thisMonthInt];\nvar thisYear = date.getFullYear();\nvar thisDayInt = date.getDay();\nvar thisDay = days[thisDayInt];\nvar thisDate = date.getDate();\nvar thisTime = date.getTime();\n\n// vanilla javascript\n//document.getElementById('yearMonth').innerHTML = thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br>isdlkfj'; \n//document.getElementById('monthNum').innerHTML = date.getMonth() + 1;\n\n// jQuery and template string literals\n$('#yearMonth').html(thisYear + '  &#9830  ' + thisMonth + '<br>--------------------------------------------<br><i>\"Random Quote of the Day\"</i>');\n$('#monthNum').html(date.getMonth() + 1);\n\n// set date for 7 days of the week in weekly view\nfor (var i = 0; i < days.length; i++) {\n\t// set new date object starting Sunday and loop through the week\n\tvar loopDate = thisDate - thisDayInt + i;\n\tdateHelper.setDate(loopDate);\n\t// set date to string\t\t\n\tvar thatDateStr = '' + dateHelper.getDate();\n\t// test if date string is single or double digit. If single digit, add 0 in front \n\tif (/^\\d$/.test(thatDateStr)) {\n\t\t// write in html the date corresponding with day of week\n\t\t$('#' + days[dateHelper.getDay()]).html('0' + dateHelper.getDate());\n\t} else $('#' + days[dateHelper.getDay()]).html(dateHelper.getDate());\n\n\t// if date goes beyond the current month, delete entire row element\n\tvar daysInThisMonth = daysInMonth(thisYear, thisMonthInt + 1);\n\tif (loopDate <= 0 || loopDate > daysInThisMonth) {\n\t\t$('#' + days[dateHelper.getDay()] + '.monthDay').remove();\n\t\t$('#' + days[dateHelper.getDay()] + '.day').remove();\n\t\t$('#day' + i).removeClass('borderDay');\n\t\t$('#day0' + i).removeClass('borderText');\n\t\t$('#checkbox' + i).remove();\n\t}\n\n\t// reset dateHelper object for the next iteration\n\tdateHelper.setTime(thisTime);\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGF0ZS5qcz83MzFhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkYXRlID0gbmV3IERhdGUoKTtcclxudmFyIGRhdGVIZWxwZXIgPSBuZXcgRGF0ZSgpO1xyXG52YXIgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcbnZhciBkYXlzID0gWydzdW4nLCAnbW9uJywgJ3R1ZScsICd3ZWQnLCAndGh1JywgJ2ZyaScsICdzYXQnXTtcclxuXHJcbi8vIGRldGVybWluZSBkYXlzIGluIG1vbnRoLiBtb250aCBpcyAxIGJhc2VkLCBOT1QgMFxyXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xyXG5cdGxldCB0ZXN0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcclxuXHRyZXR1cm4gdGVzdDsgXHJcbn1cclxuXHJcbi8vIGNoZWNraW5nIGZvciBsZWFwIHllYXJcclxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XHJcblx0cmV0dXJuICgoeWVhciAlIDQgPT09IDApICYmICh5ZWFyICUgMTAwICE9PSAwKSkgfHwgKHllYXIgJSA0MDAgPT09IDApO1xyXG59XHJcbi8vIGNvbnNvbGUubG9nKGlzTGVhcFllYXIodGhpc1llYXIgKyAzKSk7XHJcblxyXG4vLyBtb250aChmcm9tIGFycmF5IG1vbnRocyksIHllYXIoWVlZWSksIGRheSgwLTYpLCBkYXkgb2Ygd2Vlayhmcm9tIGFycmF5IGRheXMpLCBkYXRlKDEtMzEpLCBtaWxsaXNlY29uZHMgc2luY2UgMS8xLzE5NzAgXHJcbnZhciB0aGlzTW9udGhJbnQgPSBkYXRlLmdldE1vbnRoKCk7XHJcbnZhciB0aGlzTW9udGggPSBtb250aHNbdGhpc01vbnRoSW50XTtcclxudmFyIHRoaXNZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG52YXIgdGhpc0RheUludCA9IGRhdGUuZ2V0RGF5KCk7XHJcbnZhciB0aGlzRGF5ID0gZGF5c1t0aGlzRGF5SW50XTtcclxudmFyIHRoaXNEYXRlID0gZGF0ZS5nZXREYXRlKCk7XHJcbnZhciB0aGlzVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xyXG5cclxuLy8gdmFuaWxsYSBqYXZhc2NyaXB0XHJcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJNb250aCcpLmlubmVySFRNTCA9IHRoaXNZZWFyICsgJyAgJiM5ODMwICAnICsgdGhpc01vbnRoICsgJzxicj4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTxicj5pc2Rsa2ZqJzsgXHJcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbnRoTnVtJykuaW5uZXJIVE1MID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHJcbi8vIGpRdWVyeSBhbmQgdGVtcGxhdGUgc3RyaW5nIGxpdGVyYWxzXHJcbiQoJyN5ZWFyTW9udGgnKS5odG1sKFxyXG5cdGAke3RoaXNZZWFyfSAgJiM5ODMwICAke3RoaXNNb250aH08YnI+LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS08YnI+PGk+XCJSYW5kb20gUXVvdGUgb2YgdGhlIERheVwiPC9pPmBcclxuKTtcclxuJCgnI21vbnRoTnVtJykuaHRtbChkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuXHJcbi8vIHNldCBkYXRlIGZvciA3IGRheXMgb2YgdGhlIHdlZWsgaW4gd2Vla2x5IHZpZXdcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XHJcblx0Ly8gc2V0IG5ldyBkYXRlIG9iamVjdCBzdGFydGluZyBTdW5kYXkgYW5kIGxvb3AgdGhyb3VnaCB0aGUgd2Vla1xyXG5cdGxldCBsb29wRGF0ZSA9IHRoaXNEYXRlIC0gdGhpc0RheUludCArIGk7XHJcblx0ZGF0ZUhlbHBlci5zZXREYXRlKGxvb3BEYXRlKTtcdFxyXG5cdC8vIHNldCBkYXRlIHRvIHN0cmluZ1x0XHRcclxuXHR2YXIgdGhhdERhdGVTdHIgPSAnJyArIGRhdGVIZWxwZXIuZ2V0RGF0ZSgpO1xyXG5cdC8vIHRlc3QgaWYgZGF0ZSBzdHJpbmcgaXMgc2luZ2xlIG9yIGRvdWJsZSBkaWdpdC4gSWYgc2luZ2xlIGRpZ2l0LCBhZGQgMCBpbiBmcm9udCBcclxuXHRpZiAoL15cXGQkLy50ZXN0KHRoYXREYXRlU3RyKSkge1xyXG5cdFx0Ly8gd3JpdGUgaW4gaHRtbCB0aGUgZGF0ZSBjb3JyZXNwb25kaW5nIHdpdGggZGF5IG9mIHdlZWtcclxuXHRcdCQoYCMke2RheXNbZGF0ZUhlbHBlci5nZXREYXkoKV19YCkuaHRtbChgMCR7ZGF0ZUhlbHBlci5nZXREYXRlKCl9YCk7XHJcblx0fSBlbHNlICQoYCMke2RheXNbZGF0ZUhlbHBlci5nZXREYXkoKV19YCkuaHRtbChkYXRlSGVscGVyLmdldERhdGUoKSk7XHJcblxyXG5cdC8vIGlmIGRhdGUgZ29lcyBiZXlvbmQgdGhlIGN1cnJlbnQgbW9udGgsIGRlbGV0ZSBlbnRpcmUgcm93IGVsZW1lbnRcclxuXHR2YXIgZGF5c0luVGhpc01vbnRoID0gZGF5c0luTW9udGgodGhpc1llYXIsIHRoaXNNb250aEludCsxKTtcclxuXHRpZiAobG9vcERhdGUgPD0gMCB8fCBsb29wRGF0ZSA+IGRheXNJblRoaXNNb250aCkge1xyXG5cdFx0JChgIyR7ZGF5c1tkYXRlSGVscGVyLmdldERheSgpXX0ubW9udGhEYXlgKS5yZW1vdmUoKTtcclxuXHRcdCQoYCMke2RheXNbZGF0ZUhlbHBlci5nZXREYXkoKV19LmRheWApLnJlbW92ZSgpO1xyXG5cdFx0JChgI2RheSR7aX1gKS5yZW1vdmVDbGFzcygnYm9yZGVyRGF5Jyk7XHJcblx0XHQkKGAjZGF5MCR7aX1gKS5yZW1vdmVDbGFzcygnYm9yZGVyVGV4dCcpO1xyXG5cdFx0JChgI2NoZWNrYm94JHtpfWApLnJlbW92ZSgpO1xyXG5cdH1cclxuXHRcclxuXHQvLyByZXNldCBkYXRlSGVscGVyIG9iamVjdCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXHJcblx0ZGF0ZUhlbHBlci5zZXRUaW1lKHRoaXNUaW1lKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kYXRlLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);