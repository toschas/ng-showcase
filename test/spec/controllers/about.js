'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('labDay00002App'));

  var AboutCtrl,
    scope,
    param;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    param = 'Toschas';
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope,
      $rootScope: $rootScope,
      $stateParams: {
        param: param
      }
      // place here mocked dependencies
    });
  }));

  it('should have variable something to be equal to passed param: ' + param, function () {
    console.log(scope);
    expect(scope.param).toBe(param);
  });
});
