const gallery = document.querySelector('.js-gallery');
const revealBtn = document.querySelector('.js-reveal');
const revealBtnText = document.querySelector('.js-reveal-text');
const revealArrow = document.querySelector('.js-reveal-arrow');
const gradientEl = document.querySelector('.js-gradient');

let isRevealed = false;

const toggleRevealState = () => (isRevealed = !isRevealed);
const toggleGradient = () => (isRevealed ? gradientEl.classList.remove('!h-0') : gradientEl.classList.add('!h-0'));

const handleRevealBtn = () => {
  revealBtnText.textContent = revealBtnText.textContent === 'Rozwiń' ? 'Zwiń' : 'Rozwiń';
  revealArrow.classList.toggle('!-rotate-90');
  revealBtn.classList.toggle('!btn-alt-black-inner');
};

const changeGalleryHeight = () => {
  gallery.classList.toggle('max-h-[1400px]');
  gallery.classList.toggle(`max-h-auto`);
};

export const revealProjects = () => {
  toggleGradient();
  changeGalleryHeight();
  handleRevealBtn();
  toggleRevealState();
};

revealBtn.addEventListener('click', revealProjects);
