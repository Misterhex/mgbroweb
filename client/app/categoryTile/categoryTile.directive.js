'use strict';

angular.module('mgbrowebApp')
    .directive('categoryTile', function () {
        return {
            templateUrl: 'app/categoryTile/categoryTile.html',
            restrict: 'E',
            scope: {
                category: "="
            },
            link: function (scope, element, attrs) {
            }
        };
    });