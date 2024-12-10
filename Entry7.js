// Debounce helper for performance
function debounce(func, wait) {
  let timeout;
  return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Scroll event listener
window.addEventListener('scroll', debounce(function () {
  const scrollY = window.scrollY;
  const windowWidth = window.innerWidth;

  // Select all shape elements
  const shapes = document.querySelectorAll('.shape');

  shapes.forEach((shape) => {
      const shapeWidth = shape.offsetWidth;
      const shapeLeft = shape.offsetLeft;

      // Determine direction and move shapes
      let moveX = shapeLeft < windowWidth / 2 
          ? shapeLeft + (scrollY * 0.1) 
          : shapeLeft - (scrollY * 0.1);

      shape.style.transform = `translateX(${moveX}px)`;
  });

  // Move the white section
  const whiteSection = document.querySelector('.white-section');
  if (whiteSection) {
      whiteSection.style.transform = `translateY(-${scrollY}px)`;
  }
}, 10)); // Debounce with 10ms delay

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show scroll-to-top button logic
window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
      scrollButton.style.display = 
          (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
          ? 'block' 
          : 'none';
  }
});
