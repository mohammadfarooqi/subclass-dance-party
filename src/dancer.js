// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, url) {
  this.$node = $('<img>');
  this.$node.attr('src', url);
  this.$node.attr('height', 75);
  this.$node.attr('width', 37.5);
  this.$node.addClass('img');

  MakeDancer.prototype.setPosition.call(this, top, left);
};

MakeDancer.prototype.step = function(top, right, bottom, left) {
  var args = Array.prototype.slice.call(arguments);
  var obj = {};

  for (var i = 0; i < args.length; i++) {
    if(args[i] !== null) {
      if (i === 0) {
        obj["top"] = top;
      } else if (i === 1) {
        obj["right"] = right;
      } else if (i === 2) {
        obj["bottom"] = bottom;
      } else if (i ===3) {
        obj["left"] = left;
      }
    }
  }

  $(this.$node).animate(obj, "slow");

  //var context = this;

  // setTimeout(function() {
  //   context.step();
  // }, this.timeBetweenSteps);

  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};


















/*

// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;

  MakeDancer.prototype.step.call(this);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  MakeDancer.prototype.setPosition.call(this, top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  var context = this;
  setTimeout(function() {
    context.step()
  }, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

*/