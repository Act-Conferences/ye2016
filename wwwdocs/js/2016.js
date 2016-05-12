
$(document).ready(function() {
  $('div:has(a)').removeClass('hidden');
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.tickets').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.our-sponsors').css('height', $(".wrapper").height() - 94);
  $('.sponsors-cat').css('height', $(".sponsors-list").height());

  if (window.location.href.indexOf("about") > -1 ||
       window.location.href.indexOf("venue") > -1 ||
       window.location.href.indexOf("Tickets&Events") > -1 ||
       window.location.href.indexOf("our_sponsors") > -1) {
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');
  }

  $(window).resize(function(){
       $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
       $('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
       $('.our-sponsors').css('height', $(".wrapper").height() - 94);
       $('.sponsors-cat').css('height', $(".sponsors-list").height());
  });

  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });

}); 
