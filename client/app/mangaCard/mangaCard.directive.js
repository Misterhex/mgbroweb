'use strict';

angular.module('mgbrowebApp')
  .directive('mangaCard', function () {
    return {
      templateUrl: 'app/mangaCard/mangaCard.html',
      restrict: 'E',
      scope: {
        chapter: '=',
      },
      link: function (scope, element, attrs) {
            
      }
    };
  });