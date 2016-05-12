(function () {
	var app = angular.module('crApp');

	app.controller('userCtrl', ['$scope', '$rootScope', 'User', '$state', function ($scope, $rootScope, User, $state) {
		if (!$rootScope.user) {
			User.auth().then(function (data) {
				$rootScope.user = data;
			});
		}
		
		$scope.logout = function () {
			User.logout().then(function (data) {
				$rootScope.user = 0;
				$state.go('login');
			});
		};
	}]);
	
	app.controller('userAccountCtrl', ['$scope', '$rootScope', 'User', function ($scope, $rootScope, User) {
		$scope.submit = function() {
			return User.update($scope.user).then(function(data) {
				$rootScope.user = data;
			});
		};
		
		$scope.isShownChangePswdForm = false;
		
		$scope.password = {};
		
		$scope.openChangePswdForm = function() {
			$scope.isShownChangePswdForm = true;
		};
		
		$scope.changePassword = function() {
			$scope.user.password = $scope.password.new;
			
			$scope.submit().then(function(data) {
				$scope.password = {};
				$scope.isShownChangePswdForm = false;
			});
		};
	}]);
	
	app.controller('userHomeCtrl', ['$scope', '$rootScope', 'Products', function ($scope, $rootScope, Products) {
		$scope.startSpinner();
		
		Products.getProducts().then(function(data) {
			$scope.products = data;
			$scope.stopSpinner();
		}, function() {
			$scope.stopSpinner();
		});
		
		$scope.perPageArr = [10, 20, 50];
		
		$scope.currentPage = 1;
		
		$scope.itemsPerPage = $scope.perPageArr[0];
		
		$scope.oneAtATime = true;
		
		$scope.onItemsPerPageChange = function() {
			$scope.currentPage = 1;
		};
		
		$scope.deleteProducts = function() {
			var checkedProducts = [];
			
			if (!$scope.products.length) {
				return;
			}
			
			for (var i = 0; i < $scope.products.length; i++) {
				if ($scope.products[i].delete) {
					checkedProducts.push($scope.products[i]);
				}
			}
			
			$scope.startSpinner();
			
			Products.deleteProducts(checkedProducts).then(function(data) {
				$scope.products = data;
				$scope.stopSpinner();
			});
		};
	}]);
})();