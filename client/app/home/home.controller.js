'use strict';

angular.module('mgbrowebApp')
    .controller('HomeCtrl', function ($scope, $http, $state) {

        $scope.loadedCount = 0;

        $scope.onLoaded = function () {
            $scope.loadedCount++;
        };

        $scope.selected = undefined;

        $scope.onSelected = function (item) {
            $state.go("category", {
                category: item._id.name
            });
        };
        
    });
