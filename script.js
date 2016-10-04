console.log('testing javascript');

$(document).ready(function() {

  var player = $('#player');
  var marginleft = $('#player').offset().left;
  var margintop = $('#player').offset().top;

  $('body').on('keyup', movePlayer);

function movePlayer(e) {
  if (e.which===39) {
    if (marginleft >= ($('window').width())) {
    marginleft=($('window').width()-(player.width()));
  } else {
    marginleft +=10;
    player.css('left', marginleft + 'px');
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
     if (margintop >= ($('window').height())) {
    margintop=($('window').height()-(player.height()));
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

});
