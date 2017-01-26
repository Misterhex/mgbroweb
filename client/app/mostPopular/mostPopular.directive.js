'use strict';

angular.module('mgbrowebApp')
.directive('mostPopular', function () {
	return {
		templateUrl: 'app/mostPopular/mostPopular.html',
	restrict: 'E',
	scope: {
		onLoaded: "&"
	},
	controller: function ($scope, $http) {
		$http.get("api/chapters/mostpopular",{ cache: true}).success(function (results) {

			$scope.mangas = results;

			$scope.onLoaded();
		});
	}
	};
});
