import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Go = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill={props.color}>
    <path d="M108 65v-1h-2v-1h-4c-1-13 1-27-3-39 13-5 3-23-8-15-8-6-18-8-28-8-11 1-21 3-28 9-3-2-5-2-8-1h-2v1h-1v1h-1v1h-1v1h-1v8h1v1h1v1l4 2c-4 12 0 25 0 38l-2 1h-4v1h-1l-1 1v1h-1v1l1 1c0 4 4 2 6 1v-1h2v-3 2c-1 13-4 31 3 43l5 5h-1v1h-2v1h-1l-1 1-1 1v1l-1 1 1 2v1h1s1 2 4 1c3-2 5-5 8-5v-1c5 3 12 4 19 4 8 1 18-1 26-5l6 6h4v-1h1v-6h-1v-1h-1v-1h-1v-1h-1v-1l5-7c6-12 5-26 4-39s1 0 1 0c2 1 5 3 6-1l-2-2zM36 23C33 7 58 4 59 20c1 13-20 16-23 3zm36 15-4 1v6l-2 1-3-2c-4 5-6-1-5-5-1 0-2 0-3-2-2-2 0-5 3-6 1 3 9 3 10 0 3 1 7 4 4 7zm-7-17C64 7 85 3 88 17c4 15-20 18-23 4zm-23-4c-2 0-4 2-4 4s2 4 4 4 3-2 3-4-1-4-3-4zm1 6v-2l1 1-1 1zm28-7c-2 0-3 2-3 4s1 4 3 4 4-2 4-4-2-4-4-4zm2 6-1-1 1-1 1 1-1 1z" />
  </svg>
);

Go.defaultProps = {
  width: 128,
  height: 128,
  color: '#00acd7',
};

Go.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Go);
