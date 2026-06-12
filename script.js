/* AhxanBattle - Interactive JavaScript */

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Smooth Scroll & Active Nav Link
const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === currentSection) {
            item.classList.add('active');
        }
    });
});

// Close mobile menu when link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields!');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in-up 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .tournament-card, .rule-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Tournament Registration
const registerButtons = document.querySelectorAll('.btn-secondary');
registerButtons.forEach((btn, index) => {
    if (index < 3) {
        btn.addEventListener('click', (e) => {
            if (!btn.disabled) {
                alert('Successfully registered for tournament!');
                btn.textContent = 'Registered ✓';
                btn.disabled = true;
            }
        });
    }
});

// Console Easter Egg
console.log(`
╔═══════════════════════════════════════╗
║     Welcome to AhxanBattle! 🎮        ║
║   Battle. Compete. Conquer.           ║
╚═══════════════════════════════════════╝

Version: 1.0.0
Theme: Neon Blue Gaming
Status: Ready to Battle!

Questions? Contact: support@ahxanbattle.com
`);

// Accessibility: Focus Management
const focusableElements = document.querySelectorAll('a, button, input, textarea');
focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #00d4ff';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('AhxanBattle website initialized successfully!');
    document.body.style.opacity = '1';
});