'use strict';

describe('Directive: skinAd', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/skinAd/skinAd.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skin-ad></skin-ad>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the skinAd directive');
  }));
});