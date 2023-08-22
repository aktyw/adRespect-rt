import { masonry } from './masonry';
import imagesLoaded from 'imagesloaded';
import { handleDOMDimensions as dimensions } from '../../main';

const gallery = document.querySelector('.js-gallery');
const revealBtn = document.querySelector('.js-reveal');
const revealBtnText = document.querySelector('.js-reveal-text');
const revealArrow = document.querySelector('.js-reveal-arrow');
const gradientEl = document.querySelector('.js-gradient');

const images = ['/g_10.webp', '/g_11.webp', '/g_12.webp'];

let isRevealed = false;

const toggleRevealState = () => (isRevealed = !isRevealed);
const toggleGradient = () => (isRevealed ? gradientEl.classList.remove('!h-0') : gradientEl.classList.add('!h-0'));

const handleRevealBtn = () => {
  revealBtnText.textContent = revealBtnText.textContent === 'Rozwiń' ? 'Zwiń' : 'Rozwiń';
  revealArrow.classList.toggle('!-rotate-90');
  revealBtn.classList.toggle('!btn-alt-black-inner');
};

const changeGalleryHeight = () => {
  gallery.classList.toggle(`!max-h-full`);

  if (!isRevealed) return;

  const galleryHeight = dimensions.getElementHeight(gallery);
  dimensions.setElementHeight(gallery, galleryHeight);
};

const createImageElement = (imageRelLink, alt = '') => {
  const template = `
        <a class="js-grid-item grid-image-container" data-fslightbox="gallery" href="${imageRelLink}">
          <img class="grid-item" src="${imageRelLink}" alt="${alt}" />
        </a>
      `;

  const container = document.createElement('div');
  container.classList.add('grid-sizer');
  container.innerHTML = template;
  return container;
};

const appendImages = () => {
  const fragment = document.createDocumentFragment();
  const elements = [];

  images.forEach((img) => {
    const element = createImageElement(img);
    fragment.appendChild(element);
    elements.push(element);
  });

  gallery.appendChild(fragment);
  masonry.appended(elements);
};

export const toggleRevealProjects = () => {
  toggleGradient();
  handleRevealBtn();
  toggleRevealState();
  changeGalleryHeight();
};

const loadImages = () => {
  appendImages();
  // eslint-disable-next-line no-undef
  refreshFsLightbox();
  resetMasonryLayout();
};

const resetMasonryLayout = () => imagesLoaded(gallery).on('progress', () => masonry.layout());

revealBtn.addEventListener('click', toggleRevealProjects);
revealBtn.addEventListener('click', loadImages, { once: true });
