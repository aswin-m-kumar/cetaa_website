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

    // Counter Animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'), 10);
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 16); 

                const updateCount = () => {
                    count += increment;
                    if (count < countTo) {
                        target.innerText = Math.ceil(count).toLocaleString() + (target.getAttribute('data-suffix') || '');
                        requestAnimationFrame(updateCount);
                    } else {
                        target.innerText = countTo.toLocaleString() + (target.getAttribute('data-suffix') || '');
                    }
                };
                
                updateCount();
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
}
