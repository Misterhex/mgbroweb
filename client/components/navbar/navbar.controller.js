'use strict';

angular.module('mgbrowebApp')
    .controller('NavbarCtrl', function ($scope, $location, $http, $window) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }, {
                'title': 'Manga List',
                'link': '/manga-list'
        }];
        
        $http.get("api/genres").then(function(genres) {
            $scope.genres = genres.data.map(function(genre){
               return {
                 title: genre.name,
                 link: '/genres/' + genre.name
               };
            });
        });

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };
        
        $scope.isActiveGenre = function (route) {
            return $location.path().startsWith("/genres");
        };
        
        $scope.onClick = function (link) {
            if ($location.$$path === "/random") {
               $window.location.reload();
            } else {
                $location.path(link);
            }
            $scope.isCollapsed = true;
        };

    });
