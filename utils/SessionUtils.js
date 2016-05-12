module.exports = {
	getSessionUserId: function(req) {
		if (req.session && req.session.userId) {
			return req.session.userId;
		}
	},
	setSessionUserId: function(req, userId, isRememberMe) {
		if (isRememberMe) {
			req.session.setDuration(24 * 60 * 60 * 1000);
		} else {
			req.session.setDuration(null, true);
		}
		
		req.session.userId = userId;
	},
	removeSession: function(req) {
		req.session.reset();
	}
}