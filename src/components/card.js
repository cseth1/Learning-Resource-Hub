import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Card({ children, className }) {
  const baseStyles = 'bg-white shadow-md rounded-lg overflow-hidden';

  return (
    <div className={classNames(baseStyles, className)}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,  // The content inside the card
  className: PropTypes.string,  // Additional class names
};

export default Card;
