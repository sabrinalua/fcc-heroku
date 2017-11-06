//postcontroller

var mongoose = require("mongoose");
var Post = require("../models/post.js");
var Response = require("../models/http-response.js");


exports.insert = function (req,res){
	if(req.body.content ){
		var post = new Post({
			content: req.body.content
		});

		post.save(function (err, post){
			if(!err){
				res.send(post);
			}
		} )		
	}else{
		res.status(403).send(new Response(403,0, "content needs to be set"));
	}
}