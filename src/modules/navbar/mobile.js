const menuExpandBtn = document.querySelector('.js-link-mobile');
const menu = document.querySelector('.js-mobile-menu');
const subMenuCollapseBtn = document.querySelector('.js-menu-back');

export const expandSubMenu = () => {
  menu.classList.add('!-translate-x-[50%]');
};

menuExpandBtn.addEventListener('click', expandSubMenu);
subMenuCollapseBtn.addEventListener('click', () => menu.classList.remove('!-translate-x-[50%]'));

export const resetSubMenu = () => {
  menu.classList.remove('!-translate-x-[50%]');
};
