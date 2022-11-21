addLinks();

// Sets a timer
setTimeout(function () {
  // togglepanels();
  // collapsepanels();
  // addLinks();
  // hidePanes(["#leftPane", "#rightPane"]); //'#breadcrumb-div',	'.sync-container'
  // resizebox(['#proposed-solution > div', '#service-incident']);
  /* addLink(['https://docs.microsoft.com/en-us/sharepoint/support/online', 'https://supportability.visualstudio.com/SharePointOnline/_wiki/wikis']) */
}, 100);

// Hide side panes
function hidePanes(obj) {
  try {
    document
      .querySelector(".premier-agent-header-icon")
      .addEventListener("click", function () {
        for (var i = 0; i < obj.length; i++) {
          if (document.querySelector([obj[i]]).style.display == "none") {
            document.querySelector([obj[i]]).style.display = "block";
            document.getElementById("centerPane").style.width = "";
          } else {
            document.querySelector([obj[i]]).style.display = "none";
            // document.getElementById("centerPane").style.width = "auto";
          }
        }
        var panels = document.querySelectorAll(".panel-heading");
        for (var i = 0; i < panels.length; i++) {
          if (panels[i].parentElement.children[1].style.display == "none") {
            panels[i].parentElement.children[1].style.display = "block";
          } else {
            panels[i].parentElement.children[1].style.display = "none";
          }
        }
      });
  } catch (error) { }
}

// hide panels on loading extension
function collapsepanels() {
  var panels = document.querySelectorAll(".panel-heading");
  for (var j = 0; j < panels.length; j++) {
    panels[j].parentElement.children[1].style.display = "none";
  }
}

// hide/show panels on click
function togglepanels() {
  var panel = document.querySelectorAll(".panel-heading");
  for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function () {
      if (this.parentElement.children[1].style.display == "none") {
        this.parentElement.children[1].style.display = "block";
      } else {
        this.parentElement.children[1].style.display = "none";
      }
    });
  }
}

// Work in progress
function addLink(links) {
  for (var i = 0; i < links.length; i++) {
    var x = document.createElement("li");
    x.innerHTML =
      "<div><a href='" +
      links[i] +
      "' target='_blank'><span>SPO</span></a></div>";
    document
      .getElementById("header-dropdown-menu")
      .firstElementChild.appendChild(x);
  }
}

// Add links to header menu
function addLinks() {
  var myMenu = document.createElement("li");
  myMenu.className = "dropdown";
  myMenu.id = "my-menu";
  var mySubMenu = document.createElement("ul");
  mySubMenu.className = "dropdown-menu";
  mySubMenu.id = "my-submenu";
  var myLink1 = document.createElement("li");
  var myLink2 = document.createElement("li");
  var myLink3 = document.createElement("li");
  myMenu.innerHTML =
    '<a href="" ng-keydown="homeController.NavMenuOnKeyDown($event)" ng-blur="homeController.MenuItemOnBlur($event)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="ng-scope">ExchangeOnline</span><i class="ms-Icon-FullMDL ms-Icon-FullMDL--ChevronDown"></i></a>';
  mySubMenu.innerHTML = '<ul class="dropdown-menu" aria-label="submenu"></ul>';
  myLink1.innerHTML =
    "<a href='https://dev.azure.com/Supportability/Modern%20Workplace/_wiki/wikis/Modern%20Workplace/81646/Exchange-Online' target='_blank'>Supportability Wiki</a>";
  myLink2.innerHTML =
    "<a href='https://developer.yammer.com/docs' target='_blank'>ASC</a>";
  myLink3.innerHTML =
    "<div><a href='https://supportability.visualstudio.com/Yammer/_wiki/wikis' target='_blank'><span>YammerWiki</span></a></div>";
  document
    .getElementById("header-dropdown-menu")
    .firstElementChild.appendChild(myMenu);
  document.getElementById("my-menu").appendChild(mySubMenu);
  document.getElementById("my-submenu").appendChild(myLink1);
  document.getElementById("my-submenu").appendChild(myLink2);
  document.getElementById("my-submenu").appendChild(myLink3);
}

// Listen
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) { } else if (request.casenumber) {
    $("#odinSearchBox").focus(); // focus the search box #search-box
    document.execCommand("selectAll", false); // Select all the text in the field
    document.execCommand("insertText", false, request.casenumber); // Insert the case number
    $(".searchButton-114").children().click(); //$("#search-btn").click();
  }
});