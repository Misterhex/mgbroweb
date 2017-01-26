'use strict';

describe('Controller: RandomCtrl', function () {

  // load the controller's module
  beforeEach(module('mgbrowebApp'));

  var RandomCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RandomCtrl = $controller('RandomCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
