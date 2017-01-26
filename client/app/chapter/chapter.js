'use strict';

angular.module('mgbrowebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chapter', {
        url: '/chapter/{category:beautify}/{chapterNo}',
        templateUrl: 'app/chapter/chapter.html',
        controller: 'ChapterCtrl',
        ncyBreadcrumb: {
          label: "{{$stateParams.category + ' ' + $stateParams.chapterNo}}",
          parent: "category"
        },

        resolve: {
          $title: ['$stateParams', 'urlDecoder', function ($stateParams, urlDecoder) {
            return urlDecoder($stateParams.category);
          }]
        }
      });
  });