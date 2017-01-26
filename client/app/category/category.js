'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/{category:beautify}',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl',
        ncyBreadcrumb: {
          label: '{{$stateParams.category}}'
        },
        resolve: {
          $title: ['$stateParams', 'urlDecoder', function ($stateParams, urlDecoder) {
            return urlDecoder($stateParams.category);
          }]
        }
      });
  });