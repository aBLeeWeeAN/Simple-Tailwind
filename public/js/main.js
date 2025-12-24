const slider = document.getElementById('drag-scroll');

let startX = 0;
let startScroll = 0;
let dragging = false;

slider.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;

    dragging = true;
    slider.setPointerCapture(e.pointerId);
    slider.classList.add('cursor-grabbing');

    startX = e.clientX;
    startScroll = slider.scrollLeft;
});

slider.addEventListener('pointermove', (e) => {
    if (!dragging) return;

    const dx = e.clientX - startX;
    // slider.scrollLeft = startScroll - dx;
    slider.scrollLeft = Math.min(startScroll - dx, slider.scrollWidth - slider.clientWidth);
});

slider.addEventListener('pointerup', () => {
    dragging = false;
    slider.classList.remove('cursor-grabbing');
});

slider.addEventListener('pointercancel', () => {
    dragging = false;
    slider.classList.remove('cursor-grabbing');
});

// import splidejssplide from 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm';

// new splidejssplide.Splide('.splide');

// document.addEventListener('DOMContentLoaded', function () {
//     var splide = new Splide('.splide', {
//         width: '100%',
//         height: 'auto',
//         autoWidth: true,
//         autoHeight: true,
//         gap: '30px',
//         mediaQuery: 'min'
//     });
//     splide.mount();
// });

// export {};

// var splide = new Splide('#main-carousel', {
//     pagination: false
// });

// var thumbnails = document.getElementsByClassName('thumbnail');
// var current;

// for (var i = 0; i < thumbnails.length; i++) {
//     initThumbnail(thumbnails[i], i);
// }

// function initThumbnail(thumbnail, index) {
//     thumbnail.addEventListener('click', function () {
//         splide.go(index);
//     });
// }

// splide.on('mounted move', function () {
//     var thumbnail = thumbnails[splide.index];

//     if (thumbnail) {
//         if (current) {
//             current.classList.remove('is-active');
//         }

//         thumbnail.classList.add('is-active');
//         current = thumbnail;
//     }
// });

// splide.mount();

// var swiper = new Swiper('.mySwiper', {
//     watchSlidesProgress: true,
//     slidesPerView: 2,
//     spaceBetween: 30,
//     freeMode: true
// });

// var swiper = new Swiper('.mySwiper', {
//     watchSlidesProgress: true,
//     direction: 'horizontal',
//     freeMode: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     breakpoints: {
//         // when window width is >= 320px
//         160: {
//             slidesPerView: 2,
//             spaceBetween: 30
//         },
//         // when window width is >= 480px
//         320: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         }
//     }
// });

// var swiper = new Swiper('.mySwiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 30
// });
