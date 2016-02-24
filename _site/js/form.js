$(function(){
  $('.js-item').click(function(){
    // e.preventDefault();
    // console.log($(this).attr('id'));
    $('.js-input-number').val($(this).attr('id'));
    $('html, body').animate({
        scrollTop: $('#form-top').offset().top
      }, 750);
  });
});


$('.rtt-btn').click(function(){
	$('html, body').animate({
	  scrollTop: $('#sa-top').offset().top
	}, 750);
});

$('.go-to-highest').click(function(){
  $('html, body').animate({
    scrollTop: $('#highest-bids').offset().top
  }, 750);
});
