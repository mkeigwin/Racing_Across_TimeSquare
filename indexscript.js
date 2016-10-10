$(document).ready(function() {
 var infobox = $('.info').hide();
 $('body').on('keydown', appear);

//transform of index where hitting enter causes 2 sections to disappear and the directions/ fill in blank to appear
  function appear (e) {
    if(e.which == 13) {
        infobox.fadeIn();
        $('.brief').hide();
        $('.buy').hide();
        $('.instruction p').text('CLICK START TO BEGIN THE GAME');
    }
  }
});
