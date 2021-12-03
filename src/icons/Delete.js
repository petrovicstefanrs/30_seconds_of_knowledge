import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Delete = (props) => (
  <svg {...props} viewBox="0 0 512 512">
    <path
      d="m112 112 20 320c1 18 14 32 32 32h184c18 0 31-14 32-32l20-320"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M80 112h352"
    />
    <path
      d="M192 112V72h0a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

Delete.defaultProps = {
  width: 24,
  height: 24,
  color: 'currentColor',
};

Delete.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Delete);
