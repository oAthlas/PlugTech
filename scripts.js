// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-white', 'shadow-md', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-5');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md', 'py-3');
        navbar.classList.add('bg-transparent', 'py-5');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Product Carousel
const carousel = document.getElementById('product-carousel');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});
nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        // Open clicked
        if (!isActive) {
            item.classList.add('active');
        }
    });
});