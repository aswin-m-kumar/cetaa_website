export function renderFooter() {
    const footerHtml = `
    <footer class="bg-gray-900 text-white py-16 border-t border-gray-800 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-y-1/2 translate-x-1/4">
             <i data-lucide="graduation-cap" class="w-96 h-96"></i>
        </div>

        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <!-- Brand -->
            <div class="col-span-1 md:col-span-2">
                <div class="flex items-center gap-3 mb-6">
                    <img src="assets/cetaa-logo.png" alt="CETAA Logo" class="h-12 w-auto brightness-0 invert">
                    <h2 class="text-3xl font-bold text-white">CETAA</h2>
                </div>
                <p class="text-gray-400 max-w-sm leading-relaxed mb-8">
                    The Official Alumni Network of College of Engineering Trivandrum. <br/>
                    Connecting globally, giving back locally.
                </p>
                <div class="flex gap-4">
                     <a href="https://www.facebook.com/College-of-Engineering-Trivandrum-Alumni-Association-595120010597674" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors">
                        <i data-lucide="facebook" class="w-5 h-5"></i>
                     </a>
                     <a href="https://twitter.com/@CetaaSecretary" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors">
                        <i data-lucide="twitter" class="w-5 h-5"></i>
                     </a>
                     <a href="https://www.linkedin.com/school/college-of-engineering-trivandrum" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                     </a>
                     <a href="https://www.youtube.com/channel/UCJI_IdamgOdlw8ZcyDpQeRg" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors">
                        <i data-lucide="youtube" class="w-5 h-5"></i>
                     </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="reveal-up">
               <h4 class="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Quick Links</h4>
               <ul class="space-y-3 text-gray-400 text-sm">
                 <li><a href="https://alumni.cet.ac.in/page/About-us.dz" class="hover:text-white transition-colors">History</a></li>
                 <li><a href="https://alumni.cet.ac.in/albums.dz" class="hover:text-white transition-colors">Gallery</a></li>
                 <li><a href="https://alumni.cet.ac.in/members.dz" class="hover:text-white transition-colors">Members</a></li>
                 <li><a href="renovation.html" class="hover:text-white transition-colors text-gold">Renovation 2026</a></li>
               </ul>
            </div>

            <!-- Contact -->
            <div class="reveal-up" style="transition-delay: 100ms;">
               <h4 class="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Contact Us</h4>
               <ul class="space-y-4 text-gray-400 text-sm">
                 <li class="flex items-start gap-3">
                    <i data-lucide="map-pin" class="w-5 h-5 text-gray-500 mt-1"></i> 
                    <span>Kulathoor, Trivandrum, <br/>Kerala 695016</span>
                 </li>
                 <li class="flex items-center gap-3">
                    <i data-lucide="phone" class="w-5 h-5 text-gray-500"></i> 
                    <span>+91 471 2515502</span>
                 </li>
                 <li class="flex items-center gap-3">
                    <i data-lucide="mail" class="w-5 h-5 text-gray-500"></i> 
                    <span>cetaa@cet.ac.in</span>
                 </li>
               </ul>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>© ${new Date().getFullYear()} CETAA. All rights reserved.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
                <a href="https://alumni.cet.ac.in/site/privacy.dz" class="hover:text-gray-400">Privacy Policy</a>
                <a href="https://alumni.cet.ac.in/site/tos.dz" class="hover:text-gray-400">Terms of Use</a>
            </div>
        </div>
    </footer>
    `;

    document.getElementById('footer-placeholder').innerHTML = footerHtml;
}
