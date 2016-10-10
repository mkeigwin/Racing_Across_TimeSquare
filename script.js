console.log('testing javascript');

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
  });

  // function numEnemy () {
  //   if (window.matchMedia('(max-width: 900px)')) {
  //     $('#enemy6').hide();
  //   }

  //   if (window.matchMedia('(max-width: 750px)')) {
  //     $('#enemy5').hide();
  //   }
  //   if (window.matchMedia('(max-width: 500px)')) {
  //     $('#enemy4').hide();
  //   }
  // }
  // numEnemy ();

  function refresh (e) {
    if(e.which == 13) {
        location.reload();
    }
  }

  function movePlayer(e) {
    if (e.which===39) {
      if (marginleft >= (window.innerWidth-($(player).width()))) {
        marginleft=(window.innerWidth-($(player).height()));
      } else {
        marginleft +=10;
        player.css('left', marginleft + 'px');
        player.css({'background': 'url("officemanright.png")', 'background-size': '40px 80px', 'background-repeat': 'no-repeat', 'border': 'none'});
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
  }

var pt1height = ((Math.ceil(Math.random() * ($(window).height()-($('#pt1').height())*1.5)))/8);
var pt1width = ((Math.ceil(Math.random() * ($(window).width()-($('#pt1').width())*1.5)))/8);
$('#pt1').css('top', (pt1height*6.5) + 'px');
$('#pt1').css('left', (pt1width*6.5) + 'px');

function point1 () {
  if ((((margintop >= (pt1height*5)) && (margintop <= (pt1height*8))) && ((marginleft >= (pt1width*5)) && (marginleft <= (pt1width*8)))) && (counter ===0)) {
   $('.mission p').text('Pick Up Newspaper');
   $('#pt1').fadeOut();
   counter++;
  }
}

var pt2height = ((Math.ceil(Math.random() * ($(window).height()-($('#pt2').height())*1.5)))/8);
var pt2width = ((Math.ceil(Math.random() * ($(window).width()-($('#pt2').width())*1.5)))/8);
$('#pt2').css('top', (pt2height*6.5) + 'px');
$('#pt2').css('left', (pt2width*6.5) + 'px');

function point2 () {
  if ((((margintop >= (pt2height*5)) && (margintop <= (pt2height*8))) && ((marginleft >= (pt2width*5)) && (marginleft <= (pt2width*8)))) && (counter ===1)) {
   $('.mission p').text('Go To Finish and Leave Times Square!!!');
   $('#pt2').fadeOut();
   counter++;
  } else if ((((margintop >= (pt2height*5)) && (margintop <= (pt2height*8))) && ((marginleft >= (pt2width*5)) && (marginleft <= (pt2width*8)))) && (counter ===0)) {
  $('.mission p').text('OOOOP\'S You Forgot Your Coffee! Go Back and Get It');
}
}

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
    $('.win h3').text('YOU\'VE DONE IT! YOU ESCAPED TIMES SQUARE WITHOUT BEING STOPPED');
    $('body').on('keydown', refresh);
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 1)) {
    $('.mission p').text('OOOOP\'S You Forgot Your Newspaper! Go Back and Get It');
  } else if (((marginleft >= ($(window).width()-($(player).width()))) && ((margintop >= (($(window).height())*(4/9))) && (margintop <= (($(window).height())*(5/9))))) && (counter === 0)) {
    $('.mission p').text('OOOOP\'S You Forgot Your Coffee! Go Back and Get It');
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
      var random = enemy.eq(i);
      var posleft =random.css('left', (Math.floor(Math.random() * ($(window).width()-($(random).width())))));
      var postop =random.css('top', (Math.floor(Math.random() * ($(window).height()-($(random).height())))));
      enemy.eq(i).animate({
        left: posleft + "px",
        top:  postop + "px"
        }, 2000, randomdiv);
    }
  }

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
      }
    }
  }

});
