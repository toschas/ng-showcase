'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('labDay00002App'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $log) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope,
      $rootScope: $rootScope,
      $log: $log
      // place here mocked dependencies
    });
  }));

  it('should have variable something in the scope', function () {
    expect(scope.something).toBe('something');
  });
});
