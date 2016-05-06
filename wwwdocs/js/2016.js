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

var end = new Date('08/24/2016 11:59 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('counter').innerHTML = 'Start';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('counter').innerHTML = days;
    }

    timer = setInterval(showRemaining, 1000);

});

  $(window).resize(function(){
       $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  });