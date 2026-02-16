import React from 'react';
import PropTypes from 'prop-types';
import { GraduationCap, Heart } from 'lucide-react';
import Button from './Button';

const HeroSection = ({ navigateTo }) => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="College Campus" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in-up">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wider uppercase">
          <GraduationCap className="w-4 h-4" /> Established July 3, 1939
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The First Engineering College <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">of Travancore State</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Founded during the reign of Sree Chithira Thirunal Balarama Varma. <br/>
          Celebrating over 85 years of engineering excellence and global alumni bonding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" onClick={() => navigateTo('renovation')}>
            <Heart className="w-5 h-5" /> Renovation 2026
          </Button>
          <Button variant="white" onClick={() => window.open('https://alumni.cet.ac.in', '_blank')}>
            Member Login
          </Button>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default HeroSection;
