'use strict';

describe('Directive: disqus', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/disqus/disqus.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disqus></disqus>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the disqus directive');
  }));
});