'use strict';

angular.module('mgbrowebApp')
  .directive('slider', function () {
    return {
      templateUrl: 'app/slider/slider.html',
      restrict: 'E',
      controller: function($scope, $http){
        $scope.interval = 5000;
        
        $http.get("api/chapters/recent").success(function(recentChapters){
          
          var slides = recentChapters.map(function(i) {
            return {
              image: i.category.categoryImage,
              text: i.chapter.name
            };
          });
          
          $scope.slides = slides;
        });
        
      }
    };
  });