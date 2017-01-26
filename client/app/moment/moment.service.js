'use strict';

angular.module('mgbrowebApp')
  .factory('moment', function ($window) {
   
    return $window.moment;
  });
