import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ className }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="#000"
    className={className}
  >
    <path
      d="M9.792 0H.208a.233.233 0 00-.181.076.113.113 0 00.003.15l4.792 5.702A.234.234 0 005 6c.073 0 .14-.027.178-.072L9.97.226a.113.113 0 00.003-.15A.233.233 0 009.792 0z"
      fillRule="evenodd"
    />
  </svg>
);

Chevron.propTypes = {
  className: PropTypes.string,
};

export default memo(Chevron);
