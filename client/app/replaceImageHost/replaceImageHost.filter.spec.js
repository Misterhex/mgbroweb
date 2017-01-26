'use strict';

describe('Filter: replaceImageHost', function () {

  // load the filter's module
  beforeEach(module('mgbrowebApp'));

  // initialize a new instance of the filter before each test
  var replaceImageHost;
  beforeEach(inject(function ($filter) {
    replaceImageHost = $filter('replaceImageHost');
  }));

  it('should return the input prefixed with "replaceImageHost filter:"', function () {
    var text = 'angularjs';
    expect(replaceImageHost(text)).toBe('replaceImageHost filter: ' + text);
  });

});
