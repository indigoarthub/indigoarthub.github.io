// 1. THE LOADER FIX
function revealMasters() {
    const loader = document.getElementById("loader-wrapper");
    if (loader) {
        loader.classList.add("loader-hidden");
        console.log("Indigo Art Hub: Masters Revealed.");
    }
}

window.addEventListener("load", revealMasters);
setTimeout(revealMasters, 2500);

// 2. UNIVERSAL MOBILE MENU
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }

    // 3. GALLERY FILTERING LOGIC
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artCards = document.querySelectorAll('.art-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filterValue = button.textContent.toLowerCase().trim();

                artCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (category) {
                        card.style.display = (filterValue === 'all' || filterValue === category.toLowerCase()) ? 'block' : 'none';
                    }
                });
            });
        });
    }
});
