'use strict';

describe('Factory: Item', function () {

  // load the service's module
  beforeEach(module('labDay00002App'));

  // instantiate factory
  var item;
  beforeEach(inject(function (_item_) {
    item = _item_;
  }));

  it('should do something', function () {
    expect(!!item).toBe(true);
  });

});
