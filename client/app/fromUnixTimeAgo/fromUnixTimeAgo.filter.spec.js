'use strict';

describe('Filter: fromUnixTimeAgo', function () {

  // load the filter's module
  beforeEach(module('mgbrowebApp'));

  // initialize a new instance of the filter before each test
  var fromUnixTimeAgo;
  beforeEach(inject(function ($filter) {
    fromUnixTimeAgo = $filter('fromUnixTimeAgo');
  }));

  it('should return the input prefixed with "fromUnixTimeAgo filter:"', function () {
    var text = 'angularjs';
    expect(fromUnixTimeAgo(text)).toBe('fromUnixTimeAgo filter: ' + text);
  });

});
