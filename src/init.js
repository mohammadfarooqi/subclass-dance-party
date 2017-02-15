$(document).ready(function() {
  window.dancers = [];
  var dancersLimitSize = 14;

  var randomIntFromInterval = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    if (window.dancers.length < dancersLimitSize) {
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      var imgUrl = $(this).data('img-url');

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position
      var container = $(".mainContainer");

      var height = randomIntFromInterval(container.height() * 0.60, container.height()) * 0.80;
      var width = container.width() * Math.random() * 0.95;

      var dancer = new dancerMakerFunction(height, width, imgUrl);

      container.append(dancer.$node);

      window.dancers.push(dancer);
    } else {
      alert("You've reached the max limit for dancers on the floor.");
    }
  });

  //interaction
  $('.interactDancersButton').on('click', function(event) {
    var dancers = window.dancers;
    var maxWidth = $('.mainContainer').width();
    var top = 150;
    var left = 150;

    for(var i = 0; i < dancers.length; i++) {
      if(i % 2 === 0) {
        //dancers[i].step(top, right, null, null);
        dancers[i].step(top, null, null, maxWidth - left);

        //set values
        dancers[i].$node[0].style.top = top;
        dancers[i].$node[0].style.left = maxWidth - left;
      } else {
        dancers[i].step(top, null, null, left);

        dancers[i].$node[0].style.top = top;
        dancers[i].$node[0].style.left = left;
        top += 100;
      }
    }

    for (var i = 0; i < dancers.length; i += 2) {
      var dancerATop = dancers[i].$node[0].style.top;
      var dancerALeft = dancers[i].$node[0].style.left;

      if (dancers[i + 1]) {
        var dancerBTop = dancers[i + 1].$node[0].style.top;
        var dancerBLeft = dancers[i + 1].$node[0].style.left;
      }

      dancers[i].$node[0].style.top = dancerBTop;
      dancers[i].$node[0].style.left = dancerBLeft;
      dancers[i].step(dancerBTop, null, null, dancerBLeft);


      if (dancers[i + 1]) {
        dancers[i + 1].$node[0].style.top = dancerATop;
        dancers[i + 1].$node[0].style.left = dancerALeft;
        dancers[i + 1].step(dancerATop, null, null, dancerALeft);
      }
    }
  });


  $('.lineUpDancersButton').on('click', function(event) {
    var dancers = window.dancers;
    var counter = ($('.mainContainer').width() / 37.5) * 2;
    var j = 100;

    for(var i = 0; i < dancers.length; i++) {
      //dancers[i].step(100, null, null, 100);
      if (i === 0) {
        dancers[i].step(100, null, null, j);
      } else {
        j += counter;
        dancers[i].step(100, null, null, j);
      }
    }
  });

  $('.mainContainer').on('click', '.img', function(event) {
    var currentNode = event.currentTarget;
    var dancers = window.dancers;
    //remove obj from window.dancers
    //remove element from main container

    for (var i = 0; i < dancers.length; i++) {
      if (currentNode.isSameNode(dancers[i].$node[0])) {
        dancers.splice(i, 1);
        $(currentNode).remove();
      }
    }
  });
});

