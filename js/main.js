/* global $ Typed WOW  */
$(function () {


  // Header Height
  var winH = $(window).height()

  $('.header').height(winH);
  $('.header .content').css({
    "top": (winH - $('.header .content').height()) / 2,
    "left": ($(window).width() - $('.header .content').width()) / 2
  })
  $(window).resize(function () {
    var winH = $(window).height()

    $('.header').height(winH);
    $('.header .content').css({
      "top": (winH - $('.header .content').height()) / 2,
      "left": ($(window).width() - $('.header .content').width()) / 2
    })
  })


  // Sync Active with section

  $('.navbar li a:not(:eq(0))').on('click', function (e) {
    e.preventDefault()
    var scrollto = '#' + $(this).data('scroll')

    $('html,body').animate({
      scrollTop: $(scrollto).offset().top
    })


  });

  $(document).scroll(function () {
    $('section').each(function () {
      if ($(document).scrollTop() > $(this).offset().top - 150) {
        var id = $(this).attr('id');
        $('.navbar li a').removeClass('active')
        $('.navbar li a[data-scroll="' + id + '"]').addClass('active');
      }
    })
  })

  // Navbar Background
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-sticky')
    } else {
      $('.navbar').removeClass('navbar-sticky')
    }
  });

  //------- [start type.js script]-----//
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    loop: true,
  });



  // Progress Bar width

  $('.bar-main').each(function () {
    $(this).find('.bar-progress').css({
      width: $(this).data('precent')
    })
    $(this).append('<span></span>').children('span').text($(this).data('precent'))
  })


  /* ======================== [09] Button to up ======================== */


  $('.up ,.navbar li a:eq(0)').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000)
  })

  $(window).scroll(function () {

    if ($(document).scrollTop() > 300) {
      $('.up').css("right", "2%");
    } else {
      $('.up').css("right", "-100px");
    }

  })


  // Trigger Wow
  new WOW().init({
    offset: 100,
    duration: '2s',
    mobile: false
  });
})

$(window).on('load', function () {
  $('.loading-page').delay(600).fadeOut(600, function () {
    $('body').css('overflow-y', 'auto');
  });

})



