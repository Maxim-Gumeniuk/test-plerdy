import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export const Swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-but-next',
    prevEl: '.swiper-but-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slideToClickedSlide: true,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 18,
      slideToClickedSlide: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
      slideToClickedSlide: true,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
      slideToClickedSlide: true,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 18,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },
});


