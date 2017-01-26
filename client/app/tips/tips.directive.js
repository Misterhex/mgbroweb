'use strict';

angular.module('mgbrowebApp')
  .directive('tips', function () {
    return {
      templateUrl: 'app/tips/tips.html',
      restrict: 'E'
    };
  });