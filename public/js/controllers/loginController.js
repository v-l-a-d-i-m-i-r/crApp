(function () {
	var app = angular.module('crApp');

	app.controller('loginCtrl', ['$scope', '$rootScope', 'User', '$state', function ($scope, $rootScope, User, $state) {
		$scope.user = {};
		
		$scope.submit = function(action) {
			var action = action === 'login' ? 'login' : 'create';
			
			User[action]($scope.user).then(function(data) {
				$rootScope.user = data;
				$state.go('user.home');
			});
		};
	}]);
})();