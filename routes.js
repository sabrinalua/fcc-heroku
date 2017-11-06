fs = require('fs'); 
var config =require("./config");
var postcontroller = require('./app/controllers/posts.js');

var bp = require('body-parser');
var jsonParser = bp.json();
//for x-www-xform-urlencoded
var urlencodedParser = bp.urlencoded({ extended: false });

//for multipart/form-data
var multer = require('multer');
var upload = multer({dest: './uploads/'});
var postFields = upload.fields([
	{ name: 'content', maxCount: 1 }
	]);

module.exports = function(app){
	app.get('/', function(req,res){
			console.log("xx"+config.dev);
			fs.readFile('./entry.html', function(err,data){
				res.end(data);
			});	
		});	
	app.get('/Quoter', function(req,res){
			fs.readFile('./Quoter/entry.html', function(err,data){
				res.end(data);
			});	
		});

	app.get("/post", function(req,res){
		res.sendFile(__dirname+'/WYSIWYG/form.html');
	});

	//use x-www-form-urlencoded
	app.post("/post", urlencodedParser, postcontroller.insert);

	app.get('/WYSIWYG', function(req,res){
			fs.readFile('./WYSIWYG/entry.html', function(err,data){
				res.end(data);
			});	
		});


	app.get('/Judo', function(req,res){
			fs.readFile('./Judo/entry.html', function(err,data){
				res.end(data);
			});	
		});

	app.get('/React', function(req,res){
			fs.readFile('./Reactz/entry.html', function(err,data){
				res.end(data);
			});	
		});
	app.get('/Vue', function(req,res){
			fs.readFile('./Vue/entry.html', function(err,data){
				res.end(data);
			});	
		});
	app.get('/Profile', function(req,res){
			res.sendFile(__dirname+'/Profile/entry.html');
		});	
	app.get('/Tribute', function(req,res){
			res.sendFile(__dirname+'/Tribute/entry.html');
		});
}