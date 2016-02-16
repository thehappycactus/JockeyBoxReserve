var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var resRouter = express.Router();
var pg = require('pg');
var moment = require('moment');

var jsonParser = bodyParser.json();

app.use(express.static(__dirname));	// Express middleware to serve static files
app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response) {
	response.sendFile('index.html', { root:  __dirname });
});

resRouter.get('/', jsonParser, function (request, response) {
	pg.connect(process.env.DATABASE_URL, function (err, client) {
		if (err) {
			console.log('Initial error: ' + err);
		}
		console.log('Connected to postgres, calling GET reservations...');
		console.log('DATABASE_URL: ' + process.env.DATABASE_URL);

		client
			.query('SELECT * FROM reservation', function (err, result) {
				if (err) {
					response.send('Error: ' + err);
					return console.error('error running GET reservations: ' + err);
				}

				console.log('result row count: ' + result.rows.length);
				response.send(result.rows);

				client.end();

				//done();		// CLIENT POOLING ONLY: Do this to release the client back to the pool
			});
	});
});

// Finds all future events - possibly we'll eventually only get for the next couple months?
resRouter.get('/future', jsonParser, function (request, response) {
	pg.connect(process.env.DATABASE_URL, function (err, client) {
		if (err) { console.log('Initial error: ' + err); }

		var now = moment().format('YYYY-MM-DD');

		client
			.query("SELECT * FROM reservation WHERE start_date >= '" + now + "'", function (err, result) {
				if (err) {
					response.send(err);
					return console.error('error running GET future reservations: ' + err);
				}
				
				response.send(result.rows);
				client.end();
			});
	});
});

app.use('/reservations', resRouter);

app.listen(app.get('port'), function () {
	console.log('Node app running on port ' + app.get('port'));
});