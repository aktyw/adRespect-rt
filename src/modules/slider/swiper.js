import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3500,
    pauseOnMouseEnter: true,
  },
  speed: 500,
  loop: true,
  slidesPerView: 1,

  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 25,
    depth: 200,
    stretch: 50,
  },
});
