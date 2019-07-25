chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.runtime.reload();
});

chrome.tabs.query({ url: 'https://beta.rave.office.net/*' }, function(tab) {
	chrome.tabs.reload(tab[0].id);
});

chrome.contextMenus.create({ title: 'Rave Search', contexts: [ 'selection' ], onclick: ravesearch }); // For Rave context menu search

function ravesearch(info) {
	var searchstring = info.selectionText;
	chrome.tabs.create({ url: 'https://beta.rave.office.net/search?query=' + searchstring });
}
