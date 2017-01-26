'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manga', {
	      url: '/manga/{category:beautify}/{chapterNo}/:pageNo',
        templateUrl: 'app/manga/manga.html',
        controller: 'MangaCtrl',
        ncyBreadcrumb: {
          label: "{{$stateParams.category + ' ' + $stateParams.chapterNo}}",
          parent: "category"
        },
        resolve: {
          $title: ['$stateParams', 'urlDecoder', function($stateParams, urlDecoder) {
            return urlDecoder($stateParams.category) + " " + $stateParams.chapterNo + " - Read " + urlDecoder($stateParams.category) + " " + $stateParams.chapterNo + " - Page " + $stateParams.pageNo;
          }]
        }
      });
  });
