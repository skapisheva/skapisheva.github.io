$(function () {
    new Swiper('.partners__slider-container', {
        slidesPerView: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoHeight: true,
        spaceBetween: 35,

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            520: {
                slidesPerView: 4,
                spaceBetween: 35
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 35
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 35
            },
        }
    });
})