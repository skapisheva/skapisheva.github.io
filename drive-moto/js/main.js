$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',

        responsive: [{
            breakpoint: 969,
            settings: {
                arrows: false
            }
        }]

    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');

        $('.product__slider').slick('setPosition');

    });

    $('.product-item__favorit').on('click', function () {
        $(this).toggleClass('product-item__favorit--active')
    });

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',

        responsive: [

            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,

                }
            }
        ]
    });


    $('.product__slider').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.product-item').css('height', slickTrackHeight + 'px');
    });



    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item').removeClass('product-item--list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item').addClass('product-item--list');
    });


    $('.rate-yo').rateYo({
        ratedFill: "#1C62CD",
        spacing: "7px",
        normalFill: "#C4C4C4"
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile--active')
    });

    $('.footer__top-drop').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__top-drop--active');
    });

    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle();
    });

});