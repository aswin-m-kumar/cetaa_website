export function renderFooter() {
    const footerHtml = `
    <footer class="bg-gray-900 text-white py-12 border-t border-gray-800 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#ffffff" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div class="col-span-1 md:col-span-2">
                <h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 inline-block">CETAA</h2>
                <p class="text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
                    College of Engineering Trivandrum Alumni Association. <br/>
                    Building bonds, fostering excellence, and supporting our alma mater since 1977.
                </p>
            </div>
            <div class="reveal-up">
               <h4 class="font-bold mb-4 text-yellow-500 uppercase tracking-widest text-sm">Contact</h4>
               <ul class="space-y-3 text-gray-400 text-sm">
                 <li class="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
                    <i data-lucide="map-pin" class="w-4 h-4 text-gray-500"></i> Kulathoor, Trivandrum
                 </li>
                 <li class="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
                    <i data-lucide="phone" class="w-4 h-4 text-gray-500"></i> +91 471 2515502
                 </li>
                 <li class="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
                    <i data-lucide="mail" class="w-4 h-4 text-gray-500"></i> cetaa@cet.ac.in
                 </li>
               </ul>
            </div>
            <div class="reveal-up" style="transition-delay: 100ms;">
               <h4 class="font-bold mb-4 text-yellow-500 uppercase tracking-widest text-sm">Social</h4>
               <div class="flex gap-4 justify-center md:justify-start">
                 <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <i data-lucide="facebook" class="w-5 h-5"></i>
                 </a>
                 <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <i data-lucide="twitter" class="w-5 h-5"></i>
                 </a>
                 <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <i data-lucide="linkedin" class="w-5 h-5"></i>
                 </a>
               </div>
            </div>
        </div>
        <div class="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-800 relative z-10">
            © ${new Date().getFullYear()} CETAA. All rights reserved.
        </div>
    </footer>
    `;

    document.getElementById('footer-placeholder').innerHTML = footerHtml;
}
