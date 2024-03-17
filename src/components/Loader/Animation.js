import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Animation = (props) => (
  <svg {...props} viewBox="0 0 24 30">
    <rect y="10" width="4" height="10" fill="#333" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values="0.2; 1; .2"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        values="10; 20; 10"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="10; 5; 10"
        begin="0s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="8" y="10" width="4" height="10" fill="#333" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values="0.2; 1; .2"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        values="10; 20; 10"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="10; 5; 10"
        begin="0.15s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="16" y="10" width="4" height="10" fill="#333" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values="0.2; 1; .2"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        attributeType="XML"
        values="10; 20; 10"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        attributeType="XML"
        values="10; 5; 10"
        begin="0.3s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

Animation.defaultProps = {
  width: 24,
  height: 30,
};

Animation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default memo(Animation);
