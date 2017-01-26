'use strict';

describe('Directive: tips', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/tips/tips.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tips></tips>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tips directive');
  }));
});