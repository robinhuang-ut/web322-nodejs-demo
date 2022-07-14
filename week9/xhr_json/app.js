const request = new XMLHttpRequest();

request.open('GET', 'stats.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var items = JSON.parse(request.responseText);
		var str_html = '<ul>';
		for (var key in items) {
			str_html += '<li>' + items[key].population + '</li>';
		}
		str_html += '</ul>';
		document.getElementById('content').innerHTML = str_html;
	}
}
request.send();
