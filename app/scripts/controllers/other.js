'use strict';

angular.module('flashtestApp')
  .controller('OtherCtrl', function ($scope, flash, $rootScope) {
    $rootScope.showFlash = true;
    flash.error = 'outer flash!'
  });
