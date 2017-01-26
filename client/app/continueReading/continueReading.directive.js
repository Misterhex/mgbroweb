'use strict';

angular.module('mgbrowebApp')
  .directive('continueReading', function () {
    return {
      templateUrl: 'app/continueReading/continueReading.html',
      restrict: 'E',
      controller: function($scope, $localStorage) {
         $scope.$localStorage = $localStorage;
         $scope.isDismissed = false;
         
         $scope.closeAlert = function closeAlert() {
           $scope.isDismissed = true;
         };
         
         $scope.alertType = "success";
      }
    };
  });
