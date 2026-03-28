document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('mobile-menu');
            const navMenu = document.getElementById('nav-menu');

                if (menuToggle) {
                        menuToggle.addEventListener('click', () => {
                                    navMenu.classList.toggle('active');
                                                
                                                            // Optional: Animate the hamburger bars into an 'X'
                                                                        menuToggle.classList.toggle('is-active');
                                                                                });
                                                                                    }
                                                                                    });

                                                                                    // GALLERY FILTER LOGIC
                                                                                    const filterButtons = document.querySelectorAll('.filter-btn');
                                                                                    const artCards = document.querySelectorAll('.art-card');

                                                                                    filterButtons.forEach(button => {
                                                                                        button.addEventListener('click', () => {
                                                                                                filterButtons.forEach(btn => btn.classList.remove('active'));
                                                                                                        button.classList.add('active');

                                                                                                                // .trim() removes any hidden spaces that might break the match
                                                                                                                        const filterValue = button.textContent.toLowerCase().trim();

                                                                                                                                artCards.forEach(card => {
                                                                                                                                            const cardCategory = card.getAttribute('data-category').toLowerCase();
                                                                                                                                                        
                                                                                                                                                                    if (filterValue === 'all' || filterValue === cardCategory) {
                                                                                                                                                                                    card.style.display = 'block';
                                                                                                                                                                                                    card.style.animation = 'fadeIn 0.5s ease forwards';
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                card.style.display = 'none';
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                        window.addEventListener("load", function() {
                                                                                                                                                                                                                                                            const loader = document.getElementById("loader-wrapper");
                                                                                                                                                                                                                                                                loader.classList.add("loader-hidden");
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                
})