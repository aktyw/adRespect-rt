export const hideElement = (element) => {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
  };