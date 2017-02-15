//tapDancer.js

var MakeTapDancer = function(top, left, url) {
  MakeDancer.call(this, top, left, url);
};

MakeTapDancer.prototype = Object.create(MakeDancer.prototype);
MakeTapDancer.prototype.constructor = MakeTapDancer;

MakeTapDancer.prototype.step = function(top, right, bottom, left) {
  MakeDancer.prototype.step.call(this, top, right, bottom, left);
};