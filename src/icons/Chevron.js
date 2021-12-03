import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ROTATION = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

const Chevron = (props) => (
  <svg
    {...props}
    viewBox="0 0 512 512"
    style={{ transform: `rotate(${ROTATION[props.direction]}deg)` }}
    fill={props.color}
  >
    <path d="M464 464H48a16 16 0 0 1-14-24L242 56a16 16 0 0 1 28 0l208 384a16 16 0 0 1-14 24z" />
  </svg>
);

Chevron.defaultProps = {
  width: 24,
  height: 24,
  color: 'currentColor',
  direction: 'top',
};

Chevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default memo(Chevron);
