'use strict';

angular.module('mgbrowebApp')
  .directive('seoText', function () {
    return {
      scope: {
        keyword: "="
      },
      templateUrl: 'app/seoText/seoText.html',
      restrict: 'E'
    };
  });