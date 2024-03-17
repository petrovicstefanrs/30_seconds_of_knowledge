import PropTypes from 'prop-types';
import React from 'react';

const RadioIcon = ({ checked, className }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 18 18"
    fill="#000"
    className={className}
    aria-hidden="true"
  >
    <g>
      {checked ? (
        <path d="M2 0C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2zm0 9.192l1.4-1.346L7 11.308 14.6 4 16 5.346 7 14 2 9.192z" />
      ) : (
        <path d="M16 2v14H2V2h14zm0-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
      )}
    </g>
  </svg>
);

RadioIcon.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};

export default RadioIcon;
