'use strict';

angular.module('flashtestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'angular-flash.service', 'angular-flash.flash-alert-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/other', {
        templateUrl: 'views/other.html',
        controller: 'OtherCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
