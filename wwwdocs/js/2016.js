$(document).ready(function() {
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));

  var i=0;
  setInterval(function(){
    if(i%2 == 0)
        $('.third').fadeOut('slow', function(){
            $('.toggleDays').fadeIn('slow')
        })
    else
        $('.toggleDays').fadeOut('slow', function(){
            $('.third').fadeIn('slow')
        })    
    i++;
  }, 3000)


});

  $(window).resize(function(){
       $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  });