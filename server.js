var express = require('express');
var app = express();

// Creates a server
const port=3000;
app.listen(port, function() {
	console.log(`Server connected to http://localhost:${port}`);
} )


// url
app.get('/', home);
app.get('/name', callName);

function home(req, res) {
	// E.g : http://localhost:3000
	var spawn = require("child_process").spawn;

	var process = spawn('python',["./python-script/test.py"]);

	// send data to res object
	process.stdout.on('data', function(data) {
		res.send(data.toString());
	} )
}

function callName(req, res) {
	// E.g : http://localhost:3000/name?fname=weaq&lname=goisgo
	var spawn = require("child_process").spawn;

	var process = spawn('python',["./python-script/test-arg.py",
							req.query.fname,
							req.query.lname] );

	// send data to res object
	process.stdout.on('data', function(data) {
		res.send(data.toString());
	} )
}
