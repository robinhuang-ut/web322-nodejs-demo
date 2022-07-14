var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		const element = document.getElementById('content');
		// const element = document.getElementsByTagName('h1');
		element.innerHTML = request.responseText;
		// element[0].innerHTML = request.responseText;
	}
}
request.send();
