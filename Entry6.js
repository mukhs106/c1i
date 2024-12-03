window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    // Select all shape elements
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape) => {
        let shapeWidth = shape.offsetWidth;
        let shapeLeft = shape.offsetLeft;

        // Check if the shape is on the left or right side of the center of the screen
        if (shapeLeft < windowWidth / 2) {
            // If the shape is on the left, move it to the right (scroll down or up)
            let moveX = shapeLeft + (scrollY * 0.1);  // Controls the speed of movement
            shape.style.transform = `translateX(${moveX}px)`;
        } else {
            // If the shape is on the right, move it to the left (scroll down or up)
            let moveX = shapeLeft - (scrollY * 0.1);  // Controls the speed of movement
            shape.style.transform = `translateX(${moveX}px)`;
        }
    });

    // Move the white section up to cover the black section
    const whiteSection = document.querySelector('.white-section');
    whiteSection.style.transform = `translateY(-${scrollY}px)`;
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Show the scroll-to-top button when scrolling down
  window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };