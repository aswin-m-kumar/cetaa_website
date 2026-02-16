import React from 'react';
import { COLORS } from '../constants';

const RenovationHero = () => {
  return (
    <section className="bg-gray-900 text-white pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill={COLORS.primary} />
         </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-yellow-500 rounded-full text-yellow-400 text-sm font-bold tracking-widest uppercase">
          Vision 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Reimagining Our Space</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          From the Reception to the Hall, we are upgrading CETAA's infrastructure to match the global stature of our alumni.
        </p>
        
        {/* Main Progress Bar */}
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-2xl">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="text-3xl font-bold text-white">₹28.5L</span>
              <span className="text-sm text-gray-400 ml-2">raised of ₹58L Goal</span>
            </div>
            <span className="text-yellow-500 font-bold">48%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-3 rounded-full animate-pulse" style={{ width: '48%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationHero;
