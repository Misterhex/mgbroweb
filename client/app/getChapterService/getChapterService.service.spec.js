'use strict';

describe('Service: getChapterService', function () {

  // load the service's module
  beforeEach(module('mgbrowebApp'));

  // instantiate service
  var getCurrentChapterService;
  beforeEach(inject(function (_getCurrentChapterService_) {
    getCurrentChapterService = _getCurrentChapterService_;
  }));

  it('should do something', function () {
    expect(!!getCurrentChapterService).toBe(true);
  });

});
