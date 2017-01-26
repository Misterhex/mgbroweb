'use strict';

angular.module('mgbrowebApp')
  .factory('urlDecoder', function () {
    return function (str) {
      return str && str.replace(/_/g, " ");
    };
  });
