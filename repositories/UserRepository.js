var mongoose = require('mongoose'),
	UserModel = require('../models/UserModel.js'),
	User = mongoose.model('User');


module.exports = {
	createUser: function(data) {
		var user = new User({
			email: data.email,
			password: data.password
		});
		
		return user.save();
	},
	deleteUser: function(id) {
		return User.findById(id).remove();
	},
	updateUser: function(data) {
		var id = data._id;
		
		return User.findOneAndUpdate({ _id: id }, { $set: data}, {new: true});
	},
	getUser: function(data) {
		return User.find(data);
	}
}