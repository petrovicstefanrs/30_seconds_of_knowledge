import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Copy = (props) => (
  <svg {...props} viewBox="0 0 512 512">
    <path
      d="M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

Copy.defaultProps = {
  width: 24,
  height: 24,
  color: 'currentColor',
};

Copy.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Copy);
