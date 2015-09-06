'use strict';

/**
 * @ngdoc function
 * @name labDay00002App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labDay00002App
 */
angular.module('labDay00002App')
  .controller('AboutCtrl', function ($scope, $rootScope, $stateParams, $state, $log) {
    var logScope = 'AboutCtrl';
    $scope.param = $stateParams.param;
    $log.debug(logScope, 'param', $scope.param);
    $rootScope.pageTitle = 'About';
    $log.debug(logScope, 'pageTitle', $rootScope.pageTitle);

    $scope.sort = {
      order: $stateParams.sort || 'index',
      reverse: $stateParams.reverse || false
    };

    $scope.setSort = function (sortType) {
      if ($scope.sort.order === sortType) {
        $scope.sort.reverse = !$scope.sort.reverse;
      } else {
        $scope.sort.reverse = false;
      }
      $scope.sort.order = sortType;
    };

    $scope.getSortIcon = function (column) {
      return {
        'glyphicon-sort': $scope.sort.order != column,
        'glyphicon-sort-by-attributes': $scope.sort.order == column && !$scope.sort.reverse,
        'glyphicon-sort-by-attributes-alt': $scope.sort.order == column && $scope.sort.reverse
      };
    };

    $scope.$watch('[sort.order, sort.reverse]', function (newValue, oldValue) {
      $log.debug(logScope, 'sort is changed', oldValue, '>', newValue);
      if (newValue !== oldValue) {
        updateQueryParams($scope.sort);
      }
    });

    var updateQueryParams = function (queryParams) {
      $log.debug(logScope, 'updating query params', $scope.sort);
      $state.transitionTo('about', queryParams, { notify: false });
    };

    $scope.items = [
      {
        "_id": "55ec764a1ed16fed3637f628",
        "index": 0,
        "guid": "779369b6-7144-4a49-93e5-169fdc439ff1",
        "isActive": true,
        "balance": "$3,099.53",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a27982db7f510ba0c",
        "index": 1,
        "guid": "2f32b1f3-2d3e-4e24-a312-5517c5f89267",
        "isActive": true,
        "balance": "$3,042.93",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a1e4c02e9006687ad",
        "index": 2,
        "guid": "c60e84ed-7939-43bb-b58c-ecf14778724d",
        "isActive": true,
        "balance": "$2,999.82",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764af15f0f381988f849",
        "index": 3,
        "guid": "50e2495b-4661-4289-a633-39f4f567c437",
        "isActive": false,
        "balance": "$1,067.21",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764aecbe331f2bfba54a",
        "index": 4,
        "guid": "52be2a6f-bbff-4ade-88be-362f3b3c38b9",
        "isActive": false,
        "balance": "$3,765.42",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a252fad2cd5bdb952",
        "index": 5,
        "guid": "e989b146-b2a0-4f3a-bbff-e12f922f44e0",
        "isActive": true,
        "balance": "$3,287.31",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a9f162420931ce233",
        "index": 6,
        "guid": "85243b97-2c6a-4266-a0ec-f472926aad31",
        "isActive": true,
        "balance": "$1,821.41",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a90c68c887539c054",
        "index": 7,
        "guid": "5f323b59-89f5-490a-b2cb-841c5985711b",
        "isActive": true,
        "balance": "$1,768.62",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a7274f635505fca2e",
        "index": 8,
        "guid": "6a248593-3e7d-437a-84cc-f0f8861dbddc",
        "isActive": true,
        "balance": "$2,762.91",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a24d4f82f9bd3a74f",
        "index": 9,
        "guid": "7c82860b-8db0-46a3-b4ce-b8b41ebf3f28",
        "isActive": false,
        "balance": "$2,644.14",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a12218df53fb85aeb",
        "index": 10,
        "guid": "e0669f4f-9ede-4f3b-923b-660c61d4bcca",
        "isActive": true,
        "balance": "$1,658.63",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a9ad0e7b570b05982",
        "index": 11,
        "guid": "2653ea97-e664-4f64-a6dd-334a3774bca5",
        "isActive": true,
        "balance": "$2,206.24",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a70489af72fc85bd4",
        "index": 12,
        "guid": "fab5f656-0969-4bd8-a965-b48368ed1b8a",
        "isActive": false,
        "balance": "$2,285.29",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764a79568670bb0d425c",
        "index": 13,
        "guid": "1f37c960-fb2e-4178-aaba-3bfe3477998b",
        "isActive": false,
        "balance": "$1,109.48",
        "picture": "http://placehold.it/128x128"
      },
      {
        "_id": "55ec764aff09e32a2c0d7e98",
        "index": 14,
        "guid": "8e3b4dea-4ea4-451f-9841-6b7594a550e0",
        "isActive": true,
        "balance": "$1,311.67",
        "picture": "http://placehold.it/128x128"
      }
    ];
  }
);
