export function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    animatedElements.forEach(el => observer.observe(el));
}
