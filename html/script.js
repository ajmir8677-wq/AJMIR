document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    
    const contactForm = document.querySelector('.contact-form');
    const alertBox = document.querySelector('.alert-box');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            
            if (alertBox) {
                alertBox.style.display = 'block';
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 4000);
            } else {
                alert('ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।');
            }

            
            contactForm.reset();
        });
    }
});