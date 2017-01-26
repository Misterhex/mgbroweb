'use strict';

describe('Directive: imageLoaded', function () {

  // load the directive's module
  beforeEach(module('mgbrowebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-loaded></image-loaded>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageLoaded directive');
  }));
});