$(function () {
    new Swiper('.portfolio__slider', {
        slidesPerView: 3,
        // slidesPerGroup: 1,
        spaceBetween: 10,
        breakpoints: {

            320: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1280: {
                slidesPerView: 3
            }
        },
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    $(".services__item-title").on("click", function () {
        // $(".services__item").removeClass("services__item--active");
        $(this).parent().toggleClass("services__item--active");
    });

    $('#pagepiling').pagepiling({
        sectionSelector: '.page-section',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        navigation: {
            'bulletsColor': '#009a74',
            'position': 'left',
        },
        css3: true,
    });

})