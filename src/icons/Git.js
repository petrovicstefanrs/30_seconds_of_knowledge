import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Git = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill={props.color}>
    <path d="M125 58 70 3c-4-3-9-3-12 0L47 15l14 14c4-1 7 0 10 3a10 10 0 0 1 2 10l14 14a10 10 0 0 1 10 16 10 10 0 0 1-13 0 10 10 0 0 1-2-11L69 48v34a10 10 0 0 1 2 2 10 10 0 0 1-14 14 10 10 0 0 1 3-16V47l-3-2c-3-3-3-7-2-10L41 20 3 58c-3 3-3 8 0 12l55 55c4 3 9 3 12 0l55-55c3-3 3-8 0-12z" />
  </svg>
);

Git.defaultProps = {
  width: 128,
  height: 128,
  color: '#F34F29',
};

Git.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Git);
