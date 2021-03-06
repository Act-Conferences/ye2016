
$(document).ready(function() {

// height for this pages background
  $('div:has(a)').removeClass('hidden');
  $('.position').css('height',$(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
  $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.filltab').css('min-height',$(".wrapper").outerHeight(true) - 149);
  $('.tickets').css('height',$(".wrapper").outerHeight(true) - 94);
  $('.our-sponsors').css('min-height', $(".wrapper").height() );
  $('.sponsors-cat').css('height', $(".sponsors-list").height());
  $('.speaker').css('min-height',$(window).height() - 149);
  $('.sponsors-tab').css('min-height',$(window).height() - 149);
  $('.organizers-tab').css('min-height',$(window).height() - 149);
  $('.talks-tab').css('min-height',$(window).height() - 149);
  $('.ticketsBack').css('min-height',$(window).height() - 149);
  $('.ticketsBack').css('min-height',$(window).height() - 149);
  $('.userBackground').css('min-height',$(window).height() - 149);
  $('.trainingPage').css('min-height', $(window).height() - 94);

// if wiki block edit on homepage

if((window.location.href.indexOf("wiki")) > -1) {
  $(".nav.navbar-nav.middle li:last-child a").css("color", "#ee9a20");
}

var wikiA = $('.admin').text();
var homeWiki = $('.node').text();
//console.log(homeWiki);

if (homeWiki == "HomePage") {
  $(".editPage").css("display", "none"); //.remove();
} 

if (homeWiki == "HomePage" && wikiA == 1) {
  $(".editPage").css("display", "block");
} 


//end

//$( ".card-container" )
//  .mouseenter(function() {
//    $(this).children().addClass("flipping-right");
//  })
//  .mouseleave(function() {
//    $(this).children().removeClass("flipping-right");
//  });


// read hash from url
// cache the id
var navbox = $('#tablist');
// activate tab on click
navbox.on('click', 'a', function (e) {
  var $this = $(this);
  // prevent the Default behavior
  e.preventDefault();
  // set the hash to the address bar
  window.location.hash = $this.attr('href');
  // activate the clicked tab
  $this.tab('show');
  $(window).scrollTop(0);
})

// if we have a hash in the address bar
if(window.location.hash){
  // show right tab on load (read hash from address bar)
  navbox.find('a[href="'+window.location.hash+'"]').tab('show');
  $(window).scrollTop(0);
}

//end

// read hash from url
// cache the id
var tickets = $('#ConferenceTickets');
// activate tab on click
tickets.on('click', 'a', function (e) {
  var $this = $(this);
  // prevent the Default behavior
  e.preventDefault();
  // set the hash to the address bar
  window.location.hash = $this.attr('href');
  // activate the clicked tab
  $this.tab('show');
  $(window).scrollTop(0);
})

// if we have a hash in the address bar
if(window.location.hash){
  // show right tab on load (read hash from address bar)
  tickets.find('a[href="'+window.location.hash+'"]').tab('show');
  $(window).scrollTop(0);
}

$("#buyTicket").on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.location = window.location.protocol + "//" + window.location.host + "\/ye2016\/purchase";
  });


$(".speakerPass").on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.location = window.location.protocol + "//" + window.location.host + "\/ye2016\/newtalk";
  });

// user info colapse toggle 

$( "#confColapse" ).click(function() {
  $( ".conf" ).toggle( "slow" );
  $("i", this).toggleClass("fa fa-chevron-up fa fa-chevron-down");
});

//end


//sticky footer on certain pages

var windows_height = $(window).height();
var current_height = windows_height-331;
  $("#Statistics .verticalAl").css({'min-height' : current_height});
  $("#Schedule .verticalAl").css({'min-height' : current_height});
  $("#Statistics .verticalAl").css({'min-height' : current_height});
  $("#Search .verticalAl").css({'min-height' : current_height});
  $("#WorkshopTickets .verticalAl").css({'min-height' : current_height});
  $("#Favorite .verticalAl").css({'min-height' : current_height});

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  //console.log(target);
  //console.log(typeof(target));
  if (target === "#Schedule") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Schedule .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Contact") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Contact .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Statistics") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Statistics .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Search") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Search .verticalAl").css({'min-height' : current_height});
  } else if (target === "#WorkshopTickets") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#WorkshopTickets .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Favorite") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Favorite .verticalAl").css({'min-height' : current_height});
  } 
});


if($("#homepage-flag").length > 0) {
   var windows_height = $(window).height();
  var current_height = windows_height-251;
  $(".verticalAl").css({'min-height' : current_height});
}

//end

// full width container without changing layout

  if (window.location.href.indexOf("about") > -1 ||
       window.location.href.indexOf("venue") > -1 ||
       window.location.href.indexOf("Tickets&Events") > -1 ||
       window.location.href.indexOf("our_sponsors") > -1 || 
       window.location.href.indexOf("conferenceInfo") > -1 ||
       window.location.href.indexOf("userInfo") > -1 ||
       window.location.href.indexOf("training-dave") > -1 ||
       window.location.href.indexOf("training-liana") > -1 ||
       window.location.href.indexOf("training-jeff") > -1 ||
       window.location.href.indexOf("wiki") > -1 ||
       window.location.href.indexOf("ticketsInfo") > -1 ) {
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');
  }

//end



// user info search

    $('#sea2').unbind("click").click(function(e) {
      e.preventDefault();
      var searchTerm = $("#user-name2").val();
      //console.log(searchTerm);
      var searchCity = $("#user-city2").val();
     //console.log(searchCity); 
      //$("<div></div>").attr('id','newSearch').appendTo('#showresults');
      $.post('/ye2016/search', {name: searchTerm}, function(data)
        {
          $( "#showresults" ).empty();
          $(".infoSearch").css("display", "none");
          $("<div></div>").attr('id','newSearch').appendTo('#showresults');
          var parsed = $('<div/>').append(data);


          //console.log(parsed.find('#user-list'));
         
          if (parsed.find('#user-list') == 'undefined') {
            //console.log("True1");
          } else {
            //console.log("False2");
          }

          $('#newSearch').replaceWith($('#newSearch').html(data).find('#user-list'));
        //$('#showresults').replaceWith($('#showresults').parsed.find('#user-list'));

         // rezultate = data; 
          //console.log(parsed);
          
          if ($( "#showresults" ).children().length < 1) {
            //console.log("true");
            $( "#showresults" ).append( "<p>We're sorry, no results were found for your search criteria</p>" );
          } 

          return false;
        })
    
  });


//end search


//mobile navbar open 

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


// fade in/out hompage days left/logo 

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

//end

//tabs
    $('.nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
//end

// init carousel
 $('#carousel-speakers').carousel({
        interval: false
    })
//end

// if main (kinda user dashbord) trigger code for that, without changing layout 

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

      $( ".changesjs" ).css( "text-align", "center" ); 
      $( ".changesjs" ).css( "color", "#d8ceaf" );
      $( ".changesjs ul" ).first().css( "paddingTop", "30px" );
      $( "p" ).last().addClass( "otherAct" );
      $('.changesjs').addClass( "transition" );
      $('.col-xs-12.changesjs.transition').css('min-height',$('ul').last().outerHeight(true) + 120 );
      $( ".changesjs .jsUl li a" ).css( "font-weight", "inherit" );

      $( "ul" ).last().addClass( "otherActUl" );
      $('ul').last().prepend( "<h1 class=\"page-header\">act conferences</h1>" );
      $('ul').last().css( "display", "none" );
      $('ul').last().css('min-height',$(".changesjs").outerHeight(true) + 40 );

      $('ul').last().click(function(){
        $('.changesjs').toggleClass("halfWidth");
        $( "p" ).last().delay( 1000 ).fadeIn( "slow" );
      });

      if ( $( "blockquote" ).length ) {
        $( "blockquote" ).addClass( "text-center ticketPay" );
      }


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

//end

// style for invoice pages


    var textm = $( "form p" ).text();
    var invoice = (textm.match(/ Please make sure the billing information is correct. /)||[]).length;

    if ((window.location.href.indexOf("invoice") > -1) && (invoice === 1)) {
       if ( $( "form" ).length ) {
        $( "form" ).addClass( "invoicePrint" );
      }
    }


    if ((window.location.href.indexOf("invoice") > -1) && ($("#dontprint").length > 0)) {
      if ( $( "table" ).length ) {
        $( "table" ).addClass( "tableinPrint" );
      }
    }

    var head = $( ".changejs .page-header" ).text();
    var bill = (head.match(/Billing/)||[]).length;
    if ((window.location.href.indexOf("payments") > -1) && (bill === 1)) {
       if ( $("table").length ) {
        $("table").addClass("billing");
      }
    }

    var head = $( ".changejs .page-header" ).text();
    var bill = (head.match(/Billing/)||[]).length;
    if ((window.location.href.indexOf("payments") > -1) && (bill === 1)) {
       if ( $("table").length ) {
        $("table").addClass("billing");
      }
    }

    var txt = $( ".changejs .page-header" ).text();
    var adminpay = (txt.match(/Payment/)||[]).length;
     if ((window.location.href.indexOf("payment?user_id=") > -1) && (adminpay === 1)) {
       if ( $("table").length ) {
        $("table").addClass("adminpay");
      }
      if ( $("input[type=\"submit\"]").length ) {
        $("input[type=\"submit\"]").addClass("sendLink adminPay");
      }
    }
//end


// organizers tab , for apple , clik/show figcaption

   if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $(".organizer-wrapper figcaption").click(function() {
          $(this).toggleClass("clickIoSActive");
         });
   }
//end


//nav for wiki mobile


  
//end

//tabs for mobile

    if ($(window).width() <= 848) {
      $('#tablist li a').css("display", "none");
      $( "#tablist .active a" ).fadeIn( 100 );
      $( "#tablist .active" ).prev().children().fadeIn( 100 );
      $( "#tablist .active" ).next().children().fadeIn( 100 );
      if ($("#tablist .active").prev("li").length == 0) {
                  $("#tablist .fa-angle-double-left").css("display", "none");
      }
  

// arrows for tabs mobile
      $("#tablist .fa-angle-double-right").unbind('click').click(function(e) {
          e.preventDefault();
          $('#tablist li a').css("display", "none");
          var next = $("#tablist .active").next('li');
          console.log("next", next);
          $("#tablist .active").next('li').find('a').trigger('click');
          if ($("#tablist .active").next("li").length == 0) {
                  $("#tablist .fa-angle-double-right").css("display", "none");
              } else {
                  $("#tablist .fa-angle-double-right").css("display", "inline-block");
              }
           if ($("#tablist .active").prev("li").length !== 0) {
                  $("#tablist .fa-angle-double-left").css("display", "inline-block");
              }
              return false;
      });


      $("#tablist .fa-angle-double-left").unbind('click').click(function(e) {
          e.preventDefault();
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
              return false;
      });
//end

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

//end

// style for photo input file
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

//end

// navbar active 

var url = window.location;
// Will only work if string in href matches with location
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

//relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active');

//end

//news

var homeNews = $(".newsHome").text();
if ((window.location.href.indexOf("news")) > -1 && homeNews == 1) {
    console.log('news');
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');

  $( ".news-entry" ).each(function() {
    if ($(this).find(".contentText img").length) {
      console.log("exists");
      $($(this).find(".contentText img")).clone().insertAfter($(this).find(".imageNews .exists"));
      $($(this).find(".contentText img")).remove(); 
     
    } else {
      console.log('not exists')
    }

  })

}

if ($(window).width() <= 646 && (window.location.href.indexOf("news"))) {
  console.log("font");
  $(".page-header").css("fontSize", "20px");
  $('.changejs').css('padding', '0');
  $('.changesjs').css('padding', '0');
}


$('.scheduleForTabs').find('td.r1').addClass('coffe-break');
//$('.scheduleForTabs').find('td.r1').attr('colspan', '4');
//$('.scheduleForTabs').find('td.r1').nextAll().css({"display": "none"});
$('.scheduleForTabs').find('td.r2').addClass('room-one');
$('.scheduleForTabs').find('td.r3').addClass('room-two');
$('.scheduleForTabs').find('td.r4').addClass('room-three');
	
	
//end
});
//end of Document ready

$(window).resize(function(){
      var wwidth = $(window).width();
       $('.fill').css('height',$(".wrapper").outerHeight(true) - 94);
       $('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
       $('.our-sponsors').css('height', $(".wrapper").height() - 94);
       $('.sponsors-cat').css('height', $(".sponsors-list").height());
       $('.speaker').css('min-height',$(window).height() - 149);
       $('.sponsors-tab').css('min-height',$(window).height() - 149);
  		 $('.organizers-tab').css('min-height',$(window).height() - 149);
       $('.ticketsBack').css('min-height',$(window).height() - 149);
       $('.userBackground').css('min-height',$(window).height() - 149);

if ($(window).width() <= 646 && (window.location.href.indexOf("news"))) {
  console.log("font");
  $(".page-header").css("fontSize", "20px");
  $('.changejs').css('padding', '0');
  $('.changesjs').css('padding', '0');
} else {
  $(".page-header").css("fontSize", "34px");
}

var windows_height = $(window).height();
var current_height = windows_height-331;
  $("#Statistics .verticalAl").css({'min-height' : current_height});
  $("#Schedule .verticalAl").css({'min-height' : current_height});
  $("#Statistics .verticalAl").css({'min-height' : current_height});
  $("#Search .verticalAl").css({'min-height' : current_height});
  $("#Favorite .verticalAl").css({'min-height' : current_height});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  if (target === "#Schedule") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Schedule .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Contact") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Contact .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Statistics") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Statistics .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Search") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Search .verticalAl").css({'min-height' : current_height});
  } else if (target === "#WorkshopTickets") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#WorkshopTickets .verticalAl").css({'min-height' : current_height});
  } else if (target === "#Favorite") {
    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Favorite .verticalAl").css({'min-height' : current_height});
  }
});

if($("#homepage-flag").length > 0) {
   var windows_height = $(window).height();
  var current_height = windows_height-251;
  $(".verticalAl").css({'min-height' : current_height});
}

    var windows_height = $(window).height();
    var current_height = windows_height-331;
    $("#Schedule .verticalAl").css({'min-height' : current_height});
    $("#Contact .verticalAl").css({'min-height' : current_height});



   if ($(window).width() <= 848) {

      $('#tablist li a').css("display", "none");
      $( "#tablist .active a" ).fadeIn( 100 );
      $( "#tablist .active" ).prev().children().fadeIn( 100 );
      $( "#tablist .active" ).next().children().fadeIn( 100 );
      $('#tablist i').css("display", "inline-block");
      if ($("#tablist .active").prev("li").length == 0) {
                  $("#tablist .fa-angle-double-left").css("display", "none");
      }


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

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      console.log(target);
      console.log(typeof(target));
      if (target === "#Schedule") {
        var windows_height = $(window).height();
        var current_height = windows_height-331;
        $("#Schedule .verticalAl").css({'min-height' : current_height});
      } else if (target === "#Contact") {
        var windows_height = $(window).height();
        var current_height = windows_height-331;
        $("#Contact .verticalAl").css({'min-height' : current_height});
      }
    });

  });