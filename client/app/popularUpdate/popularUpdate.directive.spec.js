'use strict';

describe('Directive: popularUpdate', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/popularUpdate/popularUpdate.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<popular-update></popular-update>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the popularUpdate directive');
  }));
});