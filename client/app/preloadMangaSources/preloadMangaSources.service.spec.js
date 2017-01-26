'use strict';

describe('Service: preloadMangaSources', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var preloadMangaSources;
  beforeEach(inject(function (_preloadMangaSources_) {
    preloadMangaSources = _preloadMangaSources_;
  }));

  it('should do something', function () {
    expect(!!preloadMangaSources).toBe(true);
  });

});
