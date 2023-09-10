$(window).scroll(function() {
if($(window).scrollTop() > $(".about").offset().top)
{
  $(".navbar").css("backgroundColor","#00D5EE");
}
else
$(".navbar").css("backgroundColor","transparent");
});

