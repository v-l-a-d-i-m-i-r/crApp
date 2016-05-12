(function () {
	var app = angular.module('crApp');

	app.factory('Product', ['$resource', 'apiUrls', function ($resource, apiUrls) {
		var userResource = $resource(apiUrls.productResourceUrl, {prodId:'@prodId'}, {
			create: {method: 'POST', params: {action: 'createProduct'}},
			update: {method: 'POST', params: {action: 'updateProduct'}},
			get: {method: 'POST', params: {action: 'getProduct'}}
		});
		
		return {
			create: function(data) {
				return userResource.create(data).$promise;
			},
			update: function(data) {
				return userResource.update(data).$promise;
			},
			get: function(prodId) {
				return userResource.get({prodId: prodId}).$promise;
			}
		}
	}]);
})();