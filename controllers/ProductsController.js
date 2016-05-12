var ProductsRepository = require('../repositories/ProductsRepository.js'),
	Session = require('../utils/SessionUtils.js');

module.exports = {
	getProduct: function(req, res) {
		var userId = Session.getSessionUserId(req),
			prodId = req.params.prodId;
		
		if (userId) {
			ProductsRepository.getProduct(prodId).then(function(data) {
				res.send(data);
			});
		} else {
			res.sendStatus(401);
		}
	},
	createProduct: function(req, res) {
		var userId = Session.getSessionUserId(req),
			product = req.body;
		
		if (userId) {
			product.userId = userId;
			ProductsRepository.createProduct(product).then(function(data) {
				res.send(data);
			});
		} else {
			res.sendStatus(401);
		}
	},
	updateProduct: function(req, res) {
		var userId = Session.getSessionUserId(req),
			prodId = req.params.prodId;
		
		if (userId) {
			ProductsRepository.updateProduct(req.body).then(function(data) {
				res.send(data);
			});
		} else {
			res.sendStatus(401);
		}
	},
	getProducts: function(req, res) {
		var userId = Session.getSessionUserId(req);
		
		if (userId) {
			ProductsRepository.getProducts(userId).then(function(data) {
				res.send(data);
			});
		} else {
			res.sendStatus(401);
		}
	},
	deleteProducts: function(req, res) {
		var userId = Session.getSessionUserId(req);
		
		if (userId) {
			ProductsRepository.deleteProducts(req.body).then(function(data) {
			res.send(data);
		});
		} else {
			res.sendStatus(401);
		}
	}
}