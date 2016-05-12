var UserRepository = require('../repositories/UserRepository.js'),
	Session = require('../utils/SessionUtils.js');

module.exports = {
	create: function(req, res) {
		
		UserRepository.createUser(req.body).then(function(data) {
			Session.setSessionUserId(req, data._id, req.body.rememberMe);
			res.send(data);
		});
	},
	login: function(req, res) {
		UserRepository.getUser(req.body).then(function(data) {
			if (data[0]) {
				Session.setSessionUserId(req, data[0]._id, req.body.rememberMe);
				res.send(data[0]);
			} else {
				res.sendStatus(403);
			}
		});
	},
	logout: function(req, res) {
		Session.removeSession(req);
		res.sendStatus(401);
	},
	update: function(req, res) {
		var userId = Session.getSessionUserId(req);
		
		if (userId) {
			UserRepository.updateUser(req.body).then(function(data) {
				res.send(data);
			});
		} else {
			res.sendStatus(401);
		}
	},
	auth: function(req, res) {
		var userId = Session.getSessionUserId(req);
		
		if (userId) {
			UserRepository.getUser({_id: userId}).then(function(data) {
				res.send(data[0]);
			});
		} else {
			res.sendStatus(401);
		}
	}
}