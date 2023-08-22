import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element) => {
  gsap.utils.toArray(element).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
    });
  });
};

const elements = ['p', 'h1', 'h2', 'h3', 'footer', 'span', '.btn', 'img', 'nav'];
fadeIn(elements);
