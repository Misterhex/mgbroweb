'use strict';

angular.module('mgbrowebApp')
  .directive('upcomingFooter', function () {
    return {
      templateUrl: 'app/upcomingFooter/upcomingFooter.html',
      restrict: 'EA'
    };
  });