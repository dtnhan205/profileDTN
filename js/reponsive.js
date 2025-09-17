// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Animation khi cuộn
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .skill-card, .experience-card, .contact-info');
        elements.forEach((el, index) => {
            el.style.setProperty('--index', index);
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                el.style.opacity = '1';
                el.style.animationPlayState = 'running';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Chạy lần đầu khi tải trang
});