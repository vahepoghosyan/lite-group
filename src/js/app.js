(function () {
        if (document.querySelector(".home-cover")) {
            new Swiper(".home-cover", {
                speed: 500,
                autoplay: true,
                spaceBetween: 30,
                // effect: 'fade',
                // pagination: {
                // el: ".swiper-pagination",
                // clickable: true
                // }
            });
        }

        if (document.querySelector(".our-team")) {
            new Swiper(".our-team", {
                speed: 500,
                autoplay: true,
                spaceBetween: 30,
                // slidesPerColumn: 2,
                slidesPerView: 4,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        }

        $('.navigation').click(function (event) {
            event.stopPropagation();
        });

        $('#nav-icon').click(function (event) {
            event.stopPropagation();
            $(this).toggleClass('open');
            $('.navigation').slideToggle();
        });

        $(window).click(function () {
            $('.navigation').slideUp();
            $('#nav-icon').removeClass('open')
        })
    }
)();

$(document).ready(function () {
    $('.nav-link').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: target !== '#home' ? $(target).offset().top - 80 : $('html').offset().top
        }, 600);

        return false;
    });

    var scrollDistance = $(window).scrollTop();

    $('.section').each(function (i) {
        if ($(this).position().top - 82 <= scrollDistance) {
            $('.nav-item.active').removeClass('active');
            $('.nav-item').eq(i).addClass('active');
        }
    });

});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    if (window.innerWidth < 992) {
        if ($('.navigation').is(':visible')) {
            $('.navigation').slideUp();
            $('#nav-icon').removeClass('open')
        }
    }

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.section').each(function (i) {
        if ($(this).position().top - 82 <= scrollDistance) {
            $('.nav-item.active').removeClass('active');
            $('.nav-item').eq(i).addClass('active');
        }
    });
}).scroll();