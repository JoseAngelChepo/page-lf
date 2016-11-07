var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(9000, function (err) {
	if (err) return console.log('Error'), process.exit(1);

	console.log('Puerto 9000'); 
})