import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import AboutBrief from '../components/AboutBrief';

const HomePage = ({ navigateTo }) => {
  return (
    <div className="w-full">
      <HeroSection navigateTo={navigateTo} />
      <StatsBar />
      <AboutBrief />
    </div>
  );
};

HomePage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default HomePage;
