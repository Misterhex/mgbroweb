'use strict';

describe('Directive: continueReading', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/continueReading/continueReading.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<continue-reading></continue-reading>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the continueReading directive');
  }));
});