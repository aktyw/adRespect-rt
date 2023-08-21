import Masonry from 'masonry-layout';

const gallery = document.querySelector('.js-gallery');

const options = {
  itemSelector: '.js-grid-item',
  columnWidth: '.grid-sizer',
  fitWidth: true,
  gutter: 45,
  transitionDuration: '.5s',
  stagger: 20,
};

export let masonry;

window.addEventListener('DOMContentLoaded', () => {
  masonry = new Masonry(gallery, options);
});
