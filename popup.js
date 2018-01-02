var port = chrome.extension.connect({
      name: "Data passing"
 });
 port.onMessage.addListener(function(resp) {
    console.log("message recieved", resp);
	document.getElementById('xrpSpanId').innerText = resp.prices.XRP;
	document.getElementById('ethSpanId').innerText = resp.prices.ETH;
	document.getElementById('iotaSpanId').innerText = resp.prices.MIOTA;
	document.getElementById('btcSpanId').innerText = resp.prices.BTC;
 });