$(function () {

    $('.slider__inner').slick({
        prevArrow: '<button class="slider__btn slider__btn-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]

    });

    $('.slider-article__inner').slick({
        prevArrow: '<button class="slider-article__btn slider-article__btn-prev"><svg width="9" height="9" viewBox="0 0 20 20" fill="#A8A8A8" xmlns="http://www.w3.org/2000/svg"><path d="M0.707088 9.85781L9.25223 1.3915L9.21627 9.15009L9.17339 18.4029L0.707088 9.85781Z" stroke="white"/></svg></button > ',
        nextArrow: '<button class="slider-article__btn slider-article__btn-next"><svg width="9" height="9" viewBox="0 0 20 20" fill="#A8A8A8" xmlns="http://www.w3.org/2000/svg"><path d="M19.1549 9.85781L10.6098 1.3915L10.6457 9.15009L10.6886 18.4029L19.1549 9.85781Z" stroke="white"/></svg></button>',
        slidesToShow: 4,
        variableWidth: true,
        responsive: [

            {
                breakpoint: 916,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                }
            },

            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: true,
                }
            },
        ]

    });

    $('.slider__inner::before').on('click', function () {
        $('.slick-slide').addClass('slick-active');
    });

    $('.bookmark').on('click', function () {
        $(this).toggleClass('bookmark--active')
    });

    $('.menu__btn').on('click', function () {
        $(this).toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
    });

});