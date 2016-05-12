(function () {
	var app = angular.module('crApp');

	app.factory('Products', ['$resource', 'apiUrls', function ($resource, apiUrls) {
		var productsResource = $resource(apiUrls.productsResourceUrl, {}, {
			getProducts: {method: 'POST', isArray: true, params: {action: 'getProducts'}},
			deleteProducts: {method: 'POST', isArray: true, params: {action: 'deleteProducts'}}
		});
		
		return {
			getProducts: function() {
				return productsResource.getProducts().$promise;
			},
			deleteProducts: function(products) {
				return productsResource.deleteProducts(products).$promise;
			}
		};
	}]);
})();