/* jQuery(document).ready(function() {
	setTimeout(alert('5 seconds'), 5000);
}); */

$('.quickview-adiv').ready(function() {
	var element = jQuery('.navbar');
	jQuery('<span id="showRave">Show<span>').appendTo(element);
	var el = document.getElementById('showRave');
	el.onclick = showRave;
});

function showRave() {
	var element = jQuery('ul.nav.nav-tabs');

	var newtab =
		"<li class='uib-tab nav-item' index='0' heading='CompanyInfo' id='companyinfo-tab'>" +
		"<a href='' ng-click='select($event)' class='nav-link ng-binding' uib-tab-heading-transclude=''>Company</a></li>";
	jQuery(newtab).appendTo(element);

	var target = document.getElementById('breadcrumb-div');
	document.getElementById('companyinfo-tab').appendChild(target);

	$('div.attachment-container').replaceWith(function() {
		return '<span>' + $(this).html() + '</span>';
	});

	var spans;
	var divs = document.getElementsByClassName('attachment-container.ng-scope');
	{
		for (var i = 0, l = divs.length; i < l; i++) {
			spans[i] = divs[i].innerHTML;
			divs[i].insertAdjacentElement('beforebegin', spans[i]);
			divs[i].parentNode.removeChild(divs[i]);
		}
	}

	var image = document.getElementsByClassName('RaveIcon');
	image.src = 'http://www.netanimations.net/taxi_08%20(7).gif';
	setTimeout(alert('BOOM!'), 500);
}

let cursor = 0;
const KONAMI_CODE = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ];
document.addEventListener('keydown', (e) => {
	cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
	if (cursor == KONAMI_CODE.length) alert('⬆⬆⬇⬇⬅➡⬅➡🅱🅰');
});

/* 
	var elem = document.getElementById('navigation-home');
	elem.parentNode.removeChild(elem); */

/* 
	var elem1 = document.getElementsByClassName('panel-heading');
	var elem2 = document.getElementById('breadcrumb-div');
	elem1.appendChild(elem2); */
