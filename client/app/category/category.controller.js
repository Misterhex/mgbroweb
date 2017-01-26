'use strict';

angular.module('mgbrowebApp')
  .controller('CategoryCtrl', ['$scope', '$http', '$stateParams', 'urlDecoder', function ($scope, $http, $stateParams, urlDecoder) {
    $stateParams.category = urlDecoder($stateParams.category);
    $scope.$stateParams = $stateParams;

    var category = encodeURIComponent($stateParams.category);

    $http.get('api/listings/single/' + category).success(function (category) {
      $scope.category = category;
    });

  }]);
