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

