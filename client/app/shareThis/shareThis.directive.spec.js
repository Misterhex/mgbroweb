'use strict';

describe('Directive: shareThis', function () {

  // load the directive's module and view
  beforeEach(module('mgbrowebApp'));
  beforeEach(module('app/shareThis/shareThis.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<share-this></share-this>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shareThis directive');
  }));
});