'use strict';

describe('Service: async', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var async;
  beforeEach(inject(function (_async_) {
    async = _async_;
  }));

  it('should do something', function () {
    expect(!!async).toBe(true);
  });

});
