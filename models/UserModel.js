var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	name: {type: String},
	surname: {type: String},
	phone: {type: String}
});

mongoose.model('User', UserSchema);