'use strict';

describe('Service: underscoreService', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var underscoreService;
  beforeEach(inject(function (_underscoreService_) {
    underscoreService = _underscoreService_;
  }));

  it('should do something', function () {
    expect(!!underscoreService).toBe(true);
  });

});
