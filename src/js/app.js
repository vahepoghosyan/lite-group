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
                slidesPerColumn: 2,
                slidesPerView: 4,
                // effect: 'fade',
                // pagination: {
                // el: ".swiper-pagination",
                // clickable: true
                // }
            });
        }
    }
)();