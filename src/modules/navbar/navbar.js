const navContainer = document.querySelector('.js-nav-container');
const slider = document.querySelector('.js-slider');

const options = {
  rootMargin: '-150px',
  threshold: 0,
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
  navContainer.classList.add('-translate-y-20');
  navContainer.classList.remove('translate-y-0');
};

export const observer = new IntersectionObserver(handler, options);

observer.observe(slider);