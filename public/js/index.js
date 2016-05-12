(function () {
	var app = angular.module('crApp', ['ui.router', 'ngResource', 'ngMessages', 'ui.bootstrap', 'angularSpinner']);

	app.constant('apiUrls', {
		userResourceUrl: '/api/user/:action',
		productsResourceUrl: '/api/products/:action',
		productResourceUrl: '/api/product/:action/:prodId'
	});

	app.config(["$locationProvider", function ($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}]);

	app.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push('authInterceptor');
	}]);
	
	app.service('authInterceptor', ['$q', '$injector', function ($q, $injector) {
		this.responseError = function (response) {
			if (response.status == 401) {
				$injector.get('$state').go('login');
			}
			return $q.reject(response);
		};
	}]);
})();