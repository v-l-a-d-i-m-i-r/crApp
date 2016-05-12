(function () {
	var app = angular.module('crApp');

	app.factory('User', ['$resource', 'apiUrls', function ($resource, apiUrls) {
		var userResource = $resource(apiUrls.userResourceUrl, {}, {
			create: {method: 'POST', params: {action: 'create'}},
			login: {method: 'POST', params: {action: 'login'}},
			logout: {method: 'POST', params: {action: 'logout'}},
			update: {method: 'POST', params: {action: 'update'}},
			auth: {method: 'POST', params: {action: 'auth'}}
		});
		
		return {
			create: function(data) {
				return userResource.create(data).$promise;
			},
			login: function(data) {
				return userResource.login(data).$promise;
			},
			logout: function(data) {
				return userResource.logout(data).$promise;
			},
			update: function(data) {
				return userResource.update(data).$promise;
			},
			auth: function() {
				return userResource.auth().$promise;
			}
		}
	}]);
})();