'use strict';

/**
 * @ngdoc directive
 * @name mgbrowebApp.directive:skinAd
 * @description
 * # skinAd
 */
angular.module('mgbrowebApp')
  .directive('skinAd', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the skinAd directive');
      }
    };
  });
