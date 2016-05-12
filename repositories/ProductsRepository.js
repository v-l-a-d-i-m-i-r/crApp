var mongoose = require('mongoose'),
	ProductModel = require('../models/ProductModel.js'),
	Product = mongoose.model('Product');


module.exports = {
	getProduct: function(prodId) {
		return Product.findOne({_id: prodId});
	},
	updateProduct: function(data) {
		var id = data._id;
		
		return Product.findOneAndUpdate({ _id: id }, { $set: data}, {new: true});
	},
	createProduct: function(data) {
		var product = new Product({
			userId: data.userId,
			name: data.name,
			price: data.price,
			description: data.description
		});
		
		return product.save();
	},
	getProducts: function(userId) {
		return Product.find({userId: userId});
	},
	deleteProducts: function(products) {
		var prodIdsArr = [],
			userId = products[0].userId;
		
		for (var i = 0; i < products.length; i++) {
			prodIdsArr.push(products[i]._id);
		}
		
		return Product.remove({_id: {$in: prodIdsArr}}).remove().then(function() {
			return Product.find({userId: userId});
		});
	}
}