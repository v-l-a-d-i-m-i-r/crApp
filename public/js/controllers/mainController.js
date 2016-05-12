(function () {
	var app = angular.module('crApp');

	app.controller('mainCtrl', ['$scope', '$rootScope', '$state', 'User', 'usSpinnerService', function ($scope, $rootScope, $state, User, usSpinnerService) {
		$scope.patterns = {
			price: /^((\d)+)(,)(\d){2}$/,
			password: /^[a-zA-Z0-9]+$/,
			phone: /^[0-9]+$/
		};

		$scope.spinnerConfig = function () {
			return {
				radius: 30,
				width: 8,
				length: 16
			}
		};

		$scope.startSpinner = function () {
			usSpinnerService.spin('spinner-1');
		};

		$scope.stopSpinner = function () {
			usSpinnerService.stop('spinner-1');
		};
	}]);
})();