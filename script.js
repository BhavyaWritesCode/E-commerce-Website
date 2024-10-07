const scrollContainer = document.querySelector('.categories');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

// Function to check scroll position and hide/show buttons accordingly
function checkScrollPosition() {
    const scrollLeftPosition = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Show or hide the left scroll button
    if (scrollLeftPosition === 0) {
        scrollLeft.classList.add('hidden');
    } else {
        scrollLeft.classList.remove('hidden');
    }

    // Show or hide the right scroll button
    if (scrollLeftPosition >= maxScrollLeft) {
        scrollRight.classList.add('hidden');
    } else {
        scrollRight.classList.remove('hidden');
    }
}

// Initially check scroll position
checkScrollPosition();

// Scroll left button click event
scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -150, // Adjust scroll distance
        behavior: 'smooth'
    });
});

// Scroll right button click event
scrollRight.addEventListener('click', () => {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    // Check if we're close to the end and scroll to the exact max position if necessary
    if (scrollContainer.scrollLeft + 150 >= maxScrollLeft) {
        scrollContainer.scrollTo({
            left: maxScrollLeft, // Scroll exactly to the end
            behavior: 'smooth'
        });
    } else {
        scrollContainer.scrollBy({
            left: 150, // Normal scroll
            behavior: 'smooth'
        });
    }
});

// Check scroll position when user manually scrolls
scrollContainer.addEventListener('scroll', checkScrollPosition);
