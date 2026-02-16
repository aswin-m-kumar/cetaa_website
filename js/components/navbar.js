export function renderNavbar(activePage) {
    const navbarHtml = `
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-6">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-lg" id="nav-container">
            <a href="index.html" class="flex items-center gap-3 cursor-pointer no-underline group px-2">
                <img src="assets/cetaa-logo.png" alt="Logo" class="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300 brand-logo brightness-0 invert">
                <span id="brand-text" class="text-xl font-bold tracking-tight text-white transition-colors font-serif">CETAA</span>
            </a>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center gap-1">
                <a href="index.html" class="nav-link px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activePage === 'home' ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/5'}">Home</a>
                <a href="https://alumni.cet.ac.in" class="nav-link px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-200 hover:text-white hover:bg-white/5">Member Login</a>
                <a href="renovation.html" class="ml-4 nav-link px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-gold text-maroon hover:bg-white hover:text-maroon shadow-md transform hover:scale-105">
                   Renovation 2026
                </a>
            </div>

            <!-- Mobile Toggle -->
            <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110 px-2">
                <i data-lucide="menu" class="menu-icon w-6 h-6"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col md:hidden animate-reveal-up origin-top overflow-hidden border border-gray-200">
            <a href="index.html" class="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50 flex justify-between items-center group">
                Home <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 group-hover:text-maroon"></i>
            </a>
            <a href="https://alumni.cet.ac.in" class="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50 flex justify-between items-center group">
                Member Login <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 group-hover:text-maroon"></i>
            </a>
            <a href="renovation.html" class="py-4 px-6 text-left text-maroon font-bold bg-gold/10 hover:bg-gold/20 flex justify-between items-center">
                Renovation Project <i data-lucide="heart" class="w-4 h-4 text-maroon fill-current"></i>
            </a>
        </div>
    </nav>
    `;

    document.getElementById('navbar-placeholder').innerHTML = navbarHtml;
    
    // Initialize Logic
    initNavbarLogic();
}

function initNavbarLogic() {
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('nav-container');
    const brandText = document.getElementById('brand-text');
    const brandLogo = document.querySelector('.brand-logo');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll Effect
    const navScrollChange = () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('py-6');
            navbar.classList.add('py-2');
            
            navContainer.classList.add('bg-white/90', 'border-gray-200');
            navContainer.classList.remove('bg-white/5', 'border-white/10');
            
            brandText.classList.remove('text-white');
            brandText.classList.add('text-maroon');
            
            brandLogo.classList.remove('brightness-0', 'invert');

            menuIcon.classList.remove('text-white');
            menuIcon.classList.add('text-gray-900');

            navLinks.forEach(link => {
                if (!link.classList.contains('bg-gold')) {
                    link.classList.remove('text-gray-200', 'hover:bg-white/5');
                    link.classList.add('text-gray-600', 'hover:bg-gray-100');
                }
            });
             // Update mobile button color
             mobileMenuBtn.classList.remove('text-white');
             mobileMenuBtn.classList.add('text-gray-900');

        } else {
            navbar.classList.add('py-6');
            navbar.classList.remove('py-2');
            
            navContainer.classList.remove('bg-white/90', 'border-gray-200');
            navContainer.classList.add('bg-white/5', 'border-white/10');
            
            brandText.classList.add('text-white');
            brandText.classList.remove('text-maroon');
            
            brandLogo.classList.add('brightness-0', 'invert');
            
            menuIcon.classList.add('text-white');
            menuIcon.classList.remove('text-gray-900');

             navLinks.forEach(link => {
                if (!link.classList.contains('bg-gold')) {
                    link.classList.add('text-gray-200', 'hover:bg-white/5');
                    link.classList.remove('text-gray-600', 'hover:bg-gray-100');
                }
            });
             // Update mobile button color
             mobileMenuBtn.classList.add('text-white');
             mobileMenuBtn.classList.remove('text-gray-900');
        }
    };

    window.addEventListener('scroll', navScrollChange);
    navScrollChange(); // Initial check

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
