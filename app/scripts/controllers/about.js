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

    var getWithDefault = function (value, defaultValue) {
      return lodash.isUndefined(value) ? defaultValue : value;
    };

    $scope.sort = {
      order: getWithDefault($stateParams.order, 'index'),
      reverse: getWithDefault(angular.fromJson($stateParams.reverse), false)
    };

    $scope.setSort = function (sortOrder) {
      if ($scope.sort.order === sortOrder) {
        $scope.sort.reverse = !$scope.sort.reverse;
      } else {
        $scope.sort.reverse = false;
      }
      $scope.sort.order = sortOrder;
      updateQueryParams($scope.sort, $scope.currentPage);
    };

    var updateQueryParams = function (queryParams, page) {
      $log.debug(logScope, '$stateParams', $stateParams);
      $log.debug(logScope, 'updating query params', queryParams);
      $stateParams.order = queryParams.order;
      $stateParams.reverse = queryParams.reverse;
      $stateParams.page = page;
      $state.transitionTo($state.current, $stateParams, { notify: false });
    };

    $scope.pageSize = 3;

    $scope.currentPage = getWithDefault(angular.fromJson($stateParams.page), 1);
    $log.debug(logScope, 'currentPage', $scope.currentPage);

    $scope.items = Item.getPage($scope.currentPage, $scope.pageSize);
    $log.debug(logScope, 'itemCount', Item.getAll().length);

    $scope.pageCount = Math.floor((Item.getAll().length - 1) / $scope.pageSize) + 1;
    $log.debug(logScope, 'pageCount', $scope.pageCount);

    $scope.pages = [];
    for (var i = 1; i <= $scope.pageCount; i++) {
      $scope.pages.push(i);
    }

    $scope.changePage = function ($event, page) {
      $event.preventDefault();
      $scope.pageSize = 3;
      $scope.currentPage = page;
      $log.debug(logScope, 'currentPage', $scope.currentPage);
      $scope.items = Item.getPage($scope.currentPage, $scope.pageSize);
      updateQueryParams($scope.sort, $scope.currentPage);
    };

    $scope.previousPage = function ($event) {
      $event.preventDefault();
      if ($scope.currentPage > 1) {
        $scope.changePage($event, $scope.currentPage - 1);
      }
    };

    $scope.nextPage = function ($event) {
      $event.preventDefault();
      if ($scope.currentPage < $scope.pageCount) {
        $scope.changePage($event, $scope.currentPage + 1);
      }
    };
  }
);
