var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
	userId: {type: String},
	name: {type: String},
	price: {type: String},
	description: {type: String}
});

mongoose.model('Product', ProductSchema);