// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = 'rgba(10, 25, 47, 0.85)';
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// GSAP Animations
// Hero section animations
gsap.from('.glitch-text', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.typing-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.cta-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 1
});

// Animate progress bars
gsap.utils.toArray('.progress').forEach(progress => {
    const width = progress.getAttribute('data-width');
    gsap.to(progress, {
        scrollTrigger: {
            trigger: progress,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        width: width + '%',
        duration: 1.5,
        ease: 'power3.out'
    });
});

// Animate timeline items
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: item.classList.contains('even') ? 50 : -50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Animate blog cards
gsap.utils.toArray('.blog-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Scroll trigger animations for sections
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out'
    });
});

// Skill cards animation
gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: i * 0.2
    });
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: i * 0.2
    });
});

// Contact form animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out'
});

// Social links animation
gsap.from('.social-links a', {
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.5,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
});

// Contact form submission handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully!';
    successMessage.style.cssText = 'background-color: #4CAF50; color: white; padding: 1rem; border-radius: 5px; margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem; opacity: 0; transform: translateY(20px); transition: all 0.3s ease;';

    // Add success message to form
    contactForm.appendChild(successMessage);

    // Reset form
    contactForm.reset();

    // Animate success message
    setTimeout(() => {
        successMessage.style.opacity = '1';
        successMessage.style.transform = 'translateY(0)';
    }, 100);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';
        setTimeout(() => successMessage.remove(), 300);
    }, 5000);
});

// Active section highlight in navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});