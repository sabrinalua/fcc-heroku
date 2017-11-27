//express and routing...
var express = require('express'),
	app = express(),
	router = express.Router(),
	react = require('react')
	port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/assets'));
var config = require('./config');
var routes = require('./routes');

//mongodb stuff
var db = require('mongoose'),
	mongoose = require('mongoose'),
	dbUrl = (process.env.NODE_ENV==="development") ? config.dbUrl : process.env.dbUrl;
	MongoClient = db.MongoClient;
	mongoose.Promise = global.Promise;
	mongoose.connect(dbUrl, {useMongoClient:true});

routes(app);
app.listen(port);

console.log(dbUrl);
console.log("APP running at port "+port+" with NODE_ENV "+process.env.NODE_ENV );
