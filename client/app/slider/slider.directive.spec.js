'use strict';

describe('Directive: slider', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/slider/slider.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slider></slider>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the slider directive');
  }));
});