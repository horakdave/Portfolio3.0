document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 1;
    const totalSections = document.querySelectorAll('.section').length;
    const headerHeight = document.querySelector('header').offsetHeight;
    const logo = document.querySelector('.logo');

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentSection < totalSections) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 1) {
            currentSection--;
        }

        const targetSection = document.getElementById(`section${currentSection}`);
        const targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        if (currentSection === 2) {
            logo.style.transition = 'opacity 0.3s ease';
            logo.style.opacity = '0';
            setTimeout(() => {
                logo.textContent = 'D';
                logo.style.color = '#5E17EB';
                logo.style.opacity = '1';
            }, 300);
        } else {
            logo.style.transition = 'opacity 0.3s ease';
            logo.style.opacity = '0';
            setTimeout(() => {
                logo.textContent = 'David';
                logo.style.color = 'var(--light-green)';
                logo.style.opacity = '1';
            }, 300);
        }

        event.preventDefault();
    }, { passive: false });
});