var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.send();
request.onreadystatechange = function() {
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
	if (
		(request.readyState===4) && 
		(request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}

