fs = require('fs'); 

module.exports = function(app){
	app.get('/', function(req,res){
			fs.readFile('./entry.html', function(err,data){
				res.end(data);
			});	
		});	
	app.get('/Quoter', function(req,res){
			fs.readFile('./Quoter/entry.html', function(err,data){
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