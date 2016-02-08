var express = require('express');
var app = express();

app.use(express.static(__dirname));	// Express middleware to serve static files

app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response) {
	response.sendFile('index.html', {root:  __dirname});
});

app.listen(app.get('port'), function () {
	console.log('Node app running on port ' + app.get('port'));
});