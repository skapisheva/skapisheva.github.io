$(function () {

    $('.slider__inner').slick({
        prevArrow: '<button class="slider__btn slider__btn-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.slider__inner::before').on('click', function () {
        $('.slick-slide').addClass('slick-active');
    });


});