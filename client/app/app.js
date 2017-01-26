'use strict';

angular.module('mgbrowebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ngTouch',
  'ncy-angular-breadcrumb',
  'ui.router.title',
  'angularUtils.directives.dirPagination',
  'config',
  'angular-loading-bar',
  'ngStorage'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    var beautify = {
      encode: function (str) { return str && str.replace(/ /g, "_"); },
      decode: function(str) { 
	      return str && str.replace(/_/g, " "); 
      },
      is: angular.isString,
    };

    $urlMatcherFactoryProvider.type('beautify', beautify);

  })
  .run(['dynamicMetaDescription', function () {

  }]);
