'use strict';

angular.module('mgbrowebApp')
  .directive('skinAd', function () {
    return {
      templateUrl: 'app/skinAd/skinAd.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });