(function () {
	var app = angular.module('crApp');

	app.filter('productsFilter', function() {
		return function(items, itemsPerPage, currentPage) {
			if (!items) {
				return;
			}

			return items.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage);
		}
	})
})();