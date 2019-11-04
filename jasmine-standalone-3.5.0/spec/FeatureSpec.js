'use strict';

describe('ListSpace',function(){
  var listspace;
  beforeEach(function(){
    listspace = new ListSpace();
  });
  describe('basic tests',function(){
    it('can set name',function(){
      listspace.setName('dave');
      expect(listspace.name()).toEqual('dave');
    });
    it('can view name',function(){
      expect(listspace.name()).toEqual('N/A');
    });
  });
});
