function parse () {

	var request = new XMLHttpRequest();

	//step 1
	request.open("GET", "data.json", true);

	//step 2
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
				console.log("got data back"); 
				console.log(request.responseText);
				message = JSON.parse(request.responseText);
				elem = document.getElementById("messages");
				for (count = 0; count <= message.length; count++) {
						elem.innerHTML += "<div id = 'message'>" + message[count]["username"] + " : " + message[count]["content"] + "</div>";
				}
		}		
	};
	//step 3
	request.send(null);
}