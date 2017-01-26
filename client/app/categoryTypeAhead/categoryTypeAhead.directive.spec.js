'use strict';

describe('Directive: categoryTypeAhead', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/categoryTypeAhead/categoryTypeAhead.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<category-type-ahead></category-type-ahead>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the categoryTypeAhead directive');
  }));
});