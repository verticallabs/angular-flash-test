'use strict';

angular.module('flashtestApp')
  .controller('OuterCtrl', function ($scope, flash) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    flash.error = "UH OH";  
  });
