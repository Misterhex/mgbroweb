'use strict';

angular.module('mgbrowebApp')
    .directive('recentChapter', function () {

        function controller($scope, $http, _) {
            $http.get("api/chapters/recent").success(function (recentChapters) {
                $scope.recentChapters = _.take(recentChapters, 30);
                $scope.onLoaded();
            });
        }

        return {
            templateUrl: 'app/recentChapter/recentChapter.html',
            scope: {
                onLoaded: "&"
            },
            restrict: 'E',
            controller: ["$scope", "$http", "underscoreService", controller]
        };
    });
