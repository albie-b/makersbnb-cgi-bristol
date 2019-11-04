'use strict';

function ListSpace(){
  this._name = 'N/A';
};

ListSpace.prototype.setName = function(name){
  this._name = name;
};

ListSpace.prototype.name = function(){
  return this._name;
};
