(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 20) {
        $('.header-area').addClass('fixed-header').fadeIn(3000)
    }
    else {
        $('.header-area').removeClass('fixed-header');
    }
});


  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000
  });

  // owlCarousel
  $(".Trending_slider").owlCarousel({
    loop: false,
    margin: 10,
    items: 8,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ],
    smartSpeed: 1000,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 5
      },
      1500: {
        items: 8
      }
    }
  });

 

  // owlCarousel
  $(".comment_slider").owlCarousel({
    loop: true,
    margin: 15,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });

  // owlCarousel
  $(".com_s").owlCarousel({
    loop: true,
    margin: 15,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });



  $("#scl-more").click(function () {
    $(this).parent().find(".limit-8").toggleClass("active");
    $(this).toggleClass("active");
});

if ($('.table_schedule-list li').length > 7) {
    $('#scl-more').show();
}

var scheduleSw = new Swiper('.schedule-full .table_schedule-date .swiper-container', {
    slidesPerView: 7,
    spaceBetween: 10,
    // centeredSlides: true,
    navigation: {
        nextEl: '.schedule-full .tsn-next',
        prevEl: '.schedule-full .tsn-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 13,
        },
    },
});
scheduleSw.slideTo($(".tsd-item").index($(".tsd-item.active")), 1000);
setTimeout(function () {
    $(".tsd-item.active").click();
}, 1000)
$('.day-item').click(function () {
    var tzOffset = new Date().getTimezoneOffset();
    $('.tsd-item').removeClass('active');
    $(this).find('.tsd-item').addClass('active');
    $.get('/ajax/schedule/list?tzOffset=' + tzOffset + '&date=' + $(this).data('date'), function (res) {
        if(res){
            $('.table_schedule-list').html(res.html);
            if ($('.table_schedule-list li').length > 7) {
                $('#scl-more').show();
            } else {
                $('#scl-more').hide();
            }
        }
    });
});

setInterval(showTime, 1000);

function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour === 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    var currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    $('#clock').html(currentTime);
}

var date = new Date();
$('#current-date').text(date.toLocaleDateString());
var timezone = date.toString().split(" ")[5];
$('#timezone').text("(" + timezone.slice(0, timezone.length - 2) + ":" + timezone.slice(-2) + ")");

showTime();
 
$('.Genres_wrp .more_btn').click(function() {
  $('.Genres_wrp ul').toggleClass('sb-genre-less')
})
})(jQuery);