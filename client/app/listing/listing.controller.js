'use strict';

angular.module('mgbrowebApp')
    .controller('ListingCtrl', ['$scope', '$http', function ($scope, $http) {

        $http.get('/api/listings/').success(function (listing) {
            $scope.listing = listing;
        });

    }]);
