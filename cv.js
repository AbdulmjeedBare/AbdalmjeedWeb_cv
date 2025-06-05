// Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
            
            if (isVisible) {
                bar.style.width = bar.parentElement.getAttribute('data-progress') || '0%';
            }
        });
    };

    // Initial check for progress bars
    animateProgressBars();

    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);

    // Add hover effect to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

}); 