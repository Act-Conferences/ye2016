$(document).ready(function () {
	$('div:has(a)').removeClass('hidden');

	$('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
	$('.our-sponsors').css('height', $(".wrapper").height() - 94);
	$('.sponsors-cat').css('height', $(".sponsors-list").height());
	var i = 0;
	setInterval(function () {
		if (i % 2 == 0)
			$('.third').fadeOut('slow', function () {
				$('.toggleDays').fadeIn('slow')
			})
		else
			$('.toggleDays').fadeOut('slow', function () {
				$('.third').fadeIn('slow')
			})
		i++;
	}, 3000)

if (window.location.href.indexOf("about") > -1 ||
       window.location.href.indexOf("venue") > -1 ||
       window.location.href.indexOf("Tickets&Events") > -1 ||
			 window.location.href.indexOf("our_sponsors") > -1 ) {
    $('.changejs').css('width', '100%');
    $('.changejs').css('padding', '0');
    $('.changesjs').css('padding', '0');
  }

});

$(window).resize(function () {
	$('.position').css('height', $(".wrapper").outerHeight(true) - $(".comming-soon").outerHeight(true));
	$('.our-sponsors').css('height', $(".wrapper").height() - 94);
	$('.sponsors-cat').css('height', $(".sponsors-list").height());
});