'use strict';

/**
 * @ngdoc directive
 * @name labDay00002App.directive:sortIcon
 * @description
 * # sortIcon
 */
angular.module('labDay00002App')
  .directive('sortIcon', function () {
    return {
      template:
        '<i class="btn btn-xs glyphicon pull-right" data-ng-class="getSortIcon()"></i>',
      restrict: 'AEC',
      scope: {
        attribute: '@sortIconAttr',
        onClick: '=sortIconClick',
        sort: '=sortIconSort'
      },
      controller: function ($scope) {
        $scope.getSortIcon = function () {
          return {
            'glyphicon-sort': $scope.sort.order !== $scope.attribute,
            'glyphicon-sort-by-attributes': $scope.sort.order === $scope.attribute && !$scope.sort.reverse,
            'glyphicon-sort-by-attributes-alt': $scope.sort.order === $scope.attribute && $scope.sort.reverse
          };
        };
      },
      link: function (scope, element) {
        element.bind('click', function () {
          scope.onClick(scope.attribute);
        });
      }
    };
  });
