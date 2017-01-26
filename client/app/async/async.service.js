'use strict';

angular.module('mgbrowebApp')
  .factory('async', ["$window", function ($window) {
    return $window.async;
  }]);
