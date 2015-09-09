'use strict';

describe('Factory: Item', function () {

  // load the service's module
  beforeEach(module('labDay00002App'));

  // instantiate factory
  var Item;
  beforeEach(inject(function (_Item_) {
    Item = _Item_;
  }));

  it('should do something', function () {
    expect(!!Item).toBe(true);
  });

});
