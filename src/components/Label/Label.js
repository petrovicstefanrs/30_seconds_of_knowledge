import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Label.module.scss';

const Label = ({ className, children, htmlFor, subLabel, ...props }) => (
  <React.Fragment>
    <label className={cx(styles.label, className)} htmlFor={htmlFor} {...props}>
      {children}
    </label>
    {subLabel && <span className={cx(styles.subLabel)}>{subLabel}</span>}
  </React.Fragment>
);

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
  subLabel: PropTypes.string,
};

export default Label;
