const menu = document.querySelector('.js-menu');
const subMenu = document.querySelector('.js-submenu');
const menuBtn = document.querySelector('.js-btn-menu');
const submenuBtn = document.querySelector('.js-btn-submenu');

let isOpenSubMenu = false;
let isOpenMenu = false;

export const revealMenu = () => {
  menu.classList.remove('hidden');
  isOpenSubMenu = true;
};

export const revealSubMenu = () => {
  subMenu.classList.remove('hidden');
  isOpenMenu = true;
};

menuBtn.addEventListener('click', revealMenu);
submenuBtn.addEventListener('click', revealSubMenu);
