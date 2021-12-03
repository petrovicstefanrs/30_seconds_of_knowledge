import PropTypes from 'prop-types';
import React from 'react';

const RadioIcon = ({ className, checked }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="#000"
    className={className}
    aria-hidden="true"
  >
    <g>
      {checked ? (
        <path d="M10 5C7.2 5 5 7.2 5 10 5 12.8 7.2 15 10 15 12.8 15 15 12.8 15 10 15 7.2 12.8 5 10 5L10 5ZM10 0C4.5 0 0 4.5 0 10 0 15.5 4.5 20 10 20 15.5 20 20 15.5 20 10 20 4.5 15.5 0 10 0L10 0ZM10 18C5.6 18 2 14.4 2 10 2 5.6 5.6 2 10 2 14.4 2 18 5.6 18 10 18 14.4 14.4 18 10 18L10 18Z" />
      ) : (
        <path d="M10 0C4.5 0 0 4.5 0 10 0 15.5 4.5 20 10 20 15.5 20 20 15.5 20 10 20 4.5 15.5 0 10 0L10 0ZM10 18C5.6 18 2 14.4 2 10 2 5.6 5.6 2 10 2 14.4 2 18 5.6 18 10 18 14.4 14.4 18 10 18L10 18Z" />
      )}
    </g>
  </svg>
);

RadioIcon.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};

export default RadioIcon;
