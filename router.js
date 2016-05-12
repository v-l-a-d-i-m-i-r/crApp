var mongoose = require('mongoose'),
	dbConnectionString = require('./settings.js').dbConnectionString,
	UserController = require('./controllers/UserController.js'),
	ProductsController = require('./controllers/ProductsController.js');

mongoose.connect(dbConnectionString);

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.redirect('/home');
	});
	
	app.get(/[^(/api/)]/, function(req, res) {
		res.sendFile(__dirname + '/public/index.html');
	});
	
	app.post('/api/user/:action', function(req, res) {
		UserController[req.params.action](req, res);
	});
	
	app.post('/api/products/:action', function(req, res) {
		ProductsController[req.params.action](req, res);
	});
	
	app.post('/api/product/:action', function(req, res) {
		ProductsController[req.params.action](req, res);
	});
	
	app.post('/api/product/:action/:prodId', function(req, res) {
		ProductsController[req.params.action](req, res);
	});
}