
const request = new XMLHttpRequest();
request.open('GET', 'data.txt', false);
request.send();
if (request.status===200) {
	console.log('request',request);
	document.writeln(request.responseText);
}	

