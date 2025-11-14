document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Infinite supporter ticker functionality
    const ticker = document.querySelector('.ticker-names');
    if (ticker) {
      const names = ticker.innerHTML;
      ticker.innerHTML += names;
    }

    // Projects Slider functionality
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function goToSlide(slideIndex) {
            sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        if (totalSlides > 0) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            });

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                goToSlide(currentIndex);
            });

            // Initialize slider position
            goToSlide(0);
        }
    }

    // --- NEU: SPENDEN POP-UP FUNKTIONALITÄT ---
    const spendenTriggerButtons = document.querySelectorAll('.btn-spenden-trigger');
    const popupOverlay = document.getElementById('spenden-popup');
    const popupCloseButton = document.querySelector('.popup-close');

    if (popupOverlay && spendenTriggerButtons.length > 0) {
        // Funktion zum Öffnen des Pop-ups
        const openPopup = (event) => {
            event.preventDefault(); // Verhindert, dass der Link # die Seite nach oben springen lässt
            popupOverlay.classList.add('active');
        };

        // Funktion zum Schließen des Pop-ups
        const closePopup = () => {
            popupOverlay.classList.remove('active');
        };

        // Event Listener für alle Spenden-Buttons
        spendenTriggerButtons.forEach(button => {
            button.addEventListener('click', openPopup);
        });

        // Event Listener für den Schließen-Button
        if (popupCloseButton) {
            popupCloseButton.addEventListener('click', closePopup);
        }

        // Event Listener zum Schließen bei Klick auf den Hintergrund
        popupOverlay.addEventListener('click', (event) => {
            // Schließt nur, wenn direkt auf den dunklen Hintergrund geklickt wird
            if (event.target === popupOverlay) {
                closePopup();
            }
        });
    }
});