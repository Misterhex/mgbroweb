'use strict';

angular.module('mgbrowebApp')
    .directive('categoryTypeAhead', function () {
        return {
            templateUrl: 'app/categoryTypeAhead/categoryTypeAhead.html',
            restrict: 'E',
            controller: ["$scope", "$http", "$rootScope", "$state", controller]
        };

        function controller($scope, $http, $rootScope, $state) {

            $scope.getLocation = function (val) {
                return $http.get('api/chapters/search/', {
                    params: {
                        keyword: val
                    }
                }, {
                        ignoreLoadingBar: true
                    }).then(function (results) {
                        return results.data;
                    });
            };

            $scope.onSelected = function (item) {
                $state.go('category', { category: item._id.name });
                $scope.selected = "";
            }
        }

    });