import Masonry from 'masonry-layout';

const gallery = document.querySelector('.js-gallery');

export const masonry = new Masonry(gallery, {
  itemSelector: '.js-grid-item',
  columnWidth: 450,
  gutter: 34,
  fitWidth: true,
  transitionDuration: '1s',
});

