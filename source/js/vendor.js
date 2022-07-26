// Swiper 7.4.1
import Swiper from './vendor/swiper';

// eslint-disable-next-line no-new
new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + '</span>';
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + '</span>';
        },
      },
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 25,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      allowTouchMove: false,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
