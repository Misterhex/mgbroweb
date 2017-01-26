'use strict';

angular.module('mgbrowebApp')
  .factory('dynamicMetaDescription', ['$rootScope', '$timeout', '$stateParams', function ($rootScope, $timeout, $stateParams) {

    var listener = function (event, toState) {
     
      $timeout(function () {
        switch (toState.name) {
          case "manga":
            var chapterName = $stateParams.category + " " + $stateParams.chapterNo;
            $rootScope.metaDescriptionContent = chapterName + " - Read " + chapterName + " Manga Scans. Free and No Registration Required for " + chapterName;
            $rootScope.noindex = true;
            break;
          default:
            $rootScope.metaDescriptionContent = "Read Manga Online Free";
            $rootScope.noindex = false;
            break;
        }
      }, 0);
    };

    $rootScope.$on('$stateChangeSuccess', listener);

    return {};
  }]);
