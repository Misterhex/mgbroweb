'use strict';

describe('Service: urlDecoder', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var urlDecoder;
  beforeEach(inject(function (_urlDecoder_) {
    urlDecoder = _urlDecoder_;
  }));

  it('should do something', function () {
    expect(!!urlDecoder).toBe(true);
  });

});
