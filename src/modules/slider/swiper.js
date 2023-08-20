import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  speed: 500,
  loop: true,
  
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
