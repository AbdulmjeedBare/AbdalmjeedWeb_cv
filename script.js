// تهيئة مكتبة AOS للتحريكات
AOS.init({
    duration: 1000,
    once: true
});

// التحكم في القائمة المتنقلة
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// زر العودة للأعلى
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تأثيرات التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// نموذج الاتصال
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
    alert('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
});

// تأثيرات إضافية للبطاقات
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// تحميل الصور بشكل متأخر
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

}); 