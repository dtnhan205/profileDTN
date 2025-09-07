// Hiệu ứng scroll mượt mà
document.addEventListener('DOMContentLoaded', function() {
    // Sửa lỗi scroll mượt mà
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Tính toán vị trí scroll chính xác
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cập nhật URL (tùy chọn)
                history.pushState(null, null, targetId);
            }
        });
    });

    // Hiệu ứng xuất hiện khi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm độ trễ khác nhau cho mỗi phần tử
                const delay = Array.from(entry.target.classList).includes('skill-card') ? 
                    Array.from(document.querySelectorAll('.skill-card')).indexOf(entry.target) * 100 : 0;
                
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }, delay);
            }
        });
    }, observerOptions);

    // Áp dụng hiệu ứng cho các section
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Áp dụng hiệu ứng cho các card
    document.querySelectorAll('.skill-card, .experience-card, .contact-info').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Xử lý sự kiện resize để cập nhật chiều cao header
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Cập nhật lại các sự kiện scroll nếu cần
        }, 250);
    });
});