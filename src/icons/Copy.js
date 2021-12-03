import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Copy = (props) => (
  <svg {...props} viewBox="0 0 512 512">
    <rect
      x="128"
      y="128"
      width="336"
      height="336"
      rx="57"
      ry="57"
      fill="none"
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
      fill="none"
      stroke={props.color}
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
