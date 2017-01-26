'use strict';

describe('Directive: recentChapter', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/recentChapter/recentChapter.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recent-chapter></recent-chapter>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the recentChapter directive');
  }));
});