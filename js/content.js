// Sets a timer for 5 seconds
setTimeout(function () {
	// Call function
	addLinks();

	// Call function
	togglepanels();

	//! call function (deprecated)
	/* addLink(['https://docs.microsoft.com/en-us/sharepoint/support/online', 'https://supportability.visualstudio.com/SharePointOnline/_wiki/wikis']) */

	// Call function 
	hideElements(['#breadcrumb-div', '#leftPane', '#rightPane']);
	// /* '.sync-container' */

	// moves the Add button to beside the call button
	$("button[ng-href='editNumber']").appendTo("#contactPhone:parent");

	// call function
	konamicode();

	//! call function (deprecated)
	// resizebox(['#proposed-solution > div', '#service-incident']);
}, 5000);


//
function hideElements(obj) {
	try {
		document.querySelector('.premier-agent-header-icon').addEventListener('click', function () {
			for (var i = 0; i < obj.length; i++) {
				if (document.querySelector([obj[i]]).style.display == "none") {
					document.querySelector([obj[i]]).style.display = "block";
				} else {
					document.querySelector([obj[i]]).style.display = "none";
				}
			}
		});
	} catch (error) {

	}
};

//
function togglepanels() {
	var panels = document.querySelectorAll('.panel-heading');
	for (var i = 0; i < panels.length; i++) {
		panels[i].addEventListener('click', function () {
			if (this.parentElement.children[1].style.display == "none") {
				this.parentElement.children[1].style.display = "block";
			} else {
				this.parentElement.children[1].style.display = "none";
			}
		});
	}
};

// WIP
function addLink(links) {
	for (var i = 0; i < links.length; i++) {
		var x = document.createElement('li');
		x.innerHTML = "<div><a href='" + links[i] + "' target='_blank'><span>SPO</span></a></div>";
		document.getElementById('header-dropdown-menu').firstElementChild.appendChild(x);
	}
	$('.whatsnew-header-icon').remove();
};

//
function addLinks() {
	var myLink1 = document.createElement('li');
	var myLink2 = document.createElement('li');
	var myLink3 = document.createElement('li');
	myLink1.innerHTML = "<div><a href='https://docs.microsoft.com/en-us/sharepoint/support/online' target='_blank'><span>SPO</span></a></div>";
	myLink2.innerHTML = "<div><a href='https://supportability.visualstudio.com/SharePointOnline/_wiki/wikis' target='_blank'><span>CSS Wiki</span></a></div>";
	myLink3.innerHTML = "<div><a href='https://www.hydra365.net/Nemo/QnASearch' target='_blank'><span>Cybot</span></a></div>";
	document.getElementById('header-dropdown-menu').firstElementChild.appendChild(myLink1);
	document.getElementById('header-dropdown-menu').firstElementChild.appendChild(myLink2);
	document.getElementById('header-dropdown-menu').firstElementChild.appendChild(myLink3);
	$('.whatsnew-header-icon').remove();
};

//
function addTab() {
	var element = jQuery('ul.nav.nav-tabs');
	var newtab =
		"<li class='uib-tab nav-item' index='0' heading='CompanyInfo' id='companyinfo-tab'>" +
		"<a href='' ng-click='select($event)' class='nav-link ng-binding' uib-tab-heading-transclude=''>Company!</a></li>";
	jQuery(newtab).appendTo(element);
};

// Konami Code
function konamicode() {
	let cursor = 0;
	const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	document.addEventListener('keydown', (e) => {
		cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
		if (cursor == KONAMI_CODE.length) alert('Congrats, you found the Konami code.');
	});
};

//
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		// if (request.casenumber.isNaN() === true) { //request.greeting === "hello"
		// sendResponse({ farewell: "goodbye" });
		// }

		$("#search-box").focus(); // focus the search box
		document.execCommand('selectAll', false); // Select all the text in the field
		document.execCommand('insertText', false, request.casenumber); // Insert the case number
		$("#search-btn").click();
	});

// Minimize/maximize proposed solution & SIE
/* function resizebox(el) {
	for (var i = 0; i < el.length; i++) {
		try {
			document.querySelector(el[i]).addEventListener('click', function () {
				if (this.style.height == "100px") {
					this.style.height = "auto";
				} else {
					this.style.height = "100px";
				}
			});
		} catch (error) {

		}
	}
}; */