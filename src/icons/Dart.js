import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Dart = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill={props.color}>
    <g>
      <path d="M87 25h3l3 1-2-8L76 4c-4-4-8-5-11-3L29 25h58zm6 4-4-1H30l79 79 6-14-22-64zM29 92l64 23 14-6-79-79v59l1 3z" />
      <path d="M107 34c-3-2-7-5-11-6l22 65-6 16 15-5V55l-20-21zm-14 84L28 95c2 4 4 9 7 12l21 21h48l5-17-16 7zM26 89l-1-3V29L2 65c-2 2-1 7 2 11l15 14 7 3v-4z" />
    </g>
  </svg>
);

Dart.defaultProps = {
  width: 128,
  height: 128,
  color: '#00A8E1',
};

Dart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Dart);
