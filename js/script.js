// 1. THE LOADER FIX (Runs immediately)
function revealMasters() {
    const loader = document.getElementById("loader-wrapper");
    if (loader) {
        loader.classList.add("loader-hidden");
        console.log("Loom & Logic: Site revealed.");
    }
}

// Reveal when everything (images/styles) is 100% finished
window.addEventListener("load", revealMasters);

// THE FAIL-SAFE: Force show after 2 seconds if images are missing
setTimeout(revealMasters, 2000);


// 2. MOBILE MENU (Original Logic)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }
});

// 3. GALLERY FILTER (Original Logic)
const filterButtons = document.querySelectorAll('.filter-btn');
const artCards = document.querySelectorAll('.art-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.textContent.toLowerCase().trim();

        artCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (category) {
                if (filterValue === 'all' || filterValue === category.toLowerCase()) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});
