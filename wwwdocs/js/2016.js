
$(document).ready(function() {
  $('div:has(a)').removeClass('hidden');
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.filltab').css('height',$(".wrapper").outerHeight(true) - 149);
  $('.tickets').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.our-sponsors').css('height', $(".wrapper").height() - 94);
  $('.sponsors-cat').css('height', $(".sponsors-list").height());
  $('.carousel.speaker').css('height',$(window).height() - 149);
  $('#Sponsors').css('height',$(window).height() - 149);
//  $('.sponsors-tab').css('height',$(window).height() - 149);


  if (window.location.href.indexOf("about") > -1 ||
       window.location.href.indexOf("venue") > -1 ||
       window.location.href.indexOf("Tickets&Events") > -1 ||
       window.location.href.indexOf("our_sponsors") > -1 || 
       window.location.href.indexOf("conferenceInfo") > -1 ) {
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');
  }

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

    $('.carousel').carousel({
        interval: false
    })


    var text = $( ".page-header" ).text();
    var main = (text.match(/Main private page/)||[]).length;

    if ((window.location.href.indexOf("main") > -1) && (main === 1)) {
        console.log("hey");
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
        $('.changesjs').addClass("fullWidth");
      }

      $(window).resize(function(){
        if ($(window).width() <= 710){
          $('.changesjs').addClass("fullWidth");
        } else {
          $('.changesjs').removeClass("fullWidth");
        }
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



  $(window).resize(function(){
       $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
       $('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
       $('.our-sponsors').css('height', $(".wrapper").height() - 94);
       $('.sponsors-cat').css('height', $(".sponsors-list").height());
       $('.carousel.speaker').css('height',$(window).height() - 149);
       $('#Sponsors').css('height',$(window).height() - 149);
//			 $('.sponsors-tab').css('height',$(window).height() - 149);
  });

  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });

}); 
