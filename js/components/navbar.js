export function renderNavbar(activePage) {
    const navbarHtml = `
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-white/10 backdrop-blur-md py-5">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 cursor-pointer no-underline group">
                <div class="bg-red-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">C</div>
                <span id="brand-text" class="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-gold">CETAA</span>
            </a>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center gap-8">
                <a href="index.html" class="nav-link text-sm font-medium transition-all duration-300 ${activePage === 'home' ? 'text-white font-bold' : 'text-gray-200 hover:text-white hover:-translate-y-0.5'}">Home</a>
                <a href="index.html#about" class="nav-link text-sm font-medium transition-all duration-300 ${activePage === 'about' ? 'text-white font-bold' : 'text-gray-200 hover:text-white hover:-translate-y-0.5'}">About CETAA</a>
                <a href="renovation.html" class="nav-link text-sm font-medium transition-all duration-300 bg-yellow-500 text-red-900 px-5 py-2.5 rounded-full hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:-translate-y-1 ${activePage === 'renovation' ? 'ring-2 ring-white/50' : ''}">Renovation Project 2026</a>
            </div>

            <!-- Mobile Toggle -->
            <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110">
                <i data-lucide="menu" class="menu-icon w-6 h-6"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col md:hidden animate-fade-in-up origin-top">
            <a href="index.html" class="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-red-50 hover:pl-8 transition-all duration-300">Home</a>
            <a href="index.html#about" class="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-red-50 hover:pl-8 transition-all duration-300">About CETAA</a>
            <a href="renovation.html" class="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-red-50 hover:pl-8 transition-all duration-300">Renovation Project 2026</a>
        </div>
    </nav>
    `;

    document.getElementById('navbar-placeholder').innerHTML = navbarHtml;
    
    // Initialize Logic
    initNavbarLogic();
}

function initNavbarLogic() {
    const navbar = document.getElementById('navbar');
    const brandText = document.getElementById('brand-text');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcons = document.querySelectorAll('.menu-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll Effect
    const navScrollChange = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'shadow-lg', 'py-3');
            navbar.classList.remove('bg-white/10', 'backdrop-blur-md', 'py-5');
            
            brandText.classList.remove('text-white');
            brandText.classList.add('text-gray-900');
            
            menuIcons.forEach(icon => {
                icon.classList.remove('text-white');
                icon.classList.add('text-gray-900');
            });

            navLinks.forEach(link => {
                if (!link.classList.contains('bg-yellow-500')) {
                    link.classList.remove('text-gray-200', 'hover:text-white');
                    link.classList.add('text-gray-600', 'hover:text-red-900');
                }
            });
             // Update mobile button color
             mobileMenuBtn.classList.remove('text-white');
             mobileMenuBtn.classList.add('text-gray-900');

        } else {
            navbar.classList.remove('bg-white/95', 'shadow-lg', 'py-3');
            navbar.classList.add('bg-white/10', 'backdrop-blur-md', 'py-5');
            
            brandText.classList.add('text-white');
            brandText.classList.remove('text-gray-900');
            
            menuIcons.forEach(icon => {
                icon.classList.add('text-white');
                icon.classList.remove('text-gray-900');
            });

             navLinks.forEach(link => {
                if (!link.classList.contains('bg-yellow-500')) {
                    link.classList.add('text-gray-200', 'hover:text-white');
                    link.classList.remove('text-gray-600', 'hover:text-red-900');
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
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Change icon to X (optional, needing lucide or manual SVG)
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}
