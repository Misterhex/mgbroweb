'use strict';

describe('Controller: 404pageCtrl', function () {

  // load the controller's module
  beforeEach(module('mgbrowebApp'));

  var 404pageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    404pageCtrl = $controller('404pageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
