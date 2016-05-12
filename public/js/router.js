(function () {
	var app = angular.module('crApp');

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/404");

		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "/templates/loginPageTmpl.html",
				controller: "loginCtrl"
			})
			.state('register', {
				url: "/register",
				templateUrl: "/templates/registerPageTmpl.html",
				controller: "loginCtrl"
			})
			.state('user', {
				templateUrl: "/templates/userPageTmpl.html",
				controller: "userCtrl"
			})
			.state('user.home', {
				url: "/home",
				templateUrl: "/templates/homePageTmpl.html",
				controller: "userHomeCtrl"
			})
			.state('user.account', {
				url: "/account",
				templateUrl: "/templates/accountPageTmpl.html",
				controller: "userAccountCtrl"
			})
			.state('user.product', {
				url: "/products/:prodId",
				templateUrl: "/templates/productPageTmpl.html",
				controller: "productPageCtrl"
			})
			.state('404', {
				url: "/404",
				templateUrl: "/templates/404PageTmpl.html"
			});
	}]);
})();