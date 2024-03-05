'use strict';

const scrollContainer = document.querySelector('.scroll');
const firstBoxes = document.querySelectorAll('.box');



  // Function to clone and append the first set of boxes
function cloneAndAppendFirstBoxes() {
  firstBoxes.forEach(box => {
    const clone = box.cloneNode(true);
    scrollContainer.appendChild(clone);
  });
}

// Detect when scrolling reaches the end
scrollContainer.addEventListener('scroll', () => {
  const lastBox = scrollContainer.lastElementChild;
  const lastBoxRect = lastBox.getBoundingClientRect();
  if (lastBoxRect.right <= window.innerWidth) {
    cloneAndAppendFirstBoxes(); // Clone and append when reaching the end
  }
});

