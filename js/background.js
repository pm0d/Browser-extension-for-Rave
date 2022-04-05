// Reload extention on clicking button;
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.runtime.reload();
});

// Reload Rave tab if it exists when extension loads
chrome.tabs.query({ url: "https://rave.microsoft.com/*" }, function (tabs) {
  try {
    chrome.tabs.reload(tabs[0].id);
  } catch (error) {}
});

// Add Rave context menu search
chrome.contextMenus.create({
  title: "Rave Search",
  contexts: ["selection"],
  onclick: ravesearch,
}); 

// Send case number to content.js for search
function ravesearch(info) {
  var searchstring = info.selectionText;
  // chrome.tabs.create({ url: 'https://rave.microsoft.com/search?query=' + searchstring });
  chrome.tabs.query({ url: "https://rave.microsoft.com/*" }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { casenumber: searchstring });
  });
}

// Hide panels on switching to another support case
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  try {
    if (changeInfo.url.startsWith("https://rave.microsoft.com/cases")) {
      chrome.tabs.query({ url: "https://rave.microsoft.com/*" }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "callfunc" });
      });
    }
  } catch (error) {
    // alert(error);
  }
});
