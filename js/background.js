chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.runtime.reload();
});

chrome.tabs.query({ url: 'https://beta.rave.office.net/*' }, function(tab) {
	chrome.tabs.reload(tab[0].id);
});
