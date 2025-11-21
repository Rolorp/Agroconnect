// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- FEATURE 1: NAVBAR SCROLL EFFECT ---
    
    // 1. Select the navbar
    const navbar = document.querySelector('.navbar-custom');
    
    // Only execute if navbar exists
    if (navbar) {
        const scrollThreshold = 50; // Apply effect after 50px scroll

        // Function to handle scroll logic
        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                // If scrolled past threshold, add class
                navbar.classList.add('navbar-scrolled');
            } else {
                // If at top, remove class
                navbar.classList.remove('navbar-scrolled');
            }
        }
        
        // Listen for scroll event
        window.addEventListener('scroll', handleScroll);
        
        // Check initial position on load
        handleScroll();
    }


    // --- FEATURE 2: CONTACT FORM HANDLING ---

    // 1. Select form by ID
    const contactForm = document.getElementById('contact-form');

    // Only execute if form exists
    if (contactForm) {
        // 2. Select the form wrapper
        const formWrapper = document.getElementById('form-wrapper');

        // 3. Listen for submit event
        contactForm.addEventListener('submit', function(event) {
            
            // 4. IMPORTANT: Prevent default form submission (page reload)
            event.preventDefault();

            // 5. Capture user name for personalized message
            // Using specific ID for the name input
            const userName = document.getElementById('name').value;

            // 6. Replace wrapper HTML with success message
            // Note: Visible text remains in Spanish as requested
            formWrapper.innerHTML = `
                <div class="text-center">
                    <i class="bi bi-check-circle-fill text-primary-custom" style="font-size: 4rem;"></i>
                    <h2 class="mt-3">¡Gracias, ${userName}!</h2>
                    <p class="lead">Hemos recibido tu petición.</p>
                    <p>Un especialista de AgroConecta se pondrá en contacto contigo muy pronto.</p>
                </div>
            `;
        });
    }

});