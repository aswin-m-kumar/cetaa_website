import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../constants';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  const style = variant === 'primary' ? { backgroundColor: COLORS.primary, color: 'white' } : 
                variant === 'secondary' ? { backgroundColor: COLORS.secondary, color: COLORS.primary } :
                variant === 'outline' ? { borderColor: COLORS.primary, color: COLORS.primary, border: '2px solid' } : {};

  return (
    <button 
      className={`${baseStyle} ${className} ${variant === 'white' ? 'bg-white text-gray-900' : ''}`} 
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
