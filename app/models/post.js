var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	content :{
		type: String,
		required: true
	},
	created_at:Date
});

PostSchema.pre('save', function(next){
	var currentDate = new Date();
	this.created_at = currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;