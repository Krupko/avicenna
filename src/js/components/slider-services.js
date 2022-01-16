const sliderServices = document.querySelector('.services__slider');

const swiperMedium = new Swiper(sliderServices, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    // loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1225: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.services__scrollbar',
        draggable: true,
    }
});