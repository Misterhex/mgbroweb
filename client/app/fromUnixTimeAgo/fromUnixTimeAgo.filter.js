'use strict';

angular.module('mgbrowebApp')
  .filter('fromUnixTimeAgo', function () {
    return function (input) {
       return moment.unix(parseInt(input)).fromNow();
    };
  });
