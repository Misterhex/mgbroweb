'use strict';

angular.module('mgbrowebApp')
  .controller('ChapterCtrl', function ($scope, $stateParams, $state, urlDecoder, $http) {

    $scope.$stateParams = $stateParams;
    $scope.title = $stateParams.category + ' ' + $stateParams.chapterNo;
    $scope.keyword = $scope.title;
  });
