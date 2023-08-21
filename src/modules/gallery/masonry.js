import Masonry from 'masonry-layout';

const gallery = document.querySelector('.js-gallery');

export const masonry = new Masonry(gallery, {
  itemSelector: '.js-grid-item',
  columnWidth: '.grid-sizer',
  fitWidth: true,
  gutter: 45,
  transitionDuration: '.5s',
  stagger: 20,
});
