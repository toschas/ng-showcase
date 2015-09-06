'use strict';

/**
 * @ngdoc function
 * @name labDay00002App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the labDay00002App
 */
angular.module('labDay00002App')
  .controller('ContactCtrl', function ($scope, $rootScope, $log) {
    var logScope = 'ContactCtrl';
    $scope.something = 'something';
    $log.debug(logScope, 'something', $scope.something);
    $rootScope.pageTitle = 'Contact';
    $log.debug(logScope, 'pageTitle', $rootScope.pageTitle);
  });
