
$(document).ready(function() {
  $('div:has(a)').removeClass('hidden');
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.filltab').css('min-height',$(".wrapper").outerHeight(true) - 149);
  $('.tickets').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.our-sponsors').css('height', $(".wrapper").height() - 94);
  $('.sponsors-cat').css('height', $(".sponsors-list").height());
  $('.speaker').css('min-height',$(window).height() - 149);
  $('.sponsors-tab').css('min-height',$(window).height() - 149);
  $('.organizers-tab').css('min-height',$(window).height() - 149);
  $('.talks-tab').css('min-height',$(window).height() - 149);

// user info colapse toggle 

$( "#confColapse" ).click(function() {
  $( ".conf" ).toggle( "slow" );
  $("i", this).toggleClass("fa fa-chevron-up fa fa-chevron-down");
});



  if (window.location.href.indexOf("about") > -1 ||
       window.location.href.indexOf("venue") > -1 ||
       window.location.href.indexOf("Tickets&Events") > -1 ||
       window.location.href.indexOf("our_sponsors") > -1 || 
       window.location.href.indexOf("conferenceInfo") > -1 ) {
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');
  }




  $(".navbar-toggle").on("click", function(){
    var menu = $('.collapse');
    if (menu.is(":visible")) {
      $('.position').removeClass("opend");
      $('.position').addClass("closed");
      var delay = 300;
      setTimeout(function() {
        $('.position').css('transition', 'none');
      }, delay);
    } else {
      //$('.position').css('transition', 'none');
      $('.position').css('transition', 'all 0.23s linear');
      $('.position').removeClass("closed");
      $('.position').addClass("opend");
 
    }
  });

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

    $('.nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

 $('#carousel-speakers').carousel({
        interval: 10000000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });


    var text = $( ".page-header" ).text();
    var main = (text.match(/Main private page/)||[]).length;

    if ((window.location.href.indexOf("main") > -1) && (main === 1)) {
        //console.log("hey");
      $( "p" ).each(function() {
        $( this ).addClass( "text-center" );
      });
      $( ".changesjs ul" ).each(function() {
        $( this ).addClass( "jsUl" );
      });
      $( ".changesjs ul" ).first().css( "paddingTop", "30px" );
      $( "p" ).last().addClass( "otherAct" );
      $('.changesjs').addClass( "transition" );
      $('.col-xs-12.changesjs.transition').css('min-height',$('ul').last().outerHeight(true) + 120 );


      $( "ul" ).last().addClass( "otherActUl" );
      $('ul').last().prepend( "<h1 class=\"page-header\">act conferences</h1>" );
      $('ul').last().css( "display", "none" );
      $('ul').last().css('min-height',$(".changesjs").outerHeight(true) + 40 );

      $('ul').last().click(function(){
        $('.changesjs').toggleClass("halfWidth");
        $( "p" ).last().delay( 1000 ).fadeIn( "slow" );
      });


      $( "p" ).last().click(function() {
        $('.changejs').css('overflow', 'hidden');
        $('ul').last().addClass( "test" );
        $('.changesjs').toggleClass("halfWidth");
        $('ul').last().css( "display", "block" );
        $( "p" ).last().fadeOut( "slow" );
      });

      if ($(window).width() <= 710){
        $('ul').last().click(function(){
         $('.changesjs').removeClass("halfWidth");
        });
      }

      $(window).resize(function(){
        if ($(window).width() <= 710){
          $('.changesjs').addClass("fullWidth");
        } else {
          $('.changesjs').removeClass("fullWidth");
        }
      });
    }

   if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $(".organizer-wrapper figcaption").click(function() {
          $(this).toggleClass("clickIoSActive");
         });
   }

    if ($(window).width() <= 848) {

      $('#tablist li a').css("display", "none");
      $( "#tablist .active a" ).fadeIn( 100 );
      $( "#tablist .active" ).prev().children().fadeIn( 100 );
      $( "#tablist .active" ).next().children().fadeIn( 100 );
  

      $("#tablist .fa-angle-double-right").click(function() {
          $('#tablist li a').css("display", "none");
          $("#tablist .active").next('li').find('a').trigger('click');
          if ($("#tablist .active").next("li").length == 0) {
                  $("#tablist .fa-angle-double-right").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-right").css("display", "inline-block");
              }
           if ($("#tablist .active").prev("li").length !== 0) {
                  $("#tablist .fa-angle-double-left").css("display", "inline-block");
              }
      });


      $("#tablist .fa-angle-double-left").click(function() {
          $('#tablist li a').css("display", "none");
          $("#tablist .active").prev('li').find('a').trigger('click');
          if ($("#tablist .active").prev("li").length == 0) {
                  $("#tablist .fa-angle-double-left").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-left").css("display", "inline-block");
              }
          if ($("#tablist .active").next("li").length !== 0) {
                  $("#tablist .fa-angle-double-right").css("display", "inline-block");
              }
      });

      $(".nav.nav-tabs li ").click(function() {
              $(".nav.nav-tabs").css("transition", "all 0.4s ease-in-out")
              $('#tablist li a').css("display", "none");
              $( "#tablist .active a" ).fadeIn( 100 );
              $( "#tablist .active" ).prev().children().fadeIn( 100 );
              $( "#tablist .active" ).next().children().fadeIn( 100 );

              if ($("#tablist .active").next("li").length == 0) {
                  $("#tablist .fa-angle-double-right").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-right").css("display", "inline-block");
              }

              if ($("#tablist .active").prev("li").length == 0) {
                  $("#tablist .fa-angle-double-left").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-left").css("display", "inline-block");
              }
      });

    } else if ($(window).width() > 848) {
      $(".nav.nav-tabs").css("transition", "none");
      $(".nav.nav-tabs i").css("display", "none");
      $(".nav.nav-tabs li ").click(function() {
              $(".nav.nav-tabs").css("transition", "none")
              $('#tablist li a').css("display", "inline-block");
      });
    }

  $(document).on('change', '.btn-file :file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
  });

  $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
      console.log("test");
      var input_label = $(this).closest('.input-group').find('.file-input-label'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

      if( input_label.length ) {
        input_label.text(log);
      } else {
        if( log ) alert(log);
      }
  });


  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });

}); 


$(window).resize(function(){
      var wwidth = $(window).width();
       $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
       $('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
       $('.our-sponsors').css('height', $(".wrapper").height() - 94);
       $('.sponsors-cat').css('height', $(".sponsors-list").height());
       $('.speaker').css('min-height',$(window).height() - 149);
       $('.sponsors-tab').css('min-height',$(window).height() - 149);
  		 $('.organizers-tab').css('min-height',$(window).height() - 149);


   if ($(window).width() <= 848) {

      $('#tablist li a').css("display", "none");
      $( "#tablist .active a" ).fadeIn( 100 );
      $( "#tablist .active" ).prev().children().fadeIn( 100 );
      $( "#tablist .active" ).next().children().fadeIn( 100 );
      $('#tablist i').css("display", "inline-block");


      $(".nav.nav-tabs li ").click(function() {
              $(".nav.nav-tabs").css("transition", "all 0.4s ease-in-out")
              $('#tablist li a').css("display", "none");
              $( "#tablist .active a" ).fadeIn( 100 );
              $( "#tablist .active" ).prev().children().fadeIn( 100 );
              $( "#tablist .active" ).next().children().fadeIn( 100 );

              if ($("#tablist .active").next("li").length == 0) {
                  $("#tablist .fa-angle-double-right").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-right").css("display", "inline-block");
              }

              if ($("#tablist .active").prev("li").length == 0) {
                  $("#tablist .fa-angle-double-left").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-left").css("display", "inline-block");
              }
      });

    } else if ($(window).width() > 848) {
      $(".nav.nav-tabs").css("transition", "none");
      $(".nav.nav-tabs i").css("display", "none");
      $('#tablist li a').css("display", "inline-block");
      $(".nav.nav-tabs li ").click(function() {
              $(".nav.nav-tabs").css("transition", "none")
              $('#tablist li a').css("display", "inline-block");
      });
    }


  });