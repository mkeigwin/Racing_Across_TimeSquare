$(document).ready(function() {

  var player = $('#player');
  var enemy = $('.random');
  var marginleft = $('#player').offset().left;
  var margintop = $('#player').offset().top;
  var divnum = enemy.length;
  var counter = 0;
  var winbox = $('.win').hide();
  var losebox = $('.lose').hide();

  $('body').on('keydown', movePlayer);
  $(document).keydown(winner);
  $(document).keydown(point1);
  $(document).keydown(point2);
  randomdiv ();
  $('body').on('keydown', function() {
    collide (player, enemy);

//triggers collide function when player hits enemy while moving into them
  });
  user();

//fuction where hitting enter key refreshes the page so game can be played again
  function refresh (e) {
    if(e.which == 13) {
        location.reload();
    }
  };

//function in which hitting the arrow keys moves the player around the board by adding/ subtracting left and top values
//use if function within if fuction to determine if player should move when key is pressed based off of the size pf window
//if player tries to move outside window, reset player location to the edge of the screen
  function movePlayer(e) {
    if (e.which===39) {
      if (marginleft >= (window.innerWidth-($(player).width()))) {
        marginleft=(window.innerWidth-($(player).height()));
      } else {
        marginleft +=10;
        player.css('left', marginleft + 'px');
        player.css({'background': 'url("officemanright.png")', 'background-size': '40px 80px', 'background-repeat': 'no-repeat', 'border': 'none'});

//include image in each keydown so that the player image changes direction based off of arrow hit
      }
    }
    if (e.which===37) {
      if (marginleft <= 0) {
        marginleft=0;
      } else {
        marginleft -=10;
        player.css('left', marginleft + 'px');
        player.css({'background': 'url("officemanleft.png")', 'background-size': '40px 80px', 'background-repeat': 'no-repeat', 'border': 'none'});
      }
    }
    if (e.which===40) {
     if (margintop >= (window.innerHeight-($(player).height()))) {
        margintop=(window.innerHeight - ($(player).height()));
     } else {
        margintop +=10;
        player.css('top', margintop + 'px');
        player.css({'background': 'url("officeman2.png")', 'background-size': '40px 80px', 'background-repeat': 'no-repeat', 'border': 'none'});
     }
    }
    if (e.which===38) {
      if (margintop <= 0) {
        margintop=0;
      } else {
        margintop -=10;
        player.css('top', margintop + 'px');
        player.css({'background': 'url("officemantop.png")', 'background-size': '40px 80px', 'background-repeat': 'no-repeat', 'border': 'none'});
      }
    }
  };

  var pt1height = ((Math.ceil(Math.random() * ($(window).height()-($('#pt1').height())*1.5)))/8);

//finds a random point in the height of the window. intervals it between 8ths
  var pt1width = ((Math.ceil(Math.random() * ($(window).width()-($('#pt1').width())*1.5)))/8);

//finds a random point in the width of the window. intervals it between 8ths
  $('#pt1').css('top', (pt1height*6.5) + 'px');

//positions point one image on page height
  $('#pt1').css('left', (pt1width*6.5) + 'px');

//positions point one image on page width
  function point1 () {
    if ((((margintop >= (pt1height*5)) && (margintop <= (pt1height*8))) && ((marginleft >= (pt1width*5)) && (marginleft <= (pt1width*8)))) && (counter ===0)) {
     $('.mission p').text('Pick Up Newspaper');
     $('#pt1').fadeOut();
     counter++;
    }

//makes a range in which if the player goes into it, registers in counter and allows you to move on to next point
  };

  var pt2height = ((Math.ceil(Math.random() * ($(window).height()-($('#pt2').height())*1.5)))/8);
  var pt2width = ((Math.ceil(Math.random() * ($(window).width()-($('#pt2').width())*1.5)))/8);
  $('#pt2').css('top', (pt2height*6.5) + 'px');
  $('#pt2').css('left', (pt2width*6.5) + 'px');

  function point2 () {
    if ((((margintop >= (pt2height*5)) && (margintop <= (pt2height*8))) && ((marginleft >= (pt2width*5)) && (marginleft <= (pt2width*8)))) && (counter ===1)) {
     $('.mission p').text('Go To Finish and Leave Times Square!!!');
     $('#pt2').fadeOut();
     counter++;

//makes a range in which if the player goes into it, registers in counter and allows you to move on to next point
    } else if ((((margintop >= (pt2height*5)) && (margintop <= (pt2height*8))) && ((marginleft >= (pt2width*5)) && (marginleft <= (pt2width*8)))) && (counter ===0)) {
    $('.mission p').text('OOOOP\'S You Forgot Your Coffee! Go Back and Get It');
  }

//makes a range in which if the player goes into it, tells player to go back to missed point
  };

 function winner () {
  if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 2)) {
    $('body').off('keydown');
    $('body').css('background-color', 'purple');
    enemy.stop();
    $('.mission p').text('');
    $('.mission').css({
          'border': 'none',
          'background-color': 'rgba(122, 122, 122, 0)'
        });
    winbox.fadeIn();
    $('.win h3').text('YOU\'VE ESCAPED FROM TIMES SQUARE!');
    $('body').on('keydown', refresh);

//makes a range in which if the player goes into it, registers in counter and sends win alert
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 1)) {
    $('.mission p').text('OOOOP\'S You Forgot Your Newspaper! Go Back and Get It');

    //makes a range in which if the player goes into it, tells player to go back to missed point
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 0)) {
    $('.mission p').text('OOOOP\'S You Forgot Your Coffee! Go Back and Get It');

//makes a range in which if the player goes into it, tells player to go back to missed point
  }
 };

 setInterval(function () {
    collide(player, enemy);
  }, 10);
  setInterval(function () {
    winner();
  }, 10);

//joey helped with this so that the random moving would stop
//since enemy div's are always moving this listens for them every .01 seconds and allows divs to stop animation instead of starting again

  function randomdiv () {
    for (i=0; i < divnum; i++) {
      var random = enemy.eq(i);
      var posleft =random.css('left', (Math.floor(Math.random() * ($(window).width()-($(random).width())))));
      var postop =random.css('top', (Math.floor(Math.random() * ($(window).height()-($(random).height())))));
      enemy.eq(i).animate({
        left: posleft + "px",
        top:  postop + "px"
        }, 2000, randomdiv);
    }

//inspired this code from paris, but after got ideas, wrote it myself
//finds the enemy div and makes a random height and width fot the div to move to. moves every 2 seconds and after move it finds new values and moves it to there
  };

  function collide (player, enemy) {
    for (i=0; i < divnum; i++) {
      player.top = $(player).offset().top;
      player.left = $(player).offset().left;
      player.right = Number($(player).offset().left) + Number($(player).width());
      player.bottom = Number($(player).offset().top) + Number($(player).height());

//finds the location of all 4 sides of player
      enemy.top = $(enemy).eq(i).offset().top;
      enemy.left = $(enemy).eq(i).offset().left;
      enemy.right = Number($(enemy).eq(i).offset().left) + Number($(enemy).eq(i).width());
      enemy.bottom = Number($(enemy).eq(i).offset().top) + Number($(enemy).eq(i).height());

//finds the location of all 4 sides of enemy div
      if (player.right > enemy.left && player.left < enemy.right && player.top < enemy.bottom && player.bottom > enemy.top) {

// got ideas for collide with this http://area36.nl/2014/12/creating-your-own-collision-detection-function-in-javascript/  added info obviously such as look
//sets conditions which apply if player and one of the enemy div overlap
        $('body').off('keydown');
        $('body').css('background-color', 'orange');
        enemy.stop();
        $('.mission p').text('');
        $('.mission').css({
          'border': 'none',
          'background-color': 'rgba(122, 122, 122, 0)'
        });
        $('.lose h3').text('YOU LOSE');
        losebox.fadeIn();
        $('body').on('keydown', refresh);

//pop up alert that player has lost
      }
    }
  };

  function user () {
    var searchUrl = window.location.search.substring(1);
    var split = [];
    split = searchUrl.split("&");
    var obj = {};
    var form = document.querySelector('form');

//takes information from get out of the url and splits it up after &
    for (i = 0; i < split.length; i++) {
      var arr = [];
      arr = split[i].split("=");
      var key = arr[0];
      var value = arr[1];

//takes = and moves splits between key and values
      var p1 = $('<p>');
      var p2 = $('<p>');
      p1.text(key);
      p2.text(value);
      $('.playerid').append(p1);
      $('.playerid').append(p2);

//appends value and key onto the div so it can be displayed on the game.html page
    }
  };

});
