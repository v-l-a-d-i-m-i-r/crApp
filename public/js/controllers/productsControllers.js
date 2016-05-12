(function () {
	var app = angular.module('crApp');

	app.controller('productCtrl', ['$scope', function($scope) {
		$scope.product.count = ($scope.currentPage - 1) * $scope.itemsPerPage + ($scope.$index + 1);
	}]);
	
	app.controller('productPageCtrl', ['$scope', '$state', 'Product', function($scope, $state, Product) {
		if ($state.params.prodId) {
			Product.get($state.params.prodId).then(function(data) {
				$scope.product = data;
			});
		} else {
			$scope.product = {};
		}
		
		$scope.submit = function() {
			var action = $scope.product._id ? 'update' : 'create';
			
			Product[action]($scope.product).then(function(data) {
				$state.go('user.home');
			});
		};
	}]);
})();