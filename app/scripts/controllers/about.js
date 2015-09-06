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
    $scope.items = [
      {
        "_id": "55ec6cfda50387260e88180b",
        "index": 0,
        "guid": "ae06db0d-77af-4c7b-afca-1a50969dd095",
        "isActive": false,
        "balance": "$2,476.77",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec6cfd456dfd4388d67196",
        "index": 1,
        "guid": "b9542103-d9b9-48ee-b571-79c07d02238f",
        "isActive": true,
        "balance": "$3,631.33",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec6cfd75becfe090d9c8de",
        "index": 2,
        "guid": "821077b3-3e67-434e-8046-99f30611d39f",
        "isActive": false,
        "balance": "$2,988.11",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec6cfd49331edff1faa36b",
        "index": 3,
        "guid": "2080cfbe-5066-45e9-951d-3d52fd3eb32c",
        "isActive": true,
        "balance": "$1,479.42",
        "picture": "http://placehold.it/128x128"
      }
    ]
  }
);
