// Sets a timer for 5 seconds
setTimeout(function () {
	// Call function
	addLinks();

	// Call function
	togglepanels();

	//! call function
	/* addLink(['https://docs.microsoft.com/en-us/sharepoint/support/online', 'https://supportability.visualstudio.com/SharePointOnline/_wiki/wikis']) */

	// Call function 
	hideElements(['#leftPane', '#rightPane']); //'#breadcrumb-div',
	// /* '.sync-container' */

	// moves the Add button to beside the call button
	$("button[ng-href='editNumber']").appendTo("#contactPhone:parent");

	// call function
	// konamicode();

	//! call function (deprecated)
	// resizebox(['#proposed-solution > div', '#service-incident']);
}, 3000);


//
function hideElements(obj) {
	try {
		document.querySelector('.premier-agent-header-icon').addEventListener('click', function () {
			for (var i = 0; i < obj.length; i++) {
				if (document.querySelector([obj[i]]).style.display == "hidden") {
					document.querySelector([obj[i]]).style.display = "block";
				} else {
					document.querySelector([obj[i]]).style.display = "hidden";
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
			if (this.parentElement.children[1].style.display == "hidden") {
				this.parentElement.children[1].style.display = "block";
			} else {
				this.parentElement.children[1].style.display = "hidden";
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
	var myMenu = document.createElement('li');
	myMenu.className = 'dropdown';
	myMenu.id = 'my-menu';
	var mySubMenu = document.createElement('ul');
	mySubMenu.className = 'dropdown-menu';
	mySubMenu.id = 'my-submenu';
	var myLink1 = document.createElement('li');
	var myLink2 = document.createElement('li');
	var myLink3 = document.createElement('li');
	myMenu.innerHTML = '<a href="" ng-keydown="homeController.NavMenuOnKeyDown($event)" ng-blur="homeController.MenuItemOnBlur($event)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="ng-scope">Yammer</span><i class="ms-Icon-FullMDL ms-Icon-FullMDL--ChevronDown"></i></a>';
	mySubMenu.innerHTML = '<ul class="dropdown-menu" aria-label="submenu"></ul>'
	myLink1.innerHTML = "<a href='https://docs.microsoft.com/en-us/yammer/' target='_blank'>YammerDocs</a>";
	myLink2.innerHTML = "<a href='https://developer.yammer.com/docs' target='_blank'>YammerDev</a>";
	myLink3.innerHTML = "<div><a href='https://supportability.visualstudio.com/Yammer/_wiki/wikis' target='_blank'><span>YammerWiki</span></a></div>";	
	document.getElementById('header-dropdown-menu').firstElementChild.appendChild(myMenu);
	document.getElementById('my-menu').appendChild(mySubMenu);
	document.getElementById('my-submenu').appendChild(myLink1);
	document.getElementById('my-submenu').appendChild(myLink2);
	document.getElementById('my-submenu').appendChild(myLink3);
	document.querySelector('.whatsnew-header-icon').remove()
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
// function konamicode() {
// 	let cursor = 0;
// 	const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// 	document.addEventListener('keydown', (e) => {
// 		cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
// 		if (cursor == KONAMI_CODE.length) alert('Congrats, you found the Konami code.');
// 	});
// };

//
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		// if (request.casenumber.isNaN() === true) { //request.greeting === "hello"
		// sendResponse({ farewell: "goodbye" });
		// }

		$("#odinSearchBox").focus(); // focus the search box #search-box
		document.execCommand('selectAll', false); // Select all the text in the field
		document.execCommand('insertText', false, request.casenumber); // Insert the case number
		$(".searchButton-114").children().click(); //$("#search-btn").click();
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