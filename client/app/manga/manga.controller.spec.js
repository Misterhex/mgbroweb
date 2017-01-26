'use strict';

describe('Controller: MangaCtrl', function () {

  // load the controller's module
  beforeEach(module('mgbrowebApp'));

  var MangaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MangaCtrl = $controller('MangaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
