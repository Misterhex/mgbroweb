'use strict';

describe('Directive: seoText', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/seoText/seoText.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<seo-text></seo-text>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the seoText directive');
  }));
});