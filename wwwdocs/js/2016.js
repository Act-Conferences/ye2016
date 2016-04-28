$(document).ready(function() {
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
});

  $(window).resize(function(){
       $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  });