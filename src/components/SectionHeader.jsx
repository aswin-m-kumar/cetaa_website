import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../constants';

const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''} animate-fade-in-up`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className={`h-1 w-20 bg-[${COLORS.secondary}] mb-6 ${centered ? 'mx-auto' : ''}`} style={{ backgroundColor: COLORS.secondary }}></div>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
};

export default SectionHeader;
