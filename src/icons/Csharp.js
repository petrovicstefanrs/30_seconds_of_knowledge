import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Csharp = (props) => (
  <svg {...props} viewBox="0 0 128 128" fill={props.color}>
    <path d="M118 34v-1l-3-2L67 3l-3-1-3 1-48 28c-2 1-3 3-3 5v56l1 3 2 2 48 28 3 1 3-1 48-28c2-1 3-3 3-5V34zm-54 70a40 40 0 1 1 34-59l-13 7a24 24 0 0 0-45 12 25 25 0 0 0 45 12l13 8c-7 11-19 19-34 19zm51-42h-3l-1 4h4v5h-5l-1 6h-5l1-6h-4l-1 6h-5l1-6h-2v-5h4v-4h-4v-5h5l1-6h5l-1 6h4l1-6h5l-1 6h2v5zm-13 4h4l1-4h-4z" />
  </svg>
);

Csharp.defaultProps = {
  width: 128,
  height: 128,
  color: '#68217A',
};

Csharp.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Csharp);
