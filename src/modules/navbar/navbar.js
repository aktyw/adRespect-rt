import { menuState } from './dropdown';
import { isMenuOpen } from './hamburger';
const navContainer = document.querySelector('.js-nav-container');
const swiper = document.querySelector('.swiper');

const options = {
  rootMargin: '-50px',
  threshold: 0.5,
};

const handler = (entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? showNavbar() : hideNavbar();
  });
};

const showNavbar = () => {
  navContainer.classList.add('translate-y-0');
  navContainer.classList.remove('-translate-y-20');
};

const hideNavbar = () => {
  if (menuState.isOpenMenu || isMenuOpen) return;
  console.log(isMenuOpen);
  navContainer.classList.add('-translate-y-20');
  navContainer.classList.remove('translate-y-0');
};

export const observer = new IntersectionObserver(handler, options);

observer.observe(swiper);
