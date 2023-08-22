export const hideElement = (element) => {
  if (!element.classList.contains('hidden')) {
    element.classList.add('hidden');
  }
};

export const handleDOMDimensions = {
  getElementHeight: (element) => element.offsetHeight,
  setElementHeight: (element, height) => (element.style.height = `${height}px`),
  getElementWidth: (element) => element.offsetWidth,
  setElementWidth: (element, width) => (element.style.width = `${width}px`),
};
