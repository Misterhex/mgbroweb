'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('404page', {
        url: '/404page',
        templateUrl: 'app/404page/404page.html',
        controller: '404pageCtrl'
      });
  });