import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Input({ type = 'text', placeholder = '', size = 'md', error = false, className, ...props }) {
    const baseStyles = 'block w-full rounded-md shadow-sm transition ease-in-out duration-150 focus:outline-none';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500';
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-md',
      lg: 'px-5 py-3 text-lg',
    };
  
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(baseStyles, errorStyles, sizes[size], className)}
        {...props}
      />
    );
  }
  
  Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    error: PropTypes.bool,
    className: PropTypes.string,
  };

export default Input;
