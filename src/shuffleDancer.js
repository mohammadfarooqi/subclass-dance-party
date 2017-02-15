//shuffleDancer.js

var MakeShuffleDancer = function(top, left, url) {
  MakeDancer.call(this, top, left, url);
};

MakeShuffleDancer.prototype = Object.create(MakeDancer.prototype);
MakeShuffleDancer.prototype.constructor = MakeShuffleDancer;

MakeShuffleDancer.prototype.step = function(top, right, bottom, left) {
  MakeDancer.prototype.step.call(this, top, right, bottom, left);
};