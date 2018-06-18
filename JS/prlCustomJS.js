$(function() {
  var btn = $('.prl-back-to-top-btn');
  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 2000);
});
});
