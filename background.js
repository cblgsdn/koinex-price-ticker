var cmpRipple = 0;
var result = {};

function init() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://koinex.in/api/ticker', false);
	xhr.send();

	result = JSON.parse(xhr.response);
	updateBadge(result);
}
init();

function updateBadge(resp) {
	if(resp.prices.XRP > cmpRipple) {
		chrome.browserAction.setBadgeBackgroundColor({color: 'green'});
	} else if(resp.prices.XRP < cmpRipple) {
		chrome.browserAction.setBadgeBackgroundColor({color: 'red'});
	}

	cmpRipple = parseFloat(resp.prices.XRP);
	chrome.browserAction.setBadgeText({text: ''+cmpRipple});

	setTimeout(init, 150000);
}

chrome.extension.onConnect.addListener(function(port) {
	console.log("Connected .....");
	port.postMessage(result);
});