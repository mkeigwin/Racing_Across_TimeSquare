console.log('hello');

$(document).ready(function() {
 var infobox = $('.info').hide();
$('body').on('keydown', appear);

  function appear (e) {
    if(e.which == 13) {
        infobox.fadeIn();
        $('.brief').hide();
        $('.buy').hide();
        $('.instruction p').text('CLICK START TO BEGIN THE GAME');
    }
  }
});
