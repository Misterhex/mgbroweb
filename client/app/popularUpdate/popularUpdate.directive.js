angular.module('mgbrowebApp')
    .directive('popularUpdate', function () {
        return {
            templateUrl: 'app/popularUpdate/popularUpdate.html',
            scope: {
                onLoaded: "&"
            },
            restrict: 'E',
            controller: ["$scope", "$http", "underscoreService", controller]
        };

        function controller($scope, $http, _) {
            $http.get("api/chapters/popularupdate").success(function (chapters) {

                $scope.chapters = chapters;
                $scope.onLoaded();
            });
        }
    });
