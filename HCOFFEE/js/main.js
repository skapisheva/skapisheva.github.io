$(function () {
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.callback').toggleClass('callback-mobile--active');
        $('.header__top').toggleClass('header__top--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });
})

