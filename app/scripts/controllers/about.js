'use strict';

/**
 * @ngdoc function
 * @name labDay00002App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labDay00002App
 */
angular.module('labDay00002App')
  .controller('AboutCtrl', function ($scope, $rootScope, $stateParams, $state, Item, lodash, $log) {
    var logScope = 'AboutCtrl';

    $scope.param = $stateParams.param;
    $log.debug(logScope, 'param', $scope.param);

    $rootScope.pageTitle = 'About';
    $log.debug(logScope, 'pageTitle', $rootScope.pageTitle);

    $scope.sort = {
      order: lodash.isUndefined($stateParams.order) ? 'index' : $stateParams.order,
      reverse: lodash.isUndefined($stateParams.reverse) ? false : angular.fromJson($stateParams.reverse)
    };

    $scope.setSort = function (sortOrder) {
      if ($scope.sort.order === sortOrder) {
        $scope.sort.reverse = !$scope.sort.reverse;
      } else {
        $scope.sort.reverse = false;
      }
      $scope.sort.order = sortOrder;
      updateQueryParams($scope.sort);
    };

    $scope.getSortIcon = function (column) {
      return {
        'glyphicon-sort': $scope.sort.order != column,
        'glyphicon-sort-by-attributes': $scope.sort.order == column && !$scope.sort.reverse,
        'glyphicon-sort-by-attributes-alt': $scope.sort.order == column && $scope.sort.reverse
      };
    };

    var updateQueryParams = function (queryParams) {
      $log.debug(logScope, '$stateParams', $stateParams);
      $log.debug(logScope, 'updating query params', queryParams);
      $stateParams.order = queryParams.order;
      $stateParams.reverse = queryParams.reverse;
      $state.transitionTo($state.current, $stateParams, { notify: false });
    };

    $scope.items = Item.getAll();

    $log.debug(logScope, 'updating query params', Item.get('779369b6-7144-4a49-93e5-169fdc439ff1'));
  }
);
