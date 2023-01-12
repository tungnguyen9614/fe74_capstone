$(window).scroll(function(){
    $('div').toggleClass('scroll-green',$(this).scrollTop()>50);
    $('div').toggleClass('scrolled',$(this).scrollTop()>50);
    $('div').toggleClass('scroll',$(this).scrollTop()>50);
  });




 