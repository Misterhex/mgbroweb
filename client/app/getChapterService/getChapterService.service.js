'use strict';

angular.module('mgbrowebApp')
  .factory('getChapterService', function ($http, $q, preloadMangaSources, ENV, underscoreService) {

    var dict = {};

    return function getChapter(category, chapterNo) {
      var key = category + chapterNo;

      var deferred = $q.defer();

      if (dict[key]) {

        deferred.resolve(dict[key]);
      } else {
	
	var postBody = {
		category: category,
	  	chapterNo: chapterNo
	};

        $http.post('/api/chapters/single/', postBody)
          .success(function (chapter) {

            chapter.pages = underscoreService.sortBy(chapter.pages, function (i) {
                return i.pageNo;
            });

            dict[key] = chapter;
            deferred.resolve(chapter);
            
          })
          .error(function (_, err) {
            deferred.reject(err);
          });
      }

      return deferred.promise;
    };

  });
