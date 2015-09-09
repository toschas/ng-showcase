'use strict';

describe('Directive: sortIcon', function () {

  // load the directive's module
  beforeEach(module('labDay00002App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.sort = {
      order: null,
      reverse: false
    };
    scope.setSortClicked = 0;
    scope.setSort = function (sortOrder) {
      scope.setSortClicked++;
      if (scope.sort.order === sortOrder) {
        scope.sort.reverse = !scope.sort.reverse;
      } else {
        scope.sort.reverse = false;
      }
      scope.sort.order = sortOrder;
    };
  }));

  beforeEach(inject(function ($compile) {
    element = angular.element(
      '<i data-sort-icon data-sort-icon-attr="balance" data-sort-icon-click="setSort" data-sort-icon-sort="sort"></i>'
    );
    element = $compile(element)(scope);
  }));

  it('should have binded the attributes', inject(function () {
    expect(element.isolateScope().attribute).toBe('balance');
    expect(typeof(element.isolateScope().onClick)).toBe('function');
    expect(element.isolateScope().sort).toBe(scope.sort);
  }));

  it('should call the callback function on click', inject(function () {
    element.triggerHandler('click');
    expect(scope.setSortClicked).toBe(1);
    expect(scope.sort.order).toBe('balance');
  }));

  it('should change the icon based on sort information', inject(function ($rootScope) {
    $rootScope.$digest();

    expect(element.children().hasClass('glyphicon')).toBeTruthy();
    expect(element.children().hasClass('glyphicon-sort')).toBeTruthy();

    element.triggerHandler('click');
    $rootScope.$digest();

    expect(scope.sort.reverse).toBeFalsy();
    expect(element.children().hasClass('glyphicon-sort-by-attributes')).toBeTruthy();

    element.triggerHandler('click');
    $rootScope.$digest();

    expect(scope.sort.reverse).toBeTruthy();
    expect(element.children().hasClass('glyphicon-sort-by-attributes-alt')).toBeTruthy();

    element.triggerHandler('click');
    $rootScope.$digest();

    expect(scope.sort.reverse).toBeFalsy();
    expect(element.children().hasClass('glyphicon-sort-by-attributes')).toBeTruthy();

    scope.sort.order = 'otherAttribute';
    $rootScope.$digest();
    expect(element.children().hasClass('glyphicon-sort-by-attributes-alt')).toBeFalsy();
    expect(element.children().hasClass('glyphicon-sort-by-attributes')).toBeFalsy();
    expect(element.children().hasClass('glyphicon-sort')).toBeTruthy();
  }));
});
