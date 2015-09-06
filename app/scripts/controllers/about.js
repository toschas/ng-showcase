'use strict';

/**
 * @ngdoc function
 * @name labDay00002App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labDay00002App
 */
angular.module('labDay00002App')
  .controller('AboutCtrl', function ($scope, $rootScope, $stateParams, $log) {
    var logScope = 'AboutCtrl';
    $scope.param = $stateParams.param;
    $log.debug(logScope, 'param', $scope.param);
    $rootScope.pageTitle = 'About';
    $log.debug(logScope, 'pageTitle', $rootScope.pageTitle);
  }
);
