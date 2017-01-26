'use strict';

angular.module('mgbrowebApp')
  .directive('disqus', function () {
    return {
      templateUrl: 'app/disqus/disqus.html',
      restrict: 'E',
    };
  });
