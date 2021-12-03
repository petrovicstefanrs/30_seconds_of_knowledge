import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Close = (props) => (
  <svg {...props} viewBox="0 0 14 14" fill={props.color}>
    <path d="M13.3 2.1A.99.99 0 0011.9.7L7 5.6 2.1.7A.99.99 0 00.7 2.1L5.6 7 .7 11.9a.99.99 0 101.4 1.4L7 8.4l4.9 4.9a.99.99 0 101.4-1.4L8.4 7l4.9-4.9z" />
  </svg>
);

Close.defaultProps = {
  width: 14,
  height: 14,
  color: '#000',
};

Close.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Close);
