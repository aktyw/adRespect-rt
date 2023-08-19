import './css/style.css';
export { masonry } from './modules/gallery/masonry';
export { fslightbox } from 'fslightbox';
export { revealProjects } from './modules/gallery/gallery';
export { revealMenu, revealSubMenu } from './modules/navbar/dropdown';
// export { observer } from './modules/navbar/navbar';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
