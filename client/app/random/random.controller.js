'use strict';

angular.module('mgbrowebApp')
    .controller('RandomCtrl', ['$scope', '$http', '$stateParams', 'urlDecoder', function ($scope, $http, $stateParams, urlDecoder) {

    $scope.$stateParams = $stateParams;

    $http.get('api/listings/random/').success(function (category) {
      $scope.category = category;
      $scope.$stateParams.category = $scope.category.category_name;
    });

  }]);
