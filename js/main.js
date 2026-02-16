import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Determine active page
    const path = window.location.pathname;
    let activePage = 'home';
    if (path.includes('renovation')) {
        activePage = 'renovation';
    } else if (window.location.hash.includes('about')) {
        activePage = 'about';
    }

    // Render Components
    renderNavbar(activePage);
    renderFooter();

    // Initialize Animations
    initAnimations();

    // Re-initialize Lucide icons after dynamic injection
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Any page-specific logic can go here or be imported
    // For renovation page...
    if (activePage === 'renovation') {
        initRenovationLogic();
    }
});

function initRenovationLogic() {
     // Don't error if elements don't exist
     const cards = document.querySelectorAll('.before-after-card');
     if (cards.length === 0) return;

    // Before/After Image Toggle
    cards.forEach(card => {
        const toggleBtn = card.querySelector('.toggle-btn');
        const imgCurrent = card.querySelector('.img-current');
        const imgProposed = card.querySelector('.img-proposed');
        const slider = card.querySelector('.toggle-slider');
        const labelCurrent = card.querySelector('.label-current');
        const labelProposed = card.querySelector('.label-proposed');

        if (toggleBtn && imgCurrent && imgProposed) {
            toggleBtn.addEventListener('click', () => {
                const isProposedVisible = !imgProposed.classList.contains('opacity-0');
                
                if (isProposedVisible) {
                    // Show Current
                    imgProposed.classList.add('opacity-0');
                    imgCurrent.classList.remove('opacity-0');
                    slider.classList.remove('translate-x-6');
                    slider.classList.add('translate-x-0');
                    toggleBtn.classList.remove('bg-green-500');
                    toggleBtn.classList.add('bg-red-500');
                    labelCurrent.classList.remove('text-gray-400');
                    labelCurrent.classList.add('text-white');
                    labelProposed.classList.remove('text-white');
                    labelProposed.classList.add('text-gray-400');
                } else {
                    // Show Proposed
                    imgProposed.classList.remove('opacity-0');
                    imgCurrent.classList.add('opacity-0');
                    slider.classList.remove('translate-x-0');
                    slider.classList.add('translate-x-6');
                    toggleBtn.classList.remove('bg-red-500');
                    toggleBtn.classList.add('bg-green-500');
                    labelCurrent.classList.remove('text-white');
                    labelCurrent.classList.add('text-gray-400');
                    labelProposed.classList.remove('text-gray-400');
                    labelProposed.classList.add('text-white');
                }
            });
        }
    });

    // Amount Buttons
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            amountBtns.forEach(b => {
                b.classList.remove('bg-red-900', 'text-white', 'border-red-900');
                b.classList.add('bg-white', 'text-gray-600', 'border-gray-300');
            });
            btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-300');
            btn.classList.add('bg-red-900', 'text-white', 'border-red-900');
            if (customAmountInput) {
                customAmountInput.value = btn.dataset.amount;
            }
        });
    });
}
