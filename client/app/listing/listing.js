'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('listing', {
        url: '/manga-list',
        templateUrl: 'app/listing/listing.html',
        controller: 'ListingCtrl'
      });
  });