function addCss(selector, key, value) {
	let element = document.createElement("style");
	element.innerHTML = selector + " { " + key + ": " + value + "; }";
	document.head.appendChild(element);
}

function setPrimary(value) {
	addCss("h1", "color", value);
	addCss("header", "border-top", "2px solid " + value);
	addCss("a:hover", "color", value);
	addCss(".midline", "border-left", "1px solid" + value);
}

window.onload = function() {
	{ let value = localStorage.getItem("primary"); if (value != null) { setPrimary(value); } else { setPrimary("#0079d8"); }}
	{ let value = localStorage.getItem("style"); if (value != null) { if (value == "true") { addCss(".page", "width", "100%"); } }}
};