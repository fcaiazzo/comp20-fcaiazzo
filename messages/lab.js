function parse() {

	var request = XMLHttpRequest(); 

	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		console.log("Got data back");
	};

	request.send(null);
}