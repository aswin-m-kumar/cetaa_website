import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">CETAA</h2>
          <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
            College of Engineering Trivandrum Alumni Association. <br/>
            Building bonds since 1977.
          </p>
        </div>
        <div>
           <h4 className="font-bold mb-4 text-yellow-500">Contact</h4>
           <ul className="space-y-2 text-gray-400 text-sm">
             <li>Kulathoor, Trivandrum</li>
             <li>+91 471 2515502</li>
             <li>cetaa@cet.ac.in</li>
           </ul>
        </div>
        <div>
           <h4 className="font-bold mb-4 text-yellow-500">Social</h4>
           <div className="flex gap-4 justify-center md:justify-start">
             <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-500" />
             <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-500" />
             <Linkedin className="w-5 h-5 cursor-pointer hover:text-yellow-500" />
           </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-800">
        © {new Date().getFullYear()} CETAA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
