// IRON FORGE GYM WEBSITE - JAVASCRIPT

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
        navLinks.style.padding = '2rem 1rem';
        navLinks.style.gap = '1rem';
        navLinks.style.borderBottom = '1px solid rgba(42, 48, 80, 1)';
        navLinks.style.zIndex = '99';
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add active link to navigation
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.nav-link, .logo');

menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.style.color = '#00d9ff';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.feature-card, .program-card, .trainer-card, .testimonial-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.querySelector('.faq-answer');
        const isOpen = answer.style.display === 'block';
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.querySelector('.faq-answer').style.display = 'none';
        });
        
        // Toggle current item
        answer.style.display = isOpen ? 'none' : 'block';
    });
});

// Initialize FAQ answers as hidden
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #00d9ff;
    color: #0a0e27;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: none;
    z-index: 1000;
    opacity: 0.8;
    font-weight: bold;
`;

document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollButton.addEventListener('mouseover', () => {
    scrollButton.style.backgroundColor = '#00ff41';
    scrollButton.style.transform = 'scale(1.1)';
});

scrollButton.addEventListener('mouseout', () => {
    scrollButton.style.backgroundColor = '#00d9ff';
    scrollButton.style.transform = 'scale(1)';
});

// Form submission simulation
const joinButtons = document.querySelectorAll('.btn-block');
joinButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent === 'Join Now' || btn.textContent === 'Get Started') {
            e.preventDefault();
            alert('Thank you for your interest! Please fill out the form or contact us to complete your membership.');
        }
    });
});

console.log('IRON FORGE website loaded successfully!');
