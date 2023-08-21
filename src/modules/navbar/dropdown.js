import { hideElement } from '../../main';
const menu = document.querySelector('.js-menu');
const subMenu = document.querySelector('.js-submenu');
const menuBtn = document.querySelector('.js-btn-menu');
const submenuBtn = document.querySelector('.js-btn-submenu');
const menuArrow = document.querySelector('.js-menu-arrow');
const subMenuArrow = document.querySelector('.js-submenu-arrow');

export const menuState = {
  isOpenMenu: false,
  isOpenSubMenu: false,
};

const showDropdown = (e, { dropdown, type, arrow }) => {
  e.stopPropagation();
  dropdown.classList.remove('hidden');
  menuState[type] = true;
  rotateArrow(arrow, menuState[type]);
};

const hideMenus = () => {
  [menu, subMenu].forEach(hideElement);
  menuState.isOpenMenu = false;
  menuState.isOpenSubMenu = false;
  rotateArrow(menuArrow);
  rotateArrow(subMenuArrow);
};

const rotateArrow = (arrow, state) =>
  state ? arrow.classList.add('-rotate-90') : arrow.classList.remove('-rotate-90');

menuBtn.addEventListener('click', (e) => {
  showDropdown(e, { dropdown: menu, type: 'isOpenMenu', arrow: menuArrow });
  if (e.target.closest('.js-dropdown-item')) hideMenus();
});

submenuBtn.addEventListener('click', (e) => {
  showDropdown(e, { dropdown: subMenu, type: 'isOpenSubMenu', arrow: subMenuArrow });
});

document.addEventListener('click', hideMenus);
