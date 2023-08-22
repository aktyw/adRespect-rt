import { resetSubMenu } from './mobile';

const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-mobile-menu');

export let isOpenMobileMenu = false;

export const handleMenu = () => {
  toggleHamburger();
  toggleMenu();
  toggleMenuState();
  resetSubMenu();
};

const toggleMenuState = () => (isOpenMobileMenu = !isOpenMobileMenu);

const toggleMenu = () => menu.classList.toggle('!translate-y-0');

const toggleHamburger = () => hamburger.classList.toggle('tham-active');

hamburger.addEventListener('click', handleMenu);
menu.addEventListener('click', (e) => e.target.closest('.js-item-mobile') && handleMenu());
