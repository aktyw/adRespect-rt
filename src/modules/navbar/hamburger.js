const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-mobile-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.js-mobile-menu');

export const openMenu = () => {
  menu.classList.remove('translate-x-full');
};

export const hideMenu = (e) => {
  e.preventDefault();
  menu.classList.add('translate-x-full');
};

hamburger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', hideMenu);
mobileMenu.addEventListener('click', hideMenu);
