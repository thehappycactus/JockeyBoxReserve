var express = require('express');
var app = express();
var pg = require('pg');

app.use(express.static(__dirname));	// Express middleware to serve static files

app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response) {
	response.sendFile('index.html', {root:  __dirname});
});

app.get('/reservations', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function (err, client) {
		if (err) throw err;
		console.log('Connected to postgres, calling GET reservations...');

		client
			.query('SELECT * FROM table_name')
			.on('row', function (row) {
				response.send(row);
			});
	});
});

app.listen(app.get('port'), function () {
	console.log('Node app running on port ' + app.get('port'));
});