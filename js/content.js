window.onload = function () {
	addtab();
};

addEventListener('load', addtab);

document.addEventListener('DOMContentLoaded', addtab);

$(document).ready(addtab);

function addlink() {
	var el1 = jQuery('#header-dropdown-menu');
	jQuery('<span id="showRave">Show<span>').appendTo(el1);
	var el2 = document.getElementById('showRave');
	el2.onclick = konamicode();
	var elem1 = document.createElement('li');
	elem1.innerHTML = '<div><a>Click here</a></div>';
	var elem2 = document.getElementById('header-dropdown-menu').firstElementChild;
	elem2.appendChild(elem1);
	elem1.onclick = addtab();
}

function addtab() {
	var element = jQuery('ul.nav.nav-tabs');

	var newtab =
		"<li class='uib-tab nav-item' index='0' heading='CompanyInfo' id='companyinfo-tab'>" +
		"<a href='' ng-click='select($event)' class='nav-link ng-binding' uib-tab-heading-transclude=''>Company!</a></li>";
	jQuery(newtab).appendTo(element);
}

// Konami Code
function konamicode() {
	let cursor = 0;
	const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	document.addEventListener('keydown', (e) => {
		cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
		if (cursor == KONAMI_CODE.length) alert('⬆⬆⬇⬇⬅➡⬅➡🅱🅰');
	});
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	} // add zero in front of numbers < 10
	return i;
}

function blink() {
	console.log('blink');
	// document.body.style.cursor = 'wait';
}

var i = setInterval(function () {
	blink();
}, 60 * 1000);
