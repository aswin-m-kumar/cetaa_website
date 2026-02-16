import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RenovationPage from './pages/RenovationPage';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar activePage={activePage} navigateTo={navigateTo} />
      
      <main className="flex-grow">
        {activePage === 'home' || activePage === 'about' ? (
          <HomePage navigateTo={navigateTo} />
        ) : (
          <RenovationPage />
        )}
      </main>

      <Footer />
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
