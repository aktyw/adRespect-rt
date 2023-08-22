import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
const gallery = document.querySelector('.js-gallery');

const options = {
  itemSelector: '.js-grid-item',
  columnWidth: '.grid-sizer',
  fitWidth: true,
  gutter: 45,
  transitionDuration: '.5s',
  stagger: 20,
};

export const masonry = new Masonry(gallery, options);

imagesLoaded(gallery).on('progress', () => masonry.layout());
