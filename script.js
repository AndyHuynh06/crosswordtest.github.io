const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('wheel', (event) => {
    // Prevent default scrolling behavior
    event.preventDefault();

    // Scroll to the next snap point
    scrollContainer.scrollBy({
        top: event.deltaY,
        behavior: 'smooth',
    });
});