// Select all images with the "artwork" class
const artworks = document.querySelectorAll('.artwork');

// Add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Loop through each artwork and apply scroll-based animation
    artworks.forEach((artwork) => {
        const isLeft = artwork.classList.contains('left');
        const direction = isLeft ? 1 : -1; // Move left images right and right images left
        const offset = scrollPosition * 0.2 * direction; // Adjust 0.2 for speed

        artwork.style.transform = `translateX(${offset}px)`; // Apply horizontal movement
    });
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