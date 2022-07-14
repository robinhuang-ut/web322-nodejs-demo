const request = new XMLHttpRequest();

request.open('GET', 'books.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		//log the 1st author
		console.log(request.responseXML.getElementsByTagName('author')[0].firstChild.nodeValue);
		
		var items = request.responseXML.getElementsByTagName('author');
		var str_html = '<ul>';
		for (var i = 0; i < items.length; i++) {
			str_html += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		str_html += '</ul>';
		document.getElementById('content').innerHTML = str_html;
	}
}
request.send();
