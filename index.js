var express = require('express'),
	app = express(),
	router = express.Router(),
	port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/assets'));

var routes = require('./routes');
routes(app);

app.listen(port);
console.log("APP running at port "+port);
