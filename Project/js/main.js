jQuery(document).ready(function( $ ) {

  $(window).scroll(function () {
    var height = $(window).height();
    var scroll = $(window).scrollTop(); 
    if (scroll) {
      $(".navbar").addClass("scroll-header");
    } else {
      $(".navbar").removeClass("scroll-header");
    }

  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    }
    else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},3000);
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  
  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    console.log($mobile_nav);  
    
    $('body').prepend('<button type="button" id="mobile-nav-toggle" class="navbar-toggler" data-toggle="collapse" data-target="#nav-menu-container" aria-expanded="true"><i class="fa fa-bars"></i></button>');
    //$('#nav-menu-container').hide();  
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-body-overly').append($mobile_nav);
      
    $('#mobile-nav').find('#menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

   

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });
 var container = $("#mobile-nav, #mobile-nav-toggle");
        console.log(container);
    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
        console.log(container);
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
   if($(window).width()<1025)
       {$('#nav-menu-container').hide();}

  // Modal video
  new ModalVideo('#js-video', {channel: 'youtube'});

  // Init Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {

      320: { items: 1},
      480: { items: 2},
      600: { items: 2},
      767: { items: 3},
      768: { items: 3},
      992: { items: 4}
    }
  });

});
