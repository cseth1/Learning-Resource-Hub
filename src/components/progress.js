import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Progress({ value = 0, max = 100, size = 'md', className }) {
  const baseStyles = 'w-full bg-gray-200 rounded-full overflow-hidden';

  const sizes = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  };
  const variants = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
  };

  return (
    <div className={classNames(baseStyles, sizes[size], className)}>
      <div
        className="bg-blue-600 h-full"
        style={{ width: `${(value / max) * 100}%` }} // Dynamically calculate width based on value and max
      ></div>
    </div>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired, // Progress value (required)
  max: PropTypes.number,              // Maximum value for the progress bar (default is 100)
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Size of the progress bar
  className: PropTypes.string,         // Additional class names for customization
};

export default Progress;
