'use strict';

describe('Directive: mostPopular', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/mostPopular/mostPopular.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<most-popular></most-popular>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mostPopular directive');
  }));
});