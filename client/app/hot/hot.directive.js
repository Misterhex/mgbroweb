'use strict';

angular.module('mgbrowebApp')
  .directive('hot', function () {
    return {
      templateUrl: 'app/hot/hot.html',
      restrict: 'E',
      scope: {
        onLoaded: "&"
      },
      controller: function ($scope, $http) {
        $http.get("api/chapters/hot").success(function (results) {
          $scope.mangas = results;
          $scope.onLoaded();
        });
      }
    };
  });
