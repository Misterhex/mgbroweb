'use strict';

describe('Directive: disableEnterKey', function () {

  // load the directive's module
  beforeEach(module('mgbrowebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disable-enter-key></disable-enter-key>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the disableEnterKey directive');
  }));
});