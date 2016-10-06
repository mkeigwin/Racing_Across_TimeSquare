console.log('testing javascript');

$(document).ready(function() {

  var player = $('#player');
  var enemy = $('.random');
  var marginleft = $('#player').offset().left;
  var margintop = $('#player').offset().top;
  var divnum = $('.random').length;

  $('body').on('keyup', movePlayer);
  $(document).keyup(winner);

  function movePlayer(e) {
    if (e.which===39) {
      if (marginleft >= (window.innerWidth-50)) {
        marginleft=(window.innerWidth-50);
      } else {
        marginleft +=10;
        player.css('left', marginleft + 'px');
        //player.attr('src', 'wefawuhfa.png')
        //just an idea to change character based off of which direction they're facing
      }
    }
    if (e.which===37) {
      if (marginleft <= 0) {
        marginleft=0;
      } else {
        marginleft -=10;
        player.css('left', marginleft + 'px');
      }
    }
    if (e.which===40) {
     if (margintop >= (window.innerHeight-50)) {
        margintop=(window.innerHeight - 50);
     } else {
        margintop +=10;
        player.css('top', margintop + 'px');
     }
    }
    if (e.which===38) {
      if (margintop <= 0) {
        margintop=0;
      } else {
        margintop -=10;
        player.css('top', margintop + 'px');
      }
    }
  }

 function winner () {
  if ((marginleft >= ($(window).width()-50)) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) {
    $('body').off('keyup');
    $('body').css('background-color', 'purple');
    $('.random').stop();
  }
 }

 setInterval(function () {
    collide(player, enemy);
  }, 10);
  setInterval(function () {
    winner();
  }, 10);

  function randomdiv () {
    for (i=0; i < divnum; i++) {
      var random = $('.random').eq(i);
      var posleft =random.css('left', (Math.floor(Math.random() * ($(window).width()-50))));
      var postop =random.css('top', (Math.floor(Math.random() * ($(window).height()-50))));
      $('.random').eq(i).animate({
        left: posleft + "px",
        top:  postop + "px"
        }, 2000, randomdiv);
    }
  }
   randomdiv ();

  function collide (player, enemy) {
    for (i=0; i < divnum; i++) {
      player.top = $(player).offset().top;
      player.left = $(player).offset().left;
      player.right = Number($(player).offset().left) + Number($(player).width());
      player.bottom = Number($(player).offset().top) + Number($(player).height());
      enemy.top = $(enemy).eq(i).offset().top;
      enemy.left = $(enemy).eq(i).offset().left;
      enemy.right = Number($(enemy).eq(i).offset().left) + Number($(enemy).eq(i).width());
      enemy.bottom = Number($(enemy).eq(i).offset().top) + Number($(enemy).eq(i).height());
      if (player.right > enemy.left && player.left < enemy.right && player.top < enemy.bottom && player.bottom > enemy.top) {
          $('body').off('keyup');
          $('body').css('background-color', 'orange');
          $('.random').stop();
       }
    }
  }
  $('body').on('keyup', function() {
    collide (player, enemy);
  });

});
