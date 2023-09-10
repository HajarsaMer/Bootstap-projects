var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: true

});

$(function() {
    $('.skitter-large').skitter();
  });

  new WOW().init();
  $(window).scroll(function(){
    if($(window).scrollTop() > 700)
    {
      $(".up").css({display:"flex"});
      $(".up").click(function(){
      $("html,body").animate({scrollTop:0},2000)
      });
    }
   
    else
    $(".up").css({display:"none"});
  });

 