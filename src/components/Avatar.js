import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Avatar({ src, alt = '', size = 'md', fallback, className }) {
  const baseStyles = 'inline-block rounded-full overflow-hidden bg-gray-200 text-center';

  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20',
  };

  return (
    <div className={classNames(baseStyles, sizes[size], className)}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="flex items-center justify-center h-full w-full text-gray-600 font-bold text-xl">
          {fallback}
        </span>
      )}
       {status && (
        <span
          className={classNames(
            'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white',
            status === 'online' ? 'bg-green-500' : 'bg-gray-400'
          )}
        />
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,  // Image URL for the avatar
  alt: PropTypes.string,  // Alt text for the image
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),  // Size of the avatar
  fallback: PropTypes.string.isRequired,  // Fallback content (e.g., initials)
  className: PropTypes.string,  // Custom class names
};

export default Avatar;
