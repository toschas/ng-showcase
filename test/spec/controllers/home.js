'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('labDay00002App'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope,
      $rootScope: $rootScope
      // place here mocked dependencies
    });
  }));

  it('should have variable something in the scope', function () {
    expect(scope.something).toBe('something');
  });
});
