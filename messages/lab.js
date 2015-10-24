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
				elem.innerHTML = message["username"] + " : " + message["content"];
		}		
	};
	//step 3
	request.send(null);
}