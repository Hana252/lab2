
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "yoyo ",
		password: "0000"
	},
	{ // Object @ 1 index
		username: "eman",
		password: "0000"
	},
	{ // Object @ 2 index
		username: "zharaa",
		password: "0000"
	}
	{ // Object @ 2 index
		username: "negm",
		password: "0000"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href = "/1.html";
			// stop the function if this is found to be true
			return
		}
	}
	alert("not a member in phainox group!")
}