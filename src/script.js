document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 1;
    const totalSections = document.querySelectorAll('.section').length;
    const headerHeight = document.querySelector('header').offsetHeight; // Get the header height

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentSection < totalSections) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 1) {
            currentSection--;
        }

        const targetSection = document.getElementById(`section${currentSection}`);
        const targetPosition = targetSection.offsetTop; // Use offsetTop directly

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        event.preventDefault();
    }, { passive: false });
});