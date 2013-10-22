'use strict';

angular.module('flashtestApp')
.controller('MainCtrl', function ($scope, flash, $rootScope) {
  $rootScope.showFlash = false;
  flash.error = 'main flash!'
});
