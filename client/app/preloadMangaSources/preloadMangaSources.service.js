'use strict';

angular.module('mgbrowebApp')
  .factory('preloadMangaSources', function (async) {

    function preloadMangaSources(pages) {
      
      // preload each images in the chapter for browser caching
      async.eachSeries(pages.slice(1), function (page, callback) {

          var image = new Image();
          image.src = page.mangaSrc;

          image.addEventListener('load', function () {
            callback(null);
          });

          image.addEventListener('error', function () {
            callback(null);
          });

      });
    }

    return preloadMangaSources;
  });
