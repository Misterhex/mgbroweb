'use strict';

describe('Controller: ChapterCtrl', function () {

  // load the controller's module
  beforeEach(module('mgbrowebApp'));

  var ChapterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterCtrl = $controller('ChapterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
