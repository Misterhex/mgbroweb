'use strict';

angular.module('mgbrowebApp')
  .directive('disableEnterKey', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if (event.which === 13) {
            alert("hello")
            event.preventDefault();
          }
        });
      }
    };
  });