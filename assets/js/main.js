$(document).ready(function() {
	//smooth scroll transition
	$(".header__navigation ul li a").click(function (event) {
        event.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 550);
    });
	// up button
	$(function() {
  		$(window).scroll(function() {
  			if($(this).scrollTop() >= 50) {
  				$('#up-button').fadeIn();
  			} else {
  				$('#up-button').fadeOut();
  			}
  		});
  		$('#up-button').click(function() {
  			$('body,html').animate({scrollTop:0},400);
  		});
  	});
	// video
	$(".video-image").click(function() {
		$(".video-image").css("display","none");
		$(".video__video")[0].play();
	})
	// our-team tabs
	$('.our-team__tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.our-team__item').not(':nth-child(1)').hide();
	ths.find('.our-team__tab').click(function() {
		ths.find('.our-team__tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.our-team__item').hide().eq($(this).index()).fadeIn(1300)
	}).eq(0).addClass('active');
	});
	//.testimonials slider
	$('.testimonials__slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true,
  		autoplay: true,
	});
	// burger menu
	if(window.matchMedia('(max-width: 769px)').matches){
		$('.header__burger').click(function() {
        	$('.header__burger').toggleClass('open-menu');
        	$(".header__navigation").slideToggle();
    	});
	} else {
		$(".header__navigation").css("display","block");
	};

});
