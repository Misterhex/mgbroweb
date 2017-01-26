'use strict';

angular.module('mgbrowebApp')
    .controller('GenresCtrl', function ($scope, $stateParams, $http) {
        $scope.$stateParams = $stateParams;

        $http.get('/api/listings/genre/' + $stateParams.genre).success(function (listing) {
            $scope.listing = listing;
        });
        
        $http.get('/api/genres/').success(function(genres){
            $scope.genres = genres.filter(function(g) {
                return g.name;
            });
        });
    });
