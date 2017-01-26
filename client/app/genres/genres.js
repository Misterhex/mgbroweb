'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('genres', {
        url: '/genres/:genre',
        templateUrl: 'app/genres/genres.html',
        controller: 'GenresCtrl'
      });
  });