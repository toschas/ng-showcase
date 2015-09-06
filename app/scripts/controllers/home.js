'use strict';

/**
 * @ngdoc function
 * @name labDay00002App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the labDay00002App
 */
angular.module('labDay00002App')
  .controller('HomeCtrl', function ($scope, $rootScope, $log) {
    var logScope = 'HomeCtrl';

    $scope.something = 'something';
    $log.debug(logScope, 'param', $scope.something);

    $rootScope.pageTitle = 'Home';
    $log.debug(logScope, 'pageTitle', $rootScope.pageTitle);
  });
