'use strict';

describe('Service: dynamicMetaDescription', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var dynamicMetaDescription;
  beforeEach(inject(function (_dynamicMetaDescription_) {
    dynamicMetaDescription = _dynamicMetaDescription_;
  }));

  it('should do something', function () {
    expect(!!dynamicMetaDescription).toBe(true);
  });

});
