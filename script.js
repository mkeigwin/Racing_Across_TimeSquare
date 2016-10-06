console.log('testing javascript');

$(document).ready(function() {

  var player = $('#player');
  var enemy = $('.random');
  var marginleft = $('#player').offset().left;
  var margintop = $('#player').offset().top;
  var divnum = $('.random').length;
  var counter = 0;
  var winbox = $('.win').hide();
  var losebox = $('.lose').hide();

  $('body').on('keyup', movePlayer);
  $(document).keyup(winner);
  $(document).keyup(point1);
  $(document).keyup(point2);

  function movePlayer(e) {
    if (e.which===39) {
      if (marginleft >= (window.innerWidth-($(player).width()))) {
        marginleft=(window.innerWidth-($(player).height()));
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
     if (margintop >= (window.innerHeight-($(player).height()))) {
        margintop=(window.innerHeight - ($(player).height()));
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

  function point1 () {
  if ((((margintop >= (($(window).height())*(2/8))) && (margintop <= (($(window).height())*(3/8)))) && ((marginleft >= (($(window).width())*(5/8))) && (marginleft <= (($(window).width())*(6/8))))) && (counter ===0)) {
   $('.mission p').text('go to point 2');
   $('#pt1').fadeOut();
   counter++;
  }
}

 function point2 () {
  if ((((margintop >= (($(window).height())*(5/8))) && (margintop <= (($(window).height())*(6/8)))) && ((marginleft >= (($(window).width())*(2/8))) && (marginleft <= (($(window).width())*(3/8))))) && (counter ===1)) {
   $('.mission p').text('go to finish');
   $('#pt2').fadeOut();
   counter++;
  } else if ((((margintop >= (($(window).height())*(5/8))) && (margintop <= (($(window).height())*(6/8)))) && ((marginleft >= (($(window).width())*(2/8))) && (marginleft <= (($(window).width())*(3/8))))) && (counter ===0)) {
  $('.mission p').text('OOOOP\'S go back to point 1');
}
}

 function winner () {
  if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 2)) {
    $('body').off('keyup');
    $('body').css('background-color', 'purple');
    $('.random').stop();
    $('.mission p').text('');
    winbox.fadeIn();
    $('.win h3').text('YOU WON');
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 1)) {
    $('.mission p').text('OOOOP\'S go back to point 2');
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 0)) {
    $('.mission p').text('OOOOP\'S go back to point 1');
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
      var posleft =random.css('left', (Math.floor(Math.random() * ($(window).width()-($(random).width())))));
      var postop =random.css('top', (Math.floor(Math.random() * ($(window).height()-($(random).height())))));
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
        $('.mission p').text('');
        $('.lose h3').text('YOU LOSE');
        losebox.fadeIn();
      }
    }
  }
  $('body').on('keyup', function() {
    collide (player, enemy);
  });

});
