'use strict';

angular.module('mgbrowebApp')
  .directive('shareThis', function () {
    return {
      templateUrl: 'app/shareThis/shareThis.html',
      restrict: 'E'
    };
  });