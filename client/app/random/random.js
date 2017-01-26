'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('random', {
        url: '/random',
        templateUrl: 'app/category/category.html',
        controller: 'RandomCtrl'
      });
  });