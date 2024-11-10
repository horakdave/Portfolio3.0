document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 1;
    const totalSections = document.querySelectorAll('.section').length;
    const headerHeight = document.querySelector('header').offsetHeight;
    const logo = document.querySelector('.logo');
    const menu = document.getElementById('menu');

    const ageCounter = document.getElementById('age-counter');
    const birthDate = new Date('2009-03-01T06:00:00'); // Date

    function updateAge() {
        const now = new Date();
        const ageInSeconds = Math.floor((now - birthDate) / 1000);
        const age = (ageInSeconds / 31557600).toFixed(7).replace('.', ','); // czech ting
        ageCounter.textContent = age; // Update the age display
    }

    // Update age every second/1000
    setInterval(updateAge, 1);

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentSection < totalSections) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 1) {
            currentSection--;
        }

        if (currentSection === 3) {
            currentSection = 4; // Set it to the timeline section
        } else if (currentSection > 4) {
            currentSection = 1; // Reset to the first section if scrolled beyond the timeline
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

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const isActive = menu.classList.toggle('show');
        this.classList.toggle('active', isActive); // Rotation
    });

    function showDetails(language) {
        const details = {
            'HTML': 'Started learning basic web development with HTML & CSS in 2018.',
            'JavaScript': 'Began adding interactivity to web pages with JavaScript in 2019.',
            'Python': 'Expanded into scripting and automation with Python in 2020.',
            'C++': 'Started learning more complex programming concepts with C++ in 2021.'
        };

        const languageDetails = document.getElementById('language-details');
        languageDetails.textContent = details[language] || 'No details available.';
    }
});