import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar = ({ activePage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
      navigateTo(pageId);
      setIsMenuOpen(false);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/10 backdrop-blur-md py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="bg-red-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-md">C</div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>CETAA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                link.highlight 
                  ? 'bg-yellow-500 text-red-900 px-5 py-2.5 rounded-full hover:bg-yellow-400 shadow-lg' 
                  : scrolled ? 'text-gray-600 hover:text-red-900' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col md:hidden animate-fade-in-up">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="py-4 px-6 text-left text-gray-800 font-medium border-b border-gray-100 hover:bg-red-50"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activePage: PropTypes.string,
  navigateTo: PropTypes.func.isRequired,
};

export default Navbar;
