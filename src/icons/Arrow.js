import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ROTATION = {
  left: 0,
  top: 90,
  right: 180,
  bottom: 270,
};

const Arrow = (props) => (
  <svg
    {...props}
    viewBox="0 0 18 18"
    fill={props.color}
    style={{ transform: `rotate(${ROTATION[props.direction]}deg)` }}
  >
    <path d="M17.25 8.25H2.678l7.579-6.948A.75.75 0 009.243.197l-9 8.25-.01.012c-.023.02-.041.044-.06.067-.013.016-.027.03-.038.046-.02.029-.035.06-.051.09-.008.013-.016.026-.022.04a.715.715 0 00-.039.12c-.001.007-.006.016-.007.024a.798.798 0 000 .307c.001.01.005.017.007.024.01.042.022.083.04.12.005.015.013.027.021.04.016.032.031.062.051.09.01.017.025.03.037.046.02.023.038.046.06.067l.011.012 9 8.25a.748.748 0 001.06-.045.75.75 0 00-.046-1.06L2.678 9.75H17.25a.75.75 0 100-1.5" />
  </svg>
);

Arrow.defaultProps = {
  width: 14,
  height: 14,
  color: '#000',
  direction: 'left',
};

Arrow.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default memo(Arrow);
